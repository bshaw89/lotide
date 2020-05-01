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
     console.log("True 🟢");
   } else {
     //the opposite
      console.log("Not true 🔴");
    }
  }


// function will take in two arguments:
// 1. An array to map
// 2. A callback function
// the map function will return a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // should return TRUE
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should return TRUE
assertArraysEqual(results1, ['g', 'c', 't', 'm']); // should return FALSE
assertArraysEqual(map(words, word => word[1]), ['g', 'c', 't', 'm', 't']); // should return FALSE
assertArraysEqual(map(words, word => word[1,2]), ['g', 'c', 't', 'm', 't']); // should return FALSE
// assertArraysEqual(map(words, word => word[0,1]), ['g','r'], ['c','o'], ['t','o'], ['m','a'], ['t','o']); // should return TRUE




