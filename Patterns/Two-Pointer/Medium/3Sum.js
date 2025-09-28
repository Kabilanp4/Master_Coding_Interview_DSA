//Triplets sum => num1+num2+num3 ===0;
function threeSum(nums) {
  if (nums?.length === 0) return [];
  let result = [];
  nums.sort((a, b) => a - b);
  console.log("sortedArrayValues ", nums);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    //Opposite end check , left and right should not cross each other
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
const triplets = threeSum([
  2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10,
]);
console.log("Unique triplets ", triplets);
