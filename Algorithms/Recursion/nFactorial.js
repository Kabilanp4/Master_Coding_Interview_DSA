// 5! = 5*4*3*2*1;
// My try
let sum;
function Recursion(n) {
  if (!sum) {
    sum = n;
  }
  if (n !== 1) {
    sum = sum * (n - 1);
  } else {
    console.log("The factorial value is:", sum);
    return sum;
  }

  Recursion(n - 1);
}

Recursion(10);

function factorial(n) {
  if (n === 2) {
    return 2; //=> base case
  }

  return n * factorial(n - 1); //--> recursive case
}

//Recursion steps

// A function calls itself.

// Each call gets its own execution context and is pushed onto the stack.

// This continues until a base case is reached.

// Then, each function call resolves (returns) and is popped off the stack.
