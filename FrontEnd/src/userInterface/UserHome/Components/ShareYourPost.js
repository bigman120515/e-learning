import React, { useState } from "react";
import { PostImage, uploadPost, userProfile } from "../../../Services/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Shimmer from 'react-js-loading-shimmer';
import Spinner from "../../MyProfile/Spinner";

const ShareYourPost = ({loadAllPosts}) => {
  const [showPostOption, setShowPostOption] = useState(false);
  const [image, setImage] = useState()
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [linkedinId, setLinkedinId] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState();
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  const userAllData = JSON.parse(localStorage.getItem("userData"));
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    setLinkedinId(userAllData.data.linkedinId)
    setUserProfilePicture(userProfileData?.profilePicture || "")
    setToken(userAllData.token);
  })
  // API call for Upload image

  const [file_path, setfile_path] = useState()

  const [body, setBody] = useState("")
  const [photo, setPhoto] = useState("")
  const [video, setVideo] = useState("")
  const [file, setFile] = useState(null)
  const [filevideo, setFilevideo] = useState(null)
  const [videofile, setFile_Video] = useState()

  useEffect(() => {
    try {

      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            if (res.status === true) {
              setUserData(res);
              console.log(res)
              setIsLoaded(true);
              let userProfileData = JSON.stringify(res.data)

              localStorage.setItem("userProfileData", userProfileData);
              setIsLoaded(true)
            }
          })
          .catch();
      }
    } catch (error) { }
  }, [token]);

  const post = () => {

    var data = {
      body: body,
      photo: file_path,
      video: videofile
    }
    if (file_path !== null, body !== null) {
      console.log(file_path)
      console.log(videofile)
      try {
        console.log(data)
        PostImage(data, linkedinId).then((res) => {
          console.log(res)
          userProfile(token)
         loadAllPosts();
          setIsLoaded(true)
          setShow(false)

        }).catch();
      } catch { }
    }


  }
  const handleSelectPhotos = () => {
    let selectPhotos = document.getElementById("file-input");
    selectPhotos.click();
  };

  //   validation of image videos etc.
  const uploadReports = (e) => {
    try {
      const f = URL.createObjectURL(e.target.files[0])
      setFile(f);
      // console.log(f.type,"filertype----")
      const selectedFile = e.target.files[0];
      const selectedFileName = e.target.files[0].name;
      const formData = new FormData();
      formData.append("files", selectedFile, selectedFileName);

      uploadPost(formData).then(result => {

        // toast.success(result.message)
        console.log(result)
        if (result.success === true) {
          if (result.data.file_type == "mp4" ) {
            setFile_Video(result.data.file_path)
            setfile_path(null)
          }
          if (result.data.file_type == "png" || result.data.file_type == "jpg" || result.data.file_type == "JPEG" || result.data.file_type == "jpeg" || result.data.file_path == "svg") {
            setfile_path(result.data.file_path)
            setFile_Video(null)
          }
        }
      })
    }
    catch (e) {
      console.log(e, "error")
    }
  }

  // const uploadVideo = (e) => {
  //   try {
  //     const f = URL.createObjectURL(e.target.files[0])
  //     setFilevideo(f);
  //     const selected = e.target.files[0];
  //     const selectedFile = e.target.files[0].name;
  //     const formData = new FormData();
  //     formData.append("files", selected, selectedFile);

  //     uploadPost(formData).then(result => {
  //       console.log(result, "data3-------")
  //       // toast.success(result.message)

  //       if (result.success === true) {
  //         // const profileData = {
  //         //     profile_pic: result.data.file_path
  //         // }
  //         const video = {
  //           profile_video: result.data.file_path

  //         }
  //         // setfile_path(profileData.profile_pic)
  //         console.log(result.data.file_path, "data----")
  //         setFile_Video(video.profile_video)
  //       }
  //     })
  //   }
  //   catch (e) {
  //     console.log(e, "error")
  //   }
  // }
  const handleCancel = () => {
    setfile_path('')
    setFile('')
    setFilevideo('');
    setFile_Video('');

   // document.getElementById('imagePreview').innerHTML = `<div class="dz-message " id="showHideImage"><i class="bi bi-images display-3"></i><p>Drag here or click to upload .</p></div>`
  }


  const clearVideo = () => {
    setFile_Video('')
  }


  return (
    isLoaded?
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

      <div class="card card-body">
        <div class="d-flex mb-3">
          {/* <!-- Avatar --> */}
          <div class="avatar avatar-xs me-2">
            <a href="#">
              {" "}
              <img
                class="avatar-img rounded-circle"
                src={userProfilePicture}
                alt=""
              />{" "}
            </a>
          </div>
          {/* <!-- Post input --> */}
          <form class="w-100">
            <input
              class="form-control pe-2 border-0"
              placeholder="Share your thoughts..."
              data-bs-toggle="modal"
              data-bs-target="#modalCreateFeed"
            />
          </form>
        </div>
        {/* <!-- Share feed toolbar START --> */}
        <ul class="nav nav-pills nav-stack small fw-normal">
          <li class="nav-item">
            <a
              class="nav-link bg-light py-1 px-2 mb-0"
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
            >

              <i class="bi bi-image-fill text-success pe-2"></i>Photo
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link bg-light py-1 px-2 mb-0"
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#feedActionVideo"
            >
              {" "}
              <i class="bi bi-camera-reels-fill text-info pe-2"></i>Video
            </a>
          </li>
          
        </ul>
        {/* <!-- Share feed toolbar END --> */}
      </div>
      <div
        class="modal fade z-index-up"
        id="modalCreateFeed"
        tabIndex="-1"
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateFeed">
                Share post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}

            {/* <!-- Modal feed body START --> */}
            <div class="modal-body">
              {/* <!-- Add Feed --> */}
              <div class="d-flex mb-3">
                {/* <!-- Avatar --> */}
                <div class="avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src={userProfilePicture}
                    alt=""
                  />
                </div>
                {/* <!-- Feed box  --> */}
                <form class="w-100">
                  <textarea
                    class="form-control pe-2 fs-6 lh-1 border-0"
                    rows="4"
                    placeholder="Share your thoughts..."
                    autoFocus
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>                 
                </form>
              </div>

            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div class="modal-footer row justify-content-between">
              <div class="col-lg-12 text-sm-end">
                <button type="button" class="btn btn-success-soft"
                  
                 onClick={post} >
                  Post
                </button>

              </div>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create feed END --> */}

      {/* <!-- Modal create Feed photo START --> */}
      <div
        class="modal fade z-index-up"
        id="feedActionPhoto"
        tabIndex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="feedActionPhotoLabel">
                Share post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancel}
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}

            {/* <!-- Modal feed body START --> */}
            <div class="modal-body">
              {/* <!-- Add Feed --> */}
              <form class="w-100">
                <div class="d-flex mb-3">
                  {/* <!-- Avatar --> */}

                  <div class="avatar avatar-xs me-2">
                    <img
                      class="avatar-img rounded-circle"
                      src={userProfilePicture}
                      alt=""
                    />
                  </div>
                  {/* <!-- Feed box  --> */}

                  <textarea
                    class="form-control pe-2 fs-6 lh-1 border-0 sharepostta"
                    rows="2"
                    placeholder="Share your thoughts..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>

                </div>

                {/* <!-- Dropzone photo START --> */}
                <div>
                  {/* <label class="form-label">Upload attachment</label> */}
                  {(file != null && file != "") ?
                    <div id="imagePreview"
                      class="dropzone dropzone-default card shadow-none"
                      data-dropzone='{"maxFiles":2}'
                    >
                      <div class="dz-message " id="showHideImage">
                        <img src={file} />

                      </div>
                    </div> :
                    <div
                      onClick={handleSelectPhotos}
                      id="imagePreview"
                      class="dropzone dropzone-default card shadow-none"
                      data-dropzone='{"maxFiles":2}'
                    >
                      <div class="dz-message " id="showHideImage">
                        <i class="bi bi-images display-3"></i>
                        <p>Browse photo to upload</p>
                      </div>
                    </div>
                  }

                  <input
                    id="file-input"
                    type="file"

                    onChange={(e) => uploadReports(e)}
                    style={{ display: "none" }}
                  />
                </div>

              </form>
              {/* <!-- Dropzone photo END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div class="modal-footer ">
              <button type="button"
                 data-bs-dismiss="modal"
               onClick={post} class="btn btn-success-soft">
                Post
              </button>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create Feed photo END --> */}

      {/* <!-- Modal create Feed video START --> */}
      <div
        class="modal fade z-index-up"
        id="feedActionVideo"
        tabIndex="-1"
        aria-labelledby="feedActionVideoLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="feedActionVideoLabel">
                Share post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}

            {/* <!-- Modal feed body START --> */}
            <div class="modal-body">
              {/* <!-- Add Feed --> */}
              <div class="d-flex mb-3">
                {/* <!-- Avatar --> */}
                <div class="avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src={userProfilePicture}
                    alt=""
                  />
                </div>
                {/* <!-- Feed box  --> */}
                <form class="w-100">
                  <textarea
                    class="form-control pe-2 fs-6 lh-1 border-0"
                    rows="2"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>

              {/* <!-- Dropzone photo START --> */}
              <div>
                {/* <label class="form-label">Upload attachment</label> */}
                {(file != null && file != "") ?
                  <div id="imagePreview"
                    class="dropzone dropzone-default card shadow-none"
                    data-dropzone='{"maxFiles":2}'
                  >
                    <div class="dz-message " id="showHideImage">
                      <video src={file} controls />
                    </div>
                  </div> :
                  <div
                    onClick={handleSelectPhotos}
                    id="imagePreview"
                    class="dropzone dropzone-default card shadow-none"
                    data-dropzone='{"maxFiles":2}'
                  >
                    <div class="dz-message " id="showHideImage">
                      <i class="bi bi-images display-3"></i>
                      <p>Browse video to upload</p>
                    </div>
                  </div>
                }
              </div>
              <input
                id="file-input"
                type="file"

                onChange={(e) => uploadReports(e)}
                style={{ display: "none" }}
              />
              {/* <!-- Dropzone photo END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-success-soft" onClick={post} >
                Post
              </button>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create Feed video END --> */}

      {/* <!-- Modal create events START --> */}
      <div
        class="modal fade z-index-up"
        id="feedActionDocument"
        tabIndex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="feedActionPhotoLabel">
                Share post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancel}
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}

            {/* <!-- Modal feed body START --> */}
            <div class="modal-body">
              {/* <!-- Add Feed --> */}
              <form class="w-100">
                <div class="d-flex mb-3">
                  {/* <!-- Avatar --> */}

                  <div class="avatar avatar-xs me-2">
                    <img
                      class="avatar-img rounded-circle"
                      src={userProfilePicture}
                      alt=""
                    />
                  </div>
                  {/* <!-- Feed box  --> */}

                  <textarea
                    class="form-control pe-2 fs-6 lh-1 border-0"
                    rows="2"
                    placeholder="Share your thoughts..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>

                </div>

                {/* <!-- Dropzone photo START --> */}
                <div>
                  {/* <label class="form-label">Upload attachment</label> */}
                  {(file != null && file != "") ?
                    <div id="imagePreview"
                      class="dropzone dropzone-default card shadow-none"
                      data-dropzone='{"maxFiles":2}'
                    >
                      <div class="dz-message " id="showHideImage">

                        <i class="bi bi-file-earmark-check-fill display-4">
                          <file src={file} />
                        </i>
                      </div>
                    </div> :
                    <div
                      onClick={handleSelectPhotos}
                      id="imagePreview"
                      class="dropzone dropzone-default card shadow-none"
                      data-dropzone='{"maxFiles":2}'
                    >
                      <div class="dz-message " id="showHideImage">
                        <i class="bi bi-images display-3"></i>
                        <p>Browse document to upload</p>
                      </div>
                    </div>
                  }

                  <input
                    id="file-input"
                    type="file"

                    onChange={(e) => uploadReports(e)}
                    style={{ display: "none" }}
                  />
                </div>

              </form>
              {/* <!-- Dropzone photo END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div class="modal-footer ">              
              <button type="button" onClick={post} 
                data-bs-dismiss={show?"":"modal"}
               class="btn btn-success-soft">
                Post
              </button>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>

      {/* <!-- Modal For Share Video --> */}


    </>
     :
    <h1></h1>

  );

};

export default ShareYourPost;
