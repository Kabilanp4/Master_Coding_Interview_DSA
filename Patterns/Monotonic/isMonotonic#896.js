/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (!nums.length) return false;
  let isIncreasing = false;
  let isDecreasing = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      isIncreasing = true;
    } else if (nums[i - 1] > nums[i]) {
      isDecreasing = true;
    }

    if (isIncreasing && isDecreasing) {
      return false;
    }
  }
  return true;
};
