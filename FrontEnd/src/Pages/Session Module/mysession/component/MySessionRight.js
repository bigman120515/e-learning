import React from 'react'

const MySessionRight = () => {
  return (
    <>
      <div class="d-flex align-items-center d-lg-none">
                        <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                <i class="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                <span class="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
              </button>
                    </div>
  <nav class="navbar navbar-expand-lg mx-0">
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                           
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                          
                            <div class="offcanvas-body d-block px-2 px-lg-0">
                              
                                <div class="card overflow-hidden">
                                  
                                    <div class="h-50px profilepic"></div>
                                 
                                    <div class="card-body pt-0">
                                        <div class="text-center">
                                         
                                            <div class="avatar avatar-lg mt-n5 mb-3">
                                                <a href="#!"><img class="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt="" /></a>
                                            </div>
                                         
                                            <h5 class="mb-0"><a href="#!">Sam Lanson </a></h5>
                                            <small>IT Specialist</small>

                                          
                                            <div class="hstack gap-2 gap-xl-3 justify-content-center mt-4">
                                           
                                                <div>
                                                    <h6 class="mb-0">256</h6>
                                                    <small>Post</small>
                                                </div>
                                               
                                                <div class="vr"></div>
                                             
                                                <div>
                                                    <h6 class="mb-0">2.5K</h6>
                                                    <small>Followers</small>
                                                </div>
                                               
                                                <div class="vr"></div>
                                              
                                                <div>
                                                    <h6 class="mb-0">365</h6>
                                                    <small>Following</small>
                                                </div>
                                            </div>
                                           
                                        </div>

                                      
                                        <hr />

                                     
                                        <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="connection.html">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt="" /><span>Connections </span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="session-mentor.html">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/earth-outline-filled.svg" alt="" /><span>Session </span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="messaging.html">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/calendar-outline-filled.svg" alt="" /><span>Message </span></a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="notification.html">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notifications </span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="settings.html">
                                                    <img class="me-2 h-20px fa-fw" src="assets/images/icon/cog-outline-filled.svg" alt="" /><span>Settings </span></a>
                                            </li>
                                        </ul>
                                      
                                    </div>
                                  
                                    <div class="card-footer text-center py-2">
                                        <a href="my-profile.html" class="btn btn-success-soft save_btn  btn-sm">View Profile</a
                      >
                    </div>
                  </div>
                 
                  <ul class="nav small mt-4 justify-content-center lh-1">
                    <li class="nav-item">
                      <a class="nav-link" href="my-profile-about.html">About</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Support </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Docs </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Help</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Privacy & terms</a>
                                        </li>
                                        </ul>
                                       
                                        <p class="small text-center mt-1">
                                            ©2022
                                            <a class="text-body" target="_blank" href="#"> Learnet </a>
                                        </p>
                                    </div>
                                </div>
                    </nav>
    </>
  )
}

export default MySessionRight