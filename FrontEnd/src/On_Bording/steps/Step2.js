import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate,Link } from "react-router-dom";
import { SignupStepTwo } from "../../Services/obAuth";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { isEmail } from "../../Common validation/Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Pages/Component/Footer";

function Step2() {
  const [mail, setMail] = useState();
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [profilePicture,setProfilePicture]=useState()
  let navigate = useNavigate();
  useEffect(() => {
    document.title="Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setMail(userAllData.data.email);
    setToken(userAllData.token);
    setName(userAllData.data.firstName + " " + userAllData.data.lastName);
    setProfilePicture(userAllData.data.profilePicture)
  }, []);
  function submitEmail() {
    const data = {
      email: mail,
    };
    try {
      if (isEmail(mail)) {
        return SignupStepTwo(data, token)
          .then((res) => {
            let isSuccess = res.success;
            if (isSuccess) {
              navigate("/address");
            }
          })
          .catch();
      } else if (mail == null) {
        toast.error("Please Enter An Email");
        return false;
      } else {
        toast.error("You have entered an invalid email address!");
        return false;
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
          <div className="">
            <h2 className="ob_title text-center">
              Join <b>Learnet</b>
            </h2>
            <div className="profile_box bg_primary  text-center">
              <div className="profile_img">
                <img src={profilePicture} alt="My Image" />
              </div>
              <h3 className="profile_name ">{name}</h3>
              <form className="input_form mt30">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    placeholder="Email"
                  />
                </div>
                <NavLink
                  to={""}
                  onClick={submitEmail}
                  className="btn btn-primary radius btnlg"
                >
                  Join
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

export default Step2;
