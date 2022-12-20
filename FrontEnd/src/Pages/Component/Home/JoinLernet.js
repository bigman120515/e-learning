import React, { useState } from 'react'
import Lerner_List from './List/Lernerlist';
import Lerner from './Crads/Lerner';
import { Link } from 'react-router-dom';
import Mentor_List from './List/MentorList';

function JoinLernet() {

  const [tab,setTab]=useState("1");

  const id = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
  const redirect_url =process.env.REACT_APP_REDIRECT_URL;
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${id}&redirect_uri=${redirect_url}&state=123456&scope=r_liteprofile,r_emailaddress`;

  return (
    <>
        <div className="join_learnet comman_padding">
          <div className="comman_heading">
          <h2 class="text-center">There are many reasons you should<br/> join. <span class="span">Here are a few...</span></h2>
          </div>
          <div className="tabbing_section">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className={tab==='1'?"nav-link active join-learnet-links-active":"nav-link padding-zero"}  data-bs-toggle="pill" onClick={(e)=>setTab('1')}>
                  As a Learner
                </a>
              </li>
              <li className="nav-item">
                <a className={tab==='2'?"nav-link active join-learnet-links-active":"nav-link padding-zero"} data-bs-toggle="pill" onClick={(e)=>setTab('2')}>

                  As a Mentor
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content border-bottom-none padding-zero">
            <div className={tab==='1'?"tab-pane  active":"tab-pane container fade"} id="msg">
              <div className="row mt-5">
                {Lerner_List.map((val, ind) => {
                  return (
                    <Lerner
                      key={ind}
                      icon={val.iconC}
                      heading={val.heading}
                      text={val.text}
                    />
                  );}
                  )
                }
              </div>
            </div>
            <div className={tab==='2'?"tab-pane  active":"tab-pane container fade"} id="pro">
            <div className="row mt-5">
                {Mentor_List.map((val, ind) => {
                  return (
                    <Lerner
                      key={ind}
                      icon={val.iconC}
                      heading={val.heading}
                      text={val.text}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="btn-btn-join">
            <a className="btn btn-button" href={url}>Join Now</a>
          </div>
        </div>
        
          
    </>
  )
}

export default JoinLernet