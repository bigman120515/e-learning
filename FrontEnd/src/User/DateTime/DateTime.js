import React, { useState } from 'react'
import UserHeader from '../UserHeader'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DateTime() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <UserHeader />
            <section class="hero_section_datetime">
                <div class="hero_datetime_section">
                    <div class="row">
                        <div class="col-lg-4 col-12">
                            <div class="session_section mx-auto">

                                <div class="result_profile date-time-section">
                                    <img src="assets/images/datetimeprofile.png" class="img-fluid" alt='' />
                                    <h4>Rabia Wills</h4>
                                    <h6>Cloud Architecture</h6>
                                    <p><i class="far fa-clock"></i>&nbsp;&nbsp;30 Min Session</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-7  monthdate_margin">
                            <div class="row ">
                                <div class="col-lg-12 monthdate">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8">
                                            <h3>Select Date & Time</h3>
                                            <Calendar onChange={onChange} value={value} />
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="side_button">
                                                <p class="text-center">Wednesday, Aug,24</p>
                                                <div class="side_time mx-auto">
                                                    <a href="#">10:00AM</a>

                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">10:00AM</a>

                                                </div>
                                                <div class="side_time1">
                                                    <div class="side_time side_confirm">
                                                        <a href="#">10:00AM</a>
                                                    </div>
                                                    <div class="side_time side_confirm_btn">
                                                        <a href="#">Confirm</a>
                                                    </div>



                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">11:30AM</a>

                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">12:00AM</a>

                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">04:30PM</a>

                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">05:00PM</a>

                                                </div>
                                                <div class="side_time mx-auto">
                                                    <a href="#">06:30PM</a>

                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-7 mt-3">
                                    <div class="result_section1">
                                        <h3>4 Selected Sessions</h3>
                                        <div class="times_icon_flex mt-4">
                                            <p>16, Aug 2022, 11:30PM <span class="times_icon"><i class="fas fa-times"></i></span> </p>
                                            <p>16, Aug 2022, 11:30PM <span class="times_icon"><i class="fas fa-times"></i></span></p>
                                        </div>
                                        <div class="times_icon_flex">
                                            <p>16, Aug 2022, 11:30PM <span class="times_icon"><i class="fas fa-times"></i></span></p>
                                            <p>16, Aug 2022, 11:30PM <span class="times_icon"><i class="fas fa-times"></i></span></p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-4 col-md-5   mt-3 ">
                                    <div class="result_section2 ">
                                        <h3>Amount to Pay</h3>
                                        <h6>100 $</h6>
                                        <a href="#" class="btn">
                                            Pay & Book
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>
        </>
    )
}

export default DateTime