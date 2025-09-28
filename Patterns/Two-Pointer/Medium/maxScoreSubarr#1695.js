function maximumUniqueSubarray(nums) {
  let start = 0;
  let sum = 0;
  let maxScore = -Infinity;
  let set = new Set();
  for (let end = 0; end < nums.length; end++) {
    sum = sum + nums[end];
    while (set.has(nums[end])) {
      sum = sum - nums[start];
      set.delete(nums[start]);
      start++;
    }
    set.add(nums[end]);
    maxScore = Math.max(sum, maxScore);
  }
  return maxScore === -Infinity ? sum : maxScore;
}
const maxScore = maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]);
console.log("Max score is ", maxScore);
