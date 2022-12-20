import React, { useState, useEffect } from "react";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { SignupStepFour, SignupStepFourOTP } from "../../Services/obAuth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Step4() {
  let locationData=useLocation()
  const [jobTitle, setJobTitle] = useState("");
  const [eType, setEType] = useState("");
  const [company, setCompany] = useState("");
  const [token,setToken]=useState("")
  const [name,setName]=useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
    setName(userAllData.data.firstName + " " + userAllData.data.lastName);
      
  },[])
  function setDetail() {
    const data = {
      jobTitle: jobTitle,
      employementType: eType,
      companyName: company,
      present:true,
    };
    try {
      if (jobTitle.length > 0 && eType.length > 0 && company.length > 0) {
        SignupStepFour(data,token)
          .then((res) => {
            let isSuccess = res.success;

            if (isSuccess) {
              SignupStepFourOTP(token).then((res) => {
                    let otpSend = res.success;
                    if (otpSend) {
                      navigate("/otp-varification");
                    }
                  });
            }
          })
          .catch();
      }else if (jobTitle.length <= 0 ) {
        toast.error("Please Enter Job Title");
      }else if (eType.length <= 0) {
        toast.error("Please Enter Employment Type");
      }else if (company.length <= 0) {
        toast.error("Please Enter Company Name");
      }
    } catch (error) {}
  }
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
      {/* <!--Main Body--> */}
      <section className="main_body">
        <div className="inner_container">
          <div className="">
            <div className="title_wrap">
              <h2 className="ob_title text-center">
                <b>{name},</b>  your profile helps you explore learning or mentoring opportunities.
              </h2>
            </div>
            <div className="form_box">
              <form className="input_form">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Most recent Job Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Employment Type</label>
                  {/* <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEType(e.target.value)}
                    placeholder=""
                  /> */}
                  <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setEType(e.target.value)}
                        >
                          <option selected>Select</option>                         
                              <option value='Full-Time'>Full-Time</option>
                              <option value='Part-Time'>Part-Time</option>
                              <option value='Contract'>Contract</option>
                              <option value='Self-Employed'>Self-Employed</option>
                              <option value='Student'>Student</option>
                              <option value='Not Employed'>Not Employed</option>
                            
                        </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Most recent Company*</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder=""
                  />
                </div>
                <div className="form-group text-center">
                  <NavLink to="/education" className="linkbtn text-decoration">
                    I’m a student
                  </NavLink>
                </div>
                <NavLink
                  to=""
                  className="btn btn-primary radius btnlg"
                  onClick={setDetail}
                >
                  Continue
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step4;
