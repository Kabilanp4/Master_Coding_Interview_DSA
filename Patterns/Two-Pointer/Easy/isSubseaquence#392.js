/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  let slow = 0;
  let slowIdx = 0;
  for (let fast = 0; fast < t.length; fast++) {
    if (t[fast] === s[slow] && slowIdx <= fast) {
      slowIdx = fast;
      slow++;
    }
  }
  return s.length === slow;
};
