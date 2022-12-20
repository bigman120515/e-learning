import React from 'react'
import { Link } from 'react-router-dom'
import ModelSession from './ModelSession'

const OverViewGroupSession = () => {
  return (
    <>
      <section className="pt-5">
         
            <div className="container">


                <div className="row g-4">
                    <div className="col-lg-8 col-md-12 mx-auto">
                       
                        <div className="card">
                          
                            <div className="card-body">
                                <div className="row g-4">
                                    <div className="mt-4">
                                        <h4 className="">Overview</h4>
                                        <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                                    </div>
                                    <img src="assets/images/myimages/gpdetails.png" className="img-fluid"/>
                                    <div className="mt-4">
                                        <h4 className="mb-3">Skills or Topics</h4>
										<ul className="list-inline mb-0 d-flex flex-wrap gap-2">
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Data analysis</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Visualization</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Web development</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Robotics</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Cloud Computing</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">design</a>
										  </li>
										  <li className="list-inline-item m-0">
											<a className="btn btn-outline-light btn-sm" to="#">Visualization</a>
										  </li>										 
										</ul>
										
										
									</div>

                                    <div className="mt-5">
                                        <h4 className="mb-3">Mentor</h4>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-lg me-3">
                                                <img className="avatar-img rounded-circle" src="assets/images/myimages/avantika.png" alt=""/>
                                            </div>
                                            <div>
                                                <Link to="user-profile-mentor.html">
                                                    <h6 className="mb-0"> <b>Rabia Parton</b> </h6>
                                                </Link>
                                                <span> <small>Mentor</small> </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h4 className="mb-3 ">Availability</h4>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-md-flex justify-content-between align-items-center d-block">
													<div>
                                                    <span className="me-2">Monday, 28 Sep 2022</span>
                                                    <strong>12:00 PM to 01:00 PM (EST)</strong>
													<p className="mt-2 mb-0"> Only 5 seats left. <span className="text-green"> Hurry Up!</span></p>
													</div>
													<div>
                                                    <Link to="#" className="btn btn-success-soft" data-bs-toggle="modal" data-bs-target="#modalGroupsessionMentor">Enroll</Link>
													</div>
                                                </div>                                                
                                            </div>
                                        </div>
										<div className="card mt-3">
                                            <div className="card-body">
                                                <div className="d-md-flex justify-content-between align-items-center d-block">
													<div>
                                                    <span className="me-2">Monday, 28 Sep 2022</span>
                                                    <strong>12:00 PM to 01:00 PM (EST)</strong>
													<p className="mt-2 mb-0"> Only 5 seats left. <span className="text-green"> Hurry Up!</span></p>
													</div>
													<div>
                                                     <Link to="#" className="btn btn-success-soft " data-bs-toggle="modal" data-bs-target="#modalGroupsessionPayment" disabled aria-disabled="true">Enroll</Link>
													</div>
                                                </div>                                                
                                            </div>
                                        </div>


                                       
                                    </div>

									<div className="mt-4 ">
									<p><Link className="text-purple" to="/" style={{textDecoration: 'none'}}>Request 1 on 1 session </Link></p>
									</div>




                                </div>
                            </div>
                          
                        </div>
                      
                    </div>
                    <div className="col-lg-4 col-md-12">
                      
                        <div className="card">
                           
                            <div className="card-body">
                                <div className="row g-4">

                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>                                           
											<ul className="d-flex list-unstyled mb-0">    
												<li><i className="fa-solid fa-star text-warning"></i></li>
												<li><i className="fa-solid fa-star text-warning"></i></li>
												<li><i className="fa-solid fa-star text-warning"></i></li>
												<li><i className="fa-solid fa-star text-warning"></i></li>
												<li><i className="fa-solid fa-star text-warning text-muted"></i></li> 
											</ul>                                           
                                            <div>
                                                <h4 className="mt-2">4.7 <small>(165)</small> </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to="#"><i className="fa-solid fa-heart text-purple fs-4"></i></Link>                                         
                                        </div>

                                    </div>
                                  

									<ul className="list-unstyled mb-3">
										<li className="d-flex justify-content-between mb-3"> 
											<strong className="w-150px">Duration:</strong> 
											<span className="text-end">60 Min</span>
										</li>
										<li className="d-flex justify-content-between mb-3"> 
											<strong className="w-150px">Price:</strong> 
											<span className="text-end">$ 28/Seat</span>
										</li>										
									</ul>

									<Link to="#" className="btn btn-success-soft"><i className="fas fa-share me-2"></i>Share</Link>
                                </div>
                            </div>
                          
                        </div>
                     
                    </div>




                </div>
              
            </div>
           
        </section>
        <ModelSession />
    </>
  )
}

export default OverViewGroupSession