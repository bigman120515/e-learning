import React,{useState} from "react";
import { useEffect } from "react";
import { MyProfileAddLanguage,MyProfileUpdateLanguage,MyProfileDeleteLanguage } from "../../../Services/MyProfileAuth";
import { userProfile } from "../../../Services/UserAuth";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import languageList from '../static/languageList';
import {Modal,Button} from 'react-bootstrap';


export const MyProfileLanguage = () => {
  // const [language,setLanguage]=useState([])
  const [local,setLocal]=useState(false)
  const [show,setShow]=useState(false)
  const [showUpdate,setShowUpdate]=useState(true)
  const [showEdit,setShowEdit]=useState(false)
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  let language=userProfileData?.language || []
  let token=userData.token
  const [mode,setMode]=useState(null)
  console.log(token) 
  
  const [lang,SetLang]=useState("");
  const [prof,setProf]=useState("");
  const[screentype,setScreenType]=useState("Add");
  const[lid,setLid]=useState(0)
  const [priceId, setPriceId] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  let proficientList=[
    'Beginner',
    'Intermediate',
    'Expert'
  ]
  
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

  const openDeletePopup = (lid) => {
    setPriceId(lid);
    toggleDelete();
}
const toggleDelete = () => {
    setModalDelete(!modalDelete);
};

  const clearData=()=>{
    
    SetLang("")
    setProf("")
  }
  // Adding Language
  const handleAddLanguage=()=>{
   // alert("Language")
  
    var data={
      language: lang,
    proficient: prof
    }
    try{
      if(token!==undefined){
        MyProfileAddLanguage(data,token)
          .then((res) => {
           
              setLocal(true)
              setShow(true)
              // let userProfileData=JSON.stringify(res.data.data )
              // localStorage.setItem("userProfileData", userProfileData);
              // console.log("first=sill")  

            
          })
          .catch();
      }
    } catch(error){}
  }

  const handleEdit=(data)=>{
  
    setMode(data);   
    
  }
const handleUpdateLanguage =()=>{
 // alert(1)
  var data={
    language: lang,
  proficient: prof
  }
  try{
    if(token!==undefined){
      MyProfileUpdateLanguage(data,token,lid)
        .then((res) => {

          setLocal(true)
          setShow(true)  
        })
        .catch();
    }
  } catch(error){}
}
  

  useEffect(()=>{
    if(mode!=null){
    setScreenType("Edit")
    setProf(mode.proficient)
    SetLang(mode.language)
    setLid(mode._id)
    }
    
  },[mode])

  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = async () => {
   
    console.log("Options Fetched from API")
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + token },
      }; 
    const getlanguage= await fetch(' https://titleId.playfabapi.com/Locale/GetLanguageList',requestOptions)
    const response= getlanguage.json();
    response.then((res)=>{
     
      try{
      if(res !== undefined)
       {
      console.log(res.data)
       
       }
     }
   catch(error){

   }
  })
  }
// Code For Search Language By Filter

 const DeleteLanguage =(lid)=>{
   
    MyProfileDeleteLanguage(lid).then((res)=>{
  
    if(res !== undefined)
    {
      toggleDelete();
      console.log("Language Deleted")
      setLocal(true)
      setShow(true)
    }
   })

 }



 return (
    <>
      <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Languages</h5>
          <a
            className="btn btn-sm btn-primary-soft"
            onClick={clearData}
            data-bs-toggle="modal"
            data-bs-target="#modalCreatelanguage"
          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </a>
        </div>

        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        <div className="card-body position-relative pt-0">
          {/* <!-- Experience item START --> */}
          {
            (language!=null && language.length>0)&&
            language.map((val,ind)=>{
              return(
                <div className="d-flex justify-content-between align-items-start mt-2" key={ind}>
            {/* <!-- Info --> */}
            <div>
              <h6 className="card-title mb-0">
                <a> {val.language} </a> - <a> {val.proficient} </a>
              </h6>
            </div>
            <a className="btn btn-primary-soft btn-xs ms-2 btn_edit"
            data-bs-toggle="modal"
            data-bs-target="#modalEditlanguage"
             onClick={(e)=>handleEdit(val)}>
              <i className="bi bi-pencil-fill pe-1"></i> Edit
            </a>
          </div>
              )
            })
          }
        </div>
        {/* <!-- Card body END --> */}
      </div>
      <div
        class="modal fade"
        id="modalCreatelanguage"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreatelanguage">
                Add Language
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
                <div class="add_language">
                  <form class="mt-3">
                    <div class="row">
                      <div class="col-lg-12">
                        {/* <label for="form-label mb-2">Language</label>
                        <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value={lang}
                      onChange={(e) => SetLang(e.target.value)}
                    /> */}
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e)=>SetLang(e.target.value)}
                      value={lang}
                    >
                      <option selected>Language</option>
                      {
                        languageList.map((val,ind)=>{
                          return (
                            <option key={ind}>{val}</option>
                          )
                        })
                      }
                    </select>
             {/* <Autocomplete
              style={{ width: 500 }}
                freeSolo
                autoComplete
               autoHighlight
               options={myOptions}
              renderInput={(params) => (
            <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
              />
               )}
              /> */}
                      </div>
                      <div class="col-lg-12 mt-3 ">
                        <label for="form-label">Proficient</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={prof} onChange={(e) => setProf(e.target.value)}
                        >
                          <option selected>Select</option>                         
                              <option key=' Elementary proficiency '> Elementary proficiency </option>
                              <option key='Limited working proficiency'>Limited working proficiency</option>
                              <option key='Professional working proficiency'>Professional working proficiency</option>
                              <option key='Full professional proficiency'>Full professional proficiency</option>
                              <option key='Native or bilingual proficiency'>Native or bilingual proficiency</option>
                              
                         </select>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
            
              <button type="button" onClick={handleAddLanguage} class="btn btn-success-soft save_btn " data-bs-dismiss={local?"":"modal"}
                aria-label="Close">
                Save
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* <!-- Update Language --> */}
      <div
        class="modal fade"
        id="modalEditlanguage"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalEditlanguage">
                Edit Language
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
                <div class="add_language">
                  <form class="mt-3">
                    <div class="row">
                      <div class="col-lg-12">
                       
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      onChange={(e)=>SetLang(e.target.value)}
                      value={lang}
                    >
                      <option selected>Language</option>
                      {
                        languageList.map((val,ind)=>{
                          return (
                            <option key={ind}>{val}</option>
                          )
                        })
                      }
                    </select>
            
                      </div>
                      <div class="col-lg-12 mt-3 ">
                        <label for="form-label">Proficient</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={prof} onChange={(e) => setProf(e.target.value)}
                        >
                          <option selected>Select</option>                         
                              <option key=' Elementary proficiency '> Elementary proficiency </option>
                              <option key='Limited working proficiency'>Limited working proficiency</option>
                              <option key='Professional working proficiency'>Professional working proficiency</option>
                              <option key='Full professional proficiency'>Full professional proficiency</option>
                              <option key='Native or bilingual proficiency'>Native or bilingual proficiency</option>
                              
                         </select>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
            <button 
              className="btn btn-primary-soft "
               onClick={toggleDelete}
               data-bs-dismiss={local?"":"modal"}
               
               >
               Delete
               </button>
              <button type="button" onClick={handleUpdateLanguage} class="btn btn-success-soft save_btn " data-bs-dismiss={local?"":"modal"}
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
                    onClick={() =>  DeleteLanguage(lid)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>







    </>
  );
};
