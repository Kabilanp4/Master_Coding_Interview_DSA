function removeElement(nums, val) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  console.log("numsArr", nums);
  return slow;
}
const len = removeElement([2], 3);
console.log("length ", len);
