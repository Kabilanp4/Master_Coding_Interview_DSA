function ReverseString(str) {
  //   console.log(str.split("").reverse().join(""));
  const strArr = str.split("");
  console.log(strArr);
  const testArr = [];
  let len = strArr.length - 1;
  while (0 <= len) {
    testArr.push(strArr[len]);
    len--;
  }
  console.log(testArr.join(""));
}
ReverseString("kabilan");
