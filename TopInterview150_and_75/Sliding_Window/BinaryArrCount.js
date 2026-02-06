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
      max = Math.max(max, end - start);
    }
  }
};
