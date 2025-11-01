/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let start = 0;
  let productVal = 1;
  let count = 0;
  for (let end = 0; end < nums.length; end++) {
    productVal *= nums[end];
    while (productVal >= k) {
      productVal = productVal / nums[start];
      start++;
    }
    count = count + (end - start + 1);
  }
  return count;
};
const value = numSubarrayProductLessThanK([1, 1, 1], 1);
console.log("result", value);
