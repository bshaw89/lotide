const eqArrays = function(arr1, arr2) {
  /* if (arr1.length !== arr2.length) {
     return false;
   } */

   // 1 2
   // 1 2 3
   if (arr1.length !== arr2.length){
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
 
 // 
 
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

 // if array.length % 2 === 0, return middle two numbers (array.length / 2 ?)
 // return middle of array by dividing by 2?
 // if array.length % 2 !== 0, return middle number
 // if array.length < 3, return empty array

 
 
 const middle = function(array) {
  midFinal = [];
  let mid = array[Math.floor((array.length / 2))];
  if (array.length < 3) {
    return midFinal;
  } else if (array.length % 2 === 0) {
    midFinal = [array[Math.floor((array.length / 2 - 1))], mid];
  } else if (array.length % 2 !== 0) {
    midFinal = [mid];
  }
  return midFinal;
 }

 let arr1 = [1,2];
 let arr2 = [1,2,3];
 let arr3 = [1,2,4,6,9];
 let arr4 = [2,2,3,4,5,6];

 console.log("Sending in first array, expecting true");
 assertArraysEqual(middle(arr1), []);
 console.log("Sending in second array, expecting not true");
 assertArraysEqual(middle(arr2), [1,2,3]);
 console.log("Sending in first array, expecting not true");
 assertArraysEqual(middle(arr1), [1,2,3]);
 console.log("Sending in third array, expecting true");
 assertArraysEqual(middle(arr3), [4]);
 console.log("Sending in fourth array, expecting true");
 assertArraysEqual(middle(arr4), [3,4]);

 
 
