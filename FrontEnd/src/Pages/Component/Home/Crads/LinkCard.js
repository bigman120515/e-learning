import React from "react";
import { NavLink } from "react-router-dom";

function LinkCard(props) {
  return (
    <>
        <li>
          <NavLink to="">{props.data}</NavLink>
        </li>
    </>
  );
}

export default LinkCard;
