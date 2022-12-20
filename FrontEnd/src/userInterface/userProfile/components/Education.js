import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";


const Education=(props)=>{
 console.log(props.userData.data.education)
 let educationList=props.userData.data.education;
 return(
    <>
           
          
            <div className="card">
        <div className="card-header d-flex justify-content-between border-0">
          <h5 className="card-title">Education</h5>
          
        </div>
        {educationList.map((val, key) => {
          return (
            <div className="card-body position-relative pt-0" key={key}>
              <div className="d-flex justify-content-between align-items-start mt-2">
                <div>
                  <h6 className="card-title mb-0">
                    <Link to="#!"> {val.degreeName} </Link>
                  </h6>
                  <p className="mb-0">
                    <small>
                      <b> {val.collegeName}</b>
                    </small>
                  </p>
                  <p>
                    <small>
                      {moment(new Date(val.startYear)).format("MMM YYYY")} - {val.present ? "Present" : moment(new Date(val.endYear)).format("MMM YYYY")}
                    </small>
                  </p>
                </div>
               <div className="d-flex align-items-center">
           
               </div>
              </div>
            </div>
          );
        })}
      </div>

         







    </>
 )
}

export default Education;