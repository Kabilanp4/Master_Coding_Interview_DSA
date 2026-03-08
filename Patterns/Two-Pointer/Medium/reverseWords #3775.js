/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s.length) return s;
  let sArr = s.split(" ");
  let countArr = [];
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < sArr.length; i++) {
    // console.log('sArr[i]',sArr[i]);
    let str = sArr[i].split("");
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (vowelsSet.has(str[j])) {
        count++;
      }
    }
    countArr.push(count);
  }
  function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr.join("");
  }

  for (let k = 1; k < countArr.length; k++) {
    if (countArr[0] === countArr[k]) {
      sArr[k] = reverse(sArr[k].split(""));
    }
  }
  return sArr.join(" ");
};
