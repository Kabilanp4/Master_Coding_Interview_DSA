function longestOnes(nums, k) {
  if (!nums.length) return 0;
  let count = 0;
  let maxCount = -Infinity;
  let start = 0;
  let i = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      i++;
    }
    while (i > k) {
      if (nums[start] === 0) i--;
      start++;
    }
    maxCount = Math.max(maxCount, end - start + 1);
  }
  return maxCount === -Infinity ? 0 : maxCount;
}

const longOnes = longestOnes(
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  3
);
console.log("longestOnes is : ", longOnes);
