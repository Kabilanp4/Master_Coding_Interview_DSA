function isAnagram(s, t) {
  let count = {};
  let keyCount = 0;
  for (let char of s) {
    count[char] = !count[char] ? 1 : count[char] + 1;
  } // O(s)
  for (let char1 of t) {
    count[char1] = count[char1] - 1;
    if (count[char1] === 0) {
      keyCount++;
    }
  }
  if (Object.keys(count)?.length === keyCount) {
    return true;
  }
  return false;
}
const isAnag = isAnagram("anagram", "nagaram");
console.log("isAnagram", isAnag);
