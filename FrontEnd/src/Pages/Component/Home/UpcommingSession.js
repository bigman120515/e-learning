import React,{useState} from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const UpcommingSession = () => {
  
    const [responsive] = useState({
        500: { items: 1 },
        600: { items: 2 },
        1050: { items: 3 },
        1300: { items: 4 },
      });
    const items = [
        <div class="slider_section ms-3 margin-end-3">
                    <div class="card">
                        <div class="card-body card-text-body">
                            <div class="card_flex">
                                <div class="duration_text">
                                    <h6>Duration: 60 Min</h6>
                                </div>
                                <div class="heart_icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <h4>Python From Scratch & Selenium WebDriver QA Automation 2022</h4>
                            <h6>Josh Portilla</h6>
                            <div class="slider-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star star1"></i><i class="fas fa-star star1"></i>
                                <p>4.1 <span>(162)</span></p>
                            </div>
                            <hr/>
                            <div class="bottom_block">
                                <span>  <i class="fas fa-users"></i></span>
                                <p>$ Free</p>
                            </div>
                        </div>
                    </div>
        </div>,
        <div class="slider_section ms-3 margin-end-3">
                    <div class="card">
                        <div class="card-body card-text-body">
                            <div class="card_flex">
                                <div class="duration_text">
                                    <h6>Duration: 60 Min</h6>
                                </div>
                                <div class="heart_icon">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h4>Learn Python: The Complete Python Programming Course</h4>
                            <h6>Naincy Loi</h6>
                            <div class="slider-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star star1"></i><i class="fas fa-star star1"></i><i class="fas fa-star star1"></i>
                                <p>4.1 <span>(162)</span></p>
                            </div>
                            <hr/>
                            <div class="bottom_block">
                                <span>  <i class="fas fa-users"></i></span>
                                <p>$ 41 <span> /seat</span></p>
                            </div>
                        </div>
                    </div>
        </div>,
        <div class="slider_section ms-3 margin-end-3">
                    <div class="card">
                        <div class="card-body card-text-body">
                            <div class="card_flex">
                                <div class="duration_text">
                                    <h6>Duration: 60 Min</h6>
                                </div>
                                <div class="heart_icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <h4>Automate the Boring Stuff with Python Programming</h4>
                            <h6>Dr. Annjela Yu</h6>
                            <div class="slider-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star star1"></i>
                                <p>4.1 <span>(162)</span></p>
                            </div>
                            <hr/>
                            <div class="bottom_block">
                                <span class="mb-0">  <i class="fas fa-users "></i></span>
                                <p class="mb-0">$ Free</p>
                            </div>
                        </div>
                    </div>
        </div>,
        <div class="slider_section ms-3 margin-end-3">
                    <div class="card">
                        <div class="card-body card-text-body">
                            <div class="card_flex">
                                <div class="duration_text">
                                    <h6>Duration: 60 Min</h6>
                                </div>
                                <div class="heart_icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <h4>React - The Complete Guide (incl Hooks, React Router, Redux)</h4>
                            <h6>Mertin Brio</h6>
                            <div class="slider-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                <p>4.1 <span>(162)</span></p>
                            </div>
                            <hr/>
                            <div class="bottom_block">
                                <span class=" mb-0">  <i class="fas fa-users"></i></span>
                                <p class="mb-0">$ 20 <span>/seat</span> </p>
                            </div>
                        </div>
                    </div>
        </div>,
        <div class="slider_section ms-3 margin-end-3">
                    <div class="card">
                        <div class="card-body card-text-body">
                            <div class="card_flex">
                                <div class="duration_text">
                                    <h6>Duration: 60 Min</h6>
                                </div>
                                <div class="heart_icon">
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <h4>React - The Complete Guide (incl Hooks, React Router, Redux)</h4>
                            <h6>Mertin Brio</h6>
                            <div class="slider-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                <p>4.1 <span>(162)</span></p>
                            </div>
                            <hr/>
                            <div class="bottom_block">

                                <span>  <i class="fas fa-users  mb-0"></i></span>
                                <p class=" mb-0">$ 415</p>




                            </div>
                        </div>
                    </div>
        </div>
      ];

  return (
    <>
    
        <section class=" background-color-white" id="groupsession">
        <div class="comman_padding" id="owl-theme-demo">
            <div class="comman_heading">
                <h2 class="text-center font-style-zilla-slab">Upcoming Group sessions<br/> you can<span class="span"> enroll in</span></h2>
            </div>
            
            <div class="  mt-5">
            <AliceCarousel
            responsive={responsive}
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
  
                        className="alice-carousel-two-home alice-carousel-two-left-aero"
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
                      className="alice-carousel-two-home alice-carousel-two-right-aero b-none"
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
            </div>
            

        </div>
        <div class="btn-btn-join">
            <a href="#" class="btn btn-button">View More</a>
        </div>
    </section>
    </>
  )
}

export default UpcommingSession