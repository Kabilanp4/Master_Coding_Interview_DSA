var RandomizedSet = function () {
  this.set = {};
  this.arr = [];
  return null;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.hasOwnProperty(val)) {
    return false;
  } else {
    this.set[val] = this.arr?.length;
    this.arr.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.hasOwnProperty(val)) {
    let ind = this.set[val];
    let last = this.arr[this.arr.length - 1];
    this.arr[ind] = last;
    this.arr.pop();
    this.map[last] = ind;
    delete this.set[val];
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomInd = Math.floor(Math.random() * this.arr.size);
  return this.arr[randomInd];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet();
var param_1 = obj.insert(5);
var param_2 = obj.insert(4);
var param_3 = obj.insert(5);
var param_4 = obj.remove(4);

console.log("param_3", param_3);
console.log("param_4", param_4);
