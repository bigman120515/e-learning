import React from 'react'

import { MyProfileAddPricing } from "../../../Services/MyProfileAuth";
import UserNavbar from "../../UserNavbar";
import { MyProfileAvailability } from "./MyProfileAvailability";
import { MyProfileInfo } from "./MyProfileInfo";
import { ProfileAndOption } from "./ProfileAndOption";

import { MyProfilePayout } from "./MyProfilePayout";
import { MyProfilePricing } from "./MyProfilePricing";
import MyMediaPhotos from './MyMediaPhotos';


const MyMedia = () => {
  return (
    <>
      <UserNavbar/> 
      <div className="container paddingtop">
            <div className="row g-4">
                  <div className="col-lg-8 gap-4">
                  <ProfileAndOption/>
<MyMediaPhotos />
                
       {/* <MyProfileInfo/> */}
                  </div>
                  <div className="col-lg-4">
                  <MyProfileAvailability/>
        {/* <MyProfileAddPricing/>   */}
        <MyProfilePricing />
        <MyProfilePayout />
      
                  </div>

            </div>

        </div>
    </>
  )
}

export default MyMedia