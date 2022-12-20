import React from 'react'
import { Link } from 'react-router-dom'

export const SelectSetting = () => {
  return (
    <>
        <div class="col-lg-3">

{/* <!-- Advanced filter responsive toggler START --> */}
{/* <!-- Divider --> */}
<div class="d-flex align-items-center mb-4 d-lg-none">
    <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <i class="btn btn-primary fw-bold fa-solid fa-sliders"></i>
        <span class="h6 mb-0 fw-bold d-lg-none ms-2">Settings</span>
    </button>
</div>
{/* <!-- Advanced filter responsive toggler END --> */}

<nav class="navbar navbar-light navbar-expand-lg mx-0">
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
        {/* <!-- Offcanvas header --> */}
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>

        {/* <!-- Offcanvas body --> */}
        <div class="offcanvas-body p-0">
            {/* <!-- Card START --> */}
            <div class="card w-100">
                {/* <!-- Card body START --> */}
                <div class="card-body">

                    {/* <!-- Side Nav START --> */}
                    <ul
                        class="nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0">
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link d-flex mb-0 active" href="#nav-setting-tab-1"
                                data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw"
                                    src="assets/images/icon/person-outline-filled.svg"
                                    alt=""/><span>Account </span></a>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link d-flex mb-0" href="#nav-setting-tab-2"
                                data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw"
                                    src="assets/images/icon/notification-outlined-filled.svg"
                                    alt=""/><span>Notification </span></a>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link d-flex mb-0" href="#nav-setting-tab-3"
                                data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw"
                                    src="assets/images/icon/shield-outline-filled.svg"
                                    alt=""/><span>Privacy</span></a>
                        </li>

                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <a class="nav-link d-flex mb-0" href="#nav-setting-tab-4"
                                data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw"
                                    src="assets/images/icon/chat-alt-outline-filled.svg"
                                    alt=""/><span>Messaging </span></a>
                        </li>

                    </ul>
                    {/* <!-- Side Nav END --> */}

                </div>
                {/* <!-- Card body END --> */}
                {/* <!-- Card footer --> */}
                <div class="card-footer text-center py-2">
                    <Link to="/userprofile" class="btn btn-success-soft save_btn  btn-sm">View
                        Profile</Link>
                </div>
            </div>
            {/* <!-- Card END --> */}
        </div>
        {/* <!-- Offcanvas body --> */}

        {/* <!-- Helper link START --> */}
        <ul class="nav small mt-4 justify-content-center lh-1">
            <li class="nav-item">
                <Link class="nav-link" to="#!">About</Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to="#">Support </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="#">Docs </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="help.html">Help</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="privacy-and-terms.html">Privacy & terms</Link>
            </li>
        </ul>
        {/* <!-- Helper link END --> */}
        {/* <!-- Copyright --> */}
        <p class="small text-center mt-1">©2022 <Link class="text-body" target="_blank" to="#">
                Learnet </Link></p>

    </div>
</nav>
</div>
    </>
  )
}
