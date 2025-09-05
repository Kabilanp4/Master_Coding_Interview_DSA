let last = x % 10; // extract last digit
rev = rev * 10 + last; // build reversed number
x = Math.floor(x / 10); // remove last digit
