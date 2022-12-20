import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { SignupStepSix, SignupStepSkillsLists } from "../../Services/obAuth";
import "./step.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@mui/material";


function Step6() {
  const [filtopic, setFiltopic] = useState([]);
  const [selected, setSelected] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [skillList, setSkillList] = useState([])
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    document.title = "Learnet Sign Up";
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
    setName(userAllData.data.firstName + " " + userAllData.data.lastName);
  }, []);
  const matchData = (e) => {
    if (skillList !== []) {
      if (e.target.value.length > 2) {
        let a = e.target.value;
        var filtered = skillList.filter((result) => {
          return result.match(new RegExp(`${a}`, "gi"));
        });
        setFiltopic(filtered);
      } else {
        setFiltopic([]);
      }
    }
  };

  function submitMenteeInfo() {
    let topics = mentees
    let data = { topics };
    try {
      if (topics.length != 0) {
        SignupStepSix(data, token)
          .then((res) => {
            let isSuccess = res.success;

            if (isSuccess) {
              navigate("/mentor-topics");
            }
          })
          .catch();
      } else {
        toast.error("Please Select Skills");
      }
    } catch (error) { }
  }
  let z = document.getElementById("zero");
  useMemo(() => {
    if (data !== null && data !== "") {
      let temp = selected;
      temp.push(data);
      setSelected(temp);
      z.value = "";
      let ment = selected.filter(
        (value, index) => selected.indexOf(value) === index
      );
      setMentees(ment);
    }
  }, [data]);
  const addingMentee = (val) => {
    setData(val);
    setFiltopic([]);
  };
  // Remove Skills from List
  const removeSkills = (val) => {

    var ment = mentees.filter(x => x != val);
    setMentees(ment)
    setSelected(ment)
    //setFiltopic([]);
    //console.log("first",ment)
  }
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
              <b>{name},</b>  tell us about the topics or skills you would like to learn.
            </h2>
          </div>
          <div className="form_skills">
            <div className="input_form">
              <div className="form-group relative">
                <label htmlFor="exampleInputEmail1">Topics/Skills*</label>
                <input
                  autoComplete="off"
                  id="zero"
                  type="text"
                  className="d-block"
                  onChange={matchData}
                  style={{ height: "40px",padding:"0px 10px" }}
                />
                <div id="search-box" className="d-block searchlist">
                  {filtopic.map((val, key) => {
                    return (
                      <>
                        <p
                          key={key}
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={(e) => addingMentee(val)}
                        >
                          {val}
                        </p>
                        {/* <a ><i class="fa fa-plus"></i> Add Topic</a> */}
                      </>
                    );
                  })}
                </div>


                <div className="skills">
                  <div className="filter-header">
                    

                    <div class="row">
                      <div class="col-md-12" style={{ minHeight: "40px" }}>
                        {mentees.map((val, key) => {
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
            <div className="text-center mt30">
              {/* <NavLink to={"/mentor-topics"} className="linkbtn">
                Skip this, I am only interested in becoming a mentor.
              </NavLink> */}
              <br />
              <NavLink
                to={""}
                onClick={submitMenteeInfo}
                className="btn btn-primary radius btn-block mt30"
              >
                Continue
              </NavLink>
              <br />
              <br />
              <NavLink to={"/mentor-topics"} className="linkbtn">
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

export default Step6;
