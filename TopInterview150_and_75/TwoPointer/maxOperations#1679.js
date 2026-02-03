/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Using Two pointer pattern
var maxOperations = function (nums, k) {
  if (!nums?.length) return 0;
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let count = 0;
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === k) {
      count++;
      start++;
      end--;
    } else if (sum < k) {
      start++;
    } else {
      end--;
    }
  }
  return count;
};

// Using hash map and complement technique
var maxOperations = function (nums, k) {
  let count = 0;
  let map = new Map();

  for (const num of nums) {
    const need = k - num;

    if (map.get(need) > 0) {
      count++;
      map.set(need, map.get(need) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return count;
};
