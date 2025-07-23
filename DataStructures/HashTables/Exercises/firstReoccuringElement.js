//My solution(Naive approach) ; Time & SpaceComplexity -O(n)- Linear Time
function firstReoccuringElement(arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
      console.log(arr[i]);
      return arr[i];
    } else {
      arr2.push(arr[i]);
    }
  }
  console.log(undefined);
  return undefined;
}
firstReoccuringElement([2, 5, 5, 2, 3, 2]);

//Used Approach(HashTable {}) -without builtIn method (includes())
function firstReoccuringElement2(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  console.log(undefined);
  return undefined;
}
firstReoccuringElement2([2, 3, 1, 1, 3, 2]);
