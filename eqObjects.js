// TEST FUNCTION 1

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

//  END TEST FUNCTION 1

// TEST FUNCTION 2

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
   return false;
 } 
 for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
  if (arr1[i] !== arr2[i]) {
   return false;
  }
 }
 return true;
}

// END TEST FUNCTION 2

// eqObjects FUNCTION ------------------------------------

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if ((object1Keys.length !== object2Keys.length)) {
    return false;
  }
  for (let key of object1Keys) {
    // console.log(object1[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TESTS 1
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
*/

// TESTS 2

const cd = { c: ["1", 4], d: ["2", 3] };
const dc = { d: ["2", 3], c: [3, "1"] };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
// assertEqual(eqArrays(eqObjects(cd, cd2)), true);
