//Brute force approach
var rob = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    console.log("i", i);
    sum = sum + nums[i];
  }
  console.log("sum", sum);
  return sum;
};

// DP approach
const result = rob([1, 2, 3, 1]);
console.log("result", result);
