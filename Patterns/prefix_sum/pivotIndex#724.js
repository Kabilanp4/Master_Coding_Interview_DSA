/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (!nums || !nums.length) return -1;

  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let prevSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const currSum = prevSum + nums[i];
    if (totalSum - currSum === prevSum) return i;
    prevSum = currSum;
  }
  return -1;
};
