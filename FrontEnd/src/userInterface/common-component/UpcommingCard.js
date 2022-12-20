import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function UpcommingCard() {
  const items = [
    <div className="card ms-4">
      <div className="card-body position-relative pt-2 pb-2">
        <div className="d-flex justify-content-between">
          <div className="duration_text">
            <p className="durtion_color">
              {" "}
              <small>Duration: 60 Min</small>{" "}
            </p>
          </div>
          <div className="heart_icon">
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <div className="card_inner">
          <h6 className="card-title mb-0 ">
            <a href="#!">
              Python From Scratch & Selenium WebDriver QA Automation 2022
            </a>
          </h6>
          <p className="mb-0 para_head_color">
            <small>Josh Portilla</small>
          </p>

          <p className="mb-0 text-warning mt-2">
            {" "}
            <small>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star star1"></i>
              <i className="fas fa-star star1"></i>
            </small>{" "}
          </p>

          <p>
            4.1 <small> (162)</small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between ">
          <i className="fa-solid fa-users user-color mb-0"></i>
          <p className="mb-0 para_head_color">
            <b>$ Free</b>{" "}
          </p>
        </div>
      </div>
    </div>,
    <div className="card ms-4">
      <div className="card-body position-relative pt-2 pb-2">
        <div className="d-flex justify-content-between">
          <div className="duration_text">
            <p className="durtion_color">
              {" "}
              <small>Duration: 60 Min</small>{" "}
            </p>
          </div>
          <div className="heart_icon">
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <div className="card_inner">
          <h6 className="card-title mb-0 ">
            <a href="#!">
              Python From Scratch & Selenium WebDriver QA Automation 2022
            </a>
          </h6>
          <p className="mb-0 para_head_color">
            <small>Josh Portilla</small>
          </p>

          <p className="mb-0 text-warning mt-2">
            {" "}
            <small>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star star1"></i>
              <i className="fas fa-star star1"></i>
            </small>{" "}
          </p>

          <p>
            4.1 <small> (162)</small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-users user-color mb-0"></i>
          <p className="mb-0 para_head_color">
            <b>$ Free</b>{" "}
          </p>
        </div>
      </div>
    </div>,
    <div className="card ms-4">
      <div className="card-body position-relative pt-2 pb-2">
        <div className="d-flex justify-content-between">
          <div className="duration_text">
            <p className="durtion_color">
              {" "}
              <small>Duration: 60 Min</small>{" "}
            </p>
          </div>
          <div className="heart_icon">
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <div className="card_inner">
          <h6 className="card-title mb-0 ">
            <a href="#!">
              Python From Scratch & Selenium WebDriver QA Automation 2022
            </a>
          </h6>
          <p className="mb-0 para_head_color">
            <small>Josh Portilla</small>
          </p>

          <p className="mb-0 text-warning mt-2">
            {" "}
            <small>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star star1"></i>
              <i className="fas fa-star star1"></i>
            </small>{" "}
          </p>

          <p>
            4.1 <small> (162)</small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-users user-color mb-0"></i>
          <p className="mb-0 para_head_color">
            <b>$ Free</b>{" "}
          </p>
        </div>
      </div>
    </div>,
    <div className="card ms-4">
      <div className="card-body position-relative pt-2 pb-2">
        <div className="d-flex justify-content-between">
          <div className="duration_text">
            <p className="durtion_color">
              {" "}
              <small>Duration: 60 Min</small>{" "}
            </p>
          </div>
          <div className="heart_icon">
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <div className="card_inner">
          <h6 className="card-title mb-0 ">
            <a href="#!">
              Python From Scratch & Selenium WebDriver QA Automation 2022
            </a>
          </h6>
          <p className="mb-0 para_head_color">
            <small>Josh Portilla</small>
          </p>

          <p className="mb-0 text-warning mt-2">
            {" "}
            <small>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star star1"></i>
              <i className="fas fa-star star1"></i>
            </small>{" "}
          </p>

          <p>
            4.1 <small> (162)</small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-users user-color mb-0"></i>
          <p className="mb-0 para_head_color">
            <b>$ Free</b>{" "}
          </p>
        </div>
      </div>
    </div>,
  ];
  return (
    <>
      <div className="card-body">
        <div className="tiny-slider arrow-hover">
          <div
            className="tiny-slider-inner ms-n4"
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
            <div>
              {/* <!-- Card add friend item START --> */}
              {/* <div className="card shadow-none text-center ms-4"> */}
              {/* <!-- Card body --> */}
              <AliceCarousel
                className="AliceCarousel"
                mouseTracking="true"
                autoPlay="true"
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
                      tabindex="-1"
                      aria-controls="tns2"
                    >
                      <i class="fa-solid fa-chevron-left"></i>
                    </button>
                  );
                }}
                renderNextButton={() => {
                  return (
                    <button
                      className="alice-carousel-two b-none"
                      type="button"
                      data-controls="next"
                      tabindex="-1"
                      aria-controls="tns2"
                    >
                      <i class="fa-solid fa-chevron-right"></i>
                    </button>
                  );
                }}
              />
              {/* </div> */}
              {/* <!-- Card add friend item END --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcommingCard;
