/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {};
  let indices = [];
  // Getting the Unique keys count.
  for (let i = 0; i < p.length; i++) {
    map[p[i]] = !map[p[i]] ? 1 : map[p[i]] + 1;
  }
  let mapCloned = JSON.parse(JSON.stringify(map));
  let start = 0;
  let keyCount = 0;
  // Checking the first window.
  function countChars(str) {
    for (let i = 0; i < str.length; i++) {
      map[str[i]] = map[str[i]] - 1;
      if (map[str[i]] === 0) {
        keyCount++;
      }
    }
    if (Object.keys(map).length === keyCount) {
      indices.push(start);
      keyCount = 0;
      map = mapCloned;
    }
  }
  // Remaining windows
  for (let end = p.length - 1; end < s.length; end++) {
    const subStr = s.slice(start, end + 1);
    countChars(subStr);
    start++;
  }
  return indices;
};

const anagramIndices = findAnagrams("cbaebabacd", "abc");
console.log("Anagram Indeces : ", anagramIndices);
