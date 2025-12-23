/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splittedS = s.split(" ");
  if (
    !pattern.length ||
    !splittedS.length ||
    pattern.length !== splittedS.length
  ) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (
      (map1.has(pattern[i]) && map1.get(pattern[i]) !== splittedS[i]) ||
      (map2.has(splittedS[i]) && map2.get(splittedS[i]) !== pattern[i])
    ) {
      return false;
    }
    map1.set(pattern[i], splittedS[i]);
    map2.set(splittedS[i], pattern[i]);
  }
  return true;
};
const result = wordPattern("abba", "dog constructor constructor dog");
console.log("result", result);
