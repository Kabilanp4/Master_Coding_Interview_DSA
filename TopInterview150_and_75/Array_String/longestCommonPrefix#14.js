/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // edge case
  if (!strs.length) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (first[i] !== strs[j][i]) {
        return first.substring(0, i);
      }
    }
  }
  return first;
};
// 0ms solution
if (strs.length === 0) return "";

let prefix = strs[0];

for (let i = 1; i < strs.length; i++) {
  while (strs[i].indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, prefix.length - 1);
    if (prefix === "") return "";
  }
}

return prefix;
