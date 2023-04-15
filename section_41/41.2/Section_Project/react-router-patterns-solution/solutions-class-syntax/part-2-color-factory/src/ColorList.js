import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

class ColorList extends Component {
  render() {
    const colorLinks = Object.keys(this.props.colors).map(colorName => (
      <li key={colorName}>
        <Link to={`/colors/${colorName}`}>{colorName}</Link>
      </li>
    ));

    return (
      <div className="ColorList">
        <header className="ColorList-header">
          <h1 className="ColorList-title">Welcome to the color factory.</h1>
          <h1>
            <Link to="/colors/new">Add a color</Link>
          </h1>
        </header>
        <div className="ColorList-intro">
          <p>Please select a color.</p>
          <ul>{colorLinks}</ul>
        </div>
      </div>
    );
  }
}

export default ColorList;
