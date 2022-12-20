import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SignupStepMenteeList } from "../../Services/obAuth";

export const ConnectProffestionals = () => {
  const [token, setToken] = useState("");
  const [menteeList, setMenteeList] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
  }, []);
  const [responsive] = useState({
    0: { items: 1 },
    500: { items: 2 },
  });
  useEffect(() => {
    if (token !== "") {
      loadMentees();
    }
  }, [token]);

  const loadMentees = () => {
    try {
      setIsLoaded(false);
      SignupStepMenteeList(token)
        .then((res) => {
          let mentee = res.data.data;
          setMenteeList(mentee);
          setIsLoaded(true);
        })
        .catch();
    } catch (error) { }
  };
  const items = [

    menteeList.length > 0 ?
      menteeList.map((val, ind) => {
        return (
          <div
            className="card shadow-none text-center mx-1"
            key={ind}
          >
            <div className="card-body p-2 pb-0">
              <div className="avatar avatar-xl">
                <a href="#!">
                  <img
                    className="avatar-img rounded-circle"
                    src={val.profilePicture ? val.profilePicture : "assets/images/avatar-profile.png"}
                    // src="assets/images/avatar-profile.png"
                    alt=""
                  />
                </a>
              </div>
              <h6 className="card-title mb-1 mt-3">
                {" "}
                <a href="#!">{val.firstName}</a>
              </h6>
              {/* <p className="mb-1 small lh-sm">50 Mutual </p>
              <p className="mb-1 small lh-sm">Connection</p> */}
            </div>
            {/* <!-- Card footer --> */}
            <div className="card-footer p-2 border-0">
              <button
                type="button"
                className="btn btn-success-soft  update_btn"
              >
                Connect
              </button>
            </div>
          </div>);

      })
      : ""
  ]

  if (menteeList.length > 0 && menteeList != null) {
    return (
      <>
        <div className="card mt-3 px-0">
          <div className="card-header border-0 pb-3">
            <div className="d-flex justify-content-between align-item-center d-block">
              <h5 className="card-title">Connect with professionals</h5>


              {/* <button
              type="button"
              className="btn btn-purple-soft btn-purple   btn-sm bg-purple rounded"
            >
              See all
            </button> */}
            </div>
          </div>
          <div className="card-body position-relative pt-0">
            <div className="tiny-slider arrow-hover">
              <div
                className="tiny-slider-inner ms-1"
                data-arrow="true"
                data-dots="false"
                data-items-xl="2"
                data-items-lg="2"
                data-items-md="2"
                data-items-sm="2"
                data-items-xs="1"
                data-gutter="12"
                data-edge="30"
              >
                {/* <!-- Slider items --> */}
                {
                  items[0].length > 0 ? <AliceCarousel
                    responsive={responsive}
                    className="AliceCarousel mms-2"
                    mouseTracking="true"

                    controlsStrategy="responsive"
                    disableDotsControls="true"
                    // disableButtonsControls="true"
                    autoPlayInterval="2500"
                    infinite="true"
                    items={items[0]}
                    renderPrevButton={() => {
                      return (
                        <button

                          className="alice-carousel-two "
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
                  >
                  </AliceCarousel> : ""
                }
              </div>
            </div>
          </div>

          {/* <!-- card section end  --> */}
        </div>
      </>
    );
  }
};
