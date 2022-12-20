import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { getAllPost } from "../../../Services/UserAuth";

export const CompleateProfile = () => {
  const [nudgeBlock, setNudgeBlock] = useState('');
  const [token, setToken] = useState();
  let linkedinId;
  useEffect(() => {
   // document.title = "Learnet Home";
    let userAllDAta = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllDAta.token);
    linkedinId=userAllDAta.data.linkedinId
  }, []);


  // const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log(userData.nudgeBlockDetails, "myuserdata")

  // useEffect(() => {
  //   setNudgeBlockDetails(userData.nudgeBlockDetails);
  // }, []);
  // console.log(nudgeBlockDetails,"---nudge block detail");

  useEffect(() => {
    try {
      
      if (linkedinId !== null) {
        getAllPost(linkedinId).then((res) => {
       
          if(res!==undefined){
          if (res.success) {
            console.log(res.data,"response-----------")
          //  setLeatestNews(res.data.latestNews)
            setNudgeBlock(res.data.nudgeBlockDetails
              )
          
          }
        }
        });
      
      }
    } catch (error) {}
  }, []);

  console.log(nudgeBlock,"----------nudgepage")





  let completedPercentage=(100*nudgeBlock.completedStep)/ nudgeBlock.totalSteps;
  const items = [
    <div>
      <img src="assets/images/myimages/slider.png" className="img-fluid" />
    </div>,
    <div>
      <img src="assets/images/myimages/slider.png" className="img-fluid" />
    </div>,
    <div>
      <img src="assets/images/myimages/slider.png" className="img-fluid" />
    </div>,
  ];
  if(nudgeBlock.totalSteps!== nudgeBlock.completedStep){
    return (
      <>
        <div class="card px-0 mb-3">
          <div class="card-header border-0 pb-3">
            <h5 class="card-title">Complete your profile</h5>
          </div>
          <div class="card-body position-relative pt-0">
            <p>
              <small>{nudgeBlock.completedStep}/ {nudgeBlock.totalSteps} Completed</small>
            </p>
            <div class="progress">
              <div
                class="progress-bar progresbar_bg"
                role="progressbar"
                style={{ width: completedPercentage+"%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
  
            <div class="tiny-slider arrow-hover mt-4">
              <div
                class="tiny-slider-inner ms-n4"
                data-arrow="true"
                data-dots="false"
                data-items-xl="1"
                data-items-lg="1"
                data-items-md="1"
                data-items-sm="2"
                data-items-xs="1"
                data-gutter="12"
                data-edge="30"
              >
                {/* <!-- Slider items --> */}
                <AliceCarousel
                  className="AliceCarousel mb-0"
                  mouseTracking="true"
                 
                  controlsStrategy="responsive"
                  disableDotsControls="true"
                  // disableButtonsControls="true"
                  autoPlayInterval="2500"
                  infinite="true"
                  items={items}
                  renderPrevButton={() => {
                    return (
                      <button
                        className="alice-carousel-two ms-4"
                        type="button"
                        data-controls="prev"
                        tabIndex="-1"
                        aria-controls="tns2"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                    );
                  }}
                  renderNextButton={() => {
                    return (
                      <button
                        className="alice-carousel-two b-none"
                        type="button"
                        data-controls="next"
                        tabIndex="-1"
                        aria-controls="tns2"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    );
                  }}
                />
              </div>
            </div>
            <p class="mt-3">
              <small>
                {nudgeBlock.description}
              </small>
            </p>
            <Link type="button" class="btn btn-success-soft " to="../myprofile" >
              Update Profile
            </Link>
          </div>
        </div>
      </>
    );
  };
  }
  
