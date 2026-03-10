/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  if (!nums.length) return [];
  let low = [];
  let equal = [];
  let high = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) low.push(nums[i]);
    if (nums[i] === pivot) equal.push(nums[i]);
    if (nums[i] > pivot) high.push(nums[i]);
  }
  return [...low, ...equal, ...high];
};
