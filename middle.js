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
 };

 console.log(middle([1,2]));


 module.exports = middle;