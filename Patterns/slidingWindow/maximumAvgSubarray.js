/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  } // Get the first window  O(K)
  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]; // core logic // TIme complexity is O(1) * O(n-k) times
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
const maxAvg = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log("Max avg subarra value is : ", maxAvg);

// Time complexity computation

// First window - O(K)
// Remaining windows - O(n-k+1) * O(1) = O(n-k+1)

// Final calculation => O(n)-O(n-k+1) -1(first window) = O(n)

// O(n)
