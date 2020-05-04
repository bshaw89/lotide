const tail = function(arrLast) {
  let last = [];
  last.push(arrLast.slice(1));
  console.log(last);
  return last;
};

module.exports = tail;