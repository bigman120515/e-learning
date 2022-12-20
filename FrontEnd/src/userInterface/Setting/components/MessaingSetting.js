import React from "react";

export const MessaingSetting = () => {
  return (
    <>
      <div class="tab-pane fade" id="nav-setting-tab-4">
        {/* <!-- Communications START --> */}
        <div class="card mb-4">
          {/* <!-- Title START --> */}
          <div class="card-header border-0 pb-0">
            <h5 class="card-title">Messaging privacy settings</h5>
            <p class="mb-0">
              As young ye hopes no he place means. Partiality diminution gay yet
              entreaties admiration. In mention perhaps attempt pointed suppose.
              Unknown ye chamber of warrant of Norland arrived.{" "}
            </p>
          </div>
          {/* <!-- Title START --> */}
          <div class="card-body">
            {/* <!-- Settings style START --> */}
            <ul class="list-group list-group-flush">
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">Enable message request notifications</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked"
                    checked
                  />
                </div>
              </li>
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">Invitations from your network</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked2"
                    checked
                  />
                </div>
              </li>
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">Allow connections to add you on group</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked3"
                  />
                </div>
              </li>
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">Reply to comments</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked4"
                  />
                </div>
              </li>
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">
                    Messages from activity on my page or channel
                  </h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked5"
                    checked
                  />
                </div>
              </li>
              {/* <!-- Message list item --> */}
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div class="me-2">
                  <h6 class="mb-0">Personalise tips for my page</h6>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="msgSwitchCheckChecked6"
                    checked
                  />
                </div>
              </li>
            </ul>
            {/* <!-- Message END --> */}
          </div>
          {/* <!-- Button save --> */}
        </div>
        {/* <!-- Communications  END --> */}
      </div>
    </>
  );
};
