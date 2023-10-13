const checkFive = require('../checkFive.js');

describe("checkFive", function () {

  test("Should return the correct message for a number less than 5", function () {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
  });
  test("Should return the correct message for a number greater than 5", function () {
    let output = checkFive(6);
    expect(output).toEqual("6 is greater than 5.");
  });

  test("Should return the correct message for a number equal to 5", function () {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
  });
});