//Sliding window variable size pattern
function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLength = -Infinity;
  let set = new Set();
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]); // resetting the set
      start++;
    }
    set.add(s[end]);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength === -Infinity ? 0 : maxLength;
}
const length = lengthOfLongestSubstring(" ");
console.log("longest substring length", length);
