function sortArrayByParity(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] % 2 === 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}
const sortedArr = sortArrayByParity([3, 1, 2, 4]);
console.log("SortedArr", sortedArr);
