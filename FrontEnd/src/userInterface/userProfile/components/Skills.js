import React, { useState } from "react";
import { useEffect } from "react";
function Skills(props) {
  const [userSkill, setUserSkill] = useState([]);
  const [skills,setSkills]=useState([])
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  useEffect(() => {
    setSkills(userProfileData.skills)
    setUserSkill(props.userData.data.menteeTopics);
  }, []);

  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between border-0">
            <h5 className="card-title">Skills or Topics </h5>
          </div>

          <div className="card-body position-relative pt-0">
            {skills.map((val, key) => {
              return (
                <div className="d-flex justify-content-between align-items-center d-block mb-2" key={key}>
                  {/* <!-- Info --> */}
                  <div>
                    <h6 className="card-title mb-0">
                      <a href="#!"> {val.title} </a>
                    </h6>
                  </div>
                  <ul className="d-flex list-unstyled mb-2">
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
                      <i className="fa-solid fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star text-muted"></i>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          {/* <!-- Card body END --> */}
        </div>
      </div>
    </>
  );
}

export default Skills;
