/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let count = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }
  for (let j = 0; j < t.length; j++) {
    map[t[j]] = map[t[j]] - 1;
  }

  const keys = Object.keys(map);
  for (let k = 0; k < keys.length; k++) {
    if (map[keys[k]] === 0) {
      count++;
    }
  }
  return Object.keys(map)?.length === count;
};
const result = isAnagram("nagaram", "anagramm");
console.log("result", result);
