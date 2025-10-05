function threeSumClosest(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  let abs = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (abs > Math.abs(target - sum)) {
        closestSum = sum;
        abs = Math.abs(target - sum);
      }
      if (sum < target) {
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      } else {
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      }
    }
  }
  return closestSum === Infinity ? 0 : closestSum;
}
const closestSum = threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1);
console.log("closestSum", closestSum);
