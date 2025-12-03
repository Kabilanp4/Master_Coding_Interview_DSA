function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;
  while (left < right) {
    let maxArea = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, maxArea);
    if (left < right) {
      left++;
    } else {
      right--;
    }
  }
  return max === -Infinity ? 0 : max;
}
const maxVal = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("Max Area", maxVal);
