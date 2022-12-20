import React from "react";
import MyProfileCertificationLearner from "./Components/MyProfileCertificationLearner";
import MyProfileEducationLearner from "./Components/MyProfileEducationLearner";
import MyProfileExperienceLearner from "./Components/MyProfileExperienceLearner";
import MyProfileLanguageLearner from "./Components/MyProfileLanguageLearner";
import MyProfileLearner from "./Components/MyProfileLearner";
import MyProfileSkillsLearner from "./Components/MyProfileSkillsLearner";
import UserNavbar from "../ProfileForMentor/UserNavbar";
import Reviews from "../userInterface/userProfile/components/Reviews";
import UpcommingCard from "../userInterface/common-component/UpcommingCard";
import RightBooking from "../userInterface/userProfile/components/RightBooking";
import { ConnectProffestionals } from "../userInterface/common-component/ConnectProffestionals";
import { getAllLearner } from "../Services/UserAuth";
import { useState } from "react";
import { useEffect } from "react";

const Learner =()=>{
  

  const[id,setId]=useState("")
  const [profileLearner,setProfileLearner]=useState([])
  const[token,setToken]=useState("")
  const[learnerskills,setLearnerSkills]=useState([])
  let userData = JSON.parse(localStorage.getItem("userData"));
  const[isloader,setloader]=useState(false)

  useEffect(()=>{
    setId(userData.data._id);
    setToken(userData.token)
  },[])

  console.log(id)
    const getLearner =()=>{
     
      getAllLearner(token).then((res)=>{
          
        
       // console.log(res.data,"-------------learner")
        setProfileLearner(res.data);
        setLearnerSkills(res.data.skills)
        
        setloader(true)

         })

   }
  // console.log(profileLearner,"-----------------line45")
  useEffect(()=>{
    getLearner();
  },[])
  
 


    return(
        <>
                 
                 <UserNavbar/>   
      <main>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8 vstack gap-4">
                <MyProfileLearner/>
                <MyProfileSkillsLearner />
                <MyProfileExperienceLearner/>
                <MyProfileEducationLearner/>
                <MyProfileCertificationLearner/>
                <MyProfileLanguageLearner/>
                {/* <ConnectProffestionals/> */}
              </div>
              <div className="col-lg-4">
                <div className="row g-4">
                  {/* <RightBooking /> */}
                  {/* <div className="col-md-6 col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between border-0">
                        <h5 className="card-title mb-0">
                          Upcoming group sessions
                        </h5>
                      </div>
                      <UpcommingCard />
                    </div>
                  </div> */}

                  {/* <Reviews  /> */}
                </div>
              </div>
            </div>
          </div>
        </main>

        </>
    )



}
export default Learner
