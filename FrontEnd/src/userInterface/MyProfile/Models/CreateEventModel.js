import React from 'react'

export const CreateEventModel = () => {
  return (
    <>
        <div
        class="modal fade"
        id="modalCreateEvents"
        tabindex="-1"
        aria-labelledby="modalLabelCreateAlbum"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateAlbum">
                Create event
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}
            {/* <!-- Modal feed body START --> */}
            <div class="modal-body">
              {/* <!-- Form START --> */}
              <form class="row g-4">
                {/* <!-- Title --> */}
                <div class="col-12">
                  <label class="form-label">Title</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Event name here"
                  />
                </div>
                {/* <!-- Description --> */}
                <div class="col-12">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    rows="2"
                    placeholder="Ex: topics, schedule, etc."
                  ></textarea>
                </div>
                {/* <!-- Date --> */}
                <div class="col-sm-4">
                  <label class="form-label">Date</label>
                  <input
                    type="text"
                    class="form-control flatpickr"
                    placeholder="Select date"
                  />
                </div>
                {/* <!-- Time --> */}
                <div class="col-sm-4">
                  <label class="form-label">Time</label>
                  <input
                    type="text"
                    class="form-control flatpickr"
                    data-enableTime="true"
                    data-noCalendar="true"
                    placeholder="Select time"
                  />
                </div>
                {/* <!-- Duration --> */}
                <div class="col-sm-4">
                  <label class="form-label">Duration</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="1hr 23m"
                  />
                </div>
                {/* <!-- Location --> */}
                <div class="col-12">
                  <label class="form-label">Location</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Logansport, IN 46947"
                  />
                </div>
                {/* <!-- Add guests --> */}
                <div class="col-12">
                  <label class="form-label">Add guests</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Guest email"
                  />
                </div>
                {/* <!-- Avatar group START --> */}
                <div class="col-12 mt-3">
                  <ul class="avatar-group list-unstyled align-items-center mb-0">
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/05.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/06.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-xs">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/07.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="ms-3">
                      <small> +50 </small>
                    </li>
                  </ul>
                </div>
                {/* <!-- Upload Photos or Videos --> */}
                {/* <!-- Dropzone photo START --> */}
                <div>
                  <label class="form-label">Upload attachment</label>
                  <div
                    class="dropzone dropzone-default card shadow-none"
                    data-dropzone='{"maxFiles":2}'
                  >
                    <div class="dz-message">
                      <i class="bi bi-file-earmark-text display-3"></i>
                      <p>
                        Drop presentation and document here or click to upload.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Dropzone photo END --> */}
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}
            {/* <!-- Modal footer --> */}
            {/* <!-- Button --> */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger-soft me-2"
                data-bs-dismiss="modal"
              >
                {" "}
                Cancel
              </button>
              <button type="button" class="btn btn-success-soft">
                Create now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
