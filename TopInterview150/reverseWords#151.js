/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.trim("").split(" ");
  let result = "";
  for (let end = str.length - 1; end >= 0; end--) {
    if (str[end] !== "") {
      result = result + (end === str.length - 1 ? "" : " ") + str[end];
    }
  }
  return result;
};
const result = reverseWords("blue  ");
console.log("result", result);
//Two pointer(Opposite ends ) solution
var reverseWords = function (s) {
  s = s.trim().split(/\s+/);

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s.join(" ");
};
