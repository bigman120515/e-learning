import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { search } from "../Services/UserAuth";

export default function UserNavbar() {
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [searchValue, setSerchValue] = useState("")
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState()
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  useEffect(() => {
    setName(userProfileData?.fullName || "")
    setField(userProfileData?.currentJobTitle || "")
    setUserProfilePicture(userProfileData?.profilePicture || "assets/images/avatar-profile.png")
  }, [userProfileData])
  const showProfile = (e) => {
    if (showProfileDropdown) {
      setShowProfileDropdown(false);
    } else {
      setShowProfileDropdown(true);
      setShowNotification(false);
    }
  };
  const handleNotification = (e) => {
    if (showNotification) {
      setShowNotification(false);
    } else {
      setShowNotification(true);
      setShowProfileDropdown(false);
    }
  };
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };


  // const handleSerchButton=(e)=>{
  //   e.preventDefault()
  //   try{
  //     if(searchValue!=''){
  //       search(searchValue.toLowerCase(),token).then((res)=>{
  //         if(res.success && res.data.length!==0){


  //           // localStorage.setItem("searchData",JSON.stringify(res.data));
  //           // navigate('/search-Result')
  //         }
  //       })
  //     }else{
  //       toast.error("Please Enter Search Key")
  //     }
  //   } catch(error){}
  // }

  const SearchBar = (value) => {
    console.log(456);
    try {
      search(value)
        .then((res) => {
          let skills = res.data;
          console.log(skills, "--------Skills")
          //setSkillList(skills)


        })
        .catch();
    } catch (error) { }

    useEffect(() => {
      // SearchBar(setValue(e.target.value))
    }, [])

  }
  return (
    <>
      <header className="navbar-light fixed-top header-static bg-mode">
        {/* <!-- Logo Nav START --> */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <!-- Logo START --> */}
            <Link className="navbar-brand" to="home-page">
              <img
                className="img-fluid light-mode-item navbar-brand-item"
                src="assets/images/logo/logo-icon.png"
                alt="logo"
              />
              <img
                className="img-fluid dark-mode-item navbar-brand-item"
                src="assets/images/logo/logo-icon.png"
                alt="logo"
              />
            </Link>
            {/* <!-- Logo END --> */}

            {/* <!-- Responsive navbar toggler --> */}
            <button
              className="navbar-toggler ms-auto icon-md btn btn-light p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-label="Toggle navigation"
              aria-expanded={toggle ? "true" : "false"}
              onClick={handleToggle}
            >
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarCollapse"
              style={{ display: toggle ? "inline-block" : "none" }}
            >
              {/* <!-- Nav Search START --> */}
              <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                <div className="nav-item ">
                  <form className="rounded position-relative topserachbar">
                    <input
                      className="form-control ps-5 bg-light"
                      type="search"
                      placeholder="What do you want to learn?"
                      aria-label="Search"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                      className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                      type="submit"
                      onClick={(e) => SearchBar(value)}
                    >
                      <i className="bi bi-search fs-5"> </i>
                    </button>
                  </form>
                </div>
              </div>
              {/* <!-- Nav Search END --> */}

              {/* <!-- Main navbar END --> */}

              {/* <!-- Nav right START --> */}

              <ul className="nav flex-nowrap align-items-center ms-auto list-unstyled navbar_padd">
                <li className="nav-item ">
                  <Link
                    className="nav-link icon-md btn  p-0   d-block active"
                    to="/home-page"
                  >
                    <i className="bi bi-house-fill fs-6 mb-0 icon_size"></i>
                    <p className="mb-0 haeder_haed">
                      <small>Home</small>{" "}
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link icon-md btn  p-0  d-block "
                    to="/session"
                  >
                    <i className="bi bi-stopwatch-fill fs-6 icon_size"></i>
                    <p className="mb-0 haeder_haed">
                      <small>Sessions</small>{" "}
                    </p>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link icon-md btn  p-0  d-block"
                    to="/messagelearner"
                  >
                    <i className="bi bi-chat-left-text-fill fs-6 icon_size"> </i>
                    <p className="mb-0 haeder_haed">
                      <small>Messaging</small>{" "}
                    </p>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link icon-md btn  p-0  d-block"
                    to="/notification"
                    id="notifDropdown"
                    onClick={handleNotification}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    <span className="badge-notif animation-blink"></span>
                    <i className="bi bi-bell-fill fs-6 icon_size"> </i>
                    <p className="mb-0 haeder_haed">
                      <small>Notifications</small>{" "}
                    </p>
                  </Link>
                  <div
                    style={{ display: showNotification ? "block" : "none" }}
                    className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                    aria-labelledby="notifDropdown"
                  >
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="m-0">
                          Notifications
                          <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                            4 new
                          </span>
                        </h6>
                        <Link className="small" to="#">
                          Clear all
                        </Link>
                      </div>
                      <div className="card-body p-0">
                        <ul className="list-group list-group-flush list-unstyled p-2">
                          {/* <!-- Notif item --> */}
                          <li>
                            <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                              <div className="avatar text-center d-none d-sm-inline-block">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/02.jpg"
                                  alt="Avatar"
                                />
                              </div>
                              <div className="ms-sm-3">
                                <div className="d-flex">
                                  <p className="small mb-2">
                                    New Session has been booked by George
                                    <b>(AI/ML, 20th Sep)</b>
                                  </p>
                                  <p className="small ms-3 text-nowrap">Just now</p>
                                </div>
                                <div className="d-flex">
                                  <button className="btn btn-sm py-1 btn-primary me-2">
                                    Accept
                                  </button>
                                  <button className="btn btn-sm py-1 btn-danger-soft">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* <!-- Notif item --> */}
                          <li>
                            <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                              <div className="avatar text-center d-none d-sm-inline-block">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/03.jpg"
                                  alt="Avatar"
                                />
                              </div>
                              <div className="ms-sm-3 d-flex">
                                <div>
                                  <p className="small mb-2">
                                    Shah Alam has enrolled in group session
                                    <b>(Cloud Computing, 10th)</b>
                                  </p>
                                </div>
                                <p className="small ms-3">5min ago</p>
                              </div>
                            </div>
                          </li>
                          {/* <!-- Notif item --> */}
                          <li>
                            <Link
                              to="#"
                              className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                            >
                              <div className="avatar text-center d-none d-sm-inline-block">
                                <div className="avatar-img rounded-circle bg-success">
                                  <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                    WB
                                  </span>
                                </div>
                              </div>
                              <div className="ms-sm-3">
                                <div className="d-flex">
                                  <p className="small mb-2">
                                    You have updated your profile
                                    <b>(Education details )</b>
                                  </p>
                                  <p className="small ms-3">2hr ago</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          {/* <!-- Notif item --> */}
                        </ul>
                      </div>
                      <div className="card-footer text-center">
                        <Link to="#" className="btn btn-sm btn-primary-soft">
                          See all incoming activity
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <!-- Notification dropdown END --> */}
                <li className="nav-item ">
                  <Link
                    className="nav-link icon-md btn  p-0  d-block"
                    to="/setting"
                  >
                    <i className="bi bi-gear-fill fs-6 icon_size"> </i>
                    <p className="mb-0 haeder_haed">
                      <small>Settings</small>{" "}
                    </p>
                  </Link>
                </li>

                <li className="nav-item  dropdown mt-1">
                  <Link
                    className="nav-link btn icon-md p-0"
                    to="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-auto-close="outside"
                    data-bs-display="static"
                    data-bs-toggle="dropdown"
                    aria-expanded={showProfileDropdown ? "true" : "false"}
                    onClick={showProfile}
                  >
                    <img
                      className="avatar-img rounded-2"
                      src={userProfilePicture}
                      alt=""
                    />
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
                    aria-labelledby="profileDropdown"
                    onBlur={(e) => setShowProfileDropdown(false)}
                    style={{ display: showProfileDropdown ? "block" : "none" }}
                  >
                    {/* <!-- Profile info --> */}
                    <li className="px-3">
                      <div className="d-flex align-items-center">
                        {/* <!-- Avatar --> */}
                        <div className="avatar me-3">
                          <img
                            className="avatar-img rounded-circle"
                            src={userProfilePicture}
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <Link className="h6 stretched-link" to="#">
                            {name}
                          </Link>
                          <p className="small m-0">
                            {field}
                          </p>
                        </div>
                      </div>
                      <Link
                        className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                        to="/myprofile"
                      >
                        View Profile
                      </Link>
                    </li>
                    {/* <!-- Links --> */}
                    <li>
                      <Link className="dropdown-item" to="/setting">
                        <i className="bi bi-gear fa-fw me-2"></i>Settings & Privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="fa-fw bi bi-life-preserver me-2"></i>Support
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="fa-fw bi bi-card-text me-2"></i>Documentation
                      </Link>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item bg-danger-soft-hover"

                        onClick={handleSignOut}
                      >
                        <i className="bi bi-power fa-fw me-2"></i>Sign Out
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* <!-- Dark mode switch START --> */}
                    <li>
                      <div className="modeswitch-wrap" id="darkModeSwitch">
                        <div className="modeswitch-item">
                          <div className="modeswitch-icon"></div>
                        </div>
                        <span>Dark mode</span>
                      </div>
                    </li>
                    {/* <!-- Dark mode switch END --> */}
                  </ul>
                </li>
                {/* <!-- Profile START --> */}
              </ul>
            </div>
            {/* <!-- Nav right END --> */}
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
    </>
  );
}
