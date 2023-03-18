import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h4 className="Card-title">{this.props.caption}</h4>
        <img
          className="Card-image"
          src={this.props.src}
          alt={this.props.caption}
        />
        <small className="Card-small">
          Image {this.props.currNum} of {this.props.totalNum}.
        </small>
      </div>
    );
  }
}

export default Card;
