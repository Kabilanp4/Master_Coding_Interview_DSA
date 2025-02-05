function hasPairWithSum(arr, sum) {
  console.log("Hello");
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      console.log(true);
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  console.log(false);
  return false;
}

hasPairWithSum([6, 4, 8, 4, 1, 7], 9);
