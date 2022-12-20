import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyProfileAddPricing,getAllPricing,MyProfileDeletePricing} from '../../../Services/MyProfileAuth'
import { userProfile } from "../../../Services/UserAuth";
import {Modal,Button} from 'react-bootstrap';

export const MyProfilePricing = () => {
 
     const[skill,setSkill]=useState("")
     const[price,setPrice]=useState("")
     const[token,setToken]=useState()
     const[getdata,setData]=useState([])
     const[id,setId]=useState("")
     const [local, setLocal] = useState(false);
     const [show, setShow] = useState(true);
      const [modalDelete, setModalDelete] = useState(false);
      const [priceId, setPriceId] = useState(0);

     let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
     let userData = JSON.parse(localStorage.getItem("userData"));
     const linkedinId=userData.data.linkedinId
     const[skills,setSkills]=useState([])
     

     const clearData =()=>{
      setSkill('')
      setPrice('')
     }

     const openDeletePopup = (id) => {
      setPriceId(id);
      toggleDelete();
  }
  const toggleDelete = () => {
      setModalDelete(!modalDelete);
  };
  useEffect(()=>{
      setToken(userData.token)
     },[]);  

   const getPricing =()=>{
       
       getAllPricing(linkedinId).then((res)=>{
         if(res.success ===true)
         {
          setData(res.data.data)
          
          console.log(res.data.data)
             
         }


       })
}
useEffect(()=>{

   getPricing();
},[]) 
    const AddPricing =()=>{
     let data={
      skill,
      price
     };
     console.log(data)
     MyProfileAddPricing(data,token,linkedinId).then((res)=>{
          if(res.success === true)
          { 
            console.log(res.data.data)
            setSkill(res.data.data.skill)
            setPrice(res.data.data.price)
            getPricing()
           
          }
        })
    }
  const DeletePricing =(id)=>{
    

    MyProfileDeletePricing(id).then((res)=>{
        if(res.success ===true)
        {
          getPricing()
          toggleDelete();
          
        }   

    })
}
 
 return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          <div className="card-header border-0 pb-3 ">
            <div className="d-flex justify-content-between align-items-center ">
              {/* <!-- Info --> */}
              <div>
                <h5 className="card-title mb-0">
                  <a href="#!" className="text-purple">
                    {" "}
                    Pricing{" "}
                  </a>
                </h5>
              </div>

              <a
                className="btn btn-sm btn-primary-soft"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalCreatePrice"
                onClick={clearData}
              >
                {" "}
                <i className="fa-solid fa-plus"></i>
              </a>
            </div>
          </div>
          {/* <!-- Card body START --> */}
        
        {(getdata !==null && getdata.length>0) && 
        getdata.map((item)=>(
          <div className="card-body position-relative pt-3">
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  {/* <a href="#!"> All </a> */} {item.skill}
                </h6>
              </div>
              <p className="session_color mb-0 ms-auto">
                <small>$ {item.price}</small>
              </p>
              <a onClick={(e)=>openDeletePopup(item._id)}>
                <i className="fa-solid fa-trash text-danger mb-0 ms-3"></i>
              </a>
            </div>
            </div>))}
           
          
          
       </div>
        {/* <!-- Card body END --> */}
      </div>
      <div class="modal fade" id="modalCreatePrice" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                {/* <!-- Modal header --> */}
                <div class="modal-header">
                    <h5 class="modal-title" id="modalCreateTime">Add Price</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {/* <!-- Form START --> */}
                    <form>


                        <div class="add_language">
                            <form class="mt-3">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <label for="form-label mb-3">Skills/Topics</label>
                                        <select class="form-select" aria-label="Default select example" value={skill} onChange={(e)=>setSkill(e.target.value)}>
                                      <option selected>Select</option>
                                      <option value="Phyton">Phython</option>
                                      <option value="Java">Java</option>
                                      <option value="React">React</option>

                                    </select>
                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <label for="price mb-2">Price In $/Session</label>
                                        <input type="text" class="form-control" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                    </div>




                                </div>
                            </form>
                        </div>






                    </form>
                    {/* <!-- Form END --> */}
                </div>
                {/* <!-- Modal footer --> */}

                <div class="modal-footer">
                    <button type="button" class="btn btn-success-soft save_btn btn-purple " onClick={AddPricing}>Add</button>
                </div>

            </div>
        </div>
    </div>
    
    <Modal show={modalDelete} onHide={toggleDelete}>
                <Modal.Header
                    onHide={toggleDelete}
                    closeButton
                    className={'modal-colored-header bg-danger'}>
                    <h4 className="modal-title text-light">Delete Pricing</h4>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mt-0">Are you sure you want to delete ? Pricing</h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={toggleDelete}>
                        Cancel
                    </Button>{' '}
                    <Button variant="danger" onClick={() => DeletePricing(priceId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
    
    </>
  );
};
