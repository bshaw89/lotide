const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  // console.log(eqArrays());
 
  if(eqArrays(arr1, arr2)) {
    //display some positive message affirming the match
    console.log("True 🟢");
  } else {
    //the opposite
     console.log("Not true 🔴");
   }
 }



module.exports = assertArraysEqual;