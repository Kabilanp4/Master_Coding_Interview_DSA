/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let zeroCount = 0;
  let max = -Infinity;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;
    if (zeroCount > 1) {
      max = Math.max(max, end - 2 + 1);
      while (start < end && zeroCount > 1) {
        if (nums[start] === 0) {
          start++;
          zeroCount--;
        }
      }
    }
  }
};
const output = longestSubarray([1, 1, 0, 1]);
console.log("output", output);
// [0,1,1,1,0,1,1,0,1]
