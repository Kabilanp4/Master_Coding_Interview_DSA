function moveZeroes(nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      let temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
      slow++;
    }
    fast++;
  }
  console.log("resultant array", nums);
}

const result = moveZeroes([1, 0, 1]);
