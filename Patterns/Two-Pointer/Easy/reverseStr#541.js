/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (s.length <= 1) return s;
  let str = s.split("");
  let slow = 0;
  for (let fast = 1; fast < str.length; fast++) {
    if (fast < k) {
      [str[slow], str[fast]] = [str[fast], str[slow]];
      slow++;
    } else {
      slow = 2 * k - 1;
    }
  }
};
const result = reverseStr("abcdefg", 2);
console.log("result", result);
