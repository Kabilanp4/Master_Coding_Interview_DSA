function mergeSortedArrays(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  const sortedArr = arr1.sort((a, b) => a - b);
  console.log(sortedArr);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
