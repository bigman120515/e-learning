import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Ob_Footer from "./Ob_Footer";
import Ob_Header from "./Ob_Header";
import { UserLogin } from "../Services/obAuth";
import { isEmail } from "../Common validation/Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [mail, setMail] = useState();
  const [password, setPassword]=useState()
  let navigate=useNavigate()
  function submitEmail() {
    console.log(password);
    console.log(mail);
    const data = {
      Email: mail,
      password:password
    };
    try {
      if (isEmail(mail)) {
        return UserLogin(data)
          .then((res) => {
        let isSuccess=res.success;
        console.log("respons--",res);
        
        if (isSuccess) {
          navigate('')  
        }
          })
          .catch();
      } else if(mail==null){
        toast.error("Please Enter An Email");
        // alert("");
        return false;
      }else if(password==null){
        toast.error("Please Enter An Password");
        // alert("");
        return false;
      }
      else{
        toast.warn("You have entered an invalid email address!");
        return false
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
              <b>LogIn</b>
            </h2>
            <div className="profile_box bg_primary  text-center">
              <form className="input_form ">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <NavLink
                  to={""}
                  onClick={submitEmail}
                  className="btn btn-primary radius btnlg"
                >
                  Login
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

export default Login;
