import React, { Component } from "react";
import "./Coin.css";

/** Coin: simple & stateless: just show the name & image of current coin. */

class Coin extends Component {
  render() {
    return (
      <div className="Coin" data-testid="coin">
        <img src={this.props.imgSrc} alt={this.props.side} />
      </div>
    );
  }
}

export default Coin;
