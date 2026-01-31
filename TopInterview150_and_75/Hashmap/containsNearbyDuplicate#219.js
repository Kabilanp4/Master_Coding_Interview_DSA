/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
console.log("result", result);
