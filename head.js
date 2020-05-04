const head = function(arrFirst) {
  let first = [];
  first = arrFirst[0];
  // console.log(String(first));
  return first;
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;