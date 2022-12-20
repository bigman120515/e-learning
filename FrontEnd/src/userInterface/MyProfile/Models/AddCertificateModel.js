import React from "react";

export const AddCertificateModel = () => {
  return (
    <>
      <div
        class="modal fade"
        id="modalCreateCertifiction"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCertifiction">
                Add Certificate
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
                <div class="row">
                  <div class=" col-lg-12">
                    <label class="form-label">Name*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value=""
                    />
                  </div>
                  <div class=" col-lg-12 mt-3">
                    <label class="form-label">Issuing organization*</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value=""
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label for="form-label">Issue Date</label>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected>Month</option>
                      <option value="1">Jan</option>
                      <option value="2">Feb</option>
                      <option value="3">March</option>
                    </select>
                  </div>

                  <div class=" col-lg-6 mt-5">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Year</option>
                      <option value="1">2001</option>
                      <option value="2">2003</option>
                      <option value="3">2004</option>
                    </select>
                  </div>

                  <div class="col-lg-12 mt-3">
                    <div class="mb-3">
                      <label class="form-label">Credential ID</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Credential URL</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-success-soft save_btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
