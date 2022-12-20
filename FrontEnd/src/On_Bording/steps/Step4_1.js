import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { SignupStepFourone, SignupStepFourOTP } from "../../Services/obAuth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Step4_1() {
  let locationData = useLocation();
  const [college, setCollege] = useState("");
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  // year before 50
  let dates = new Date();
  let year = dates.getFullYear();
  let allYear = [];
  for (let i = 0; i <=50; i++) {
    allYear.push(year - i);
  }

  useEffect(() => {
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
  }, []);

  function setCollegeInfo() {
    const data = {
      collegeName: college,
      startYear: start,
      endYear: end,
    };
    let start2=Number(start)+2
    let endNum=Number(end)
    console.log(start2,endNum)
    try {
      if (college.length > 0 && start != null && end != null && start<end && start2>end) {
        SignupStepFourone(data, token)
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
      } else if (college.length <= 0) {
        toast.error("Please Enter College Name");
      } else if (start == null) {
        toast.error("Please Enter Start Year");
      } else if (end == null) {
        toast.error("Please Enter End Year");
      } else if (start>end) {
        toast.error("Please Enter Correct End Year");
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
      <section className="main_body">
        <div className="inner_container">
          <div className="form_box">
            <form className="input_form">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  School or College/ University*
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="row form-group">
                <div className="col-lg-6 col-xs-6">
                  <label htmlFor="exampleInputEmail1">Start year*</label>
                  <select
                    className="form-control"
                    onChange={(e) => setStart(e.target.value)}
                  >
                    <option>Select year</option>
                    {
                      allYear.map((val,ind)=>{
                        return (
                          <option key={ind}>{val}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="col-lg-6 col-xs-6">
                  <label htmlFor="exampleInputEmail1">End year/Expected*</label>
                  <select
                    className="form-control"
                    onChange={(e) => setEnd(e.target.value)}
                  >
                    <option>Select year</option>
                    {
                      allYear.map((val,ind)=>{
                        return (
                          <option>{val}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              {/* <div className="form-group ">
                <div className="form-control over16">
                  <div className="">I’m over 16</div>
                  <div className="">
                    <span className="yes">
                      {selected == "yes" ? "Yes" : "No"}
                    </span>
                    <label className="switch">
                      <input
                        type="radio"
                        id="yes"
                        name="choose"
                        value="yes"
                        checked={selected === "yes"}
                        onChange={(e) => setSelected(e.target.value)}
                        onClick={() => setSelected("no")}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="form-group text-center">
                <NavLink
                  to={"/employement"}
                  className="linkbtn text-decoration"
                >
                  I’m not a student
                </NavLink>
              </div>
              <NavLink
                to=""
                onClick={setCollegeInfo}
                className="btn btn-primary radius btnlg"
              >
                Continue
              </NavLink>
            </form>
          </div>
        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step4_1;
