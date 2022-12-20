import React from "react";
import UserNavbar from "../UserNavbar";
import { MyProfileAvailability } from "./Component/MyProfileAvailability";
import { MyProfileCertification } from "./Component/MyProfileCertification";
import { MyProfileEducation } from "./Component/MyProfileEducation";
import { MyProfileExperience } from "./Component/MyProfileExperience";
import { MyProfileInfo } from "./Component/MyProfileInfo";
import { MyProfileLanguage } from "./Component/MyProfileLanguage";
import { MyProfilePayout } from "./Component/MyProfilePayout";
import { MyProfilePricing } from "./Component/MyProfilePricing";
import { MyProfileSkills } from "./Component/MyProfileSkills";
import { ProfileAndOption } from "./Component/ProfileAndOption";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyProfileMentees } from "./Component/MyProfileMentees";
import { ConnectProffestionals } from "../common-component/ConnectProffestionals";


export const MyProfile = () => {
  return (
    <>
    
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
      <UserNavbar />
      <main>
        {/* <!-- Container START --> */}
        <div className="container">
          <div className="row g-4">
            {/* <!-- Main content START --> */}
            <div className="col-lg-8 vstack gap-4">
              <ProfileAndOption />
              <MyProfileInfo />
                 <MyProfileMentees/>   
               {/* <MyProfiletoLearn/>  */}
              <MyProfileSkills />
              <MyProfileExperience />
              <MyProfileEducation/>
              <MyProfileCertification />
              <MyProfileLanguage />
            </div>
            <div className="col-lg-4">
              <div className="row g-4">
                 
                <ConnectProffestionals/>
                {/* <MyProfileAvailability />
                <MyProfilePricing />
                <MyProfilePayout /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};
