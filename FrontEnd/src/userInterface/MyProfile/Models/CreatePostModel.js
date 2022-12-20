import React from 'react'

export const CreatePostModel = () => {
  return (
    <>
        <div
        class="modal fade"
        id="modalCreateFeed"
        tabindex="-1"
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateFeed">
                Create post
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
              {/* <!-- Add Feed --> */}
              <div class="d-flex mb-3">
                {/* <!-- Avatar --> */}
                <div class="avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
                {/* <!-- Feed box  --> */}
                <form class="w-100">
                  <textarea
                    class="form-control pe-4 fs-3 lh-1 border-0"
                    rows="4"
                    placeholder="Share your thoughts..."
                    autofocus
                  ></textarea>
                </form>
              </div>
              {/* <!-- Feed rect START --> */}
              <div class="hstack gap-2">
                <a
                  class="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Photo"
                >
                  {" "}
                  <i class="bi bi-image-fill"></i>{" "}
                </a>
                <a
                  class="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Video"
                >
                  {" "}
                  <i class="bi bi-camera-reels-fill"></i>{" "}
                </a>
                <a
                  class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Events"
                >
                  {" "}
                  <i class="bi bi-calendar2-event-fill"></i>{" "}
                </a>
                <a
                  class="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Feeling/Activity"
                >
                  {" "}
                  <i class="bi bi-emoji-smile-fill"></i>{" "}
                </a>
                <a
                  class="icon-md bg-light text-secondary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Check in"
                >
                  {" "}
                  <i class="bi bi-geo-alt-fill"></i>{" "}
                </a>
                <a
                  class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tag people on top"
                >
                  {" "}
                  <i class="bi bi-tag-fill"></i>{" "}
                </a>
              </div>
              {/* <!-- Feed rect END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div class="modal-footer row justify-content-between">
              {/* <!-- Select --> */}
              <div class="col-lg-3">
                <select
                  class="form-select js-choice"
                  data-position="top"
                  data-search-enabled="false"
                >
                  <option value="PB">Public</option>
                  <option value="PV">Friends</option>
                  <option value="PV">Only me</option>
                  <option value="PV">Custom</option>
                </select>
              </div>
              {/* <!-- Button --> */}
              <div class="col-lg-8 text-sm-end">
                <button type="button" class="btn btn-danger-soft me-2">
                  {" "}
                  <i class="bi bi-camera-video-fill pe-1"></i> Live video
                </button>
                <button type="button" class="btn btn-success-soft">
                  Post
                </button>
              </div>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
    </>
  )
}
