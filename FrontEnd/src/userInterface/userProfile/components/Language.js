import React from "react";

function Language(props) {
  console.log(props.userData.data.language)
  let language=props.userData.data.language;
  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          {/* <!-- Card header START --> */}
          <div className="card-header d-flex justify-content-between border-0">
            <h5 className="card-title">Language</h5>
          </div>
          {/* <!-- Card header END --> */}
          {/* <!-- Card body START --> */}
          {language.map((val,ind)=>{
            return(
          <div className="card-body position-relative pt-0" key={ind}>
            {/* <!-- Experience item START --> */}
            <div className="d-flex">
              {/* <!-- Info --> */}
              <div >
                <h6 className="card-title mb-0">
                  <a href="#!"> {val.language} </a>
                </h6>
              </div>
            </div>

            <div className="d-flex mt-3">
              {/* <!-- Info --> */}
              <div>
                {/* <h6 className="card-title mb-0">
                  <a href="#!"> {val.proficient} </a>
                </h6> */}
              </div>
            </div>
          </div>
          );
          })}
          {/* <!-- Card body END --> */}
        </div>
      </div>
    </>
  );
}

export default Language;
