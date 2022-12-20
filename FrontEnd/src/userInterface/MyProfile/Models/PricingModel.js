import React from 'react'

export const PricingModel = () => {
  return (
    <>
        <div
        class="modal fade"
        id="modalCreatePrice"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateTime">
                Pricing
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
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          {/* <!-- Info --> */}
                          <div>
                            <h6 class="card-title mb-0">
                              <a href="#!"> Time : </a>
                            </h6>
                          </div>
                          <select
                            id="myselection"
                            class="user_proflie_select form-group"
                          >
                            <option>All Day</option>
                            <option value="Sun">Sunday</option>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-12 mt-2">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          {/* <!-- Info --> */}
                          <div>
                            <h6 class="card-title mb-0">
                              <a href="#!"> Day : </a>
                            </h6>
                          </div>
                          <select id="myselection" class="user_proflie_select">
                            <option>Monday</option>
                            <option value="Sun">Sunday</option>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-12 mt-2">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          {/* <!-- Info --> */}
                          <div>
                            <h6 class="card-title mb-0">
                              <a href="#!"> From Time </a>
                            </h6>
                          </div>
                          <label for="time mb-2"></label>
                          <input
                            type="time"
                            class="user_proflie_select"
                            id="time"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 mt-2">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          {/* <!-- Info --> */}
                          <div>
                            <h6 class="card-title mb-0">
                              <a href="#!"> To Time </a>
                            </h6>
                          </div>
                          <label for="timeTo mb-2"></label>
                          <input
                            type="time"
                            class="user_proflie_select"
                            id="timeTo"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 mt-2">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          {/* <!-- Info --> */}
                          <div>
                            <h6 class="card-title mb-0">
                              <a href="#!"> Time Zone </a>
                            </h6>
                          </div>
                          <select
                            id="myselection"
                            class="user_proflie_select form-group"
                          >
                            <option>EST</option>
                            <option value="Sun">Kolkata 5:30 GMT</option>
                            <option value="Mon">Kolkata 5:30 GMT</option>
                            <option value="Tue">Mumbai 5:30 GMT</option>
                            <option value="Wed">USA 12:30 UMT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success-soft save_btn btn-purple btn-sm "
                  >
                    Add
                  </button>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
          </div>
        </div>
      </div>
    </>
  )
}
