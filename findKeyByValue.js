// TEST FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺🔺🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//  END TEST FUNCTION

// findKeyByValue FUNCTION

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (!object[key]) {
      return undefined;
    } else if (object[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); // should FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should PASS
