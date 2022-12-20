import React, { useMemo,useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Step8_Card from "../Cards/Step8_Card";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import Step8_List from "../Lists/Step8_List";
import { SignupStepEight, SignupStepMenteeList } from "../../Services/obAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Step8() {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [menteeList,setMenteeList]=useState([])
  useEffect(() => {
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
  }, []);
  function addConnection() {
    let connections=added
    let data={connections}
    try {
      if (connections.length !== 0) {
        SignupStepEight(data,token)
          .then((res) => {
            let isSuccess = res.success;

            if (isSuccess) {
              navigate("/add-connection-mentor");
            }
          })
          .catch();
      } else {
        toast.error("Please add connection");
      }
    } catch (error) {}
  }
  useMemo(() => {
    if (data !== null && data !== undefined) {
      let temps = added;
      temps.push(data);
      setAdded(temps);
    }
  }, [data]);
  console.log(token)
  // Mentee List
  useEffect(() => {
    if(token!==""){
      try {
        SignupStepMenteeList(token)
          .then((res) => {
        let mentees = res.data.data;
        setMenteeList(mentees)
          })
          .catch();
    } catch (error) {}
    }
  },[token]);
  console.log(menteeList)
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
              topics or skills you selected.
            </h2>
            <p className="ob_para mt30">
            Professionals who can mentor or teach you
            </p>
          </div>
          <div className="mentor_container mt40">
            {menteeList.map((val, ind) => {
              return (
                <Step8_Card
                  key={ind}
                  index={val.id}
                  image={val.profilePicture}
                  name={val.firstName+" "+val.lastName}
                  currentJobTitle={val.currentJobTitle}
                  currentCompany={val.currentCompany}
                  data={data}
                  setData={setData}
                />
              );
            })}
          </div>
          <div className="text-right mt-40 mb-3">
            
            &nbsp;&nbsp;
            <p className="btn btn-primary radius btnsm">
              &nbsp;Add {added.length} connection
            </p>
          </div>
          <div className="text-center mt40">
            <NavLink
              to={"/add-connection-mentor"}
              className="btn btn-primary radius btnlg"
              onClick={addConnection}
            >
              Continue
            </NavLink>
          </div>
         
          <div className="text-center mt40">
          <NavLink to={"/add-connection-mentor"} className="linkbtn">
              Skip
            </NavLink>
            </div>
      
          
          
        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step8;
