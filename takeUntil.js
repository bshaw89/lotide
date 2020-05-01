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

// will take two parameters:
// 1. the array to work with
// 2. the callback 
// will return a slice of the array with elements taken from the beginning.
// should keep going until the callback returns a truthy value
// the callback should only be provided one value: the item in the array


const takeUntil = function(array, callback) {
  // define a variable to store the new array
  // make a loop that goes over each element of the array
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } 
    results.push(item);
    
      // if (!callback(item)) {
    // results.push(item);
    // } else {
    //   return results;
    // }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// console.log(takeUntil());
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// example input

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // should return TRUE
assertArraysEqual(results2, ["I've", "been", "to", "Hollywand"]); // should return not true
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5]); // should return not true
