let func = (...params) => {
  // params — это массив, содержащий все
  // переданные при вызове функции аргументы
  console.log(params);
};
// ... перед именем формального параметра в определении функции обозначает rest-оператор

// func(9, 4);
// func(9, 4, 1);
// func(1, 2, 'hello', [3, 4, 5], true);

let sum = (...numbers) => {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
};
// console.log(sum(3,5));
// console.log(sum(3, 4, 5, 6, 7, 8));
// console.log(sum(12, 12, 12, 12, 12, 12,12, 3));
let func2 = (a, b, ...params) => {
  // параметр 'a' содержит первый аргумент
  console.log(`a -> ${a}`);
  // параметр 'b' содержит второй аргумент
  console.log(`b -> ${b}`);
  // params содержит все остальные аргументы
  console.log(params);
};
// func2(9, 4);
// func2(9, 4, 1);
// func2(1, 2, 'hello', [3, 4, 5], true);

// Реализуйте и экспортируйте по умолчанию функцию average, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.
function average(...arg) {
  if(arg.length === 0) {
    return null;
  }
  let sum = 0;
  for(let a of arg) {
    sum += a;
  }
  return sum / arg.length;
}
// console.log(average(0)); // 0
// console.log(average(0, 10)); // 5
// console.log(average(-3, 4, 2, 10)); // 3.25
// console.log(average()); // null

// Оператор Spread (распаковка аргументов)
const sum2 = (...numbers) => {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
};
const arrayOfNumbers = [1, 7, 4];
sum(...arrayOfNumbers); // 12
// spread-оператор раскладывает массив на аргументы.
// В отличие от rest-оператора в определении функций, spread-оператор не обязательно должен быть последним, он может располагаться в любой позиции
let arr1 = [1, 7, 4];
let arr2 = [5, 5];
// sum(1, 7, 4, 5, 5);
console.log(sum2(...arr1, ...arr2)); // 22
// sum(5, 5, 1, 7, 4);
console.log(sum2(...arr2, ...arr1)); // 22
// sum(8, 1, 7, 4, 10, 5, 5);
console.log(sum2(8, ...arr1, 10, ...arr2)); // 40



function union(...arrays) {
  if(arrays.length === 0) {
    return [];
  }
  let res = [];
  for(let i = 0; i < arrays.length; i++) {
   let arr2 = _.uniq(arrays[i]);
   res.push(...arr2);
  }
  console.log(_.uniq(res));
}
union([3, 2], [2, 2, 1]);
// union(['a', 3, false], [true, false, 3], [false, 5, 8]); // ['a', 3, false, true, 5, 8]
// union([], [], []);

// function union2(first, ...rest) => {
//   const concated = first.concat(...rest);
//   return uniq(concated);
// };

const func3 = ({ name, surname }) => {
  console.log(name);
  console.log(surname);
};
const obj = { name: 'John', surname: 'Doe' };
func3(obj);

const func = (arr) => {
  const [first, second] = arr;
  console.log(first);
  console.log(second);
}