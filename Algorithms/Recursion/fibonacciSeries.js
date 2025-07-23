function fibonacciIterative(index) {
  let current = 1;
  let prev = 0;
  let next;
  for (let i = 1; i < index; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  console.log("Index value", next);
  return next;
}

//fibonacciIterative(11);

function fibonnaciRecursive(n) {
  if (n === 0) {
    return 0;
  }
  return n - fibonnaciRecursive(n - 1);
}

const value = fibonnaciRecursive(8);
console.log("Index value is :", value);
