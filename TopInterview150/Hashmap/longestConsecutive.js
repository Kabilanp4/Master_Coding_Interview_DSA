/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let maxLen = 0;
  let set = new Set();
  let start;
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let j of set) {
    if (!set.has(j - 1)) {
      start = j;
      let count = 0;
      while (set.has(start)) {
        start++;
        count++;
      }
      maxLen = Math.max(maxLen, count);
    }
  }
  return maxLen;
};
const output = longestConsecutive([0, -1]);
console.log("output", output);

// You tried your best. you are here to learn, so next time when you see the same kind of pattern you should be able to solve it.
