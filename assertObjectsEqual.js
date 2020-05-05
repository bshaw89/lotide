const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if ((object1Keys.length !== object2Keys.length)) {
    return false;
  }
  for (let key of object1Keys) {
    // console.log(object1[key]);
    // if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    //   eqArrays(object1[key], object2[key])
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log("True 🟢");
  } else {
    //the opposite
     console.log("Not true 🔴");
   }
};

const cd = { c: ["1", 4], d: ["2", 3] };
const dc = { d: ["2", 3], c: [3, "1"] };

assertObjectsEqual(eqObjects(cd, dc), false);

module.exports = assertObjectsEqual;
 
