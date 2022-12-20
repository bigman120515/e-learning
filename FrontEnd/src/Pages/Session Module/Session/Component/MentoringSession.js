import React from 'react'
import CardSession from './CardSession';
const MentoringSession = () => {
  return (
    <>
    <div class="tab-pane fade" id="nav-session-tab-2">
    <div class="col-md-12 col-lg-12 vstack gap-4">
                                <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
                                    <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
                                    <a href="#!" class="btn btn-xs btn-success mt-2 mt-lg-0 ms-lg-4">View event</a>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>

                                <div class="card h-100">
                                    <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
                                        <h5 class=" card-title">Mentor's Sessions</h5>
                                   
                                        <a class="btn btn-primary-soft btn-sm" href="#" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i class="fa-solid fa-plus pe-1"></i> Create group session</a>
                                    </div>
                                    <div class="card-body">
                                      
                                        <ul class="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                                            <li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#tab-1"> Today </a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-2"> This week </a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-3"> Upcoming </a> </li>
                                            <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-4"> Completed </a> </li>

                                        </ul>
                                      
                                        <div class="tab-content mb-0 pb-0">
                                         
                                            <div class="tab-pane fade show active" id="tab-1">
                                                <div class="row g-2">
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
                                                <div class="row g-2">
                                                    <div class="col-sm-6 col-xl-4">
                                                 
                                                    <CardSession />
                                                    
                                                    </div>
                                                    <div class="col-sm-6 col-xl-4">
                                                
                                                    <CardSession />
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div class="tab-pane fade" id="tab-3">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-xl-4">
                                                    <CardSession />
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div class="tab-pane fade" id="tab-4">
                                                <div class="row g-2">
                                                    <div class="col-sm-6 col-xl-4">
                                                     
                                                    <CardSession />
                                                    </div>
                                                    <div class="col-sm-6 col-xl-4">
                                                    <CardSession />
                                                  
                                                    </div>
                                                </div>
                                            </div>
                                      
                                        </div>
                                     
                                    </div>
                                </div>

    </div>
    </div>

    {/* model */}
    <div class="modal fade" id="modalCreateEvents" tabindex="-1" aria-labelledby="modalLabelCreateEvents"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
           
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabelCreateEvents">Create Group Session</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            
                <div class="modal-body">
                
                    <form class="g-4">
                   <row>
                        <div class="col-12 mb-2">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                      
                        <div class="col-12 mb-2">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" rows="2" placeholder=""></textarea>
                        </div>
                        </row>
                    


                        <div class="col-12 mb-2">
                            <label for="form-label mb-0">Skills or Topics</label>
                            <div class=" card mt-2 p-3">
                                <div class=" mt-2">
                                    <ul class="list-inline mb-0 d-flex flex-wrap gap-2">
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Data analysis <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Visualization <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Web development <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Robotics <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Visualization <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Visualization <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 mb-2">
                            <label for="form-label mb-0">Languages</label>
                            <div class=" card mt-2 p-3">
                                <div class=" mt-2">
                                    <ul class="list-inline mb-0 d-flex flex-wrap gap-2">
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                English <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                Hindi <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item m-0">
                                            <a class="btn btn-radius btn-outline-pur btn-sm" href="#">
                                                German <i class="fa fa-xmark ms-2"></i>
                                            </a>
                                        </li>



                                    </ul>




                                </div>


                            </div>

                        </div>

                        <div class="col-lg-6 mb-2">
                            <label for="form-label mb-0">Price</label>
                            <select class="form-select mb-0" aria-label="Default select example">

                                <option selected>Select</option>
                                <option value="1">Free</option>
                                <option value="2">Paid</option>
                            </select>
                        </div>
                        <div class="col-lg-6 mb-2">
                            <label class="form-label">Max Participant</label>
                            <input type="text" class="form-control" placeholder=""/>
                        </div>


                        <div class="row g-4 mt-sm-2">
                            <div class="col-sm-3">
                                <label class="form-label">Date</label>
                                <input type="text" class="form-control flatpickr"/>
                            </div>
                          
                            <div class="col-sm-3">
                                <label class="form-label">Time</label>
                                <input type="text" class="form-control flatpickr" data-enableTime="true"
                                       data-noCalendar="true"/>
                            </div>
                         
                            <div class="col-sm-3">
                                <label class="form-label">Timezone</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">Kolkata 5:30 GMT</option>
                                    <option value="2">Mumbai 6:30 GMT</option>

                                </select>
                            </div>
                        
                            <div class="col-sm-2">
                                <label class="form-label">Duration</label>
                                <input type="text" class="form-control"/>
                            </div>
                        
                            <div class="col-sm-1 ">

                                <a href="#"><i class="fa-solid fa-minus mb-0 mt-5 text-black"></i></a>
                            </div>
                        
                            <div class="col-sm-3">
                                <label class="form-label">Date</label>
                                <input type="text" class="form-control flatpickr"/>
                            </div>
                          
                            <div class="col-sm-3">
                                <label class="form-label">Time</label>
                                <input type="text" class="form-control flatpickr" data-enableTime="true"
                                       data-noCalendar="true"/>
                            </div>
                        
                            <div class="col-sm-3">
                                <label class="form-label">Timezone</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">Kolkata 5:30 GMT</option>
                                    <option value="2">Mumbai 6:30 GMT</option>
                                </select>
                            </div>
                      
                            <div class="col-sm-2">
                                <label class="form-label">Duration</label>
                                <input type="text" class="form-control"/>
                            </div>
                    
                            <div class="col-sm-1 ">

                                <a href=""> <i class="fa-solid fa-plus mb-0 mt-5 text-black"></i></a>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Cover Image</label>
                                <input type="file" class="form-control"/>

                            </div>
                        </div>




                    </form>
              
                </div>
               
                <div class="modal-footer d-flex justify-content-end">
                    <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
                        Save as
                        Draft
                    </button>
                    <button type="button" class="btn btn-success-soft">Publish</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default MentoringSession;