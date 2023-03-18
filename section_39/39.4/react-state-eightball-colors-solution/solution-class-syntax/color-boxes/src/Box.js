import React, { Component } from "react";
import "./Box.css";

/** Individual colored box. */
class Box extends Component {
  render() {
    return (
      <div className="Box" style={{ backgroundColor: this.props.color }} />
    );
  }
}

export default Box;
