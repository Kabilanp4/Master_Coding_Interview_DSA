/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let str = s.trim("").split("");
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
};
const result = lengthOfLastWord("a");
console.log("result", result);
