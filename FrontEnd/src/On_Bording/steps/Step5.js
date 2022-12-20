import React, { useEffect, useState } from "react";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { NavLink,  useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import { SignupStepFive, SignupStepFourOTP } from "../../Services/obAuth";
import { ToastContainer, toast } from "react-toastify";

function Step5() {
  const [email, setEmail] = useState();
  const [token, setToken] = useState("");
  const [fullData,setFullData]=useState()
  const [otp, setOTP] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const navigate=useNavigate()
  console.log(otp)
  useEffect(() => {
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
    setEmail(userAllData.data.email);
  }, []);
  const sendOtpAgain = () => {
    try {
    SignupStepFourOTP(token).then((res) => {
    });
}catch (error) {}}
  const agreeConferm=()=>{
    let data={
      otp
    }
    try {
      console.log(otp)
        if (otp!==undefined) {
            SignupStepFive(data,token).then((res) => {
              let isSuccess = res.success;
            if (isSuccess) {
              navigate("/mentee-topics");
            }
            })
            .catch();
  } else if (otp==null) {
    toast.error("Please Enter OTP");
    console.log("first")
  }

}catch (error) {}}

  // const dataSubmit= () => {
  //   return checked ? setIsDisabled(true) : setIsDisabled(false);
  // };
  useEffect(()=>{
    if(otp!==null && otp!==undefined){
      let stringOTP=otp.toString()
      if(stringOTP.length==6){
        setChecked(true);
        setIsDisabled(false)
      }else if(stringOTP.length<6){
        setIsDisabled(true);
      }
    }
  },[otp])
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
          <div className="">
            <div className="title_wrap">
              <h2 className="ob_title text-center">
                Confirm your <b>Email.</b>
              </h2>
              <p className="ob_para confirm_mail">
              Type in the code we sent to{" "}
                <span style={{ color: "#af65d5" }}>{email}</span>
              </p>
            </div>
            <div className="form_box">
              <form className="input_form text-center">
                <div className="form-group otpinput d-flex justify-content-center ms-3">
                  <OTPInput
                    value={otp}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    secure
                  />
                </div>

                <div className="form-group ob_para2 ">
                  Didn’t receive the code? &nbsp;{" "}
                  <a
                    href="#"
                    onClick={sendOtpAgain}
                    className="linkbtn text-decoration"
                  >
                    Send again
                  </a>{" "}
                </div>
              </form>
            </div>
            <div className="otp_wrap">
              <div className="Agreecheck">
                {/* <div>
                  <input type="checkbox" name="check"  />
                </div> */}
                <div>
                  <h3>Your privacy is important.</h3>
                  <p className="mt10">
                  We may send you member updates, recommendations to connect with other professionals who may be a good match for you to learn from or mentor, suggestions, reminders and promotional messages from us and our partners, You can change your preferences anytime
                  </p>
                </div>
              </div>
              <div className="text-center mt30">
                <button
                  onClick={agreeConferm}
                  className="btn btn-primary radius btnlg"
                  disabled={isDisabled}
                >
                  Agree and Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ob_Footer />
    </>
  );
}

export default Step5;
