function removeDuplicates(nums, k) {
  let hasSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hasSet.has(nums[i])) {
      return true;
    } else {
      hasSet.add(nums[i]);
    }
    if (hasSet.size > k) {
      hasSet.delete(nums[i - k]);
    }
  }
  return false;
}
const isIndicesAvailable = removeDuplicates([1, 2, 3, 1], 3);
console.log("isIndicesAvailable", isIndicesAvailable);
