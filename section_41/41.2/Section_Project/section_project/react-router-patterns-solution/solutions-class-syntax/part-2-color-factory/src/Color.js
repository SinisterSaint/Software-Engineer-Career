import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Color.css";

class Color extends Component {
  constructor(props) {
    super(props);
    if (!props.hex) {
      props.history.push("/colors");
    }
  }

  render() {
    return (
      <div className="Color" style={{ backgroundColor: this.props.hex }}>
        <p>this is {this.props.match.params.color}.</p>
        <p>Isn't it beautiful?</p>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    );
  }
}

export default Color;
