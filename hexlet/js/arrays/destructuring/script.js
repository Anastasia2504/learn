// Деструктуризация
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
// a = 3; b = 1
// Переменной может быть присвоено ее значение посредством деструктуризации отдельно от объявления переменной
let c, d;
[c, d] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"
// Переменной может быть назначено значение по умолчанию, если значение, распакованное из массива, не определено.

[a=5, b=7] = [1];
// console.log(a); // 1
// console.log(b); // 7

// Parsing an array returned from a function
function f() {
  return [1, 2];
}
let e, g; 
[e, g] = f(); 
// console.log(e); // 1
// console.log(g); // 2

function f() {
  return [1, 2, 3];
}

const [a2, , b2] = f();
console.log(a2); // 1
console.log(b2); // 3

const [a3, ...b3] = [1, 2, 3];
console.log(a3); // 1
console.log(b3); // [2, 3]