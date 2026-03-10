/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  if (!nums.length) return [];
  let pos = [];
  let neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  let result = [];
  for (let j = 0; j < nums.length / 2; j++) {
    result.push(pos[j]);
    result.push(neg[j]);
  }
  return result;
};

// Most Optimal based on positioning

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  if (!nums.length) return [];
  let result = new Array(nums.length).fill(0);
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      result[neg] = nums[i];
      neg += 2;
    } else {
      result[pos] = nums[i];
      pos += 2;
    }
  }
  return result;
};
