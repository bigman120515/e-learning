import React from 'react'

function Filter() {
  return (
    <>
         <div className='filter_sect'>
         <div class="card">
                            <div class="card-body">


                                <div class="mx-auto     rounded">
                                 
                                    <form class="align-items-end  d-flex  display_block gap-4">
                                     
                                        <div class="mb-2 mt-2 ">

                                            <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                  <option value="category">Location</option>
                                  <option value="comedy">Delhi</option>
                                  <option value="dance">Noida</option>
                                  <option value="family">Punjab</option>
                                  <option value="music">Chandigarh</option>
                                 
                                </select>
                                        </div>
                                    
                                        <div class="mb-2 mt-2 ">

                                            <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                  <option value="category">Price</option>
                                  <option value="comedy">1000$</option>
                                  <option value="dance">2000$</option>
                                  <option value="family">500$</option>
                                  <option value="music">100$</option>
                       
                                </select>
                                        </div>
                                     
                                        <div class="mb-2 mt-2">

                                            <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                  <option value="category">Time</option>
                                  <option value="comedy">8:00</option>
                                  <option value="dance">10:00</option>
                                  <option value="family">12:00</option>
                                  <option value="music">3:00</option>
                                
                                </select>
                                        </div>
                                        <div class="mb-2 mt-2">

                                            <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                  <option value="category">Sessions</option>
                                  <option value="comedy">1-to-1 Sessions</option>
                                  <option value="dance">Group Sessions</option>
                                  
                                
                                </select>
                                        </div>
                                        <div class="mb-2 mt-2 ms-auto">

                                            <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                  <option value="category">Short By Preference <i class="fa fa-filter ms-1"></i></option>
                                  <option value="comedy">Session</option>
                                  <option value="dance">Group</option>
                                  
                                
                                </select>
                                        </div>



                                    </form>

                                 
                                </div>
                            </div>

                        </div>

         </div>
    </>
  )
}

export default Filter