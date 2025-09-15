function minimumSizeSubarr(target, nums) {
  let start = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let end = 0; end < nums.length; end++) {
    sum = sum + nums[end];
    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum = sum - nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

const subArr = minimumSizeSubarr(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
console.log("minSubarr", subArr);
