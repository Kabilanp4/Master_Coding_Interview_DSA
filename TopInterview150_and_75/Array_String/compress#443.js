/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) return "";
  let slow = 0;
  let pos = 0;
  for (let fast = 0; fast < chars.length; fast++) {
    if (chars[fast] !== chars[fast + 1]) {
      const count = String(fast - slow + 1);
      chars[pos + 1] = count;
      slow = fast;
      pos++;
    }
  }
};
const output = compress(["a", "a", "b", "b", "c", "c", "c"]);
console.log("output", output);
