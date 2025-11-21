/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums.length || k === 0) return nums;
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  k = k % nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};
const rotatedArr = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log("result", rotatedArr);

//Expected is [3,1,2]

//[3,1,2] when we rotate 3 times gives the original so need to rotate like this k%arr.length.
