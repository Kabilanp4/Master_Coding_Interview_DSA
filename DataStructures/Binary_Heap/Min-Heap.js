// The logic behind the 0 based index ==> The root element should not contains a parent
class Minheap {
  constructor() {
    this.heap = [null]; //Index 1 based logic
  }

  insert(num) {
    this.heap.push(num); // push element to heap
    if (this.heap.length > 2) {
      let lastInd = this.heap.length - 1; // arr index starts frm 0
      // lastElement < parent
      while (this.heap[lastInd] < this.heap[Math.floor(lastInd / 2)]) {
        // To avoid null value (index-0)
        if (lastInd >= 1) {
          [this.heap[Math.floor(lastInd / 2)], this.heap[lastInd]] = [
            this.heap[lastInd],
            this.heap[Math.floor(lastInd / 2)],
          ];
          if (Math.floor(lastInd / 2) > 1) {
            // root element doen't have a parent
            lastInd = Math.floor(lastInd / 2);
          } else {
            break;
          }
        }
      }
    }
    console.log("Heap Values : ", this.heap);
    return this.heap;
  }
  removeSmallestHasBug() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      // For efficiency
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      //Initial
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] >= this.heap[left] || this.heap[i] >= right) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        //Calculate left and right for the current index
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
  removeSmallestWorking() {
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
    } else if (heap.length === 1) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}
const minHeap = new Minheap();
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(5);
minHeap.insert(1);
minHeap.removeSmallest();

// 1-based index
//Parent => index /2
//left => 2* index
//right => 2* index +1;
