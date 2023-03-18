import React from "react";
import "./Box.css";

/** Individual colored box. */
function Box(props) {
  return (
    <div
      className="Box"
      style={{backgroundColor: props.color}}
    />
  );
}

export default Box;
