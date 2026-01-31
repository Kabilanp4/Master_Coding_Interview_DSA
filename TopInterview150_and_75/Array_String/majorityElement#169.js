/**
 * @param {number[]} nums
 * @return {number}
 */
// better solution but not O(1) space complexity.
// var majorityElement = function (nums) {
//   const obj = {};
//   let maxVal = -Infinity;
//   let maxKey = "";
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = !obj[nums[i]] ? 1 : obj[nums[i]] + 1;
//     if (maxVal < obj[nums[i]]) {
//       maxVal = obj[nums[i]];
//       maxKey = nums[i];
//     }
//   }
//   return maxKey;
// };

//Optimal solution :
var majorityElement = function (nums) {
  let count = 0;
  let candidate;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count += candidate === nums[i] ? +1 : -1;
    }
  }
  return candidate;
};
const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log("result", result);
