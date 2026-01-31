/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
      (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
      (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
    ) {
      sum += map[s[i] + s[i + 1]];
      i++;
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
};
const result = romanToInt("DCXXI");
console.log("result", result);

//Roman numerals are usually written largest to smallest from left to right
// So
//  if (map[s[i]] < map[s[i+1]]) {
//sum -= map[s[i]]
//} else{
//sum += map[s[i]]
//}
