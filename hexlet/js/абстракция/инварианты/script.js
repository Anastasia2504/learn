// Алгоритм Евклида - нахождение наибольшего общего делителя
const gcd = (a, b) => {
  let c;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return Math.abs(a);
}
const makeRational = (numer, denom) => {
  let res = gcd(numer, denom);
  return {
    numer: numer / res,
    denom: denom / res
  };

}

const getNumer = (num) => num.numer;
const getDenom = (num) => num.denom;

let num1 = makeRational(3, 9);
num2 = makeRational(10, 3);
num3 = makeRational(8, 16);

let add = (num1, num2) => {
  let mul = num1.denom * num2.denom;
  let n = num1.numer * (mul / num1.denom) + num2.numer * (mul / num2.denom);
  let res = gcd(n, mul);
  return {
    numer: n / res,
    denom: mul / res
  }
}
console.log(add(num1, num2));

let sub  = (num1, num2) => {
  let mul = num1.denom * num2.denom;
  let n = num1.numer * (mul / num1.denom) - num2.numer * (mul / num2.denom);
  let res = gcd(n, mul);
  return {
    numer: n / res,
    denom: mul / res
  }
}
console.log(sub(num1, num2));






