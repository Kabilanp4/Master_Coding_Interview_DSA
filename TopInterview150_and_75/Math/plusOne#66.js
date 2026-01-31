/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits.length) return [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      // if the digit is less than 9 then just increase it and return the digits arr
      digits[i] = digits[i] + 1;
      return digits;
    }
    digits[i] = 0; //if 9 then replace the number with 0
  }
  // If all the numbers are 9 in the digits arr
  digits.unshift(1); // O(n)
  return digits;
};
const output = plusOne([
  6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
]);
console.log("output", output);
