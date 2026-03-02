/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  if (!nums.length) return [];
  let oddArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddArr.push(nums[i]);
    }
  }
  let evenArr = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 0) {
      evenArr.push(nums[j]);
    }
  }
  let result = [];
  let m = 0;
  let n = 0;
  for (let k = 0; k < nums.length; k++) {
    if (k % 2 === 0) {
      result.push(evenArr[m]);
      m++;
    } else {
      result.push(oddArr[n]);
      n++;
    }
  }
  return result;
};

//Optimized solution..(Inplace Traversal)
let n = nums.length;
let i = 0;
let j = i + 1;
while (j < n) {
  if (nums[j] % 2 == 0) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i = i + 2;
  } else {
    j = j + 2;
  }
}
return nums;
