import React,{useState} from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyProfileUpdate} from "../../../Services/MyProfileAuth";
export const ProfileAndOption = () => {
  const [date, setDate] = useState();
  const [connection, setConnection] = useState();
  const [profilePicture,setProfilePicture]=useState()
  const [totalConnection,setTotalConnection]=useState()
  const [_id,setId]=useState("")
  const [tempData, setTempData] = useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [currentJobTitle,setCurrentJobTitle]=useState("");
  const [country,setCountry]=useState("");
  const [location,setLocation]=useState("");
  const [token, setToken] = useState();
  const [countryt,setCountryT]=useState("")
  const [firstt,setFirstNameT]=useState("")
  const [lastt,setLastNameT]=useState("")
  const [currentJobTitlet,setCurrentJobTitleT]=useState("")
  const[locationt,setLocationT]=useState("")
  
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(()=>{
    setProfilePicture(userProfileData.profilePicture)
    setTotalConnection(userProfileData?.totalConnection || 0)
    setId(userData.data._id)
    
   
  })
  useEffect(() => {
    var fulln=userProfileData.fullName.trim().split(" ");
    var f=fulln[0];
    var l=fulln.length>1?fulln[1]:"";
    setFirstNameT(f)
    setLastNameT(l)
    setCurrentJobTitleT(userProfileData?.currentJobTitle)
    setCountryT(userData.data?.country)
    setLocationT(userData.data?.location)
   
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
  // settinf Date
  let fulldate = new Date(userProfileData?.joiningDate);
 
  
   const handleUpdate =()=>{
              
    let data ={
      firstName:firstt,
      lastName:lastt,
      currentJobTitle:currentJobTitlet,
      country:countryt,
      location:locationt
    }
    
    MyProfileUpdate(token,data,_id).then((res)=>{

        if(res != undefined)
        {
    userProfileData.firstName = data.firstName;
    userProfileData.lastName=data.lastName;
    userProfileData.currentJobTitle=data.currentJobTitle;
    userProfileData.country=data.country;
    userProfileData.location=data.location;
    localStorage.setItem("userProfileData", JSON.stringify(userProfileData))
          if(res.success)
          {

           // setFirstName(data.firstName)
            // setLastName(data.lastName)
            // setCurrentJobTitle(data.currentJobTitle)
            // setCountry(data.country)
            // setLocation(data.location)
            
            setFirstNameT(res.data.firstName)
            setLastNameT(res.data.lastName)
            setCurrentJobTitleT(res.data.currentJobTitle)
            setCountryT(res.data.country)
            setLocationT(res.data.location)
          
            

          }
        }
            
    })
   }
   console.log(_id,firstName,lastName,location,country)

  return (
    <>
      <div className="card">
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
                  src={profilePicture}
                  alt=""
                />
              </div>
            </div>
          
            <div className="ms-sm-4 mt-sm-3">
              {/* <!-- Info --> */}
              <h1 className="mb-0 h5">
                {firstt} {lastt} <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a>
              </h1>
              <p>{totalConnection} connections</p>
              
            </div>
          </div>
           
          {/* <!-- List profile --> */}
          <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
            <li className="list-inline-item">
              <i className="bi bi-briefcase me-1"></i> {currentJobTitlet}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-geo-alt me-1"></i> {locationt}, {countryt}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-calendar2-plus me-1"></i> Joined on {" "}
              {monthNames[fulldate.getMonth()]} <span>
              {fulldate.getFullYear()}
              </span>
              <a
                   data-bs-toggle="modal"
                    data-bs-target="#modalEditPicture"> <i
                    className="bi bi-pencil-fill pe-1"
                    
                  ></i></a>
            </li>
          </ul>
          
        </div>
        
        {/* <!-- Card body END --> */}
        <div className="card-footer mt-3 pt-2 pb-0">
          {/* <!-- Nav profile pages --> */}
          <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
            <li className="nav-item">
              {" "}
              <Link className="nav-link " to="../myprofile">
                {" "}
                About
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link " to="../mypost">
                
                All Activity
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              {/* <Link className="nav-link" to="../myfavourite">
                {" "}
                All Activity
                <span className="badge bg-success bg-opacity-10 text-success small">
                  
                </span>{" "}
              </Link> */}
            </li>
            {/* <li className="nav-item">
              {" "}
              <Link className="nav-link" to="../mymedia">
                {" "}
                Media
              </Link>{" "}
            </li> */}
            {/* <li className="nav-item">
              
              <Link className="nav-link" >
                
                Activity
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Code for model */}
      <div
        class="modal fade"
        id="modalEditPicture"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalEditPicture">
                Edit Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
          
              <form>
              <div>
              <div class="col-lg-12 mt-3">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      value={firstt}
                      onChange={(e)=>setFirstNameT(e.target.value)}
                     
                    />
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      value={lastt}
                      onChange={(e)=>setLastNameT(e.target.value)}
                     
                    />
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label class="form-label">Current Job Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Current job Title"
                      value={currentJobTitlet}
                      onChange={(e)=>setCurrentJobTitleT(e.target.value)}
                     
                    />
                  </div>

                  <div class="col-lg-12 mt-3">
                    <label class="form-label">Country Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Country Name"
                      value={countryt}
                      onChange={(e)=>setCountryT(e.target.value)}
                     
                    />
                  </div>
                  
                  <div class="col-lg-12 mt-3">
                    <label class="form-label">City Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="location"
                      value={locationt}
                      onChange={(e)=>setLocationT(e.target.value)}
                     />
                  </div>
              </div>
              </form>
       
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                class="btn btn-success-soft save_btn"
                onClick={(e)=>handleUpdate(_id,firstName,lastName,currentJobTitle,country,location)}
                aria-label="Close"
               
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Code for Model Ended */}
    </>
  );
};
