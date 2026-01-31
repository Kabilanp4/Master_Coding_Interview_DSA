/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[citations.length - (i + 1)] >= i + 1) {
      max = Math.max(max, i + 1);
    }
  }
  return max;
};
const result = hIndex([1, 3, 1]);
console.log("result", result);

//Need to optimize the code tomorrow// - Optimized
