const assertEqual = require('./assertEqual');

// define function which compares two arrays
// loop over each array
// return true if match ===
// return false if not

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


module.exports = eqArrays;