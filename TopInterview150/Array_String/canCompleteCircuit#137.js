/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // edge case here
  let slow = 0;
  let fast = 1;
  let length = 2 * gas.length;
  // [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]
  let tankVal = gas[0] - cost[0] + gas[1];
  while (fast < length) {
    if (slow === fast) {
      return gas[slow];
    }

    if (tankVal <= 0) {
      slow++;
    }
    tankVal = gas[fast] - cost[fast] + cost[fast + 1];
    fast++;
  }
  return -1;
};
const output = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
console.log("output", output);

// Will code later
