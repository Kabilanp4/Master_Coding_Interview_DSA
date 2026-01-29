/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    max = Math.max(max, candies[i]);
  }
  for (let j = 0; j < candies.length; j++) {
    if (candies[j] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
