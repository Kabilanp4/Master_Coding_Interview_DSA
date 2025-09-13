function sortArray(nums) {
  if (nums.length === 1) {
    return nums;
  }
  const mid = Math.floor(nums / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(sortArray(left), sortArray(right));
}

function merge(left, right) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      sortedArr[k] = right[i];
      i++;
    } else {
      sortedArr[k] = left[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    sortedArr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    sortedArr[k] = right[j];
    j++;
    k++;
  }
  return sortedArr;
}

const sorarr = sortArray([8, 32, 3, 55, 2, 1, 3, 42]);
console.log("sortedArr", sorarr);
