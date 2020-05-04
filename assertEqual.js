// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === undefined) {
    console.log(`🔺🔺🔺 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺🔺🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;