const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should return an array", function () {
    const results = unroll(squareArray);
    expect(Array.isArray(results)).toBe(true);
  });

});
