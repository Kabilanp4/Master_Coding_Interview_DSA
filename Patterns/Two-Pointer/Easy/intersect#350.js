/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let result = [];
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      result.push(nums1[left]);
      left++;
      right++;
    } else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return result;
};
