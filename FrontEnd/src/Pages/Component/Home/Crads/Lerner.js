import React from "react";

function Lerner(props) {
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="card">
          <div className="card_body">
            <div className={`card_icon ${props.icon}`}>
            <i className="fas fa-star"></i>
            </div>
            <h4 className="font-style-zilla-slab">{props.heading}</h4>
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lerner;
