// It can be used only for the sorted items...

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    console.log("Found it!!");
    return;
  } else if (target < arr[mid]) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return binarySearch(arr.slice(mid + 1), target);
  }
}
const sortedVal = binarySearch([1, 4, 6, 7, 32, 87, 90], 1);
