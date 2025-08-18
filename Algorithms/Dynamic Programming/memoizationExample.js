let cache = {};

function memoizedAddTo40(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Memoization happening...");
    cache[n] = n + 40; // complex computation..
    return cache[n];
  }
}

console.log(memoizedAddTo40(3));
console.log(memoizedAddTo40(3));
