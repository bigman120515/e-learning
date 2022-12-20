import React from "react";


export const MyProfiletoLearn =()=>{

  return
  (
 
    <>
        <div className="card">
        {/* <!-- Card header START --> */}
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Skills</h5>
          <a
            className="btn btn-sm btn-primary-soft"
            
            data-bs-toggle="modal"
            data-bs-target="#modalCreateAlbum"
            >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </a>
        </div>
        {/* <!-- Card header END --> */}
        {/* <!-- Card body START --> */}
        <div className="card-body position-relative pt-0">
          {/* <!-- Experience item START --> */}
        
           
              <div className="d-flex justify-content-between align-items-start d-block mt-2" >
                {/* <!-- Info --> */}
                <div>
                  <h6 className="card-title mb-0">
                    <a href="#!">  </a>
                  </h6>
                 
                </div>
                {/* <!-- <button className="btn btn-danger-soft me-2" type="button"> <i className="bi bi-pencil-fill pe-1"></i> Edit </button> --> */}
                <Link
                
                  className="btn btn-sm btn-primary-soft btn-xs btn_edit ms-2"
                  to=""
                 
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateAlbumEdit"
                >
                  <i className="bi bi-pencil-fill pe-1"></i> Edit{" "}
                </Link>
              </div>
            
          
          {/* <!-- Experience item END --> */}
        </div>
        {/* <!-- Card body END --> */}
      </div>
    

     


      
    </>
 
  );



}
