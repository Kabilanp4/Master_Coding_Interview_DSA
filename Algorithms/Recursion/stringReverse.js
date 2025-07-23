function stringReverse(str) {
  if (str.length === 1) {
    return str;
  }
  return (
    str.charAt(str.length - 1) + stringReverse(str.substring(0, str.length - 1))
  );
}

const reversedValue = stringReverse("test");
console.log("reversedValue", reversedValue);
