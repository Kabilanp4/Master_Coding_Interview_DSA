/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let slow = 0;
  let fast = 0;
  while (slow < s.length && fast < t.length) {
    if (s[slow] === t[fast]) {
      slow++;
    }
    fast++;
  }
  return slow === s.length;
};
const result = isSubsequence("axc", "ahbgdc");
console.log("result", result);
