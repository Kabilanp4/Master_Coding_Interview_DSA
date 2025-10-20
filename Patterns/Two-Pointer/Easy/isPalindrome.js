function isPalindrome(s) {
  const str = s?.replace(/[^a-zA-Z]/g, "");
  console.log(str.length);
  if (str.length === 0) return true;
  if (str.length < 2) return false;
  let left = 0;
  let right = str.length - 1;
  let count = 0;
  while (left <= right) {
    if (str[left].toLowerCase() === str[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
const isTrue = isPalindrome("0P");
console.log("isPalindrome", isTrue);
