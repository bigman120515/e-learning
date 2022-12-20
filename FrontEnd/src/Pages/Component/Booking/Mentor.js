import React from 'react'
import BookNav from './BookNav'
import Filter from './Common/Filter'
import { NavLink } from 'react-router-dom';
import Mentorcard from './cards/Mentorcard';
import Mentor_List from './Lists/MentorList';

function Mentor() {
    return (
        <>
            <header>
                <BookNav />
            </header>
            <section>
                <div className="selectbox_section">
                    <Filter />
                    <div className="reslultbg">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <div className="row">
                                    <div className="col-lg-12 mt-5">
                                        <div className="result_section border_background">
                                            <div className="profile_section ">
                                                <div className="result_img">
                                                    <img src="assets/images/rovert.png" alt="" />

                                                </div>
                                                <div className="result_profile">
                                                    <h4>Robert Willsom</h4>
                                                    <h6>IT Specialist</h6>
                                                    <p>Los Angeles, USA</p>
                                                    <p><i className="fas fa-briefcase"></i>
                                                        <sapn> Cloud Architecture</sapn>
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="result_section">
                                            <h4 className='margin_left_5'>Skill</h4>
                                            <table className="table">

                                                <tbody>
                                                    <tr>
                                                        <td>Data Analysis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cloud Architect</td>
                                                    </tr>
                                                    <tr>
                                                        <td>AIML</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Big Data</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                    {
                                        Mentor_List.map((val, ind) => {
                                            return (
                                                <Mentorcard
                                                    heading={val.heading}
                                                    img1={val.img1}
                                                    data1={val.data1}
                                                    data2={val.data2}
                                                    data3={val.data3}
                                                    img2={val.img2}
                                                    data4={val.data4}
                                                    data5={val.data5}
                                                    data6={val.data6}
                                                />
                                            )
                                        })
                                    }

                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6">

                                <div className="result_section mentor_profile mt-5 table-corner-after">
                                    <table className="table ">


                                        <tbody>
                                            <tr>
                                                <th>Availability :</th>
                                                <td>Mon, Wed</td>
                                            </tr>
                                            <tr>
                                                <th>Timing :</th>
                                                <td>5-6 PM, EST</td>
                                            </tr>
                                            <tr>
                                                <th>Pricing :</th>
                                                <td>$ 50/Session</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <div className="btn-btn btn-btn-btn">
                                        <div className="btn-button">
                                            <NavLink to="#">Book Now</NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className="result_section side_table">
                                    <table className="table">
                                        <div className="table_haeding">
                                            <h6>Mentor having similer skills</h6>

                                        </div>

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <div className="profile_section side_table_section mt-3">
                                                            <div className="result_img">
                                                                <img src="assets/images/rovert.png" alt='' />

                                                            </div>
                                                            <div className="result_profile">

                                                                <h6>Robert Willsom</h6>
                                                                <p>IT Specialist</p>
                                                                <p>
                                                                    <span className="span1">Goa, India</span>
                                                                </p>
                                                            </div>
                                                            <div className="btn-btn btn-btn-btn">
                                                                <div className="btn-button">
                                                                    <NavLink to="#">View Profile</NavLink>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex justify-content-center">
                                                        <div className="profile_section side_table_section mt-3">
                                                            <div className="result_img">
                                                                <img src="assets/images/rovert.png" alt='' />

                                                            </div>
                                                            <div className="result_profile">

                                                                <h6>Robert Willsom</h6>
                                                                <p>IT Specialist</p>
                                                                <p>
                                                                    <span className="span1">Goa, India</span>
                                                                </p>
                                                            </div>
                                                            <div className="btn-btn btn-btn-btn">
                                                                <div className="btn-button">
                                                                    <NavLink to="#">View Profile</NavLink>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mentor