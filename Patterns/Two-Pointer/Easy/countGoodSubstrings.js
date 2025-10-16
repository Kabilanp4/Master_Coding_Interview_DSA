function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let a = s[i],
      b = s[i + 1],
      c = s[i + 2];
    if (a !== b && b !== c && c !== a) {
      count++;
    }
  }
  return count;
}

const count = countGoodSubstrings("aababcabc");
console.log("count", count);
