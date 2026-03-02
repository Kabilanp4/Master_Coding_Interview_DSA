/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// My try. ==> it worked but violated the time complexity constraint.
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      let i = mid;
      let j = mid;
      while (i > 0 && nums[i] === nums[i - 1]) {
        i--;
      }
      while (j < nums.length && nums[j] === nums[j + 1]) {
        j++;
      }
      return [i, j];
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [-1, -1];
};

//Optimized solution (This is great)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  function findElement(flag) {
    let start = 0;
    let end = nums.length - 1;
    ans = -1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        ans = mid;
        if (flag) end = mid - 1;
        else start = mid + 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }
  return [findElement(true), findElement(false)];
};
