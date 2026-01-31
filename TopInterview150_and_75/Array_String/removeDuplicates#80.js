/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return nums;
  let slow = 2;
  let fast = 2;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]; // It does not matter what you leave beyond the first k elements.
      slow++;
    }
    fast++;
  }
  return slow;
};
const result = removeDuplicates([1, 1, 1, 2, 2, 3]);
console.log("count", result);

// You were very close.
