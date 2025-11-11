/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    if (start < 2 || nums[end] !== nums[start - 2]) {
      nums[start] = nums[end];
      start++;
    }
  }
  return start;
};
