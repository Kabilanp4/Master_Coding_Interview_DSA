/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
  if (!nums.length) return 0;
  let ans = 0;
  for (let slow = 0; slow < nums.length; slow++) {
    let oddSet = new Set();
    let evenSet = new Set();
    for (let fast = slow; fast < nums.length; fast++) {
      if (nums[fast] % 2 === 0) {
        evenSet.add(nums[fast]);
      } else {
        oddSet.add(nums[fast]);
      }
      if (oddSet.size === evenSet.size) {
        ans = Math.max(ans, fast - slow + 1);
      }
    }
  }
  return ans;
};
