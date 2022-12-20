import React, { useState } from "react";

function Ob_Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      {/* <!--Header--> */}
      <section className="header">
        <div className="inner_container">
          <div className="nav_header navbar navbar-expand-md navbar-light flex_center_between pe-4">
            <a href="#" className="logo ps-4">
              <img src="assets/images/logo/logo01.png" />
            </a>
            <button
              class="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShow}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div class="collapse navbar-collapse pe-4" style={{display:show?"block":"none"}} id="navbarNav">
              <ul class="navbar-nav top_menu ms-auto">
                <li class="nav-item me-4 border-bottom-none">
                  <a href="#" className="font-style-zilla-slab">
                    Discover
                  </a>
                </li>
                <li class="nav-item me-4">
                  <a href="#" className="font-style-zilla-slab">
                    Mentor
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ob_Header;
