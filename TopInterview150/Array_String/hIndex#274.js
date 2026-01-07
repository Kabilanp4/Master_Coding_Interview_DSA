/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let start = 0;
  function count(val) {
    for (let j = start; j < citations.length; j++) {
      if (citations[j] >= val) {
        return citations.length - j;
      }
      //return 0;
    }
    return count;
  }
  let max = 0;
  for (let i = 0; i < citations.length; i++) {
    if (count(i + 1) >= i + 1) {
      max = Math.max(max, i + 1);
    }
  }
  return max;
};
const result = hIndex([0]);
console.log("result", result);

//Need to optimize the code tomorrow//
