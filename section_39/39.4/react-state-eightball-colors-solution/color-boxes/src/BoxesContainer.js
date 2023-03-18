import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice } from "./helpers";

function BoxesContainer(props) {
  const [boxes, setBoxes] = useState(
    Array.from({ length: props.numBoxes }, () => choice(props.allColors))
  );

  /** On button click: pick random box, change to random color. */
  const handleClick = evt => {
    let idx = Math.floor(Math.random() * props.numBoxes);

    setBoxes(boxes => {
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(props.allColors);
      return boxCopy;
    });
  };

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      <section className="BoxesContainer">{boxComponents}</section>
      <button onClick={handleClick}>Change a Box</button>
    </div>
  );
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
