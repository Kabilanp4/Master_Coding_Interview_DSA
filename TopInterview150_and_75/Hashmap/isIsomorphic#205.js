/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (
      (mapS[s[i]] && mapS[s[i]] !== t[i]) ||
      (mapT[t[i]] && mapT[t[i]] !== s[i])
    ) {
      return false;
    }

    mapS[s[i]] = t[i];
    mapT[t[i]] = s[i];
  }
  return true;
};
const result = isIsomorphic("badc", "baba");
console.log("result", result);
