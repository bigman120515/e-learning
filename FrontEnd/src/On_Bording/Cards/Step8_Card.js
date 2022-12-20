import React, { useMemo, useState } from "react";

function Step8_Card(props) {
  const [added,setAdded]=useState('+ Add')
  
  
  // props.func(data)
  function addMenter(i){
    console.log("clicked",i)
    if(added=="+ Add"){
      props.setData(i)
    }
    setAdded("Added")
  }
  
 
  return (
    <>
      <div className="mentor_card">
        <div className="closebtn">&times;</div>
        <div className="photo">
          <img src={props.image} />
        </div>
        <h4>{props.name}</h4>
        <p>{props.currentJobTitle} at {props.currentCompany}</p>
        <div>
          {
            added!=="+ Add"?<p   onClick={(e)=>addMenter(props.id)} style={{color:"green"}}>
             <i class="fa-solid fa-check"></i> {added} 
           </p>:<a  className="btn addbtn" onClick={(e)=>addMenter(props.id)}>
           &nbsp;{added}
          </a>
          }
        </div>
      </div>
    </>
  );
}

export default Step8_Card;
