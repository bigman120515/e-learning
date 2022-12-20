import React, { useState, useEffect } from "react";
import { MyProfileAddSkills, MyProfileUpdateSkill, MyProfileForMentee } from "../../../Services/MyProfileAuth";
import { Modal, Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { userProfile } from "../../../Services/UserAuth";

export const MyProfileMentees = () => {

  // const [token, setToken] = useState();
  // const [show, setShow] = useState(false);
  // const [showEdit,setShowEdit]=useState(false)
  // let userData = JSON.parse(localStorage.getItem("userData"));
  // let updatetrue=showEdit
  // let userProfileData = JSON.parse(localStorage.getItem("userProfileData")); 
  // const [mentee,setMentee]=useState([])
  // console.log(userProfileData)
  // useEffect(() => {
  //   setToken(userData.token);
  // }, []);
  // useEffect(() => {
  //   try {
  //     if (token !== undefined) {
  //       userProfile(token)
  //         .then((res) => {
  //           if (res.status === true) {

  //             let userProfileData=JSON.stringify(res.data)
  //             localStorage.setItem("userProfileData", userProfileData);
  //             console.log("first=sill")
  //             setMentee(userProfileData.menteeTopics)  
  //           }
  //         })
  //         .catch();
  //     }
  //   } catch (error) {}
  // }, []);

  // console.log(mentee,"--------menteeTopics")
  const [modalDelete, setModalDelete] = useState(false);
  const [priceId, setPriceId] = useState(0);
  const [title, setTitle] = useState("");
  const [token, setToken] = useState();
  // const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [local, setLocal] = useState(false)
  const [skillId, setSkillId] = useState([])
  const [topics, setTopics] = useState("")
  const [alltopics, setAllTopics] = useState([])
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  console.log(userProfileData)
  let skillsList = userProfileData?.menteeTopics || [];
  let userData = JSON.parse(localStorage.getItem("userData"));
  let updatetrue = showEdit
  console.log(updatetrue)
  useEffect(() => {
    setToken(userData.token);
    console.log(skillsList)
    if (skillsList != null) {
      setAllTopics(skillsList)
    }
  }, []);
  useEffect(() => {
    try {
      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            if (res.status === true) {
              setLocal(false)
              let userProfileData = JSON.stringify(res.data)
              localStorage.setItem("userProfileData", userProfileData);
              
              console.log("first=sill")
            }
          })
          .catch();
      }
    } catch (error) { }
  }, [local]);


  const AddMenteeTopics = () => {
    var all = alltopics;
    all.push(topics)
    let data = {
      topics: all
    }
    MyProfileForMentee(data, token).then((res) => {
      if (res != undefined) {
        if (res.success) {
          setTopics("")
          setLocal(true)
        }
      }


    })
    console.log(topics)
  }

  const handleEdit = (val) => {
    setTopics(val)
  }
  const openDeletePopup = (eid) => {
    setPriceId(eid);
    toggleDelete();
  }
  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };

  const DeleteMenteeTopics = () => {
    var all = alltopics;
    all = all.filter(x => x != topics)
    let data = {
      topics: all
    }
    MyProfileForMentee(data, token).then((res) => {
      if (res != undefined) {
        if (res.success) {
          setTopics("")
          setLocal(true)
          setModalDelete(!modalDelete)
          toggleDelete();
          setAllTopics(res.data.data)
        }
      }


    })
  }



  return (
    <>


      <div className="card">

        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">I am Interested in Learning</h5>
          <a
            className="btn btn-sm btn-primary-soft"

            data-bs-toggle="modal"
            data-bs-target="#modalSkill"

          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </a>
        </div>
        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        <div className="card-body position-relative pt-0">
          {/* <!-- Experience item START --> */}
          {skillsList.map((val, ind) => {
            return (
              <div className="d-flex justify-content-between align-items-start d-block mt-2" key={ind}>
                {/* <!-- Info --> */}
                <div>
                  <h6 className="mb-0">
                    {val}
                  </h6>

                </div>
                <a

                  className="btn btn-sm btn-primary-soft btn-xs btn_edit ms-2"
                  onClick={e => handleEdit(val)}
                  data-bs-toggle="modal"
                  data-bs-target="#modalEdit"
                >
                  <i className="bi bi-pencil-fill pe-1"></i> Edit{" "}
                </a>

              </div>
            );
          })}

        </div>
        {/* <!-- <button className="btn btn-danger-soft me-2" type="button"> <i className="bi bi-pencil-fill pe-1"></i> Edit </button> --> */}

      </div>

      {/* <!-- Experience item END --> */}

      {/* <!-- Card body END --> */}




      <div
        class={"modal show"}
        id="modalSkill"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalSkill">
                Add Skills
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
              <label for="form-label mb-2">Skills Or Topics</label>
              <div class="input-group input-group">
                <input
                  class="form-control"
                  type="text"
                  value={topics}
                  onChange={e => setTopics(e.target.value)}
                />
              </div>

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={show ? "" : "modal"}
                aria-label="Close"
                onClick={AddMenteeTopics}
              >
                Save
              </button>
            </div>
          </div>

          {/* <!-- Form END --> */}
        </div>
        {/* <!-- Modal footer --> */}
      </div>

      <div
        class="modal show"
        id="modalEdit"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalEdit">
                Edit Skills
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
              <label for="form-label mb-2">Skills Or Topics</label>
              <div class="input-group input-group">
                <input
                  class="form-control"
                  type="text"
                  value={topics}
                  onChange={e=>setTopics(e.target.value)}
                />
              </div>



              {/* </form> */}
            </div>
            <div class="modal-footer d-flex justify-content-between">

              <button type="button" class="btn btn-sm btn-primary-soft" onClick={toggleDelete}
              data-bs-dismiss={show ? "" : "modal"}
              aria-label="Close">
                Delete
              </button>
              <button
                type="button"
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={show ? "" : "modal"}
                aria-label="Close"

              >
                Save
              </button>





            </div>


          </div>


          {/* <!-- Form END --> */}
        </div>
        {/* <!-- Modal footer --> */}
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
            data-bs-dismiss={modalDelete ? "" : "modal"}
            aria-label="Close"
            onClick={() => DeleteMenteeTopics()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>







    </>
  );
};
