import React from "react";
import {useHistory, useParams} from "react-router-dom";

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


function Math() {

  const history = useHistory();
  const { operation, num1, num2 } = useParams();

  /** Do the underlying math
   *
   * name = add|subtract|multiply|divide
   *
   * Returns the result of the math operation.
   *
   **/

  function doMath(name, num1, num2) {
    if (!NAME_TO_OPERATION[name]) {
      history.push("/");
      return null;
    }

    return NAME_TO_OPERATION[name](+num1, +num2);
  }

  let result = doMath(operation, num1, num2);

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

export default Math;
