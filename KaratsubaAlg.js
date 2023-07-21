// In Karatsuba’s algorithm, we recursively break down each integer in half until it is less than 10 which consists of one single digit. Then we multiply two single digits together. n is the number of digits for each integer.


function multiply(x, y) {
    if (BigInt(x) < 10n && BigInt(y) < 10n) {
      return BigInt(x) * BigInt(y);
    }
  
    const xHalf = Math.floor(x.length / 2);
    const yHalf = Math.floor(y.length / 2);
  
    const a = String(x).substr(0, xHalf);
    const b = String(x).substr(xHalf);
    const c = String(y).substr(0, yHalf);
    const d = String(y).substr(yHalf);
  
    return merge(a, b, c, d);
  }
  
  function merge(a, b, c, d) {
    const n = BigInt(a.length + b.length);
    const half = n / 2n;
  
    const ac = multiply(a, c);
    const bd = multiply(b, d);
    const ad = multiply(a, d);
    const bc = multiply(b, c);
  
    return 10n ** n * ac
      + 10n ** half * (ad + bc)
      + bd;
  }
  
  const n1 = '3141592653589793238462643383279502884197169399375105820974944592';
  const n2 = '2718281828459045235360287471352662497757247093699959574966967627';
  const result = multiply(n1, n2);
  console.log(result);