/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let result = new Array(n).fill(1); // constant extra space
  let leftProduct = 1;
  // Left products
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  // Right products
  let rightProd = 1;
  for (let j = n - 1; j >= 0; j--) {
    result[j] = rightProd * result[j];
    rightProd *= nums[j];
  }
  return result;
};
const result = productExceptSelf([-1, 1, 0, -3, 3]);
console.log("result", result);

// !important
//Constant extra space - new Array(existing arr size).fill(1);
// extra space result =[]. If you want the constant extra space follow the above approach.
