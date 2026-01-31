/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let start = 0;
  let maxLen = -Infinity;
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end]) && start < end) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLen = Math.max(maxLen, set.size);
  }
  return maxLen === -Infinity ? 0 : maxLen;
};
const output = lengthOfLongestSubstring("abcabcbb");
console.log("output", output);
