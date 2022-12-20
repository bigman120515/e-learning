import React, { useEffect, useState } from "react";

import Ob_Header from "../Ob_Header";
import Ob_Footer from "../Ob_Footer";
function Step1() {
  useEffect(() => {
    document.title = "Learnet Sign Up";
  });
  const id = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
  const redirect_url=process.env.REACT_APP_REDIRECT_URL;
 
{/*
 let redirect_url = 'http://localhost:3000'; 
    if(window.location.href.includes('learnet'))
    redirect_url='https://learnet.acolabz.com';
*/}

  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${id}&redirect_uri=${redirect_url}&state=123456&scope=r_liteprofile%20r_emailaddress`;

  return (
    <>
      <Ob_Header />
      {/* <!--Main Body--> */}
      <section className="main_body">
        <div className="inner_container">
          <div className="text_rapper">
            <div className="content">
              <h1 className="welcome">
                Welcome to <b>lear</b>net <br /> <b>net</b>work{" "}
              </h1>
              <div>
                <a
                  href={url}
                  // onClick={linkedInLogin}
                  className="btn btn-primary radius btnlg"
                >
                  Connect with Linkedin
                </a>
              </div>
            </div>
            <div className="right_img">
              <div className="hero_img">
                <img src="assets/images/info1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ob_Footer />
    </>
  );
}

export default Step1;
