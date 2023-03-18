import React from "react";
import "./Coin.css";

/** Coin: simple & stateless: just show the name & image of current coin. */

function Coin(props) {
  return (
    <div className="Coin">
      <img src={props.imgSrc} alt={props.side} />
    </div>
  );
}

export default Coin;
