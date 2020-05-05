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

  // define an object that will hold a key for each letter in the argument
  // and each key's value must be that letter's index in the full string

  // loop through the letters of the sentence
  // create a key for each letter

  // make the value of each key the index of that key
  // log the index of a key

const letterPositions = function(sentence) {
  // sentence = sentence.replace(/\s/g, "");
  const results = {

  };
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === " ") {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
  }
}
return results;
}

// for (let i = 0; i < sentence.length; i++) {
//   if (!results[sentence[i]]) {
//     results[sentence[i]] = [i];
//     results[sentence[i]].push(i);
//   } else if (results[sentence[i]]) {
//     results[sentence[i]] += [", " + [i]];
//   }
// }

// logic to update results here
// for (let letters of sentence) {
//   console.log(sentence.indexOf(letters));
//   if (results[letters]) {
//     results[letters] = [];
//   } else {
//     results[letters] = [];
//   }
// }
// return results;

assertArraysEqual(letterPositions("hello").o, [3]); // should return NOT TRUE
assertArraysEqual(letterPositions("hello").o, [4]); // should return TRUE
assertArraysEqual(letterPositions("hello lighthouse").o, [4,12]); // should return TRUE

module.exports = letterPositions;
