import React, { useState } from "react";
import LinkCard from "./Crads/LinkCard";
import { Experties, Industry, Role } from "./List/LinkList";

function Links() {
  const [tab, setTab] = useState("1");
  return (
    <>
    <section className="vericlaltab_bg background-color-white">
      <div className="comman_padding">
        <div className="fewclick_section">
          <div className="comman_heading">
            <h2 className="font-style-zilla-slab">
              Find the perfect mentors in <br />
              just a <span className="span">few clicks</span>{" "}
            </h2>
          </div>

          <div className="d-flex align-items-start mt-5 nav-pills-items1">
            <div
              className="nav flex-column nav-pills me-3 nav-pills-items"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className={tab==="1"?"nav-link active":"nav-link"}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(e)=>setTab("1")}
              >
                Expertise
              </button>
              <button
                className={tab==="2"?"nav-link active":"nav-link"}
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                onClick={(e)=>setTab("2")}
              >
                Industry
              </button>
              <button
                className={tab==="3"?"nav-link active":"nav-link"}
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
                onClick={(e)=>setTab("3")}
              >
                Role
              </button>
            </div>
            <div className="tab-content padding-zero" id="v-pills-tabContent">
              <div
                className={tab==="1"?"tab-pane fade show active":"tab-pane fade"}
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="fewclick_section_items">
                  <div className="ulitems">
                    <ul>
                      {Experties.map((val, ind) => {
                        return <LinkCard key={ind} data={val.LinkName} />;
                      })}
                    </ul>
                  </div>

                  <div className="ulitems ulitemssecond">
                    <div className="ulitems ">
                      <ul>
                        {Experties.map((val, ind) => {
                          return <LinkCard key={ind} data={val.LinkName} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={tab==="2"?"tab-pane fade show active":"tab-pane fade"}
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="fewclick_section_items">
                  <div className="ulitems">
                    <ul>
                      {Industry.map((val, ind) => {
                        return <LinkCard key={ind} data={val.LinkName} />;
                      })}
                    </ul>
                  </div>

                  <div className="ulitems ulitemssecond">
                    <div className="ulitems ">
                      <ul>
                        {Industry.map((val, ind) => {
                          return <LinkCard key={ind} data={val.LinkName} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={tab==="3"?"tab-pane fade show active":"tab-pane fade"}
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="fewclick_section_items">
                  <div className="ulitems">
                    <ul>
                      {Role.map((val, ind) => {
                        return <LinkCard key={ind} data={val.LinkName} />;
                      })}
                    </ul>
                  </div>

                  <div className="ulitems ulitemssecond">
                    <div className="ulitems ">
                      <ul>
                        {Role.map((val, ind) => {
                          return <LinkCard key={ind} data={val.LinkName} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Links;
