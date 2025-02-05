const arr = [1, 2, 3, 4, 5];

const temp = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      temp.push([arr[i], arr[j]]);
    }
  }
}

console.log(temp);
