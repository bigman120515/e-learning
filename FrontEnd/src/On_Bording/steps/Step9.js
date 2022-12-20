import React, { useState,useEffect, useMemo } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Step8_Card from "../Cards/Step8_Card";
import Step8_List from "../Lists/Step8_List";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { SignupStepEight, SignupStepMentorList, SignupStepNine } from "../../Services/obAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Step9() {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState();
  const [mentorList,setMentorList]=useState([])
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
  }, []);
  function addConnection() {
    try {
      let connections=added
    let data={connections}
      if (connections.length !== 0) {
        SignupStepEight (data,token)
          .then((res) => {
            let isSuccess = res.success;
            
            if (isSuccess) {
              navigate("/Home-page");
            }
          })
          .catch();
      } else {
        toast.error("Please add connection");
      }
    } catch (error) {}
  }
  useEffect(() => {
    if(token!==""){
      try {
        SignupStepMentorList(token)
          .then((res) => {
        let mentees = res.data.data;
        setMentorList(mentees)
          })
          .catch();
    } catch (error) {}
    }
  },[token]);
  console.log(mentorList)
  useMemo(() => {
    if (data !== null && data !== undefined) {
      let temps = added;
      temps.push(data);
      setAdded(temps);
    }
  }, [data]);
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
        <div className="card_container">
          <div className="mentor_title">
            <h2 className="ob_title">
              Connect with professionals to help you meet your goals.
              <br />
              These are some recommendations based on the
              <br />
              topics or skills your selected.
            </h2>
            <p className="ob_para mt30">Professionals who you can mentor</p>
          </div>
          <div className="mentor_container mt40">
            {mentorList.map((val, ind) => {
              return (
                <Step8_Card
                  key={ind}
                  id={val.id}
                  image={val.profilePicture}
                  name={(val.firstName)+" "+(val.lastName)}
                  currentCompany={val.currentCompany}
                  data={data}
                  setData={setData}
                />
              );
            })}
          </div>
          <div className="text-right mt40">
           
            &nbsp;&nbsp;
            <p className="btn btn-primary radius btnsm">
              &nbsp;Add {added.length} connection
            </p>
          </div>
          <div className="text-center mt40">
            <NavLink
              to="/Home-page"
              onClick={addConnection}
              className="btn btn-primary radius btnlg"
            >
              Continue
            </NavLink>
            <br/>
            <br/>
            <Link to="/Home-page" className="linkbtn">
              Skip
            </Link>
          </div>

        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step9;
