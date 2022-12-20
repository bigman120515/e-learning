import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllLearner } from "../../Services/UserAuth";


const MyProfileExperienceLearner =()=>{
 
  const[id,setId]=useState("")
  const[experienceskills,setExperienceSkills]=useState([])
  const[token,setToken]=useState("")
  let userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(()=>{
    setId(userData.data._id);
    setToken(userData.token)
  },[])

  console.log(id)
    const getLearner =()=>{
     
      getAllLearner(token).then((res)=>{
      
        console.log(res.data.skills,"-------------learner")
        setExperienceSkills(res.data.experience);
    })

   }
   console.log(experienceskills,"----------------LearnerSkills")
  useEffect(()=>{
    getLearner();
  },[])
 
 
 
 
 
 
 
 
 
 
 
 
  return(
        <>
             <div className="col-sm-6 col-lg-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between border-0">
            <h5 className="card-title">Experience</h5>
          </div>

          <div className="card-body position-relative pt-0">
            {/* <!-- Experience item START --> */}
           
                <div className="d-flex">
                  {/* <!-- Info --> */}
                
                  <div >
                    <h6 className="card-title mb-1">
                      <a href="#!"> jobTitle </a>
                    </h6>
                    <p className="mb-0 small">
                      {" "}
                      <b>companyName</b>{" "}
                    </p>
                    {/* <p className="mb-1 small">May 2018 - Present </p>
                    <p className="mb-0 small">
                      Microsoft is a technology company offering
                      transformational products and solutions in AdTech
                    </p> */}
                  </div>
                    
                </div>
                
          </div>
          {/* <!-- Card body END --> */}
        </div>
      </div>
        </>
    );


}
export default MyProfileExperienceLearner