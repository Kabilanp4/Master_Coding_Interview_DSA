/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// Using Euclidean algorithm
var gcdOfStrings = function (str1, str2) {
  //Commutative Property
  if (str1 + str2 !== str2 + str1) return "";
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  let length = gcd(str1.length, str2.length);
  return str1.substring(0, length);
};

// Brute force approach
var gcdOfStrings = function (str1, str2) {
  let small = str1.length < str2.length ? str1 : str2;

  for (let len = small.length; len >= 1; len--) {
    // Length must divide both strings
    if (str1.length % len !== 0 || str2.length % len !== 0) continue;

    let candidate = small.substring(0, len);

    let repeat1 = candidate.repeat(str1.length / len);
    let repeat2 = candidate.repeat(str2.length / len);

    if (repeat1 === str1 && repeat2 === str2) {
      return candidate; // largest found first
    }
  }

  return "";
};
