/*// Вычислить сумму чисел до данного
// let n = +prompt('Введите число');
function calcSum(n) {
  let sum = 0;
  for(let i = 0; i <= n; i++) {
    
    sum = sum + i;
  }
  return sum;
}
// let sum = calcSum(n);

function calcSum_2(n) {
  let sum = ((1 + n) / 2) * n;
  
  return sum;
}
// let sum_2 = calcSum(n);

// Вычислить факториал
// let a = +prompt('Number');

function calcFactorial(a) {
  let b = 1;
  for(let i = a; i > 0; i-- ) {
    
    b = i * b; 
  }
  return b;
}
// let b = calcFactorial(a);
*/

let fib = +prompt('Number');

function calcFib(fib) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= fib; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
let result = calcFib(fib);
