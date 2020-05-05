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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1); // [c, d]
  const object2Keys = Object.keys(object2); // [d, c]
  if ((object1Keys.length !== object2Keys.length)) {
    return false;
  }
  for (let key of object1Keys) {
    // console.log(object1[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      console.log(result);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`True 🟢: ${inspect(actual)}`);

  } else {
    //the opposite
     console.log(`Not true 🔴: ${inspect(actual)}`);
   }
};

const cd = { c: ["1", 4], d: ["2", 3] };
const dc = { d: ["2", 3], c: [3, "1"] };

assertObjectsEqual(cd, dc);

module.exports = assertObjectsEqual;
 
