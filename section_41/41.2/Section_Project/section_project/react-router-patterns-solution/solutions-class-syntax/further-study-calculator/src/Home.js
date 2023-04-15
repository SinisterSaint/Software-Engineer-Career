import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the React Router calculator!</h1>
        <p>Please modify the URL to do some math.</p>
        <p>Valid operations are add, subtract, multiply, and divide.</p>
      </div>
    );
  }
}

export default Home;