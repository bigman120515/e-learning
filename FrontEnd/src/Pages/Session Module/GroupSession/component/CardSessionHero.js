import React from 'react'

const CardSessionHero = () => {
  return (
    <>
      <section class="pt-5 pb-5 position-relative groupsessiondetail">
            <div class="bg-overlay bg-dark opacity-8"></div>
            
            <div class="container">
                <div class="py-5">
                    <div class="row position-relative">
                        <div class="col-lg-9 mx-auto">
                            <div class="text-center">
                             
                                <h1 class="text-white">All Group Sessions</h1>
                            </div>
                            <div class="mx-auto bg-mode shadow rounded p-4 mt-5">
                              
                                <form class="row align-items-end g-4">
                                  
                                    <div class="col-sm-6 col-lg-3">
                                        <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                                          <option value="Skills or Topics">Skills or Topics</option>
                        <option value="Python">Python</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="AI/ML">AI/ML</option>

                      </select>
                                    </div>
                               
                                    <div class="col-sm-6 col-lg-3">
                                        <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                        <option value="Mentor">Mentor</option>
                        <option value="George">George</option>
                        <option value="Ross Tayler">Ross Tayler</option>
                        <option value="Aditya">Aditya</option>
                        \
                      </select>
                                    </div>
                                  
                                    <div class="col-sm-6 col-lg-3">
                                        <select class="form-select js-choice choice-select-text-none" data-position="bottom" data-search-enabled="false">
                        <option value="Location">Location</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Noida">Noida</option>
                        <option value="Mumbai">Mumbai</option>
                      </select>
                                    </div>
                                 
                                    <div class="col-sm-6 col-lg-3">
                                        <a class="btn btn-primary w-100" href="#">Fillter</a>
                                    </div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CardSessionHero