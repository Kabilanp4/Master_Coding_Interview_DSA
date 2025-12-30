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
