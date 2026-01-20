/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let currJump = 0;
  let jump = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (currJump === i && i !== nums.length - 1) {
      currJump = farthest;
      jump++;
    }
  }
  return jump;
};
