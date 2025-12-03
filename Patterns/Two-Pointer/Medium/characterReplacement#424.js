function characterReplacement(s, k) {
  if (!s.length) return 0;
  let start = 0;
  let maxCount = -Infinity;
  let charCount = 0;
  for (let end = 0; end < s.length; end++) {
    if (s[start] !== s[end]) {
      charCount++;
    }
    while (charCount > k) {
      // if (k === 0) {
      //   charCount--;
      //   start = end + 1;
      // } else {
      if (s[start] !== s[end]) charCount--;
      start++;
      // }
    }
    maxCount = Math.max(maxCount, end - start + 1);
  }
  return maxCount === -Infinity ? 0 : maxCount;
}
const count = characterReplacement("AAABA", 0);
console.log("longest char length: ", count);

// I will solve this later
