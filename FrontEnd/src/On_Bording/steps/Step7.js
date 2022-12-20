import React, { useState, useMemo, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { SignupStepSeven, SignupStepSkillsLists } from "../../Services/obAuth";
import "./step.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@mui/material";

function Step7() {
  const [filtopic, setFiltopic] = useState([]);
  const [selected, setSelected] = useState([]);
  const [skillList, setSkillList] = useState([])
  const [mentor, setMentor] = useState([])
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const [token, setToken] = useState("")
  useEffect(() => {
    document.title = "Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
  }, [])

  // Remove Skills from List
  const removeSkills = (val) => {

    var ment = mentor.filter(x => x != val);
    setMentor(ment)
    setSelected(ment)
    console.log("first", ment)
  }
  const matchData = (e) => {
    if (e.target.value.length > 2) {
      let a = e.target.value;
      var filtered = skillList.filter((result) => {
        return result.match(new RegExp(`${a}`, "gi"));
      });
      setFiltopic(filtered);
    } else {
      setFiltopic([]);
    }
  };
  function setMentorInfo() {
    let topics = mentor
    const data = {
      topics: topics,
      fee: 23874
    };
    try {
      if (topics.length !== 0) {
        SignupStepSeven(data, token)
          .then((res) => {
            let isSuccess = res.success;

            if (isSuccess) {
              navigate("/add-connection");
            }
          })
          .catch();
      } else {
        toast.error("Please Select Skills");
      }
    } catch (error) { }
  }
  const addMentor = (val) => {
    setData(val)
    setFiltopic([]);
  }
  let z = document.getElementById('zero')
  useMemo(() => {
    if (data !== null && data !== "") {
      let temp = selected;
      temp.push(data);
      setSelected(temp);
      z.value = "";
      let ment = selected.filter(
        (value, index) => selected.indexOf(value) === index
      );
      setMentor(ment);
    }
  }, [data]);
  // All Skills API
  useEffect(() => {
    try {
      SignupStepSkillsLists(data, token)
        .then((res) => {
          let skills = res.data.data;
          setSkillList(skills)
        })
        .catch();
    } catch (error) { }
  }, []);
 
 
 
 
  return (
    <>
      <Ob_Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="main_body">
        <div className="inner_container">
          <div className="title_wrap">
            <h2 className="ob_title text-center">
              Now tell us about the topics or skills
              <br />
              you are good at.
            </h2>
            <p className="ob_para mt30">
              Select skills that you can confidently teach others.
            </p>
          </div>
          <div className="form_skills">
            <div className="input_form">
              <div className="form-group relative">
                <label htmlFor="exampleInputEmail1">Topics/Skills*</label>
                <input id="zero"
                  autoComplete="off"
                  type="text"
                  className="d-block "
                  onChange={matchData}
                  style={{ height: "40px", padding: "0px 10px" }}
                />


                <div id="search-box" className="d-block searchlist">
                  {filtopic.map((val, key) => {
                    return (
                      <p
                        key={key}
                        style={{ cursor: "pointer", color: "black" }}
                        onClick={(e) => addMentor(val)}
                      >
                        {val}
                      </p>
                    );
                  })}
                </div>
                <div className="skills">
                  <div className="filter-header">
                    <div class="row">
                      <div class="col-md-12" style={{ minHeight: "40px" }}>
                        {mentor.map((val, key) => {
                          return (
                            <span key={key} className="filter-list">
                              {val.length > 20 ? val.substr(0, 20) + "..." : val} <img className="mt-1" onClick={(e) => removeSkills(val)} src="assets/images/onbording/cancel.png" />
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt40 ">
              <NavLink
                to=""
                onClick={setMentorInfo}
                className="btn btn-primary radius btn-block "
              >
                Continue
              </NavLink>
              <br />
              <br />
              
              <NavLink to={"/add-connection"} className="linkbtn">
                Skip this, I am only interested in becoming a mentor.
              </NavLink>
              
             

            </div>
          </div>
        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step7;
