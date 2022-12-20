import React, { useState, useEffect } from "react";
import { MyProfileAddSkills, MyProfileDeleteSkill, MyProfileUpdateSkill } from "../../../Services/MyProfileAuth";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { userProfile } from "../../../Services/UserAuth";
import { SignupStepSkillsLists } from "../../../Services/obAuth";
import { Modal, Button } from 'react-bootstrap';

export const MyProfileSkills = () => {
  // Creacting state to store data
  const [title, setTitle] = useState("");
  const [token, setToken] = useState();
  const [rating, setRating] = useState(0);
  const [ratingh, setRatingh] = useState(0);
  const [titleName, setTitleName] = useState([])
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [local, setLocal] = useState(false)
  const [eid, setEid] = useState("")
  const [isHovering, setIsHovering] = useState(false);
  const [priceId, setPriceId] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  const [skillId, setSkillId] = useState([])
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  console.log(userProfileData)
  let skillsList = userProfileData?.skills || [];
  let userData = JSON.parse(localStorage.getItem("userData"));
  let updatetrue = showEdit
  let titlesa = title

  const skillDescriptions = [
    "",
    "You have very little knowledge and experience (usually 0-1 years)",
    "You are knowledgeable and have conceptual understanding with some experience (usually 1-2 years)",
    "You are known to be moderately skilled with moderate professional experience (usually 2-5 years) in low to medium complexity scenarios",
    " You are known to be highly skilled with significant professional experience (usually 5+ years) in medium to high complexity scenarios",
    "You're known as an expert with vast professional experience (usually 5+ years) in highly complex scenarios",
  ]

  console.log(updatetrue)
  useEffect(() => {
    setToken(userData.token);
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

  const handleAddSkill = () => {

    let data = {
      title,
      rating,
    };
    try {
      if (title.length > 0 && rating > 0) {

        MyProfileAddSkills(data, token)
          .then((res) => {
            let isSuccess = res.success;
            console.log(res);
            if (isSuccess) {

              setShow(false);
              setLocal(true)
              setRating(0)
              setTitle("")
            }
          })
          .catch();
      } else if (title.length === 0) {
        toast.error("Please Select Skills");
      } else if (rating == 0) {
        toast.error("Please Rate Your Skill");
      }
    } catch (error) { }
  }



  // // Handle Edit Skill
  const handleEdit = (id, reting, titles) => {
    setEid(id)
    setSkillId(id)
    setRating(reting)
    setTitle(titles)
  }

  const handleRemoveData = (id, rating, titles) => {
    setSkillId(id)
    setRating(rating)
    setTitle(titles)

  }


  const openDeletePopup = (eid) => {
    setPriceId(eid);
    toggleDelete();
  }
  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };


  const handleEditSkill = () => {
    let data = {
      skillId,
      title,
      rating,
    };

    try {
      if (title.length > 0 && rating > 0) {

        MyProfileUpdateSkill(data, token, eid)
          .then((res) => {
            let isSuccess = res.success;
            console.log(res)
            if (isSuccess) {

              setLocal(true)
              setShowEdit(false);
              setSkillId()
              setRating()
              setTitle()



            }
          })
          .catch();
      } else if (title.length === 0) {

        toast.error("Please Select Skills");
      } else if (rating == 0) {
        toast.error("Please Rate Your Skill");
      }
    } catch (error) { }
  }

  const clearData = () => {
    setTitle('')
    setRating('')
  }

  const DeleteSkill = (eid) => {

    MyProfileDeleteSkill(eid).then((res) => {

      setModalDelete(!modalDelete)
      setLocal(true)
      setShowEdit(false);
      toggleDelete();



    })
  }
  const [FileTitle, setFilTitle] = useState([])
  const matchData = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > 2) {
      let a = e.target.value;
      // console.log(skillList,skillList.filter(x => x.skillName.includes(e.target.value)),"title-----")
      var filtered = skillList.filter(x => x.skillName.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilTitle(filtered);

    } else {
      setFilTitle([]);
    }
  };
  const [data, setData] = useState("");
  const addMentor = (val) => {
    setData(val)
    setFilTitle([]);
  }

  // Add skills
  const [skillList, setSkillList] = useState([])
  let setTrue = false;
  useEffect(() => {
    try {
      SignupStepSkillsLists()
        .then((res) => {
          console.log(res.data, "--------")
          let skills = res.data;

          setSkillList(skills)
          let setTrue = true;
        })
        .catch();
    } catch (error) { }
  }, [local]);

  const handleMouseOver = (val) => {
    setIsHovering(true);
    setRatingh(val)
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setRatingh(0)
  };


  console.log(skillList, "---------SkillList")
  console.log(FileTitle)

  return (
    <>

      <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Skills</h5>
          <a
            className="btn btn-sm btn-primary-soft"

            data-bs-toggle="modal"
            data-bs-target="#modalCreateAlbum"
            onClick={clearData}
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
                  <h6 className="card-title mb-0">
                    <p > {val.title} </p>
                  </h6>
                  <small>
                    <ul className="d-flex list-unstyled mb-2" style={{ 'pointerEvents': 'none' }}>
                      <li>
                        <Rating
                          name="simple-controlled"
                          value={val.rating}
                        />
                      </li>
                    </ul>
                  </small>
                </div>
                {/* <!-- <button className="btn btn-danger-soft me-2" type="button"> <i className="bi bi-pencil-fill pe-1"></i> Edit </button> --> */}
                <Link

                  className="btn btn-sm btn-primary-soft btn-xs btn_edit ms-2"
                  to=""
                  onClick={(e) => handleEdit(val._id, val.rating, val.title)}
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateAlbumEdit"
                >
                  <i className="bi bi-pencil-fill pe-1"></i> Edit{" "}
                </Link>
              </div>
            );
          })}
          {/* <!-- Experience item END --> */}
        </div>
        {/* <!-- Card body END --> */}
      </div>

      {/* Model popup for Adding Skill  */}





      <div
        class={"modal show"}
        id="modalCreateAlbum"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateAlbum">
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
                  autoComplete="off"
                  type="search"
                  value={title}
                  onChange={matchData}
                />
                <div id="search-box" className="d-block searchlist">
                  {FileTitle.map((val, key) => {
                    return (
                      <p
                        key={key}
                        style={{ cursor: "pointer", color: "black" }}
                        onClick={(e) => { setTitle(val.skillName); addMentor(val.skillName) }}
                      >
                        {val.skillName}
                      </p>
                    );
                  })}
                </div>

              </div>

              <label for="rating" class="mt-3">
                Ratings
              </label>

              <small>
                <ul class="d-flex list-unstyled mb-2" >

                  <li  >

                    {/* <Rating
                      name="simple-controlled"
                      value={rating}
                      
                    /> */}
                    <a onClick={(e) => setRating(1)} onMouseOver={e=>handleMouseOver(1)} onMouseOut={handleMouseOut}><span class={(rating>=1 || ratingh>=1)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(2)} onMouseOver={e=>handleMouseOver(2)} onMouseOut={handleMouseOut}><span class={(rating>=2 || ratingh>=2)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(3)} onMouseOver={e=>handleMouseOver(3)} onMouseOut={handleMouseOut}><span class={(rating>=3 || ratingh>=3)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(4)} onMouseOver={e=>handleMouseOver(4)} onMouseOut={handleMouseOut}><span class={(rating>=4 || ratingh>=4)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(5)} onMouseOver={e=>handleMouseOver(5)} onMouseOut={handleMouseOut}><span class={(rating>=5 || ratingh>=5)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    {isHovering && (
                      <div>
                        {skillDescriptions[ratingh]}
                      </div>


                    )}
                  </li>

                  <span class="ms-2">
                    {/* 4.1 <small class="text-grey">(162)</small> */}
                  </span>
                </ul>
              </small>

              {/* <div class="session_box">
                  <div class="cancel_btn d-flex justify-content-between align-item-center">
                    <p class="lh-s">Suggested based on your profile</p>
                    <p class="circle_bg">
                      <span>&times;</span>
                    </p>
                  </div>

                  <div class="   mt-2">
                    <ul class="list-inline mb-0 d-flex flex-wrap gap-2">
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Data analysis
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Visualization
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Web development
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Robotics
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              {/* </form> */}
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={show ? "" : "modal"}
                aria-label="Close"
                onClick={handleAddSkill}
              >
                Save
              </button>
            </div>
          </div>

          {/* <!-- Form END --> */}
        </div>
        {/* <!-- Modal footer --> */}
      </div>



      {/* model for Edit Skill */}
      <div
        class="modal show"
        id="modalCreateAlbumEdit"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateAlbum">
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
                  autoComplete="off"
                  type="search"
                  value={title}
                  onChange={matchData}
                />
                <div id="search-box" className="d-block searchlist">
                  {FileTitle.map((val, key) => {
                    return (
                      <p
                        key={key}
                        style={{ cursor: "pointer", color: "black" }}
                        onClick={(e) => { setTitle(val.skillName); addMentor(val.skillName) }}
                      >
                        {val.skillName}
                      </p>
                    );
                  })}
                </div>

              </div>

              <label for="rating" class="mt-3">
                Ratings
              </label>
              <small>
                <ul class="d-flex list-unstyled mb-2">
                  <li>
                  <a onClick={(e) => setRating(1)} onMouseOver={e=>handleMouseOver(1)} onMouseOut={handleMouseOut}><span class={(rating>=1 || ratingh>=1)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(2)} onMouseOver={e=>handleMouseOver(2)} onMouseOut={handleMouseOut}><span class={(rating>=2 || ratingh>=2)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(3)} onMouseOver={e=>handleMouseOver(3)} onMouseOut={handleMouseOut}><span class={(rating>=3 || ratingh>=3)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(4)} onMouseOver={e=>handleMouseOver(4)} onMouseOut={handleMouseOut}><span class={(rating>=4 || ratingh>=4)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    <a onClick={(e) => setRating(5)} onMouseOver={e=>handleMouseOver(5)} onMouseOut={handleMouseOut}><span class={(rating>=5 || ratingh>=5)?"fa fa-star checked":"far fa-star"} style={{fontSize:"18px"}}></span></a>
                    {isHovering && (
                      <div>
                        {skillDescriptions[ratingh]}
                      </div>


                    )}
                  </li>

                  <span class="ms-2">
                    {/* 4.1 <small class="text-grey">(162)</small> */}
                  </span>
                </ul>
              </small>

              {/* <div class="session_box">
                  <div class="cancel_btn d-flex justify-content-between align-item-center">
                    <p class="lh-s">Suggested based on your profile</p>
                    <p class="circle_bg">
                      <span>&times;</span>
                    </p>
                  </div>

                  <div class="   mt-2">
                    <ul class="list-inline mb-0 d-flex flex-wrap gap-2">
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Data analysis
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Visualization
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Web development
                        </a>
                      </li>
                      <li class="list-inline-item m-0">
                        <a
                          class="btn btn-radius btn-outline-pur btn-sm"
                          href="#"
                        >
                          Robotics
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              {/* </form> */}
            </div>


            <div class="modal-footer d-flex justify-content-between">

              <button type="button" class="btn btn-sm btn-primary-soft"
                onClick={toggleDelete}
                data-bs-dismiss={updatetrue ? "" : "modal"}
                style={{ paddingLeft: "10px" }}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-success-soft save_btn"
                data-bs-dismiss={updatetrue ? "" : "modal"}
                aria-label="Close"

                onClick={handleEditSkill}
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
            onClick={() => DeleteSkill(eid)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>















    </>
  );
};
