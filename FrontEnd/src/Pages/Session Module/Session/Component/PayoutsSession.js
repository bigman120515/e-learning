import React from 'react'

const PayoutsSession = () => {
  return (
    <>
      <div class="tab-pane fade" id="nav-session-tab-4">
                         
                            <div class="card">
                            
                                <div class="tab-pane active show fade" id="nav-Payouts">
                                    <div class="col-md-12 col-lg-12 vstack gap-4">
                                        <div class="card h-100">
                                            <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
                                                <h5 class="card-title">Payouts</h5>
                                            </div>
                                            <div class="col-lg-12 mx-auto">
                                                <div class="card-body">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div>
                                                                <h6 class="mb-3 card-title">Summary:</h6>
                                                            </div>

                                                            <div class="d-flex align-items-center justify-content-between">
                                                                <div class="d-flex align-items-center gap-3">
                                                                    <h6 class="mb-0">Payouts:</h6>
                                                                    <p class="mb-0 text-black">$447</p>
                                                                </div>
                                                                <div class="d-flex align-items-center gap-3">
                                                                    <h6 class="mb-0">Paid:</h6>
                                                                    <p class="mb-0 text-black">$447</p>
                                                                </div>
                                                                <div class="d-flex align-items-center gap-3">
                                                                    <h6 class="mb-0">Balance:</h6>
                                                                    <p class="mb-0 text-black">$447</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                             
                                                <ul class="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                                                    <li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#tabPayouts"> Payouts </a> </li>
                                                    <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tabPayments"> Payments </a> </li>

                                                </ul>
                                            
                                                <div class="tab-content mb-0 pb-0">
                                               
                                                    <div class="tab-pane fade show active" id="tabPayouts">
                                                        <div class="row g-2">
                                                            <div class="d-flex justify-content-end">
                                                                <select class="">
                                                                    <option>This Month</option>
                                                                    <option value="This">This Month</option>
                                                                    <option value="Next">Next Month</option>
                                                                    <option value="Prev">Prev Month</option>
                                                                </select>
                                                            </div>
                                                            <div class="This">
                                                                <div class="card">
                                                                    <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0 mb-0 mt-0">
                                                                        <h5 class=" mb-0 card-title">1-on-1 Sessions</h5>
                                                                        <h5 class="mb-0 text-green">  $250</h5>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <h6 class="mb-2"> Cloud Computing </h6>
                                                                        <p class="mb-1"> <i class="bi bi-calendar-check pe-1"></i>Tue, 6 Sep 2022 at 05:30 AM </p>
                                                                        <p class="mt-2 mb-0">
                                                                            <i class="fa-regular fa-user"></i> Rabia Parton
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="card mt-4">
                                                                    <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0 mb-0 mt-0">
                                                                        <h5 class=" mb-0 card-title">1-on-1 Sessions</h5>
                                                                        <h5 class="mb-0 text-green">  $250</h5>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <h6 class="mb-2">Cloud Computing </h6>
                                                                        <div class="d-flex justify-content-between mb-1">
                                                                            <p class="mb-0"> <i class="bi bi-calendar-check pe-1"></i>Tue, 6 Sep 2022 at 05:30 AM </p>
                                                                            <p class="mb-0">10 Participants</p>
                                                                        </div>
                                                                        <p class="mt-2 mb-0">
                                                                            <i class="fa-regular fa-user"></i> Rabia Parton
                                                                        </p>
                                                                    </div>
                                                                </div>


                                                                <div class=" d-flex justify-content-end mb-3 mt-3">
                                                                    <h5 class="mb-0"><span class="me-2"><b>Total:</b></span> <span class="text-green">$500</span> </h5>
                                                                </div>

                                                            </div>
                                                            <div class="Next boxMonth">
                                                                <h6>No Data</h6>

                                                            </div>
                                                            <div class="Prev boxMonth">
                                                                <h6>No Data</h6>

                                                            </div>

                                                        </div>
                                                    </div>
                                            
                                                    <div class="tab-pane fade" id="tabPayments">
                                                        <div class="row g-2">
                                                            <div class="card mt-4">
                                                                <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0 mb-0 mt-0">
                                                                    <h5 class=" mb-0 card-title">06 Sep 2022</h5>
                                                                    <h5 class="mb-0 text-green">$1000</h5>
                                                                </div>
                                                                <div class="card-body">                                                                   
                                                                    <div class="d-flex gap-3 mb-2">
                                                                        <p class="mb-0 "><b> Paid By:</b></p>
                                                                        <p class="mb-0">Online (Paypal)</p>
                                                                    </div>
                                                                    <div class="d-flex gap-3 ">
                                                                        <p class="mb-0 "><b>Transaction ID:</b></p>
                                                                        <p class="mb-0">1234-5678-9012-3456</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card mt-4">
                                                                <div class="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0 mb-0 mt-0">
                                                                    <h5 class=" mb-0 card-title">06 Sep 2022</h5>
                                                                    <h5 class="mb-0 text-green">$1000</h5>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="d-flex gap-3 mb-2">
                                                                        <p class="mb-0 "><b> Paid By:</b></p>
                                                                        <p class="mb-0">Online (Paypal)</p>
                                                                    </div>
                                                                    <div class="d-flex gap-3 ">
                                                                        <p class="mb-0 "><b>Transaction ID:</b></p>
                                                                        <p class="mb-0">1234-5678-9012-3456</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class=" d-flex justify-content-end mb-0 mt-3">
                                                                <h5 class="mb-3"><span class="me-2"><b>Total:</b></span> <span class="text-green">$2000</span> </h5>
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
    </>
  )
}

export default PayoutsSession