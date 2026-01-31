/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!set2.has(nums1[i])) {
      result1.push(nums1[i]);
      set2.add(nums1[i]);
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if (!set1.has(nums2[j])) {
      result2.push(nums2[j]);
      set1.add(nums2[j]);
    }
  }
  return [result1, result2];
};
