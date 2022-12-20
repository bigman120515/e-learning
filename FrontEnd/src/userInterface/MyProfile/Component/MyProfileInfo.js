import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyProfileAddressUpdate, MyProfileBioUpdate, MyProfileJobTitleUpdate } from "../../../Services/MyProfileAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextareaAutosize } from "@mui/material";

export const MyProfileInfo = () => {
  const [bio, setBio] = useState();
  const [option, setOption] = useState("false");
  const [edit, setEdit] = useState("false");
  const [token, setToken] = useState();
  const [bioData, setBioData] = useState("");
  const [jobTitle,setJobTitle]=useState()
  const [location,setLocation]=useState()

  
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));


  const [tempData, setTempData] = useState("");

  
  useEffect(() => {
    setJobTitle(userProfileData.currentJobTitle ||"")
    setLocation(userProfileData?.location || "")
    setBioData(userProfileData?.bio||"")
    setToken(userData.token);
   
  }, [tempData]);
  const handleDropdown = (select) => {
    if (option == "false") {
      setOption(select + "true");
    } else {
      setOption("false");
    }
  };
  const handleEdit = (select) => {
    if (edit == "false") {
      setEdit(select + "true");
      setOption("false");
    } else {
      setEdit("false");
    }
  };
  const handleBio = () => {
    let data = {
      bio:tempData
    };
    console.log(tempData, "bio----");
    try {
      if (bio !== null) {
        MyProfileBioUpdate(data, token)
          .then((res) => {

            // let isSuccess = res.success;
            userProfileData.bio = data.bio;
            localStorage.setItem(
              "userProfileData",
              JSON.stringify(userProfileData)
            );
            setTempData(data.bio);
            setBioData(data.bio);
            setEdit("false");
           
          })
          .catch();
      } else {
        toast.warn("Please Enter Bio");
      }
    } catch (error) {}
  };

  const handleJob = () => {
    let data = {
      job_title:jobTitle
    };
    try {
      if (jobTitle !== null) {
        MyProfileJobTitleUpdate(data, token)
          .then((res) => {
            
            userProfileData.currentJobTitle = data.job_title;
            localStorage.setItem(
              "userProfileData",
              JSON.stringify(userProfileData)
            );
            setTempData(data.job_title);
            setEdit("false");
          })
          .catch();
      } 
    } catch (error) {}
  };

  const clearData=()=>{
    console.log(bio)

    setBioData(bio)
  }
  




  const handleLocation=()=>{
  
    let data = {
      country:"India",
      location:location,
      zipCode:" "
    };
    try {
      if (location !== null) {
        setEdit("false");
        userProfileData.location = data.location;
        localStorage.setItem("userProfileData",
          JSON.stringify(userProfileData)
        );
        MyProfileAddressUpdate(data, token)
          .then((res) => {
            
           
            setTempData(data.location);
            
          })
          .catch();
      } 
    } catch (error) {}
  }
  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Profile Info</h5>
          <a
            className="btn btn-sm btn-primary-soft"
            
            data-bs-toggle="modal"
            data-bs-target="#modalforprofile"
            onClick={()=>clearData(userProfileData.bio)}
            >
            {" "}
            <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit
          </a>
        </div>
        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        <div className="card-body">
          <div className="rounded border px-3 py-2 mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <h5>Overview</h5>
              <div className="dropdown ms-auto">
            
                {/* <Link
                  className="nav-link text-secondary mb-0"
                  to="#"
                  data-bs-toggle="dropdown"
                  onClick={(e) => handleDropdown("bio")}
                  aria-expanded={option == "bio" ? "true" : "false"}
                >
                  <i className="bi bi-three-dots"></i>
                </Link>
               */}
                {/* <ul
                  className={
                    option == "biotrue"
                      ? "dropdown-menu dropdown-menu-end show"
                      : "dropdown-menu dropdown-menu-end"
                  }
                  aria-labelledby="aboutAction"
                >
                  <li className="popup_edit">
                    <Link
                      className="dropdown-item"
                      onClick={(e) => handleEdit("bio")}
                      to={""}
                    >
                      {" "}
                      <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit
                    </Link>
                    <Link className="dropdown-item" to={""}>
                    
                    <i className="bi bi-trash fa-fw pe-2"></i>Delete
                  </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            {edit == "biotrue" ? (
              <div>
                <TextareaAutosize
                  className="border-0 w-100 "
                 // onChange={(e) => setBioData(e.target.value)}
                  placeholder="Enter Your Bio"
                  rowsMin={6}
                  cols={50}
                  aria-label="minimum height"
                  readOnly
                >
                  {bioData}
                </TextareaAutosize>
             <div className="d-flex">
             <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={handleBio}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-danger btn-sm ms-2">Cancel</button>
             </div>
              </div>
            ) : (
              <p>{bioData}</p>
            )}
          </div>
          {/* <div className="row">
            <div className="col-sm-6">
           
              <div className="d-flex align-items-center rounded border px-3 py-2">
               
                <p className="mb-0">
                  <i className="bi bi-briefcase fa-fw me-2"></i>{" "}
                  {edit == "jobtrue" ? (
              <div>
                <TextareaAutosize
                  className="border-0 w-100  d-inline"
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Job Title"
                  value={jobTitle}
                >
                  {jobTitle}
                </TextareaAutosize>
                <div className="d-flex">
                <button
                  className="btn  btn-outline-primary btn-sm"
                  onClick={handleJob}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-danger btn-sm ms-2">Cancel</button>
                </div>
              </div>):(
                  <strong> {jobTitle} </strong>)
                  }
                </p>
                <div className="dropdown ms-auto">
                 
                  <a
                    className={"nav-link text-secondary mb-0"}
                  
                    id="aboutAction4"
                    onClick={(e) => handleDropdown("jobtitle")}
                    data-bs-toggle="dropdown"
                    aria-expanded={option == "jobtitletrue" ? "true" : "false"}
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
               
                  <ul
                    className={
                      option == "jobtitletrue"
                        ? "dropdown-menu dropdown-menu-end show"
                        : "dropdown-menu dropdown-menu-end"
                    }
                    aria-labelledby="aboutAction4"
                  >
                    <li>
                      <a className="dropdown-item" onClick={(e)=>handleEdit("job")}>
                        {" "}
                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit
                      </a>
                      <Link className="dropdown-item" to={""}>
                    
                        <i className="bi bi-trash fa-fw pe-2"></i>Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
           
            </div>
            <div className="col-sm-6">
            
              <div className="d-flex align-items-center rounded border px-3 py-2">
                
                <p className="mb-0 d-flex">
                  <i className="bi bi-geo-alt fa-fw me-2 d-inline"></i>
                  {edit == "locatetrue" ? (
              <div>
                <textarea
                  className="border-0 w-100  d-inline"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Your Location"
                  value={location}
                >
                  {location}
                </textarea>
              <div className="d-flex">
              <button
                  className="btn  btn-outline-primary btn-sm"
                  onClick={handleLocation}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-danger btn-sm ms-2">Cancel</button>
              </div>
                
              </div>
            ) : (
              <strong>{location}</strong>
            )}
                </p>
                <div className="dropdown ms-auto">
            
                  <a
                    className="nav-link text-secondary mb-0"
                   
                    id="aboutAction5"
                    data-bs-toggle="dropdown"
                    onClick={(e) => handleDropdown("locate")}
                    aria-expanded={option == "locatetrue" ? "true" : "false"}
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
               
                  <ul
                    className={
                      option == "locatetrue"
                        ? "dropdown-menu dropdown-menu-end show"
                        : "dropdown-menu dropdown-menu-end"
                    }
                    aria-labelledby="aboutAction5"
                  >
                    <li>
                      <a className="dropdown-item" onClick={(e)=>handleEdit("locate")}>
                        {" "}
                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit
                      </a>
                      <Link className="dropdown-item" to={''}>
                    
                    <i className="bi bi-trash fa-fw pe-2"></i>Delete
                  </Link>
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>

            
          </div> */}
          {/* Code For Model  */}

          <div
        class="modal show"
        id="modalforprofile"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalforprofile">
                Add Summary
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <!-- Form START --> */}
              {/* <form> */}
              <b><h6 for="form-label mb-6">Let's add Your Summary</h6></b>  

                 <small>*Indicates required</small>
                 <br/>
                 <br/>
                <div>
                  <p>You can write about your work experience, industry, or skill set. Professionals also talk about their key achievements or previous job experiences. </p>
                </div>

                <div>
               <textarea style={{width:"100%",border:'2px solid black',minHeight:"50px"}}
                   rowsMin={6}
                  cols={50}
                  aria-label="minimum height"
                   onChange={(e) => setTempData(e.target.value)}
                >
                  {tempData}
               </textarea>

                </div>

               
            </div>
            
             
            <div class="modal-footer d-flex justify-content-between">
          
            <button type="button" class="btn btn-sm btn-primary-soft"
                    data-bs-dismiss="modal"
                     aria-label="Close"
                  onClick={handleBio}
               >
                Edit
              </button>
            
              
            
          </div>
          </div>

          {/* <!-- Form END --> */}
        </div>
        {/* <!-- Modal footer --> */}
      </div>



 

 
          {/* Code Ended */}
  

        </div>
      
      </div>
    </>
  );
};
