/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return [];
  let sum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], nums[i] + sum);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

//Kadane’s Algorithm, At every index, you decide should i extend the previous subarray or
// start fresh from the current index.
