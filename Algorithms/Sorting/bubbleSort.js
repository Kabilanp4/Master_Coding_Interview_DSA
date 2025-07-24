function bubbleSort(arr) {
  let temp;
  if (!arr) return;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Sorted arr using bubbleSort: ", arr);
  return arr;
}

bubbleSort([6, 2, 4, 3, 8, 5]);
