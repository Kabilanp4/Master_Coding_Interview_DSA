/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  if (!asteroids || !asteroids.length) return [];
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let stackLen = stack.length;
    if (!stackLen) stack.push(asteroids[i]);
    if (stack[stackLen - 1] < 0 && asteroids[i] < 0) stack.push(asteroids[i]);
    if (stack[stackLen - 1] < asteroids[i]) stack.push(asteroids[i]);
    // console.log("stack", stack);
    if (stack[stackLen - 1] + asteroids[i] === 0) {
      stack.pop();
      continue;
    }

    // stack = [-2,-2,1], arr = [-2,-2,1,-2]
    while (
      stack[stackLen - 1] > asteroids[i] &&
      stack[stackLen - 1] + asteroids[i] < 0
    ) {
      stack.pop();
      stackLen--;
      // console.log("latest stack", stack);
    }
    if (!stack.length || (stack[stackLen - 1] < 0 && asteroids[i] < 0)) {
      console.log("before stack", stack);
      stack.push(asteroids[i]);
      console.log("after stack", stack);
    } // tbd
  }
  return stack;
};

const output = asteroidCollision([-2, -2, 1, -2]);
console.log("output", output);

// I will resolve tomorrow.
