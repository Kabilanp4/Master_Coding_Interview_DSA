/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const obj = {};
  //O(n)
  for (let i = 0; i < ransomNote.length; i++) {
    obj[ransomNote[i]] = obj[ransomNote[i]] ? obj[ransomNote[i]] + 1 : 1;
  }
  let count = 0;
  //O(m)
  for (let j = 0; j < magazine.length; j++) {
    if (obj[magazine[j]]) {
      obj[magazine[j]] = obj[magazine[j]] - 1;
      if (obj[magazine[j]] === 0) {
        count++;
      }
    }
  }
  return count === Object.keys(obj)?.length;
};
//Time Complexity O(n+m)
