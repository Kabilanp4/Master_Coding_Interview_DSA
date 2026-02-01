/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};
  let set = new Set(arr);
  let resultSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let val = map[arr[i]] ? map[arr[i]] + 1 : 1;
    map[arr[i]] = val;
  }
  for (const val of set) {
    if (!resultSet.has(map[val])) {
      resultSet.add(map[val]);
    } else {
      return false;
    }
  }
  return true;
};

// just to keep the streak.
