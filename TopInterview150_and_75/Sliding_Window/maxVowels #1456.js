/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let max = -Infinity;
  let start = 0;
  let count = 0;
  for (let end = 0; end < s.length; end++) {
    if (set.has(s[end])) {
      count++;
    }
    if (end - start + 1 === k) {
      max = Math.max(max, count);
      if (set.has(s[start])) {
        count--;
      }
      start++;
    }
  }
  return max === -Infinity ? 0 : max;
};
