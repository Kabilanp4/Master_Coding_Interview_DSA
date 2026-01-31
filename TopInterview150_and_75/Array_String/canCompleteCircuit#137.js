/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  //edge case here
  if (gas?.length !== cost?.length) return -1;

  let totalTank = 0;
  let currTank = 0;
  let start;
  for (let i = 0; i < gas.length; i++) {
    const gain = gas[i] - cost[i];
    currTank += gain;
    totalTank += gain;
    while (currTank < 0) {
      currTank = 0;
      start = i + 1;
    }
  }
  return totalTank >= 0 ? start : -1;
};
const result = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
console.log("output", result);
// -2 + -2+-2+3+3 = -6 + 6 = 0
