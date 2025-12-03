/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (!s || !t) return false;
  let start = s.length - 1;
  for (let end = t.length; 0 < end; end++) {
    if (s[start] !== t[end] && s[start + 1] !== "#" && t[end + 1] !== "#") {
      return false;
    }
    start++;
  }
  return true;
};
const result = backspaceCompare("ab#c", "ad#c");
console.log("TrueOrFals : ", result);
