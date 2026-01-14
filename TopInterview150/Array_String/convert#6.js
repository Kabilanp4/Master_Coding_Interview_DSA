/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Edge cases
  if (numRows <= 1 || (s && s.length <= numRows)) return s;
  let arr = new Array(numRows).fill("");
  let curr = 0;
  let direction = 1; // 1 - up and -1 - down
  for (let char of s) {
    arr[curr] += char; // str concatenation
    if (curr === 0) {
      direction = 1; // Down
    } else if (curr === numRows - 1) {
      direction = -1; // Up
    }
    curr += direction;
  }
  return arr.join("");
};
const result = convert("PAYPALISHIRING", 3);
console.log("output", result);

// Interesting problem
