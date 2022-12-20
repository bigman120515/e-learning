import React from 'react'
import CardSession from './CardSession'

const LearningSession = () => {
  return (
    <>
    <div className='tab-pane show active fade' id="nav-session-tab-1">
          <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
                            <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
                            <a href="#!" class="btn btn-xs btn-success mt-2 mt-lg-0 ms-lg-4">View event</a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>   

            {/* tabbing  */}
            <div class="card h-100 mt-4">
       
              <div
                class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0"
              >
                <h1 class="h4 card-title">My Sessions</h1>
          
              </div>
           
              <div class="card-body">
              
                <ul
                  class="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Today
                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                      This week
                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Upcoming
                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Completed
                    </a>
                            </li>
                            </ul>
                          
                            <div class="tab-content mb-0 pb-0">
                              
                                <div class="tab-pane fade show active" id="tab-1">
                                    <div class="row g-4">
                                        <div class="col-sm-6 col-xl-4">
                                           <CardSession />
                                           
                                        </div>
                                        <div class="col-sm-6 col-xl-4">
                                       
                                        <CardSession />
                                         
                                        </div>
                                        <div class="col-sm-6 col-xl-4">
                                          
                                        <CardSession />
                                         
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="tab-pane fade" id="tab-2">
                                    <div class="row g-4">
                                        <div class="col-sm-6 col-xl-4">
                                        <CardSession />
                                        </div>
                                        <div class="col-sm-6 col-xl-4">
                                        <CardSession />
                                           
                                        </div>
                                    </div>
                                </div>
                            

                             
                                <div class="tab-pane fade" id="tab-3">
                                    <div class="row g-4">
                                        <div class="col-sm-6 col-xl-4">
                                         
                                        <CardSession />
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="tab-pane fade" id="tab-4">
                                    <div class="row g-4">
                                        <div class="col-sm-6 col-xl-4">
                                         
                                        <CardSession />
                                     
                                        </div>
                                        <div class="col-sm-6 col-xl-4">
                                            
                                        <CardSession />
                                        
                                        </div>
                                    </div>
                                </div>
                              

                               
                                <div class="tab-pane fade text-center" id="tab-5">
                             
                                    <div class="my-sm-5 py-sm-5">
                                        <i class="display-1 text-muted bi bi-calendar2-event">
                      </i>
                                        <h4 class="mt-2 mb-3 text-body">No events found</h4>
                                        <button class="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents">
                        Click here to add
                      </button>
                                    </div>
                                </div>
                             

                           
                                <div class="tab-pane fade text-center" id="tab-6">
                              
                                    <div class="my-sm-5 py-sm-5">
                                        <i class="display-1 text-muted bi bi-calendar2-event">
                      </i>
                                        <h4 class="mt-2 mb-3 text-body">No events found</h4>
                                        <button class="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents">
                        Click here to add
                      </button>
                                    </div>
                                </div>
                          
                            </div>
                          
                        </div>
                 
                    </div>
                    </div>
    </>
  )
}

export default LearningSession