import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { MyProfileAddCertification,MyProfileDeleteCertification,MyProfileUpdateCertification} from "../../../Services/MyProfileAuth";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { userProfile } from "../../../Services/UserAuth";
import moment from "moment";
import validator from "validator";
import {Modal,Button} from 'react-bootstrap';


export const MyProfileCertification = () => {
    const [token,setToken]=useState()
    const [certificateName,setCertificateName]=useState("")
    const [issueMonth,setIssueMonth]=useState("")
    const [issueYear,setIssueYear]=useState("")
    const [issuingOrganization,setIssuingOrganization]=useState("")
    const [certificateId,setCertificateId]=useState("")
    const [certificationURL,setCertificationURL]=useState("")
    const [show,setShow]=useState(false)
    const [showUpdate,setShowUpdate]=useState(false)
    const [local,setLocal]=useState()
    const [mode,setMode]=useState(null)
    const [linkedinId,setLinkedinId]=useState("")
    const [eid,setEid]=useState("")
    const [priceId, setPriceId] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
    let updateTrue = show;

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
  for (let i = 50; i > 0; i--) {
    allYear.push(year - i);
  }
    let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  let certification=userProfileData?.certification || "";
    useEffect(()=>{
        setToken(userData.token)
    },[])

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
    
    const openDeletePopup = (eid) => {
      setPriceId(eid);
      toggleDelete();
  }
  const toggleDelete = () => {
      setModalDelete(!modalDelete);
  };




    // Adding certification
  const handleAddCertification=()=>{
    
    let month = (monthNames.indexOf(issueMonth))+1;
    let issueDate=new Date()
    issueDate.setFullYear(Number(issueYear), month, 1)
      
    let data={
        certificateName,
        issueDate,
        issuingOrganization,
        certificateId,
        certificationURL

    }
    
    console.log(data)
    try{
      if(certificateName.length>0 && issueDate!==null && issuingOrganization.length>0 ){
        MyProfileAddCertification(data,token).then((res)=>{
          let isSuccess = res.success;
          console.log(res)
          if(isSuccess){
           
            
            setLocal(true)
            setShow(true)

          }
        })}
        else if (certificateName.length == 0) {
          toast.error("Please Enter certificate Name");
        } else if (issuingOrganization.length == 0) {
          toast.error("Please Enter issuing Organization");
        // } else if (certificateId.length == 0) {
        //   toast.error("Please Enter Credential ID");
        // } else if ((certificationURL.length = 0)) {
        //   toast.error("Please EntercertificationURL");
        } else if ((issueDate.length = 0)) {
          toast.error("Please Enter Issue Date");
        } else {
          toast.error("Something Missing");
        }
    } catch {}
  }
  

 
  // Updating certification
  const handleUpdateCertification=()=>{
   
    let month = (monthNames.indexOf(issueMonth))+1;
    let newdate=new Date()
    newdate.setFullYear(Number(issueYear), month, 1)
    let issueDate=moment(new Date(newdate)).format("YYYY-MM-DD")
    let data={
        certificateName,
        issueDate,
        issuingOrganization,
        certificateId,
        certificationURL
    }
    //alert(eid)
    console.log(certificateName,
      issueDate,
      issuingOrganization,
      certificateId,
      certificationURL)
  try{
      if(certificateName.length>0 && issueDate!==null && issuingOrganization.length>0 ){
   
        MyProfileUpdateCertification(data,token,eid).then((res)=>{
          let isSuccess = res.success;
          if(isSuccess){
      
            
            setLocal(true)
            setShowUpdate(false)
          }
        })}
        else if (certificateName.length == 0) {
          toast.error("Please Enter certificate Name");
        } else if (issuingOrganization.length == 0) {
          toast.error("Please Enter issuing Organization");
        // } else if (certificateId.length == 0) {
        //   toast.error("Please Enter Credential ID");
        // } else if ((certificationURL.length = 0)) {
        //   toast.error("Please EntercertificationURL");
        } else if (issueDate === null) {
          toast.error("Please Enter Issue Date");
        } else {
          toast.error("Something Missing");
        }
    } catch {}
  }

  const handleEdit=(data)=>{
    
   
    setMode(data);
    
    console.log(data)
  }
  const clearData =()=>{
    setCertificateName('')
    setIssuingOrganization('')
    setIssueMonth('')
    setIssueYear('')
    setCertificateId('')
    setCertificationURL('')

  }

  useEffect(()=>{
    if(mode!=null){
      
    var newDate=new Date(mode.issueDate)
    setCertificateName(mode.certificateName)
    setIssuingOrganization(mode.issuingOrganization)
    setIssueMonth(moment(newDate).format("MMMM"))
    setIssueYear(moment(newDate).format("YYYY"))
    setEid(mode._id)
    setCertificateId(mode.certificateId)
    setCertificationURL(mode.certificationURL)
    }
  },[mode])

   const DeleteData =(eid)=>{

      MyProfileDeleteCertification(eid).then((res)=>{
              
        
               toggleDelete();
               userProfile(token)
               setLocal(true)
               setShowUpdate(false)
               
      })

   }
  return (
    <>
      <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between border-0 mb-2">
          <h5 className="card-title">Certifications</h5>
          <Link
            className="btn btn-sm btn-primary-soft"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#modalCreateCertifiction"
           onClick={clearData}
          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>

        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        {
            certification.length>0?certification.map((val,ind)=>{
                return (
                    <div className="card-body position-relative pt-0" key={ind}>
            {/* <!-- Experience item START --> */}
          
           <div className="d-flex justify-content-between align-items-start d-block">
              {/* <!-- Info --> */}
            
              <div>
                <h6 className="card-title mb-0">
                  <p> {val?.certificateName} </p>
                </h6>
                <p className="mb-0">
                  <small>
                  
                     <b> {val?.issuingOrganization}</b> 
                  </small>
                </p>
                <p>
                  <small> {val?.startDate}</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
              <a className="btn btn-primary-soft btn-xs btn_edit ms-2"
            data-bs-toggle="modal"
            data-bs-target="#modalUpdateCertifiction"
             onClick={(e)=>handleEdit(val)}>
                <i className="bi bi-pencil-fill pe-1 mb-0"></i> Edit{" "}
              </a>
              {/* <div className="me-2">
                <a href="#"><i class="fa-solid fa-trash text-danger mb-0 ms-3"></i></a>
                
                </div> */}
            </div>
            
           </div>
            {/* <!-- Experience item END --> */}
          </div>
                )
            }):""
        }
        {/* <!-- Card body END --> */}
      </div>
      {/* Add certification */}
      <div
        class={"modal fade"}
        id="modalCreateCertifiction"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCertifiction">
                Add Certificate
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
                  <div class=" col-lg-12">
                    <label class="form-label">Name*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={certificateName}
                      onChange={(e)=>setCertificateName(e.target.value)}
                    />
                  </div>
                  <div class=" col-lg-12 mt-3">
                    <label class="form-label">Issuing organization*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={issuingOrganization}
                      onChange={(e)=>setIssuingOrganization(e.target.value)}
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Issue Date</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e)=>setIssueMonth(e.target.value)}
                      value={issueMonth}
                    >
                      <option selected>Month</option>
                      {
                        monthNames.map((val,ind)=>{
                          return (
                            <option key={ind}>{val}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-5">
                  <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e)=>setIssueYear(e.target.value)}
                    >
                      <option selected>Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                    </select>
                  </div>

                  <div class="col-lg-12 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Credential Details</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value={certificateId}
                        onChange={(e)=>setCertificateId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Credential URL</label>
                     
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value={certificationURL}
                        onChange={(e)=>setCertificationURL(e.target.value)}
                      />

                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
           
             <button type="button" data-bs-dismiss={show?"":"modal"}
                aria-label="Close" onClick={handleAddCertification} class="btn btn-success-soft save_btn">
                Save
              </button>            
            </div>
          </div>
        </div>
      </div>
      {/* update certification */}
      <div
        class={"modal fade"}
        id="modalUpdateCertifiction"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCertifiction">
                Edit Certificate
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
                  <div class=" col-lg-12">
                    <label class="form-label">Name*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={certificateName}
                      onChange={(e)=>setCertificateName(e.target.value)}
                    />
                  </div>
                  <div class=" col-lg-12 mt-3">
                    <label class="form-label">Issuing organization*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={issuingOrganization}
                      onChange={(e)=>setIssuingOrganization(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Issue Date</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e)=>setIssueMonth(e.target.value)}
                      value={issueMonth}
                    >
                      <option selected>Month</option>
                      {
                        monthNames.map((val,ind)=>{
                          return (
                            <option key={ind}>{val}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-5">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e)=>setIssueYear(e.target.value)}
                      value={issueYear}
                    >
                      <option selected>Year</option>
                      <option selected>Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                    </select>
                  </div>

                  <div class="col-lg-12 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Credential Details</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value={certificateId}
                        onChange={(e)=>setCertificateId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Credential URL</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value={certificationURL}
                        onChange={(e)=>setCertificationURL(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer d-flex justify-content-between">
            
            <button type="button" class="btn btn-sm btn-primary-soft"
             onClick={toggleDelete}
             data-bs-dismiss={showUpdate?"":"modal"}
              
             >
                Delete
              </button>
            <button type="button" onClick={handleUpdateCertification} class="btn btn-success-soft save_btn"
              data-bs-dismiss={showUpdate?"":"modal"}
              aria-label="Close">
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
                    onClick={() =>  DeleteData(eid)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
      


    </>
  );
};
