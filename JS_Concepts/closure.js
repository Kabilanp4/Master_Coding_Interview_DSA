function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const fn = outer();
fn(); // 1
fn(); // 2

// Definition
// A closure is created when a function is defined inside another function AND
// it uses variables from the outer function.
