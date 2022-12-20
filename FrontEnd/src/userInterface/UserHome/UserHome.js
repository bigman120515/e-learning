import React, { useState, useEffect } from "react";

import { userProfile } from "../../Services/UserAuth";
import { ConnectProffestionals } from "../common-component/ConnectProffestionals";
import { TrendingSearch } from "../common-component/TrendingSearch";
import { SideBar } from "../common-component/SideBar";
import UserNavbar from "../UserNavbar";
import { CompleateProfile } from "./Components/CompleateProfile";
import { LeatestNews } from "./Components/LeatestNews";
import { UpcommingSession } from "./Components/UpcommingSession";
import { UserPosts } from "./Components/UserPosts";
import ShareYourPost from "./Components/ShareYourPost";
import { getAllPost } from "../../Services/UserAuth";
import Spinner from "../MyProfile/Spinner";

export const UserHome = () => {

  const [allUserPosts, setAllUserPost] = useState([]);
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [LeatestLoaded, setLeatestLoaded] = useState(false);
  const [leatestNews,setLeatestNews]=useState([])
  const [nudgeblock, setNudgeBlock]=useState([])
  let userAllData = JSON.parse(localStorage.getItem("userData"));
  const linkedinId=userAllData.data.linkedinId
  const [userProfilePicture,setUserProfilePicture]=useState();
  useEffect(() => {
    document.title = "Learnet Home";
    
    setToken(userAllData.token);
    //linkedinId=userAllDAta.data.linkedinId

    loadAllPosts();

  }, []);

  const loadAllPosts=()=>{
    try {
      
      if (linkedinId !== null) {
      
        getAllPost(linkedinId).then((res) => {
       
          if(res!==undefined){
          if (res.success) {
            console.log(res.data,"response-----------")
            setAllUserPost(res.data.posts);
            setUserProfilePicture(res.data.userProfile?.profilePicture || "")
          
            setIsLoaded(true);
          }
        }
        });
      
      }
    } catch (error) {}
  }

  useEffect(() => {
    try {
  
      if (token !== undefined) {
        userProfile(token)
          .then((res) => {
            if (res.status === true) {
              setUserData(res);
              console.log(res)
              setIsLoaded(true);
              let userProfileData=JSON.stringify(res.data)

              localStorage.setItem("userProfileData", userProfileData);
              setIsLoaded(true)
            }
          })
          .catch();
      }
    } catch (error) {}
  }, [token]);

  // Another
  useEffect(() => {
    try {
      
      if (linkedinId !== null) {
        getAllPost(linkedinId).then((res) => {
       
          if(res!==undefined){
          if (res.success) {
            console.log(res.data,"response-----------")
            setLeatestNews(res.data.latestNews)
            setNudgeBlock(res.data.nudgeBlockDetails
              )
            // setAllUserPost(res.data.posts);
            console.log(leatestNews)
            setLeatestLoaded(true)
             setIsLoaded(true);
          }
        }
        });
      
      }
    } catch (error) {}
  }, []);
  console.log(leatestNews,"---------------------------------------")
  
    return (
      isLoaded?
      <>
        {/* <!-- ======================= */}
        {/* Header END --> */}
        <UserNavbar userData={userData} />
        {/* <!-- **************** MAIN CONTENT START **************** --> */}
        <main>
          {/* <!-- Container START --> */}
          <div className="container">
            <div className="row g-4">
              {/* <!-- Sidenav START --> */}
              <SideBar userData={userData}/>
              {/* <!-- Sidenav END --> */}

              {/* <!-- Middle  content START --> */}
              <div className="col-lg-6">
                <div className="row">
                  
                    <CompleateProfile/>
                    <ShareYourPost loadAllPosts={loadAllPosts}/>
                  {/* <!-- card section start  --> */}
                  <ConnectProffestionals/>
                  <UserPosts allUserPosts={allUserPosts} setAllUserPost={setAllUserPost} loadAllPosts={loadAllPosts} isLoaded={isLoaded} setIsLoaded={setIsLoaded} userProfilePicture={userProfilePicture}/>
                </div>
              </div>
              {/* <!-- Middle content End --> */}
              {/* <!-- Right side Start --> */}
              <div className="col-lg-3">
                <LeatestNews leatestNews={leatestNews} LeatestLoaded={LeatestLoaded}/>
              </div>
              {/* <!-- Right Side END --> */}
            </div>
            {/* <!-- Row END --> */}
          </div>
          {/* <!-- Container END --> */}
        </main>
        {/* <!-- **************** MAIN CONTENT END **************** --> */}

        {/* <!-- Modal create group END --> */}
        <div
          className="modal fade"
          id="modalCreatePost"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal header --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="modalCreatePost">
                  Share a post
                </h5>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex">
                  <img src="assets/images/myimages/metorbg.png" />
                  <h6 className="mb-0 ms-2 mt-4">Rabia Willsom</h6>
                </div>
                <div className="mb-3 mt-4">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="Share your thought"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between align-item-center ms-2">
                  <a href="#" className="color_icon_pop">
                    <i className="fa-solid fa-photo-film me-2 color_icon_pop"></i>
                    Photo
                  </a>
                  <a href="#" className="color_icon_pop">
                    <i className="fa-solid fa-video me-2 color_icon_pop"></i>Video
                  </a>
                  <a href="#" className="color_icon_pop">
                    <i className="fa-regular fa-newspaper me-2 color_icon_pop"></i>
                    Article
                  </a>
                  <button className="btn-outline-pur btn-radius post_btn">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <p>
        {/* <div class="loader"></div> */}
        
        <p>Loading....</p>
      </p>
    );
 
};
