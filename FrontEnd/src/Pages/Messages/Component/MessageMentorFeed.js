import React from 'react'

const MessageMentorFeed = () => {
  return (
    <>
 <main>
      
        <div class="container">
            <div class="row gx-0">
             
                <div class="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
                
                    <div class="d-flex align-items-center mb-4 d-lg-none">
                        <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i class="btn btn-primary fw-bold fa-solid fa-sliders"></i>
                <span class="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
              </button>
                    </div>
                
                    <div class="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <h1 class="h5 mb-0">
                                Active chats
                                <span class="badge bg-success bg-opacity-10 text-success">6</span
                  >
                </h1>
             
           
              </div>
            </div>

            <nav class="navbar navbar-light navbar-expand-lg mx-0">
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
              >
  
                <div class="offcanvas-header">
                  <button
                    type="button"
                    class="btn-close text-reset ms-auto"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>

                
                <div class="offcanvas-body p-0">
                  <div
                    class="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0"
                  >
                   
                    <form class="position-relative">
                      <input
                        class="form-control py-2"
                        type="search"
                        placeholder="Search for chats"
                        aria-label="Search"
                      />
                      <button
                        class="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit"
                      >
                        <i class="bi bi-search fs-5"></i>
                      </button>
                    </form>
                  
                    <div class="mt-4 h-100">
                      <div class="chat-tab-list custom-scrollbar">
                        <ul class="nav flex-column nav-pills nav-pills-soft">
                          <li data-bs-dismiss="offcanvas">
                        
                            <a
                              href="#chat-1"
                              class="nav-link active text-start"
                              id="chat-1-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div
                                  class="flex-shrink-0 avatar avatar-story me-2 status-online"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="assets/images/myimages/aditya.png"
                                    alt=""
                                  />
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="flex-grow-1 d-block">
                                    <h6 class="mb-0 mt-1">William Patric</h6>
                                    <div class="small text-secondary">
                                      Mentor
                                    </div>
                                  </div>
                               
                                </div>
                              </div>
                            </a>
                          </li>
                        
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-1"
                              class="nav-link text-start"
                              id="chat-2-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div
                                  class="flex-shrink-0 avatar avatar-story me-2 status-online"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="assets/images/myimages/aditya.png"
                                    alt=""
                                  />
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="flex-grow-1 d-block">
                                    <h6 class="mb-0 mt-1">Aditya Upadhyay</h6>
                                    <div class="small text-secondary">
                                      Mentor
                                    </div>
                                  </div>
                                
                                </div>
                              </div>
                            </a>
                          </li>
                        
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-3"
                              class="nav-link text-start"
                              id="chat-3-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div
                                  class="flex-shrink-0 avatar avatar-story me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="assets/images/myimages/girl.png"
                                    alt=""
                                  />
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="flex-grow-1 d-block">
                                    <h6 class="mb-0 mt-1">Browny, Knight</h6>
                                    <div class="small text-secondary">
                                      Mentor
                                    </div>
                                  </div>
                               
                                </div>
                              </div>
                            </a>
                          </li>
                        
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-4"
                              class="nav-link text-start"
                              id="chat-4-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div
                                  class="flex-shrink-0 avatar avatar-story me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="assets/images/myimages/aditya2.png"
                                    alt="avatar"
                                  />
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="flex-grow-1 d-block">
                                    <h6 class="mb-0 mt-1">Aditya Upadhyay</h6>
                                    <div class="small text-secondary">
                                      Mentor
                                    </div>
                                  </div>
                               
                                </div>
                              </div>
                            </a>
                          </li>
                      
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-5"
                              class="nav-link text-start"
                              id="chat-5-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div
                                  class="flex-shrink-0 avatar avatar-story me-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="assets/images/myimages/aditya2.png"
                                    alt="avatar"
                                  />
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="flex-grow-1 d-block">
                                    <h6 class="mb-0 mt-1">Aditya Upadhyay</h6>
                                    <div class="small text-secondary">
                                      Mentor
                                    </div>
                                  </div>
                               
                                </div>
                              </div>
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </nav>
          </div>
        
          <div class="col-lg-8 col-xxl-9">
            <div class="card card-chat rounded-start-lg-0 border-start-lg-0">
              <div class="card-body h-100">
                <div class="tab-content py-0 mb-0 h-100" id="chatTabsContent">
             
                  <div
                    class="fade tab-pane show active h-100"
                    id="chat-1"
                    role="tabpanel"
                    aria-labelledby="chat-1-tab"
                  >
                
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">William Patric</h6>
                          <div class="small text-secondary">
                            <i class="fa-solid fa-circle text-success me-1"></i
                            >Mentor
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                      
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                    
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                      
                      </div>
                    </div>
                
                    <hr />
                 
                    <div class="chat-conversation-content custom-scrollbar">
                   
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/profilelogo.png"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Aditya Upadhyaya has proposed to book you for a
                                session on topic/skill Cloud computing on Tue, 6
                                Sep 2022, 10:00 am (EST).
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-100 ms-5 mb-0">
                        <div class="ms-md-auto d-flex">
                          <button class="btn btn-primary-soft btn-sm mb-0 me-2">
                            Accept
                          </button>

                          <a
                            class="btn btn-sm btn-danger-soft"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCreateReject"
                            >Reject
                          </a>
                        </div>
                      </div>
                     
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2 mt-2"
                            >
                              Accepted
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-3 rounded-2"
                              >
                                <div class="typing d-flex align-items-center">
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                  </div>
              
                  <div
                    class="fade tab-pane h-100"
                    id="chat-2"
                    role="tabpanel"
                    aria-labelledby="chat-2-tab"
                  >
                  
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">aditya Upadhyay</h6>
                          <div class="small text-secondary">
                            <i class="fa-solid fa-circle text-danger me-1"></i
                            >Last active 2 days
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                      
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                      
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown2"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown2"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                    
                      </div>
                    </div>
                 
                    <hr />
                
                    <div
                      class="chat-conversation-content overflow-auto custom-scrollbar"
                    >
                  
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                   
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Night signs creeping yielding green Seasons.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Creeping earth under was You're without which
                              image.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i
                                  class="fa-solid fa-check-double text-info"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/aditya.png"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Won't that fish him whose won't also.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Moving living second beast Over fish place beast.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">5:35 PM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="text-center small my-2">2 New Messages</div>
                     
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Thing they're fruit together forth day.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Fly replenish third to said void life night
                                yielding for heaven give blessed spirit.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                 
                  <div
                    class="fade tab-pane h-100"
                    id="chat-3"
                    role="tabpanel"
                    aria-labelledby="chat-3-tab"
                  >
                 
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/myimages/girl.png"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">Browny Knight</h6>
                          <div class="small text-secondary">
                            Last active a month
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                      
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                     
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown3"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown3"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                      
                      </div>
                    </div>
                  
                    <hr />
                  
                    <div
                      class="chat-conversation-content overflow-auto custom-scrollbar"
                    >
                  
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                     
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Hello
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Made and For saw Creepeth place shall Moving.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i
                                  class="fa-solid fa-check-double text-info"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/12.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/12.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-3 rounded-2"
                              >
                                <div class="typing d-flex align-items-center">
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
               
                  <div
                    class="fade tab-pane h-100"
                    id="chat-4"
                    role="tabpanel"
                    aria-labelledby="chat-4-tab"
                  >
                    
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-two">
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/01.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/02.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block">
                          <h6 class="mb-0 mt-1">Dennis, Ortiz</h6>
                          <div class="small text-secondary">
                            Ortiz: I'm adding jhon
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                       
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                       
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown4"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown4"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                      
                      </div>
                    </div>
                 
                    <hr />
                   
                    <div
                      class="chat-conversation-content overflow-auto custom-scrollbar"
                    >
                     
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                     
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Firmament day life also let subdue.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Yes
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Hold do at tore in park feet near my case.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i
                                  class="fa-solid fa-check-double text-info"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
               
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                78958642-589
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Void Fowl greater upon moveth bring gathering.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div
                              class="bg-primary text-white p-2 px-3 rounded-2"
                            >
                              Kind had stars cattle Good fill divide Multiply.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">5:35 PM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div class="text-center small my-2">2 New Messages</div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                She'd Darkness beast don't deep One above.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Signs creepeth replenish which fourth may
                                Seasons.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
              
                  <div
                    class="fade tab-pane h-100"
                    id="chat-5"
                    role="tabpanel"
                    aria-labelledby="chat-5-tab"
                  >
                   
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-three">
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/03.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/04.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/05.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block">
                          <h6 class="mb-0 mt-1">Knight, Billy, Bryan</h6>
                          <div class="small text-secondary">
                            Billy: Thank you!
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                     
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                    
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown5"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown5"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                     
                      </div>
                    </div>
              
                    <hr />
                   
                    <div
                      class="chat-conversation-content overflow-auto custom-scrollbar"
                    >
                    
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                 
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Night signs creeping yielding green Seasons.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Won't that fish him whose won't also.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="text-center small my-2">2 New Messages</div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Thing they're fruit together forth day.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Fly replenish third to said void life night
                                yielding for heaven give blessed spirit.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
               
                  </div>
               
                  <div
                    class="fade tab-pane h-100"
                    id="chat-6"
                    role="tabpanel"
                    aria-labelledby="chat-6-tab"
                  >
                  
                    <div
                      class="d-sm-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-four">
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/06.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/07.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/08.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/images/avatar/placeholder.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block overflow-hidden">
                          <h6 class="mb-0 mt-1 text-truncate w-75">crew</h6>
                          <div class="small text-secondary">
                            You: Okay thanks, everyone.
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                       
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                      
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown6"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown6"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark
                                as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i
                                >View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                                chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i
                                >Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                    
                      </div>
                    </div>
                
                    <hr />
                 
                    <div class="chat-conversation-content custom-scrollbar">
                    
                      <div class="text-center small my-2">
                        Jul 16, 2022, 06:15 am
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Applauded no discovery in newspaper allowance am
                                northward😍
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Please find the attached updated files
                              </div>
                          
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                How promotion excellent 🥰 curiosity yet
                                attempted happiness Gay prosperous impression.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div class="text-center small my-2">2 New Messages</div>
                    
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Traveling alteration impression six all
                                uncommonly Chamber hearing inhabit joy highest
                                privat.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/06.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-2 px-3 rounded-2"
                              >
                                Attempted happiness Gay prosperous impression.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/images/avatar/07.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div
                                class="bg-light text-secondary p-3 rounded-2"
                              >
                                <div class="typing d-flex align-items-center">
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                  <div class="dot"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                 
                </div>
              </div>
              <div class="card-footer">
                <div class="d-sm-flex align-items-end">
                  <textarea
                    class="form-control mb-sm-0 mb-3"
                    data-autoresize
                    placeholder="Type a message"
                    rows="1"
                  ></textarea>
                  <button class="btn btn-sm btn-danger-soft ms-sm-2">
                    <i class="fa-solid fa-face-smile fs-6"></i>
                  </button>
                  <button class="btn btn-sm btn-secondary-soft ms-2">
                    <i class="fa-solid fa-paperclip fs-6"></i>
                  </button>
                  <button class="btn btn-sm btn-primary ms-2">
                    <i class="fa-solid fa-paper-plane fs-6"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
     
    </main>

    </>
  )
}

export default MessageMentorFeed