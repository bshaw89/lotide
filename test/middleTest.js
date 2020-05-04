const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

let arr1 = [1,2];
let arr2 = [1,2,3];
let arr3 = [1,2,4,6,9];
let arr4 = [2,2,3,4,5,6];

describe("#middle", () => {
  it("returns true", () => {
    assert.deepEqual(middle(arr1), []);
  });
  it("returns not true", () => {
    assert.deepEqual(middle(arr2), [2]);
  });
  it("returns not true", () => {
    assert.notDeepEqual(middle(arr1), [1,2]);
  });
  it("returns true", () => {
    assert.deepEqual(middle(arr3), [4]);
  });
  it("returns true", () => {
    assert.deepEqual(middle(arr4), [3,4]);
  });
});