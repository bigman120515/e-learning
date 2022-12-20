import React from "react";


const MyProfileCertificationLearner =()=>{

 return(
    <>
         <div className="col-sm-6 col-lg-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between border-0">
                    <h5 className="card-title">Certification</h5>
                  </div>
                  
                  <div className="card-body position-relative pt-0" >
                    <div className="d-flex">
                      {/* <!-- Info --> */}
                      <div>
                        <h6 className="card-title mb-0">
                          <a href="#!"> Certification </a>
                        </h6>
                        <p className="small mb-0">issuingOrganization </p>
                        {/* <p className="small">Issued by May 2018 </p> */}
                      </div>
                    </div>
                  </div>
                    
                  {/* <!-- Card body END --> */}
                </div>
              </div>
    </>
 )



}
export default MyProfileCertificationLearner