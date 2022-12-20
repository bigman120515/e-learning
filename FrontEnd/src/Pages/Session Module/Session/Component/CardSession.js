import React from 'react'
import { Link } from 'react-router-dom'
import carddata from './CardData'

const CardSession = () => {
    
    
  return (
    <>
      <div class="card h-70">
                                                            <div class="position-relative">
                                                                <img class="img-fluid rounded-top" src="assets/images/myimages/tab1.png" alt=""/>
                                                                <div class="badge bg-purple text-white mt-2 me-2 position-absolute top-0 end-0">
                                                                    {carddata[0].join}
                                                                </div>
                                                            </div>
                                                         
                                                            <div class="card-body position-relative pt-0">
                                                             
                                                                <h6 class="mt-3">
                                                                    <Link to="/groupsessiondetails">
                                                                        Learn Python: The Complete Python Programming
                                                                    </Link>
                                                                </h6>
                                                              
                                                                <p class="mb-0 small"> <i class="bi bi-calendar-check pe-1"></i>Tue, 6 Sep 2022 at 05:30 AM </p>
                                                                <p class="small mt-2 mb-0">
                                                                    <i class="fa-regular fa-user"></i> Rabia Parton
                                                                </p>
                                                             

                                                            </div>
                                                         
                                                        </div>


                                                        
    </>
  )
}

export default CardSession