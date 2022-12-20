import React, { useEffect, useState } from "react";
import { userProfile } from "../../Services/UserAuth";
import UserNavbar from "../UserNavbar";
import { AcountSetting } from "./components/AcountSetting";
import { MessaingSetting } from "./components/MessaingSetting";
import { NotificationSetting } from "./components/NotificationSetting";
import { PrivacySetting } from "./components/PrivacySetting";
import { SelectSetting } from "./components/SelectSetting";

export const Setting = () => {
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
    } catch (error) {}
  }, [token]);
  // console.log(userData)
  if (isLoaded) {
  return (
    <>
        <UserNavbar userData={userData} />
        <main>
        {/* <!-- Container START --> */}
        <div class="container">
            <div class="row">

                <SelectSetting/>
                <div class="col-lg-6 vstack gap-4">
                    {/* <!-- Setting Tab content START --> */}
                    <div class="tab-content py-0 mb-0">
                        <AcountSetting/>
                        <NotificationSetting/>
                        <PrivacySetting/>
                        <MessaingSetting/>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </>
  )
  }
}
