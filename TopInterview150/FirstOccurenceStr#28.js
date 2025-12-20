//Sliding window fixed size problem solution

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let start = 0;
  let strSum = "";
  for (let end = 0; end < haystack.length; end++) {
    strSum += haystack[end];
    if (end - start + 1 === needle.length) {
      if (strSum === needle) {
        return start;
      }
      strSum = strSum.slice(1);
      start++;
    }
  }
  return -1;
};
const result = strStr("sadbutsad", "sad");
console.log("result", result);
