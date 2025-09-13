/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  qsort(nums, 0, nums.length - 1);
  return nums;
};

function qsort(nums, l, r) {
  if (l >= r) {
    return;
  }

  p = nums[Math.trunc((Math.trunc((l + r) / 2) + r) / 2)];
  let i = l,
    j = r,
    t = null;

  while (i <= j) {
    while (nums[i] < p) {
      ++i;
    }
    while (nums[j] > p) {
      --j;
    }
    if (i <= j) {
      t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
      ++i;
      --j;
    }
  }

  qsort(nums, l, j);
  qsort(nums, i, r);
}
