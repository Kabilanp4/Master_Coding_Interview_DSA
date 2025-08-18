function memoizedAddTo40() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Memoization happening...");
      cache[n] = n + 40; // complex computation..
      return cache[n];
    }
  };
}

const closureFunc = memoizedAddTo40();
console.log(closureFunc(3));
console.log(closureFunc(3));
