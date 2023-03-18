import React, { Component } from 'react';
import "./EightBall.css";

class EightBall extends Component {
  static defaultProps = {
    answers:
      [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
  };

  constructor(props) {
    super(props);
    this.state = { msg: "Think of a Question", color: "black" };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomMessage() {
    const idx = Math.floor(Math.random() * this.props.answers.length);
    return this.props.answers[idx];
  }

  handleClick() {
    const { msg, color } = this.getRandomMessage();
    this.setState({ msg, color })
  }

  render() {
    return (
      <div className="EightBall"
           onClick={this.handleClick}
           style={{ backgroundColor: this.state.color }}>
        <b>{this.state.msg}</b>
      </div>
    );
  }
}


export default EightBall;