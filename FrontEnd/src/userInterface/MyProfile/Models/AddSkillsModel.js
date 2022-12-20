import React, { useState, useEffect } from "react";
import { MyProfileAddSkills } from "../../../Services/MyProfileAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";

export const AddSkillsModel = () => {
  const [title, setTitle] = useState();
  const [token, setToken] = useState();
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(true);
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  const [tempData, setTempData] = useState(
    userProfileData.skills != null && userProfileData.skills != undefined
      ? userProfileData.skills
      : ""
  );
  let userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    // console.log("biodata-------", tempData);
    // if (tempData != null && tempData != undefined) {
    setToken(userData.token);
    setTitle(tempData);
  }, []);
  console.log(userProfileData)
  const handleAddSkill = () => {
    let data = {
      title,
      rating,
    };
    try {
      if (title !== null && rating !== 0) {
        MyProfileAddSkills(data, token)
          .then((res) => {
            let isSuccess = res.success;
            if (isSuccess) {
              setShow(false);
              console.log(res);
              userProfileData.skills.push(data)
              localStorage.setItem(
                "userProfileData",
                JSON.stringify(userProfileData)
              );
              setTempData(data.title);
            }
            // userProfileData.bio = data.bio;
            // localStorage.setItem(
            //   "userProfileData",
            //   JSON.stringify(userProfileData)
            // );
            // setTempData(data.bio);
          })
          .catch();
      } else if (title == null) {
        toast.error("Please Select Skills");
      } else if (rating == 0) {
        toast.error("Please Rate Your Skill");
      }
    } catch (error) {}
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        class={show ? "modal show" : "modal fade show"}
        id="modalCreateAlbum"
        tabindex="-1"
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
              <form>
                <label for="form-label mb-2">Skills Or Topics</label>
                <div class="input-group input-group">
                  <input
                    class="form-control"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <label for="rating" class="mt-3">
                  Ratings
                </label>
                <small>
                  <ul class="d-flex list-unstyled mb-2">
                    <li>
                      <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                          setRating(newValue);
                        }} /* Available Props */
                      />
                    </li>

                    <span class="ms-2">
                      4.1 <small class="text-grey">(162)</small>
                    </span>
                  </ul>
                </small>

                <div class="session_box">
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
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success-soft save_btn"
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
    </>
  );
};
