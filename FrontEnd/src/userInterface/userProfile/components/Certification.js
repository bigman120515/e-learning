import React from 'react'

function Certification(props) {

console.log(props.userData.data.certification)
 let certification=props.userData.data.certification;


  return (
    <>
        <div className="col-sm-6 col-lg-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between border-0">
                    <h5 className="card-title">Certification</h5>
                  </div>
                  {certification.map((val,ind)=>{
                    return(
                  <div className="card-body position-relative pt-0" key={ind}>
                    <div className="d-flex">
                      {/* <!-- Info --> */}
                      <div>
                        <h6 className="card-title mb-0">
                          <a href="#!"> {val.certificateName} </a>
                        </h6>
                        <p className="small mb-0">{val.issuingOrganization} </p>
                        {/* <p className="small">Issued by May 2018 </p> */}
                      </div>
                    </div>
                  </div>
                    );
                  })} 
                  {/* <!-- Card body END --> */}
                </div>
              </div>
    </>
  )
}

export default Certification