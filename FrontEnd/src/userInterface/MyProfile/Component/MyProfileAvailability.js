import React from "react";

export const MyProfileAvailability = () => { 
 
 
 
 
 
  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card mb-4">
          {/* <!-- <div className="card-header d-flex justify-content-between border-0">
                                    <h6 className="card-title mb-0">1-on-1 Sessions</h6>
                                </div> --> */}
          <div className="card-header border-0 pb-0">
            <h5 className="card-title mt-0 mb-0 text-purple">Availability :</h5>
          </div>
          {/* <!-- Card body START --> */}
          <div className="card-body position-relative">
            <div className="d-flex justify-content-between align-items-center mb-3">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!"> Day : </a>
                </h6>
              </div>
              <select id="myselection" className="user_proflie_select">
                <option>All</option>
                <option value="One">Custom</option>
              </select>
            </div>

            <div id="showOne" className="myDiv">
              <div className="d-flex justify-content-between align-items-center  ">
                {/* <!-- Info --> */}
                <div>
                  <p className="mb-0">Custom </p>
                </div>

                <div className="day_section">
                  <a href="">S</a>
                  <a href="">M</a>
                  <a href="">T</a>
                  <a href="">W</a>
                  <a href="">T</a>
                  <a href="">F</a>
                  <a href="">S</a>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!"> Time : </a>
                </h6>
              </div>

              <a
                className="btn btn-sm btn-primary-soft"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateTime"
              >
                {" "}
                <i className="fa-solid fa-plus"></i>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              {/* <!-- Info --> */}
              <div>
                <p>
                  <small>All day</small>
                </p>
              </div>
              <p>
                <small>05:00-06 Pm, EST</small>
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Info --> */}
              <div>
                <p>
                  <small>Mon</small>
                </p>
              </div>
              <p>
                <small>08:00-10:30 Pm, EST</small>
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              {/* <!-- Info --> */}
              <div>
                <h6 className="card-title mb-0">
                  <a href="#!"> Session time : </a>
                </h6>
              </div>

              <select
                name="Cloud Architect"
                id="Cloud Architect"
                className="user_proflie_select"
              >
                <option value="Cloud Architect">30 Min</option>
                <option value="Cloud Architect">60 Min</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="modalCreateTime"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateTime">
                Add Time
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <!-- Form START --> */}
              <form>
                <div class="add_language">
                  <form class="mt-3">
                    <label class="mb-2">Time</label>
                    <select id="myselection1" class="form-select">
                      <option>All</option>
                      <option value="One1">Custom</option>
                    </select>
                    <div id="showOne1" class="myDiv1 mt-3">
                      <label class="mb-2">Day</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sun</option>
                        <option value="1">Mon</option>
                        <option value="2">Tues</option>
                        <option value="3">Thurs</option>
                      </select>
                    </div>
                    <div class="form-group mt-3">
                      <label for="InputDate">From Date</label>
                      <input type="time" class="form-control" id="InputDate" />
                    </div>
                    <div class="form-group mt-3">
                      <label for="InputDate1">To Date</label>
                      <input type="time" class="form-control" id="InputDate1" />
                    </div>
                    <label class="mb-0 mt-3">TimeZone</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option>EST</option>
                      <option value="Sun">Kolkata 5:30 GMT</option>
                      <option value="Mon">Kolkata 5:30 GMT</option>
                      <option value="Tue">Mumbai 5:30 GMT</option>
                      <option value="Wed">USA 12:30 UMT</option>
                    </select>
                  </form>
                </div>

                {/* <!-- Info --> */}

                {/* <!-- Modal footer --> */}
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success-soft save_btn btn-purple "
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- Info --> */}
        </div>

        {/* <!-- Info --> */}
      </div>
    </>
  );
};
