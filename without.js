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
 
// assertArraysEqual([1,2,3,4], [1,2,3])

// create variable to hold new array
// take in source array
// loop through arrays
// if the element of source !== the element of itemsToRemove, push elements into new array variable
const without = function(source, itemsToRemove) {
  let reducedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      reducedArray.push(source[i]);
    }
  }
  return console.log(reducedArray);
}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["1", 2, "3", 4], [1, 2, "3", 5]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
