import React from "react";

export const AcountSetting = () => {
  return (
    <>
      <div class="tab-pane show active fade" id="nav-setting-tab-1">
        {/* <!-- Account settings START --> */}
        <div class="card mb-4">
          {/* <!-- Title START --> */}
          <div class="card-header border-0 pb-0">
            <h1 class="h5 card-title mb-0">Account Settings</h1>
          </div>
          {/* <!-- Card header START --> */}
          {/* <!-- Card body START --> */}
          <div class="card-body">
            {/* <!-- Form settings START --> */}

            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center  px-0 py-3">
                <div class="me-2">
                  <h6 class="mb-0">Feed Preferences</h6>
                </div>

                <div class="form-check form-switch">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                <div class="me-2">
                  <h6 class="mb-0">Auto Play Videos</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="NotiSwitchCheckChecked"
                    checked
                  />
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                <div class="me-2">
                  <h6 class="mb-0">Show </h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="NotiSwitchCheckChecked"
                    checked
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- Card body END --> */}
        </div>
        {/* <!-- Account settings END --> */}

        {/* <!-- Change your password START --> */}

        {/* <!-- Card END --> */}
      </div>
    </>
  );
};
