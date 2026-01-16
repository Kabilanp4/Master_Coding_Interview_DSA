/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (!nums.length) return 0;
  let sum = 0;
  let start = 0;
  let minLen = Infinity;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target && start <= end) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
const output = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log("output", output);
