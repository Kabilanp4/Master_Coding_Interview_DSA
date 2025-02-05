class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []; //storing the value as an array;
    }
    this.data[address].push([key, value]);
    // console.log(this.data);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          console.log(this.data[address]);
          return currentBucket[i][1];
        }
      }
    }
    return this.data[address];
  }
  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log("data:", this.data[i]);
        keys.push(this.data[i][0][0]);
      }
    }
    console.log("Total keys", keys);
  }
}

const hashTable = new myHashTable(50);
hashTable._hash("kabilan");
hashTable.set("grapes", 1000);
hashTable.set("manogos", 5000);
// hashTable.get("grapes");
hashTable.keys();
