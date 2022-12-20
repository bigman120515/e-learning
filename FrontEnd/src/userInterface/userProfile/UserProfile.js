import React, { useEffect, useState } from "react";
import { userProfile } from "../../Services/UserAuth";
import UserNavbar from "../UserNavbar";
import Certification from "./components/Certification";
import Experiance from "./components/Experiance";
import Language from "./components/Language";
import Myprofile from "./components/Myprofile";
import Reviews from "./components/Reviews";
import RightBooking from "./components/RightBooking";
import Skills from "./components/Skills";
import UpcommingCard from "../common-component/UpcommingCard";
import { ConnectProffestionals } from "../common-component/ConnectProffestionals";
import Education from "./components/Education";

function UserProfile() {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.title = "Learnet Profile";
    let userAllDAta = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllDAta.token);
  }, []);
  useEffect(() => {
    try {
      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            console.log(res);
            if (res.status === true) {
              setUserData(res);
              setIsLoaded(true);
              console.log(res);
            }
          })
          .catch();
      }
    } catch (error) { }
  }, [token]);
  // console.log(userData)
  if (isLoaded) {
    return (
      <>
        <UserNavbar userData={userData} />
        <main>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8 vstack gap-4">
                <Myprofile userData={userData} />
                <Skills userData={userData} />
                <Experiance userData={userData} />
                <Education userData={userData} />
                <Certification userData={userData} />
                <Language userData={userData} />
                <ConnectProffestionals />
              </div>
              <div className="col-lg-4">
                <div className="row g-4">
                  <RightBooking />
                  <div className="col-md-6 col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between border-0">
                        <h5 className="card-title mb-0">
                          Upcoming group sessions
                        </h5>
                      </div>
                      <UpcommingCard userData={userData} />
                    </div>
                  </div>

                  <Reviews userData={userData} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default UserProfile;
