import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MyProfileAddEducation, MyProfileDeleteEducation, MyProfileUpdateEducation } from "../../../Services/MyProfileAuth";
import { userProfile } from "../../../Services/UserAuth";
import {Modal,Button} from 'react-bootstrap';


export const MyProfileEducation = () => {
  const [token, setToken] = useState();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [collegeName, setCollegeName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [startMonth, setStartMonth] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [endMonth, setEndMonth] = useState();
  const [present, setPresent] = useState(false);
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState(false);
  const [eid, setEId] = useState("");
  const [priceId, setPriceId] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);

  let day = 1;
  let startYear = new Date();
  let endYear = new Date();

  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  let educationList = userProfileData.education;
  useEffect(() => {
    setToken(userData.token);
  }, []);
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
  
  let dates = new Date();
  let year = dates.getFullYear();
  let allYear = [];
  for (let i = 0; i <=50; i++) {
    allYear.push(year - i);
  }

  const openDeletePopup = (eid) => {
    setPriceId(eid);
    toggleDelete();
}
const toggleDelete = () => {
    setModalDelete(!modalDelete);
};
  // getting all Data
  useEffect(() => {
    try {
      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            setLocal(false);
            if (res.status === true) {
              let userProfileData = JSON.stringify(res.data);
              localStorage.setItem("userProfileData", userProfileData);
            }
          })
          .catch();
      }
    } catch (error) {}
  }, [local]);
