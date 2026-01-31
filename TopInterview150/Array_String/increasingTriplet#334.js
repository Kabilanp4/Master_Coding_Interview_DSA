if (!nums.length || nums.length < 3) return false;
let smallest = Infinity;
let secondSmallest = Infinity;
for (let i = 0; i < nums.length; i++) {
  if (secondSmallest < nums[i] && i > 1) {
    return true;
  }
  smallest = Math.min(smallest, nums[i]);
  if (nums[i] > smallest) {
    secondSmallest = Math.min(secondSmallest, nums[i]);
  }
}
return false;
