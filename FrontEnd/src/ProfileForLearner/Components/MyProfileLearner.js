import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllLearner } from "../../Services/UserAuth";


const MyProfileLearner =()=>{

  const[id,setId]=useState("")
  const [profileLearner,setProfileLearner]=useState([])
  const[token,setToken]=useState("")
  let userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(()=>{
    setId(userData.data._id);
    setToken(userData.token)
  },[])

  console.log(id)
    const getLearner =()=>{
     
      getAllLearner(token).then((res)=>{
          
        
        console.log(res.data,"-------------learner")
        setProfileLearner(res.data);
        

         })

   }
   console.log(profileLearner,"-----------------line45")
  useEffect(()=>{
    getLearner();
  },[])
  


  
 return(
    <>
         {(profileLearner !==null && profileLearner.length>0)&& 
            profileLearner.map((val, ind) => {
              {/* return(
                <> */}
         <div className="card" key={ind}>
        {/* <!-- Cover image --> */}
        <div
          className="h-200px rounded-top"
          style={{
            background: "url(assets/images/bg/05.jpg) no-repeat center",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <!-- Card body START --> */}
        <div className="card-body py-0">
          <div className="d-sm-flex align-items-start text-center text-sm-start">
            <div>
              {/* <!-- Avatar --> */}
              <div className="avatar avatar-xxl mt-n5 mb-3">
                <img
                  className="avatar-img rounded-circle border border-white border-3"
                  src={val.profilePicture}
                  alt=""
                />
              </div>
            </div>
            <div className="ms-sm-4 mt-sm-3">
              {/* <!-- Info --> */}
              <h1 className="mb-0 h5">
               {val.fullName}
                <i className="fa-brands fa-linkedin"></i>
              </h1>
              <p>{val.totalConnections}</p>
            </div>
          </div>
          {/* <!-- List profile --> */}
          <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
            <li className="list-inline-item">
              <i className="bi bi-briefcase me-1"></i>
              {val.currentJobTitle}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-geo-alt me-1"></i>{" "}
              {val.location}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-calendar2-plus me-1"></i> Joined on{" "}
              {/* {monthNames[fulldate.getMonth()]} {fulldate.getDate()},{" "}
              {fulldate.getFullYear()} */}

            </li>
          </ul>
        </div>
        {/* <!-- Card body END --> */}
        <div className="card-body">
          <h5 className="card-title text-purple mb-4">Profile info</h5>
          <div className="rounded border px-3 py-2 mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <h5>Overview</h5>
            </div>
            <p>
              {val.bio}
              
            </p>
          </div>
          <div className="row g-4">
            <div className="col-sm-6">
              {/* <!-- Designation START --> */}
              <div className="d-flex align-items-center rounded border px-3 py-2">
                {/* <!-- Date --> */}
                <p className="mb-0">
                  <i className="bi bi-briefcase fa-fw me-2"></i>{" "}
                  <strong> {val.currentJobTitle} </strong>
                </p>
              </div>
              {/* <!-- Designation END --> */}
            </div>

            <div className="col-sm-6">
              {/* <!-- Joined on START --> */}
              <div className="d-flex align-items-center rounded border px-3 py-2">
                {/* <!-- Date --> */}
                <p className="mb-0">
                  <i className="bi bi-geo-alt fa-fw me-2"></i>{" "}
                  <strong>{val.currentJobTitle}</strong>
                </p>
              </div>
              {/* <!-- Joined on END --> */}
            </div>
            <div className="col-sm-6">
              {/* <!-- Joined on START --> */}
              <div className="d-flex align-items-center rounded border px-3 py-2">
                {/* <!-- Date --> */}
                <p className="mb-0">
                  <i className="bi bi-envelope fa-fw me-2"></i>
                  <strong> {val.email}</strong>
                </p>
              </div>
              {/* <!-- Joined on END --> */}
            </div>
          </div>
        </div>
      </div>
      {/* </>
              ); */}
    })}
    </>
 )


}
export default MyProfileLearner