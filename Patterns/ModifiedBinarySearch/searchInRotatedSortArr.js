// rotated sorted arr - classic modified binary search pattern
function searchRotatedSortedArr(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);
    if (nums[mid] === target) return mid;

    //Custom logic [4,5,6,1,2,3] , target = 5
    //left sorted
    if (nums[left] <= nums[mid]) {
      // we are checking which side is sorted
      // 4 <=1
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    //right sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

const isTargetFound = searchRotatedSortedArr([4, 5, 6, 7, 0, 1, 2], 0);
console.log(isTargetFound);
