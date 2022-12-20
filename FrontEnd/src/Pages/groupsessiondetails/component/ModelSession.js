import React from 'react'
import { Link } from 'react-router-dom'

const ModelSession = () => {
  return (
    <>
<div class="modal fade" id="modalGroupsessionMentor" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   
                    <div class="mentor_payout">
                        <div class="card_inner_payout">
                            <h5 class="mb-3">Learning Python for Data Analysis and Visualization</h5>
							<ul class="list-unstyled mb-3">
								<li class="d-flex justify-content-between mb-3"> 
									<strong class="w-150px">Mentor :</strong> 
									<span class="text-end">Ravia Parton</span>
								</li>
								<li class="d-flex justify-content-between mb-3"> 
									<strong class="w-150px">Date & Time :</strong> 
									<span class="text-end">03 Oct. 2022 10:00 Am (EST)</span>
								</li>
								<li class="d-flex justify-content-between mb-3"> 
									<strong class="w-150px">Session Fee :</strong> 
									<span class="text-end">34.00/Session</span>
								</li>								
							</ul>
                        </div>
                        <div class="mt-3 px-0">
						<label for="PromoCode" class="">Promo Code</label>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div class="">
                                   <div class="input-group ">
										<input type="text" class="form-control"  placeholder="Enter Promo Code"/>
										<Link to="#" class="input-group-append apply_now_btn">
											<span class="input-group-text" id="basic-addon2">Apply Now</span>
										</Link>
									</div>							
                                </div>
								 <div class="">
                                <Link class="btn btn-sm mb-0 mt-1 text-purple " to="#"><b>Cancel</b></Link>
								 </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <h5>Total</h5>
                            <h5><span class="text-green">$34.00</span></h5>
                        </div>                        
                    </div>
                   
                </div>
				<div class="modal-footer">
					<button type="button" class="btn btn-success-soft w-100">Enroll</button>
					<button type="button" class="btn btn-danger-soft w-100" data-bs-dismiss="modal"> Cancel</button>
					<div class="mt-3">
							<p >
                           All purchases are backed by our <Link to="#">Satisfaction Guarantee</Link> . By enrolling, you agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link> .
                        </p>
                        <p>This class has Link Limited Refund Policy. <Link to="#">Learn More</Link></p>
				</div>
				</div>
				
            </div>
        </div>
  </div>

  <div class="modal fade" id="modalGroupsessionPayment" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
             
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  
                    <div class="mentor_payout">
                        <div class="card_inner_payout">
                            <h5 class="mb-3">Learning Python for Data Analysis and Visualization</h5>
							<ul class="list-unstyled mb-3">
								<li class="d-flex justify-content-between mb-3"> 
									<strong class="w-150px">Mentor :</strong> 
									<span class="text-end">Ravia Parton</span>
								</li>
								<li class="d-flex justify-content-between mb-3"> 
									<strong class="w-150px">Date & Time :</strong> 
									<span class="text-end">03 Oct. 2022 10:00 Am (EST)</span>
								</li>													
							</ul>	
                        </div>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="CardNo" class="mb-2 mt-3">Card Number</label>
                                        <input type="text" class="form-control" id="CardNo" placeholder="000 000 000"/>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="form-group mt-4">
                                        <label for="Expiration" class="mb-2">Expiration</label>
                                        <input type="date" class="form-control" id="Expiration"/>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="form-group mt-4">
                                        <label for="CVC" class="mb-2">CVC</label>
                                        <input type="text" class="form-control" id="CVC"/>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="d-flex mb-0  cvc_img">
                                        <div><img src="assets/images/myimages/cvc.png" alt="cvc" class="me-1"/></div>
                                        <p class="mb-0 ms-1"> <small>Last 3 digit printred on the back of card.</small></p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="CardNo" class="mb-2 mt-3">Zip</label>
                                        <input type="text" class="form-control" id="CardNo" placeholder="000 000 000"/>

                                    </div>


                                </div>
                                <div class="form-check mt-3 ms-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Save this card faster payments.
                                    </label>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
              
				<div class="modal-footer">
					<button type="button" class="btn btn-success-soft w-100" data-bs-dismiss="modal">Pay 65 $</button>
					<button type="button" class="btn btn-danger-soft w-100">Go back</button>
				</div>
		
            </div>
				
		</div>
    </div>

    </>
  )
}

export default ModelSession