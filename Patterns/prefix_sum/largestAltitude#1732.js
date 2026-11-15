/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let preSum = 0;
  let max = 0;
  for (let i = 0; i < gain.length; i++) {
    preSum += gain[i];
    max = Math.max(max, preSum);
  }
  return max;
};
