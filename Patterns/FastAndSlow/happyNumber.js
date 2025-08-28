function happyNumber(n) {
  if (!n) return;
  function getSum(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10; // 19 % 10 => 9
      sum += digit * digit;
      num = Math.floor(num / 10); // 19 / 10 =>1.9 ==> floor(1.9)=> 1
    }
    return sum;
  }
  let slow = n;
  let fast = getSum(n);
  while (fast !== 1 && fast !== slow) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  }

  return fast === 1;
}

const isHappy = happyNumber(19);
console.log("isHappy", isHappy);
