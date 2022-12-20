import React from "react";

function Experiance(props) {
  console.log(props.userData.data.experience);
  let experience = props.userData.data.experience;
  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between border-0">
            <h5 className="card-title">Experience</h5>
          </div>

          <div className="card-body position-relative pt-0">
            {/* <!-- Experience item START --> */}
            {experience.map((val, ind) => {
              return (
                <div className="d-flex">
                  {/* <!-- Info --> */}

                  <div key={ind} >
                    <h6 className="card-title mb-1">
                      <a href="#!"> {val.jobTitle} </a>
                    </h6>
                    <p className="mb-0 small">
                      {" "}
                      <b>{val.companyName}</b>{" "}
                    </p>
                    {/* <p className="mb-1 small">May 2018 - Present </p>
                    <p className="mb-0 small">
                      Microsoft is a technology company offering
                      transformational products and solutions in AdTech
                    </p> */}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- Card body END --> */}
        </div>
      </div>
    </>
  );
}

export default Experiance;
