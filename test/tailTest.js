const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns all elements after the first", () => {
    assert.deepEqual(tail(words), [["Lighthouse", "Labs"]]);
  });
  it("returns original array after tail()", () => {
    assert.notDeepEqual(tail(words), words);
  });
});