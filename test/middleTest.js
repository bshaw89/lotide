const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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