const clearData=()=>{
  setDescription('')
    setCollegeName('')
    setDegreeName('')
    setFieldOfStudy('')
    setStartMonth('')
    setStartDate('')
    setEndMonth('')
    setEndDate('')

    setPresent(false)
}
  // Adding education

  const handleAddEducation = () => {
    let month = (monthNames.indexOf(startMonth))+1;
    startYear.setFullYear(Number(startDate), month, day);
    let monthEnd = (monthNames.indexOf(endMonth))+1;
    endYear.setFullYear(Number(endDate), monthEnd, day);
        console.log(endYear)
    let data = {
      collegeName,
      degreeName,
      fieldOfStudy,
      startYear,
      endYear,
      present,
    };
    console.log(data);
    try {
      if (present) {
        console.log("first");
        if (
          collegeName.length > 0 &&
          degreeName.length > 0 &&
          fieldOfStudy.length > 0 &&
          startYear !== null &&
          startMonth !== null
        ) {
          MyProfileAddEducation(data, token).then((res) => {
            let isSuccess = res?.success || false;
            console.log(res);
            if (isSuccess) {
              setLocal(true);
              setShow(true);
            }
          });
        } else if (collegeName.length == 0) {
          toast.error("Please Enter Colledge Name");
        } else if (degreeName.length == 0) {
          toast.error("Please Enter Degree Name");
        } else if (fieldOfStudy.length == 0) {
          toast.error("Please Enter Field of Study");
        } else if (startMonth == null) {
          toast.error("Please Enter Start Month");
        } else if (startYear == null) {
          toast.error("Please Enter Start Year");
        } else {
          toast.error("Something Missing");
        }
      } else {
        
        if (
          collegeName.length > 0 &&
          degreeName.length > 0 &&
          fieldOfStudy.length > 0 &&
          startDate.length !== null &&
          endDate.length !== null
        ) {
          console.log("hello");
          MyProfileAddEducation(data, token).then((res) => {
            if(res!=undefined){
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {
              setLocal(true);
              setShow(false);
             
            }
          }
          });
        } else if (collegeName.length == 0) {
          toast.error("Please Enter College Name");
        } else if (degreeName.length == 0) {
          toast.error("Please Enter Employement Type");
        } else if (fieldOfStudy.length == 0) {
          toast.error("Please Enter Company Name");
        } else if (startDate !== null) {
          toast.error("Please Enter Start Date");
        } else if (endDate !== null) {
          toast.error("Please Enter End Date");
        } else {
          toast.error("Something Missing");
        }
      }
    } catch (error) {}
  };
  // Update and edit start here
  const handleUpdateData = (id,
    collegeName,
    degreeName,
    fieldOfStudy,
    startYear,
    endYear,
    present,
    description
  ) => {
  
    setEId(id);
    setCollegeName(collegeName);
    setDegreeName(degreeName);
    setFieldOfStudy(fieldOfStudy);
    setStartMonth(moment(startYear).format("MMMM"))
    setStartDate(moment(startYear).format("YYYY"))
    setEndMonth(moment(endYear).format("MMMM"))
    setEndDate(moment(endYear).format("YYYY"))
    setPresent(present);
    setDescription(description);
  };
  const handleUpdateEducation = () => {
    let month = (monthNames.indexOf(startMonth))+1;
    startYear.setFullYear(Number(startDate), month, day);
    let monthEnd = (monthNames.indexOf(endMonth))+1;
    endYear.setFullYear(Number(endDate), monthEnd, day);
    let data = {
      collegeName,
      degreeName,
      fieldOfStudy,
      startYear,
      endYear,
      present,
    };
     
    

    try {
      if (present) {
        console.log("first");
        if (
          collegeName.length > 0 &&
          degreeName.length > 0 &&
          fieldOfStudy.length > 0 &&
          startYear !== null
        ) {
          MyProfileUpdateEducation(data, token,eid).then((res) => {
            let isSuccess = res.success;
            console.log(res,'res');
            
            if (isSuccess) {
              setLocal(true);
              setShowEdit(false);
              clearData();
            }
          });
        } else if (collegeName.length == 0) {
          toast.error("Please Enter College Name");
        } else if (degreeName.length == 0) {
          toast.error("Please Enter Degree Name");
        } else if (fieldOfStudy.length == 0) {
          toast.error("Please Enter Field of Study");
        } else if (startYear !== null) {
          toast.error("Please Enter Start Date");
        } else {
          toast.error("Something Missing");
        }
      } else {
       
        if (
          collegeName.length > 0 &&
          degreeName.length > 0 &&
          fieldOfStudy.length > 0 &&
          startYear !== null &&
          endYear !== null
        ) {
          console.log("hello");
          MyProfileUpdateEducation(data, token,eid).then((res) => {
           const isSuccess = res.success;
            console.log(res);
            
            if (isSuccess) {
              setLocal(true);
              setShowEdit(false);
            }
          });
        } else if (collegeName.length == 0) {
          toast.error("Please Enter College Name");
        } else if (degreeName.length == 0) {
          toast.error("Please Enter Employement Type");
        } else if (fieldOfStudy.length == 0) {
          toast.error("Please Enter Company Name");
        } else if (startYear !== null) {
          toast.error("Please Enter Start Date");
        } else if (endDate !== null) {
          toast.error("Please Enter End Date");
        } else {
          toast.error("Something Missing");
        }
      }
    } catch (error) {}
  };

 const DeleteEducation =(eid)=>{
 
    MyProfileDeleteEducation(eid).then((res)=>{
     
      toggleDelete();
      setLocal(true);
      setShowEdit(false);
      userProfile(token)
   
    })


 }







  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Education</h5>
          <a
            className="btn btn-sm btn-primary-soft"
          
            data-bs-toggle="modal"
            data-bs-target="#modalCreateeducation"
            onClick={clearData}
          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </a>
        </div>
        {educationList.map((val, key) => {
          return (
            <div className="card-body position-relative pt-0" key={key}>
              <div className="d-flex justify-content-between align-items-start mt-2">
                <div>
                  <h6 className="card-title mb-0">
                    <p> {val.degreeName} </p>
                  </h6>
                  <p className="mb-0">
                    <small>
                      <b> {val.collegeName}</b>
                    </small>
                  </p>
                  <p>
                    <small>
                      {moment(new Date(val.startYear)).format("MMM YYYY")} - {val.present ? "Present" : moment(new Date(val.endYear)).format("MMM YYYY")}
                    </small>
                  </p>
                </div>
               <div className="d-flex align-items-center">
               <Link
                  className="btn btn-primary-soft btn-xs btn_edit ms-2"
                  to=""
                  data-bs-toggle="modal"
                    data-bs-target="#modalUpdateeducation"
                  onClick={(e) =>handleUpdateData(val._id,val.collegeName,val.degreeName,val.fieldOfStudy,val.endYear
  ,val.startYear
,val.present,val.description)}
                >
                  <i
                    className="bi bi-pencil-fill pe-1"
                    
                  ></i>{" "}
                  Edit{" "}
                </Link>
                {/* <div className="me-2">
                  <a href="#"> <i class="fa-solid fa-trash text-danger mb-0 ms-3"></i></a>
                 
                  </div> */}
               </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* model for add Education*/}
      <div
        class="modal fade"
        id="modalCreateeducation"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateeducation">
                Add Education
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
                    <label class="form-label">School*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    />
                  </div>
                  <div class=" col-lg-6">
                    <label class="form-label">Degree*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={degreeName}
                      onChange={(e) => setDegreeName(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label class="form-label">Field of study*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={fieldOfStudy}
                      onChange={(e) => setFieldOfStudy(e.target.value)}
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Start Date*</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
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
                      onChange={(e) => setStartDate(e.target.value)}
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
                          onChange={(e) => setEndDate(e.target.value)}
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
                        value={present}
                        onChange={(e) =>
                          present ? setPresent(false) : setPresent(true)
                        }
                      />
                      <label class="form-check-label" for="allowChecked">
                        I currently study here
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
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={show?"":"modal"}
                aria-label="Close"
                onClick={handleAddEducation}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Model for updating  Education */}
      <div
        class="modal fade"
        id="modalUpdateeducation"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateeducation">
                Update Education
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
                    <label class="form-label">School*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    />
                  </div>
                  <div class=" col-lg-6">
                    <label class="form-label">Degree*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={degreeName}
                      onChange={(e) => setDegreeName(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label class="form-label">Field of study*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={fieldOfStudy}
                      onChange={(e) => setFieldOfStudy(e.target.value)}
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Start Date*</label>
                    <select
                    value={startMonth}
                      class="form-select mt-2"
                      aria-label="Default select example"
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
                    value={startDate}
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setStartDate(e.target.value)}
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
                        value={endMonth}
                          class="form-select mt-2"
                          aria-label="Default select example"
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
                        value={endDate}
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setEndDate(e.target.value)}
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
                        I currently study here
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
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer d-flex justify-content-between">

              <button className="btn btn-primary-soft "
               onClick={toggleDelete}
               data-bs-dismiss={showEdit?"":"modal"}
               >
               Delete
               </button>
              <button
                type="button"
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={showEdit?"":"modal"}
                aria-label="Close"
                onClick={handleUpdateEducation}
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
                    <h4 className="modal-title text-light">Delete </h4>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mt-0">Are you sure you want to delete ? </h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={toggleDelete}>
                        Cancel
                    </Button>{' '}
                    <Button variant="danger" 
                      data-bs-dismiss={modalDelete?"":"modal"}
                      aria-label="Close"
                    onClick={() => DeleteEducation(eid)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>












    </>
  );
};
