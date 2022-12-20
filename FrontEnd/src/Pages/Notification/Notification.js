import React from 'react'
import UserNavbar from '../../userInterface/UserNavbar'

const Notification = () => {
    return (
        <>

            <UserNavbar />
            <main>
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-12 mx-auto">

                            <div className="card">
                                <div className="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                                    <h1 className="h5 mb-0">Notifications</h1>

                                    <div className="dropdown">
                                        <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardNotiAction" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </a>

                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-check-lg fa-fw pe-2"></i>Mark all read
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Push notifications
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-bell fa-fw pe-2"></i>Email notifications
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card-body p-2">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-2">
                                                        Hi William, Welcome to Learnet. Please complete your profile by adding profile picture, title, overview, topics/skills for learn and mentor
                                                    </p>

                                                    <div className="d-flex">
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft me-2">
                                                            Complete your profile
                                                        </button>

                                                    </div>
                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">Just now</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction1">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-2">
                                                        Hi William, please configure your availability and pricing for 1-on-1 sessions
                                                    </p>

                                                    <div className="d-flex">
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                            Set your availability
                                                        </button>
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                            Set pricing
                                                        </button>

                                                    </div>
                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5 min ago</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction2">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <div className="avatar-img rounded-circle bg-success">
                                                        <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                                    </div>
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-2">
                                                        A new 1-on-1 session has been booked by John for Cloud Computing on 25 Sep, 11 AM.
                                                    </p>
                                                    <div className="d-flex">
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                            Accept
                                                        </button>
                                                        <button className="btn btn-sm py-1 btn-danger-soft1 btn-danger1 me-2">
                                                            Reject
                                                        </button>

                                                    </div>

                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">2 hours ago</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-0">Reminder: 1-on-1 session booked by John for Cloud Computing will start in next 24 hours..</p>

                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">20min</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction6">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">



                                                    <p className="small mb-0">Reminder: 1-on-1 session booked by John for Cloud Computing will start in next 1 hour. </p>
                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">3hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction7">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-0">1-on-1 session booked by John for Cloud Computing is started. </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction8">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        1-on-1 session booked by John for Cloud Computing is completed.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        1-on-1 session booked by John for Cloud Computing is completed. Please give your feedback. Provide your feedback
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        A new enrollment is done booked by John for Cloud Computing group session on 25 Sep, 11 AM.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">34 Min</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Reminder: A group session on Cloud Computing will start in next 24 hours.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">1hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Reminder: A group session for Cloud Computing will start in next 1 hour.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Group session for Cloud Computing is started.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">3hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Group session for Cloud Computing is completed.
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">6hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Group session for Cloud Computing is completed. Please give your feedback. Provide your feedback
                                                    </p>


                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">1hr</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        John wants to connect with you.
                                                    </p>
                                                    <div className="d-flex mt-2">
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                            Accept
                                                        </button>
                                                        <button className="btn btn-sm py-1 btn-danger1  me-2">
                                                            Ignore
                                                        </button>

                                                    </div>



                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">10hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small m-0">
                                                        Andy tagged you to read a post
                                                    </p>
                                                    <div className="mt-2">
                                                        <a href="#">Read Link</a>


                                                    </div>



                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">5hrs</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">

                                                <div className="avatar text-center">
                                                    <div className="avatar-img rounded-circle bg-success">
                                                        <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                                    </div>
                                                </div>

                                                <div className="mx-sm-3 my-2 my-sm-0">
                                                    <p className="small mb-2">
                                                        Andy tagged you to learn a skill
                                                    </p>
                                                    <div className="d-flex">
                                                        <button className="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                            Book Now
                                                        </button>


                                                    </div>

                                                </div>

                                                <div className="d-flex ms-auto">
                                                    <p className="small me-5 text-nowrap">12 hours ago</p>

                                                    <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                        <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                                <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">

                                    <a href="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                        <span className="load-text"> Load more notifications </span>
                                        <div className="load-icon">
                                            <div className="spinner-grow spinner-grow-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default Notification