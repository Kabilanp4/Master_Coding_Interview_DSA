function selectionSort(arr) {
  // [4, 2, 9, 1]
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    let min = arr[i];
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      //O(n)
      if (min > arr[j]) {
        min = arr[j];
        minInd = j;
      }
    }
    let temp = arr[i];
    arr[i] = min;
    arr[minInd] = temp;
  }
  return arr;
}

const sortedArr = selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

console.log("sortedArr: ", sortedArr);

//Time Complexity -O(n^2);
//Space Complexity - O(1)

//Description

// set the min value and the min index. Then loop through it and set the min value and the min ind
// as the way you go. update the min value and the min index of the original array.
