/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  if (!asteroids || !asteroids.length) return [];
  let arr = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] < 0) {
      let len = arr.length - 1;
      console.log("arr len", len);
      if (arr[len] + asteroids[i] === 0) {
        arr.pop();
      } else {
        while (asteroids[i] < 0) {
          arr.push(asteroids[i]);
        }
        while (arr[len] + asteroids[i] < 0) {
          arr.pop();
          len--;
        }
        if (!arr.length) arr.push(asteroids[i]);
        console.log("arr", arr);
      }
    } else {
      arr.push(asteroids[i]);
    }
  }
  console.log("arr", arr);
  return arr;
};

// Unfinished
