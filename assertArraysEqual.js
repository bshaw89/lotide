const eqArrays = function(arr1, arr2) {
 /* if (arr1.length !== arr2.length) {
    return false;
  } */
  for (let i = 0; i < arr1.length; i++) {
   // console.log(arr1[i]);
   if (arr1[i] !== arr2[i]) {
    return false;
   }
  }
  return true;
}

// 

const assertArraysEqual = function(arr1, arr2) {
 // console.log(eqArrays());

 if(eqArrays(arr1, arr2)) {
   //display some positive message affirming the match
   console.log("It's true.");
 } else {
   //the opposite
    console.log("It's not true.");
  }
}

assertArraysEqual([1,2,3,4], [1,2,3])