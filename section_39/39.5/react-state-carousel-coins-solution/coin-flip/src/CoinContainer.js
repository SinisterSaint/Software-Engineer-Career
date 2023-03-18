import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";
import { choice } from "./helpers";

/** CoinContainer: holds state about #flips/#heads/#tails, and current coin. */

function CoinContainer(props) {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const handleClick = () => {
    const newCoin = choice(props.coins);
    setCoin(newCoin);
    if (newCoin.side === "head") {
      setHeadCount(oldCount => oldCount + 1);
    } else {
      setTailCount(oldCount => oldCount + 1);
    }
  };

  const currCoin = coin ? (
    <Coin side={coin.side} imgSrc={coin.imgSrc} />
  ) : null;

  return (
    <div className="CoinContainer">
      <h2>Let's flip a coin</h2>
      {currCoin}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {headCount + tailCount} flips, there have been {headCount} heads
        and {tailCount} tails.
      </p>
    </div>
  );
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
    },
    {
      side: "tail",
      imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
    }
  ]
};

export default CoinContainer;
