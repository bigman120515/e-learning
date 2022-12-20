import React from "react";

function Mentorcard(props) {
  return (
    <>
        <div className="col-lg-12">
                                <div className="result_section ">
                                    <table className="table">


                                        <h4>{props.heading}</h4>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="profile_section ">
                                                        <div className="result_img">
                                                            <img src={props.img1}alt=""/>

                                                        </div>
                                                        <div className="result_profile">

                                                            <h6>{props.data1}</h6>
                                                            <p>{props.data2}</p>
                                                            <p>
                                                                <span className="span1">{props.data3}</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="profile_section ">
                                                        <div className="result_img">
                                                            <img src={props.img2} alt=''/>

                                                        </div>
                                                        <div className="result_profile">

                                                            <h6>{props.data4}</h6>
                                                            <p>{props.data5}</p>
                                                            <p>
                                                                <span className="span1">{props.data6}</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>

                            </div>
    </>
  );
}

export default Mentorcard;
