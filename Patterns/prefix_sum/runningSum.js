/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (!nums || !nums.length) return [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};
