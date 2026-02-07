/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let start = 0;
  let max = -Infinity;
  let zeroCount = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;
    if (zeroCount === k) {
      max = Math.max(max, end - start + 1);
      while (start <= end) {
        start++;
      }
      zeroCount--;
    }
  }
  return max === -Infinity ? 0 : max;
};
