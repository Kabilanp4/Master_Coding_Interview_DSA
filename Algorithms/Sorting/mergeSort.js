function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  //Split the arrays
  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log(left, right); //left =1, right=3,4
  let sortedArr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      //1<3
      sortedArr[k] = left[i]; //sort[0]=1, i=1, k=1;
      i++;
    } else {
      sortedArr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    //1<1
    sortedArr[k] = left[i];
    k++;
    i++;
  }
  while (j < right.length) {
    //0<2,1<2,
    sortedArr[k] = right[j];
    k++;
    j++;
  }
  console.log("sortedArr iteration:", sortedArr);
  return sortedArr;
}

const sortedArr = mergeSort([6, 5, 1, 4, 3]);
