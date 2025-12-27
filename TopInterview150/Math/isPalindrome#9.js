/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let compareVal = x;
  let sum = 0;
  while (x > 0) {
    let y = x % 10;
    sum = sum * 10 + y;
    x = Math.floor(x / 10);
  }
  return compareVal === sum;
};
const result = isPalindrome(-121);
console.log("result", result);
