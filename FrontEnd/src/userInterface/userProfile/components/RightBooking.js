import React from "react";

function RightBooking() {
  return (
    <>
      <div className="col-md-6 col-lg-12">
        <div className="card ">
          <div className="card-header d-flex justify-content-between border-0">
            <h5 className="card-title mb-0">1-on-1 Sessions</h5>
          </div>
          <div className="card-body position-relative pt-2 pb-2">
            <div className="d-flex justify-content-between">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!" className="text-green">
                    {" "}
                    Availability :
                  </a>
                </h6>
              </div>
              <p>Mon, Wed</p>
            </div>
            <div className="d-flex justify-content-between">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!" className="text-green">
                    Timing :{" "}
                  </a>
                </h6>
              </div>
              <p>5-6 PM, EST</p>
            </div>
            <div className="d-flex justify-content-between">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!" className="text-green">
                    Skills or Topics :{" "}
                  </a>
                </h6>
              </div>

              <select
                name="Javascript"
                id="Javascript"
                className="user_proflie_select"
              >
                <option value="Python">Python</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
              </select>
            </div>
            <div className="d-flex justify-content-between mt-3">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0 ">
                  <a href="#!" className="text-green">
                    Pricing :{" "}
                  </a>
                </h6>
              </div>

              <p>45 $ </p>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn  btn-purple btn-primary-soft">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBooking;
