import React, { Component } from "react";

const NAME_TO_OPERATION = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

const NAME_TO_SYMBOL = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/"
};


class Math extends Component {
  constructor(props) {
    super(props);

    this.doMath = this.doMath.bind(this);
  }

  /** Do the underlying math
   *
   * name = add|subtract|multiply|divide
   *
   * Returns the result of the math operation.
   *
   **/

  doMath(name, num1, num2) {
    if (!NAME_TO_OPERATION[name]) {
      this.props.history.push("/");
      return null;
    }

    return NAME_TO_OPERATION[name](+num1, +num2);
  }

  render() {
    let { operation, num1, num2 } = this.props.match.params;
    let result = this.doMath(operation, num1, num2);

    if (result === null) return null;

    let symbol = NAME_TO_SYMBOL[operation];

    return (
      <div>
        <h1>HEY LOOK I DID SOME MATHZ</h1>
        <h3>
          {num1} {symbol} {num2} = {result}.
        </h3>
      </div>
    );
  }
}

export default Math;
