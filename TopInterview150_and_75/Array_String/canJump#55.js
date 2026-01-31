/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) return false;
  }
  reachable = Math.max(reachable, i + nums[i]);
  return true;
};
const result = canJump([0, 1, 2]);
console.log("result", result);
