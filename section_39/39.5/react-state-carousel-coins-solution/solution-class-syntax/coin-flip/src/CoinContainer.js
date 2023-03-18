import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";

import { choice } from "./helpers";

/** CoinContainer: holds state about #flips/#heads/#tails, and current coin. */

class CoinContainer extends Component {
  static defaultProps = {
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

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nHeads: 0,
      nTails: 0
    };

    // bind handleClick to instance, so when called, always uses as "this"
    this.handleClick = this.handleClick.bind(this);
  }

  /** On click, flip coin and update state w/new counts. */

  handleClick() {
    // since we need new state to refer to old state, use version of setState
    // that takes a function
    this.setState(st => {
      const newCoin = choice(this.props.coins);
      return {
        currCoin: newCoin,
        nTails: st.nTails + (newCoin.side === "tail" ? 1 : 0),
        nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0)
      };
    });
  }

  /** Show current coin component and flip button. */

  render() {
    const coin = this.state.currCoin ? (
      <Coin
        side={this.state.currCoin.side}
        imgSrc={this.state.currCoin.imgSrc}
      />
    ) : (
      ""
    );

    return (
      <div className="CoinContainer">
        <h2>Let's flip a coin</h2>
        {coin}

        <button onClick={this.handleClick}>Flip Me!</button>

        <p>
          Out of {this.state.nHeads + this.state.nTails} flips, there have been{" "}
          {this.state.nHeads} heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
