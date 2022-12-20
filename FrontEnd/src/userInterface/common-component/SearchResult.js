import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserNavbar from '../UserNavbar'
const SearchResult = () => {
  let searchResult = JSON.parse(localStorage.getItem("searchData"));
  console.log(searchResult, 12345678);

  return (
    <>
      <UserNavbar />
      <main>
        {/* <!-- Container START --> */}

        {/* <!-- Container START --> */}
        <div>
          <div className="container usersearch_body">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="mx-auto  d-block   rounded ">
                      {/* <!-- Form START --> */}
                      <form className="align-items-end  d-flex  d-block gap-4">
                        {/* <!-- Duration --> */}
                        <div className="mb-2 mt-2 ">
                          <select
                            className="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Location</option>
                            <option value="comedy">Delhi</option>
                            <option value="dance">Noida</option>
                            <option value="family">Punjab</option>
                            <option value="music">Chandigarh</option>
                          </select>
                        </div>
                        {/* <!-- Date --> */}
                        <div className="mb-2 mt-2 ">
                          <select
                            className="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Price</option>
                            <option value="comedy">1000$</option>
                            <option value="dance">2000$</option>
                            <option value="family">500$</option>
                            <option value="music">100$</option>
                          </select>
                        </div>
                        {/* <!-- Time --> */}
                        <div className="mb-2 mt-2">
                          <select
                            className="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Time</option>
                            <option value="comedy">8:00</option>
                            <option value="dance">10:00</option>
                            <option value="family">12:00</option>
                            <option value="music">3:00</option>
                          </select>
                        </div>
                        <div className="mb-2 mt-2">
                          <select
                            className="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Sessions</option>
                            <option value="comedy">1-to-1 Sessions</option>
                            <option value="dance">Group Sessions</option>
                          </select>
                        </div>
                        <div className="mb-2 mt-2 ms-auto">
                          <select
                            className="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">
                              Short By Preference{" "}
                              <i className="fa fa-filter ms-1"></i>
                            </option>
                            <option value="comedy">Session</option>
                            <option value="dance">Group</option>
                          </select>
                        </div>
                      </form>

                      {/* <!-- Form END --> */}
                    </div>
                  </div>
                </div>

                <h5 className="mt-5">{searchResult.length} Results</h5>

                {/* <!-- Fees images --> */}

                {/* <!-- Card body START --> */}

                {/* <!-- Experience item START --> */}
                {searchResult.map((val, ind) => (
                  <div className="card card-body mt-3" key={ind} >
                    <div className="d-flex justify-content-between align-item-center d-block">
                      <div>
                        <div className="d-flex">
                          {/* <!-- Avatar --> */}
                          <div className="avatarimg me-3">
                            <a href="#!">
                              {" "}
                              <img
                                style={{ width: '100px' }}
                                className="rounded-circle img-fluid-profile"
                                src={val?.profilePicture || "assets/images/avatar/01.jpg"}
                                alt="#"
                              />{" "}
                            </a>
                          </div>
                          {/* <!-- Info --> */}
                          <div>
                            <h6 className="card-title mb-0 d-flex gap-2">
                              <a href="#!">
                                {val.firstName} {val.lastName}
                              </a>
                              {/* {
                                  val.price!==null?<p className="btn-outline-free text-center mb-0">
                                  {" "}
                                  <img
                                    src="assets/images/myimages/free.png"
                                    className="me-2"
                                    alt=""
                                  />
                                  {val?.price || ""}
                                </p>:''
                                } */}
                            </h6>
                            <p className="small  mb-1">
                              {" "}
                              {/* <b>{val?.experiences[0].jobTitle}</b>{" "} */}
                            </p>
                            <p className="small mb-1">{val?.location || ""} </p>
                            <p className="small mb-0">
                              <i className="fa fa-briefcase me-1 text-purple"></i>
                              Cloud Architecture{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="userlist_sect mb-0">
                            <p className="mb-0">
                              <ul className="d-flex list-unstyled">
                                <li>
                                  <i className="fa-solid fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-star text-warning text-muted"></i>
                                </li>
                                <li>
                                  <i className="fa-solid fa-star text-warning text-muted"></i>
                                </li>
                                <span className="ms-2">
                                  {" "}
                                  <b>{val?.rating || ""}</b>{" "}
                                  <small className="text-black"></small>{" "}
                                </span>
                              </ul>
                            </p>
                          </div>
                          <Link
                            to=""
                            className="btn btn-sm btn-outline-pur btn-purple-soft btn-radius ms-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                )}

                {/* <!-- Card body END --> */}

              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container END --> */}
      </main>
    </>
  );
};

export default SearchResult;
