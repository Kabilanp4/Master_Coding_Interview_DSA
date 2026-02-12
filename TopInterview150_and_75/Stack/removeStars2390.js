/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  if (!s || !s.length) return "";
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};
