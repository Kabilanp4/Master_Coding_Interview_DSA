/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  if (!word1) return word2;
  if (!word2) return word1;
  let result = "";
  let first = 0;
  let sec = 0;
  while (first < word1.length || sec < word2.length) {
    if (word1[first] && word2[sec]) {
      result += word1[first] + word2[sec];
    } else if (word1[first]) {
      result += word1[first];
    } else {
      result += word2[sec];
    }
    first++;
    sec++;
  }
  return result;
};

// 0ms solution
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const { writeFileSync } = require("fs");
var mergeAlternately = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const k = Math.max(len1, len2);
  const out = [];
  for (let i = 0; i < k; i++) {
    if (i < len1) out.push(word1[i]);
    if (i < len2) out.push(word2[i]);
  }
  return out.join("");
};
