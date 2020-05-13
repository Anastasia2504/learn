// (<тут определение функции>)()
((a, b) => a + b)(3, 2);
// Функии высшего порядка
// Функции, которые принимают на вход другие функции или возвращают другие функции
const identity = (v) => v; 
const sum = identity((a, b) => a + b);
sum(3, 5);

function apply(n, func, arg) {
  if (n === 0) {
    return arg;
  } 
  arg = apply(n-1, func, func(arg));
  return arg;

}
let apply2 = (count, fn, value) => (
  count === 0 ? value : apply(count - 1, fn, fn(value))
);
console.log(apply(2, Math.sqrt, 16));