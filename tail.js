// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺🔺🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrLast) {
  let last = [];
  last.push(arrLast.slice(1));
  console.log(last);
  return last;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!