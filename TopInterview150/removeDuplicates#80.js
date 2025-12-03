/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 2;
  let fast = 2;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
const result = removeDuplicates([1, 1, 1, 2, 2, 3]);
console.log("count", result);
