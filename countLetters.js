const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺🔺🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Ok, looks similar to the countOnly function, but counting letters of a string instead of 
// elements of an array.
// Goal: 
// 1. push letters into an object as object properties
// 2. count number of times letter appears and push into key-value of corresponding property

// Steps for looping over string:
// create variable to hold total
// loop over each element in string
// create an object key for each unique letter
// for each letter, variable += 1


const countLetters = function (letters) {
  let letterCount = {

  }
  for (let letter of letters) {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
    }
  }
  return letterCount;
}

console.log(countLetters("twentytwo"));