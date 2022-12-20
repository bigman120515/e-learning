import React from 'react';
import { NavLink } from 'react-router-dom';

function ResultCard(props) {
 
  return (
    <>
        <div className="result_section">
                    <div className="result-booking-section">
                        <div className="profile_section">
                           <div className='d-flex align-items-center'>
                           <div className="result_img">
                                <img src={props.img} alt=""/>
                            </div>
                            <div className="result_profile ms-3">
                               <div className='d-flex align-items-center'>
                               <h4 className='mb-2'>{props.name}</h4>
                               <h6 className='mb-2 curr_rup ms-3'><img src={props.curr} alt="" /> {props.rupay}</h6>
                               </div>
                                <h6 className='mb-2'>{props.specelize}</h6>
                                <p className='mb-1'>{props.place}</p>
                                <p className='mb-1'><i className="fas fa-briefcase"></i>
                                    <span> {props.field}</span>
                                </p>
                            </div>
                           </div>

                        </div>
                        <div className="button_section">
                            
                            <div class="userlist_sect mb-0">
                                            <p class="mb-0">
                                                <ul class="d-flex list-unstyled">

                                                    <li><i class="fa-solid fa-star text-warning"></i></li>
                                                    <li><i class="fa-solid fa-star text-warning"></i></li>
                                                    <li><i class="fa-solid fa-star text-warning"></i></li>
                                                    <li><i class="fa-solid fa-star text-warning text-muted"></i></li>
                                                    <li><i class="fa-solid fa-star text-warning text-muted"></i></li>
                                                    <span class="ms-2"> <b>3.1</b>  <small class="text-black">  (162)</small> </span>
                                                </ul>
                                            </p>


                                        </div>   
                            <NavLink to="/UserProfile" className="btn btn_secondry radius">View Profile</NavLink>
                            
                        </div>

                    </div>

                </div>
    </>
  )
}

export default ResultCard