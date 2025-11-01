/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i + k - 1] - nums[i];
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff === Infinity ? 0 : minDiff;
};

const result = minimumDifference([90], 1);
console.log("Minimum difference is : ", result);
