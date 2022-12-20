import React from "react";
import { Link } from "react-router-dom";
import cardgroupdata from "./CardGroupData";

const CardGroup = () => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="container">
            <div className="row g-4">

                {
                cardgroupdata.map((val,ind)=>{
return(

    <div className="col-lg-4" key={ind}>
    <div class="card h-100">
      <div class="position-relative">
        <img
          class="img-fluid rounded-top"
          src={val.img}
          alt=""
        />
      </div>

      <div class="card-body position-relative pt-4">
        <h6 class="">
          <a href="group-session-details.html">
            {val.details}
          </a>
        </h6>

        <p class="mb-0 small">
          <i class="bi bi-calendar-check pe-1"></i>{val.time}
        </p>
        <p class="small para_pur_col gs_name">
          <i class="fa-regular fa-user pe-1 me-1"></i> {val.author}
        </p>

        <div class="d-flex mt-3 justify-content-between">
          <div class="w-100">
            <input
              type="checkbox"
              class="btn-check d-block"
              id="Interested1"
            />
            <label
              class="btn btn-sm btn-outline  d-block btn-purple"
              for="Interested1"
            >
              Enroll
            </label>
          </div>
          <div class="dropdown ms-3">
            <a
              href="#"
              class="btn btn-sm btn-outline-pur1"
              id="eventActionShare"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-share text-purple"></i>
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="eventActionShare"
            >
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-envelope fa-fw pe-1"></i>
                  Send via Direct Message
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-bookmark-check fa-fw pe-1"></i>
                  Share to News Feed
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-people fa-fw pe-1"></i>
                  Share to a group
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-share fa-fw pe-1"></i> Share post
                  via …
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-person fa-fw pe-1"></i>
                  Share on a friend's profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

)
                })     

                }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGroup;
