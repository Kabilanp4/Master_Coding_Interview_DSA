/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  let maxVal = -Infinity;
  let maxKey = "";
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = !obj[nums[i]] ? 1 : obj[nums[i]] + 1;
    if (maxVal < obj[nums[i]]) {
      maxVal = obj[nums[i]];
      maxKey = nums[i];
    }
  }
  return maxKey;
};
const result = majorityElement([3, 2, 3]);
console.log("result", result);
