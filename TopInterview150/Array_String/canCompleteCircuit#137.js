/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  //edge case here
  if (gas?.length !== cost?.length) return -1;

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] < 0) continue;
    let j = i;
    let tankVal = gas[i];
    let iNext = i + 1;
    while (tankVal > 0) {
      if (iNext === gas.length - 1) iNext = 0;
      if (j === gas.length - 1) j = 0;
      if (i === iNext) {
        return i;
      } else {
        tankVal = tankVal - cost[j] + gas[iNext];
      }
      iNext++;
      j++;
    }
  }
  return -1;
};
const output = canCompleteCircuit([4, 0, 1], [3, 2, 1]);
console.log("output", output);
// workaround here
// 4
