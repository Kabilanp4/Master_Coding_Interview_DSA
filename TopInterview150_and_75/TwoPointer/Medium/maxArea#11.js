/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWaterArea = -Infinity; // global solution
  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    const waterArea = (right - left) * minHeight; // width * min height // best local choice that leads to best global solution
    //console.log("water area", waterArea);
    maxWaterArea = Math.max(maxWaterArea, waterArea);
    //console.log("max area", maxWaterArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWaterArea === -Infinity ? 0 : maxWaterArea;
};
const output = maxArea([1, 1]);
console.log("output", output);

// At each step if you can decide the best local choice , then that pattern is greedy.
