import React, { Component } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice } from "./helpers";

class BoxesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array.from({ length: props.numBoxes }, () =>
        choice(props.allColors)
      )
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /** On button click: pick random box, change to random color. */
  handleClick(evt) {
    let idx = Math.floor(Math.random() * this.props.numBoxes);

    this.setState(st => {
      let boxCopy = [...st.boxes];
      boxCopy[idx] = choice(this.props.allColors);
      return { boxes: boxCopy };
    });
  }

  render() {
    const boxComponents = this.state.boxes.map((color, i) => (
      <Box key={i} color={color} />
    ));

    return (
      <div>
        <section className="BoxesContainer">{boxComponents}</section>
        <button onClick={this.handleClick}>Change a Box</button>
      </div>
    );
  }
}

BoxesContainer.defaultProps = {
  numBoxes: 16,
  allColors: [
    "Aqua",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default BoxesContainer;
