import React, { useState, useEffect } from "react";
import {
  MyProfileAddExperiance,
  MyProfileDeleteExperience,
  MyProfileUpdateExperiance,
} from "../../../Services/MyProfileAuth";
import { toast } from "react-toastify";
import { userProfile } from "../../../Services/UserAuth";
import { Link } from "react-router-dom";
import moment from "moment";
import {Modal,Button} from 'react-bootstrap';
export const MyProfileExperience = () => {
  const [token, setToken] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [employementType, setEmployementType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [present, setPresent] = useState(false);
  const [location, setLocation] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [local, setLocal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [expId, setExpId] = useState();
  const [priceId, setPriceId] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  
 
  let updateTrue = showEdit;
  // console.log(experience)
  let day = 1;
  let startDate = new Date();
  let endDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let employementTypeList = [                      
    "Full-Time",
    "Part-Time",
    "Contract",
    "Self-Employed",
    "Student",
    "Not Employed"
  ];

  let dates = new Date();
  let year = dates.getFullYear();
  let allYear = [];
  for (let i = 0; i <=50; i++) {
    allYear.push(year - i);
  }

  // data from localstorage
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  let experience = userProfileData?.experience;
  useEffect(() => {
    setToken(userData.token);
  }, []);

  // get all user Data
  useEffect(() => {
    try {
      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            if (res.status === true) {
              console.log("first");
              setLocal(false);
              let userProfileData = JSON.stringify(res.data);
              localStorage.setItem("userProfileData", userProfileData);
            }
          })
          .catch();
      }
    } catch (error) {}
  }, [local]);

  const handleEditExperiance = (
    id,
    jobTitle,
    employementType,
    companyName,
    location,
    startMonth,
    startYear,
    endMonth,
    endYear,
    description,
    endDate,
    startDate,
    present
  ) => {
    console.log(companyName,startMonth,startYear,endMonth,endYear,endDate,startDate);
    setExpId(id);
    setJobTitle(jobTitle);
    setEmployementType(employementType);
    setCompanyName(companyName);
    setLocation(location);
    setStartMonth(moment(startDate).format("MMMM"));
    setStartYear(moment(startDate).format("YYYY"));
    setEndMonth(moment(endDate).format("MMMM"));
    setEndYear(moment(endDate).format("YYYY"));
    setDescription(description);
    setPresent(present);
  };

  const handleAddingExperiance = () => {
    setJobTitle("");
    setEmployementType("");
    setCompanyName("");
    setStartMonth("");
    setStartYear();
    setEndMonth("");
    setEndYear();
    setLocation("");
    setDescription("");
    setPresent(false);
  };
  const handleAddExperiance = () => {
    let month = monthNames.indexOf(startMonth);
    startDate.setFullYear(Number(startYear), month, day);
    let data = {
      jobTitle,
      employementType,
      companyName,
      startDate,
      location,
      description,
      endDate,
      present,
    };
    try {
      if (present) {
        if (
          jobTitle.length > 0 &&
          employementType.length > 0 &&
          companyName.length > 0 &&
          startMonth !== null &&
          startYear !== null
        ) {
          MyProfileAddExperiance(data, token).then((res) => {
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {
              setShow(false);
              setLocal(true);
            }
          });
        } else if (jobTitle.length == 0) {
          toast.error("Please Enter Job Title");
        } else if (employementType.length == 0) {
          toast.error("Please Enter Employement Type");
        } else if (companyName.length == 0) {
          toast.error("Please Enter Company Name");
        } else if (startDate == null) {
          toast.error("Please Enter Start Date");
        } else {
          toast.error("Something Missing");
        }
      } else {
        let month = monthNames.indexOf(endMonth);
        endDate.setFullYear(Number(endYear), month, day);
        if (
          jobTitle.length > 0 &&
          employementType.length > 0 &&
          companyName.length > 0 &&
          startDate !== null &&
          startMonth !== null &&
          startYear !== null &&
          endMonth !== null &&
          endYear !== null
        ) {
          MyProfileAddExperiance(data, token).then((res) => {
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {
              setShow(false);
              setLocal(true);
            }
          });
        } else if (jobTitle.length == 0) {
          toast.error("Please Enter Job Title");
        } else if (employementType.length == 0) {
          toast.error("Please Enter Employement Type");
        } else if (companyName.length == 0) {
          toast.error("Please Enter Company Name");
        } else if (startDate == null) {
          toast.error("Please Enter Start Date");
        } else if (endDate == null) {
          toast.error("Please Enter End Date");
        } else {
          toast.error("Something Missing");
        }
      }
    } catch (error) {}
  };

  const openDeletePopup = (expId) => {
    setPriceId(expId);
    toggleDelete();
}
const toggleDelete = () => {
    setModalDelete(!modalDelete);
};

  // updating Experiance
  const handleUpdateExperiance = () => {
    
    let month = monthNames.indexOf(startMonth);
    startDate.setFullYear(Number(startYear), month, day);
    console.log(startDate.getFullYear());
    let data = {
      expId,
      jobTitle,
      employementType,
      companyName,
      location,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
      endDate,
      present,
    };
    try {
      if (present) {
        if (
          jobTitle.length > 0 &&
          employementType.length > 0 &&
          companyName.length > 0 &&
          startMonth !== null &&
          startYear !== null
        ) {
          MyProfileUpdateExperiance(data, token,expId).then((res) => {
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {
              setShowEdit(false);
              setLocal(true);
            }
          });
        } else if (jobTitle.length === 0) {
          toast.error("Please Enter Job Title");
        } else if (employementType.length === 0) {
          toast.error("Please Enter Employement Type");
        } else if (companyName.length === 0) {
          toast.error("Please Enter Company Name");
        } else if (startMonth == null) {
          toast.error("Please Enter Start Month");
        } else if (startYear == null) {
          toast.error("Please Enter Start Year");
        } else {
          toast.error("Something Missing");
        }
      } else {
        let month = monthNames.indexOf(endMonth);
        endDate.setFullYear(Number(endYear), month, day);
        if (
          jobTitle.length > 0 &&
          employementType.length > 0 &&
          companyName.length > 0 &&
          startMonth !== null &&
          startYear !== null &&
          endMonth !== null &&
          endYear !== null
        ) {
          MyProfileUpdateExperiance(data, token,expId).then((res) => {
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {
              setShowEdit(false);
              setLocal(true);
            }
          });
        } else if (jobTitle.length == 0) {
          toast.error("Please Enter Job Title");
        } else if (employementType.length == 0) {
          toast.error("Please Enter Employement Type");
        } else if (companyName.length == 0) {
          toast.error("Please Enter Company Name");
        } else if (startMonth == null) {
          toast.error("Please Enter Start Month");
        } else if (startYear == null) {
          toast.error("Please Enter Start Year");
        } else if (endYear == null) {
          toast.error("Please Enter End Year");
        } else if (endMonth == null) {
          toast.error("Please Enter End Month");
        } else {
          toast.error("Something Missing");
        }
      }
    } catch (error) {}
  };

 const DeleteData =(expId)=>{

   MyProfileDeleteExperience(expId).then((res)=>{
    

    toggleDelete();
    setShow(false);
    setLocal(true);
    
  
  })

 }

  return (
    <>
      <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between  border-0">
          <h5 className="card-title">Experience</h5>
          <Link
            className="btn btn-sm btn-sm btn-primary-soft"
            to=""
            data-bs-toggle="modal"
            data-bs-target="#modalCreateexperience"
            onClick={handleAddingExperiance}
          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        <div className="card-body position-relative pt-0">
          {/* <!-- Experience item START --> */}
          {(experience!=null && experience.length>0)&&
            experience.map((val, ind) => {
            return (
              <div
                className="d-flex justify-content-between align-items-start mt-3"
                key={ind}
              >
                {/* <!-- Info --> */}
                <div style={{width:"90%"}}>
                  <h6 className="card-title mb-1">
                    <p> {val.jobTitle} </p>
                  </h6>
                  <p className="mb-1 ">
                    {" "}
                     {val.companyName} 
                  </p>
                  <p className="mb-2">
                  {/* {val?.startDate}{val.endDate} */}
                  {(val.startDate!=null && val.startDate!="") && <small>
                      {moment(val?.startDate).format(" MMM YYYY")}{" "}
                      {val.present ? "- Present" : "- " + moment(val.endDate).format(" MMM YYYY")}
                    </small>}
                  </p>

                  <p >{val?.description}</p>
                </div>
             <div className="d-flex align-items-center cardcbtn">
            
                <Link
                  className="btn btn-sm btn-primary-soft btn-xs btn_edit ms-2 mb-0"
                  to=""
                  data-bs-toggle="modal"
                  data-bs-target="#modalUpdateexperience"
                  onClick={(e) =>
                    handleEditExperiance(
                      val._id,
                      val.jobTitle,
                      val.employementType,
                      val.companyName,
                      val.location,
                      val.startMonth,
                      val.startYear,
                      val.endMonth,
                      val.endYear,
                      val.description,
                      val?.endDate || 0,
                      val?.startDate || 0,
                      val.present
                    )
                  }
                >
                  
                  <i className="bi bi-pencil-fill pe-1"></i> Edit{" "}
                </Link>
                {/* <div className="me-2">
                  <a href="#"> <i class="fa-solid fa-trash text-danger mb-0 ms-3"></i></a>
              
               </div> */}
             </div>
              </div>
            );
          })}
          {/* <!-- Experience item END --> */}
        </div>
        {/* <!-- Card body END --> */}
      </div>

      {/* Add Experiance Model */}
      <div
        class={"modal show"}
        id="modalCreateexperience"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateexperience">
                Add Experience
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
              <form>
                <div class="row">
                  <div class=" col-lg-6">
                    <label class="form-label">Job Title*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>

                  <div class="col-lg-6">
                    <label for="form-label">Employment type*</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      value={employementType}
                      onChange={(e) => setEmployementType(e.target.value)}
                    >
                      <option selected>Please select</option>
                      {employementTypeList.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-3">
                    <label class="form-label">Company name*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div class=" col-lg-6 mt-3">
                    <label class="form-label">Location</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Start Date*</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                    >
                      <option selected>Month</option>
                      {monthNames.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-5">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                    >
                      <option selected>Year</option>
                      {allYear.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>
                  {present ? (
                    ""
                  ) : (
                    <>
                      <div class="col-lg-6 mt-3">
                        <label for="form-label">End Date*</label>
                        <select
                          class="form-select mt-2"
                          aria-label="Default select example"
                          value={endMonth}
                          onChange={(e) => setEndMonth(e.target.value)}
                        >
                          <option selected>Month</option>
                          {monthNames.map((val, ind) => {
                            return <option key={ind}>{val}</option>;
                          })}
                        </select>
                      </div>

                      <div class=" col-lg-6 mt-5">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={endYear}

                          onChange={(e) => setEndYear(e.target.value)}
                        >
                          <option selected>Year</option>
                          {allYear.map((val, ind) => {
                            return <option key={ind}>{val}</option>;
                          })}
                        </select>
                      </div>
                    </>
                  )}
                  <div class="col-12 mt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="allowChecked"
                        checked={present}
                        onChange={(e) =>
                          present ? setPresent(false) : setPresent(true)
                        }
                      />
                      <label class="form-check-label" for="allowChecked">
                        I currently work here
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Add Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss={show?"":"modal"}
                aria-label="Close"
                onClick={handleAddExperiance}
                class="btn btn-success-soft save_btn"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update model Experiance */}
      <div
        class={"modal show"}
        id="modalUpdateexperience"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateexperience">
                Update Experience
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
              <form>
                <div class="row">
                  <div class=" col-lg-6">
                    <label class="form-label">Job Title*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>

                  <div class="col-lg-6">
                    <label for="form-label">Employment type*</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      value={employementType}
                      onChange={(e) => setEmployementType(e.target.value)}
                    >
                      <option selected>Please select</option>
                      {employementTypeList.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-3">
                    <label class="form-label">Company name*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div class=" col-lg-6 mt-3">
                    <label class="form-label">Location</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Start Date*</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                    >
                      <option selected>Month</option>
                      {monthNames.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-5">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                    >
                      <option selected>Year</option>
                      {allYear.map((val, ind) => {
                        return <option key={ind}>{val}</option>;
                      })}
                    </select>
                  </div>
                  {present ? (
                    ""
                  ) : (
                    <>
                      <div class="col-lg-6 mt-3">
                        <label for="form-label">End Date*</label>
                        <select
                          class="form-select mt-2"
                          aria-label="Default select example"
                          value={endMonth}
                          onChange={(e) => setEndMonth(e.target.value)}
                        >
                          <option selected>Month</option>
                          {monthNames.map((val, ind) => {
                            return <option key={ind}>{val}</option>;
                          })}
                        </select>
                      </div>

                      <div class=" col-lg-6 mt-5">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={endYear}
                          onChange={(e) => setEndYear(e.target.value)}
                        >
                          <option selected>Year</option>
                          {allYear.map((val, ind) => {
                            return <option key={ind}>{val}</option>;
                          })}
                        </select>
                      </div>
                    </>
                  )}
                  <div class="col-12 mt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="allowChecked"
                        checked={present}
                        onChange={(e) =>
                          present ? setPresent(false) : setPresent(true)
                        }
                      />
                      <label class="form-check-label" for="allowChecked">
                        I currently work here
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Add Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer d-flex justify-content-between">
              <button className="btn btn-primary-soft"
               onClick={toggleDelete}
               data-bs-dismiss={updateTrue?"":"modal"}
              >Delete</button>
              <button
                type="button"
                data-bs-dismiss={updateTrue?"":"modal"}
                aria-label="Close"
                onClick={handleUpdateExperiance}
                class="btn btn-success-soft save_btn"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={modalDelete} onHide={toggleDelete}>
                <Modal.Header
                    onHide={toggleDelete}
                    closeButton
                    className={'modal-colored-header bg-danger'}>
                    <h4 className="modal-title text-light">Delete</h4>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mt-0">Are you sure you want to delete ?</h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={toggleDelete}>
                        Cancel
                    </Button>{' '}
                    <Button variant="danger" 
                      data-bs-dismiss={modalDelete?"":"modal"}
                      aria-label="Close"
                      onClick={() => DeleteData(expId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>








    </>
  );
};
