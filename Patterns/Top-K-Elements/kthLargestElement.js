function kthLargestElement(nums, k) {
  if (nums.length === 0) return null;
  let heap = [null];
  function insert(n) {
    heap.push(n);
    if (heap.length > 2) {
      let lastInd = heap.length - 1;
      while (heap[lastInd] < heap[Math.floor(lastInd / 2)]) {
        if (lastInd >= 1) {
          [heap[Math.floor(lastInd / 2)], heap[lastInd]] = [
            heap[lastInd],
            heap[Math.floor(lastInd / 2)],
          ];
          if (Math.floor(lastInd / 2) > 1) {
            lastInd = Math.floor(lastInd / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  function removeSmallest() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);

      let i = 1;
      while (true) {
        let left = 2 * i;
        let right = 2 * i + 1;
        let smallestInd = i;
        if (left < heap.length && heap[left] < heap[smallestInd]) {
          smallestInd = left;
        }
        if (right < heap.length && heap[right] < heap[smallestInd]) {
          smallestInd = right;
        }
        if (smallestInd === i) break;
        [heap[i], heap[smallestInd]] = [heap[smallestInd], heap[i]];
        i = smallestInd;
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
  for (n of nums) {
    insert(n);
    if (heap.length > k + 1) {
      removeSmallest();
    }
  }
  return heap[1];
}

const kthLargestEle = kthLargestElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log("Kth largest element : ", kthLargestEle);
