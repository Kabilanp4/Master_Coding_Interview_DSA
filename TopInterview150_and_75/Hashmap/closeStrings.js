/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1?.length !== word2?.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  // Build Map1
  for (let i = 0; i < word1.length; i++) {
    const val = map1.get(word1[i]);
    map1.set(word1[i], val ? val + 1 : 1);
  }
  // Build Map2
  for (let j = 0; j < word2.length; j++) {
    const val = map2.get(word2[j]);
    map2.set(word2[j], val ? val + 1 : 1);
  }
  const keys1 = new Set([...map1.keys()]);
  const keys2 = new Set([...map2.keys()]);
  if (keys1.size !== keys2.size) return false;

  for (let key of keys1) {
    if (!keys2.has(key)) return false;
  }
  const freq1 = [...map1.values()].sort((a, b) => a - b);
  const freq2 = [...map2.values()].sort((a, b) => a - b);
  if (freq1.join("") !== freq2.join("")) return false;
  return true;
};
