/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  function getSquareValue(k) {
    let sum = 0;
    while (k > 0) {
      const val = k % 10;
      sum += val * val;
      k = Math.floor(k / 10);
    }
    return sum;
  }
  while (true) {
    if (n === 1) {
      return true;
    }

    if (map.has(n)) {
      return false;
    }
    const squaredval = getSquareValue(n);
    map.set(n, squaredval);
    n = squaredval;
  }
};
const result = isHappy(2);
console.log("result", result);
