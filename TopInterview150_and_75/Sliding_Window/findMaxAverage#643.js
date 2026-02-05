/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let avg = -Infinity;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    if (end - start + 1 === k) {
      avg = Math.max(avg, sum / k);
      sum = sum - nums[start];
      start++;
    }
  }
  return avg === -Infinity ? 0 : avg;
};
