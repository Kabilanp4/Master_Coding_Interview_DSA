function removeDuplicates(nums) {
  if (nums.length === 0) return null;
  let slow = 0;
  let fast = 1;
  while (fast <= nums.length - 1) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}

const arrLength = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("Unique arr length ", arrLength);
