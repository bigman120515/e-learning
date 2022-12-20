import React from "react";
import SliderMentors from "../../common-component/SliderMentors";
import Certification from "./Certification";
import Experiance from "./Experiance";
import Language from "./Language";
import Myprofile from "./Myprofile";
import Reviews from "./Reviews";
import RightBooking from "./RightBooking";
import Skills from "./Skills";
import UpcommingCard from "./UpcommingCard";

function MainContent() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 vstack gap-4">
              <Myprofile />
              <Skills />
              <Experiance />
              <Certification />
              <Language />
            </div>
            
            
            {/* <!-- Main content END --> */}

            {/* <!-- Right sidebar START --> */}
            <div className="col-lg-4">
              <div className="row g-4">
                {/* <!-- Card START --> */}
                <RightBooking/>

                {/* <!-- card START --> */}
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between border-0">
                      <h6 className="card-title">Upcoming group session</h6>
                    </div>
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
                            <div className="card shadow-none text-center">
                              {/* <!-- Card body --> */}
                              <UpcommingCard/>
                            </div>
                            {/* <!-- Card add friend item END --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Card END --> */}
                {/* <!-- Card END --> */}
                <div className="col-md-6 col-lg-12">
                  <div className="card pt-4 pb-4">
                    <div className="card-header d-flex justify-content-between border-0">
                      <h6 className="card-title mb-0">Reviews</h6>
                    </div>

                    <div className="card-body position-relative pt-2 pb-2">
                      <p className="ratings_five mb-4">
                        {" "}
                        <b>4.7</b> <span>Out of 5</span>{" "}
                      </p>
                      <ul className="d-flex list-unstyled listitems">
                        <li>
                          <i className="fa-solid fa-star text-warning"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star text-warning"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star text-warning"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star text-warning"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star text-muted text-warning"></i>
                        </li>
                      </ul>

                      <Reviews/>
                      
                      <div className=" mt-2 text-center">
                        <a href="#" className="text-purple">
                          <b>View More</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Card END --> */}

                {/* <!-- Card END --> */}
              </div>
            </div>
            {/* <!-- new section --> */}

            {/* <!-- Right sidebar END --> */}
          </div>
          {/* <!-- Row END --> */}
        </div>
        {/* <!-- Container END --> */}
      </main>
    </>
  );
}

export default MainContent;
