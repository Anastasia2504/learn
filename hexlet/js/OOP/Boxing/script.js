typeof 'hexlet'; // "string"
const name = new String('hexlet');
typeof name; // "object"
console.log(name); // "hexlet"
// const date = moment(); // возвращает объект описывающий текущую дату
// // с этой датой можно делать всякое
// date.startOf('day').fromNow(); // "a day ago"

// Хитрость в том, что оператор `+` приводит к распаковке
// valueOf возвращает текущий timestamp
// +date; // 1578624487377

// Использование объекта arguments
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
function calcArg() {
  for(let i of arguments) {
    console.log(i);
  }
  return arguments.length;
}
console.log(calcArg(3,5,7));

function magic() {
  let arr = arguments;
  let sum = 0;
    for(let value of arr) {
    sum += value;
  }
  return sum;
}
console.log(magic(1, 2));


function magic2() {
  function inner() {
    inner.value += arguments.reduce((a,e) => a + e, 0);
    return inner;
  }
  inner.value = 0;
  inner.valueOf = function() {
    return inner.value;
  }
  return inner(...arguments);
}

magic2(1,2).x(3,4).y(5,6);
let res1 = magic2(1,2);
res1.x(3,4).y(5,6);
let res2 = res1.x(3,4);
res2.y(5,6);


magic2(1,2)(3,4)(5,6);
let res1 = magic2(1,2);
res1(3,4)(5,6);
let res2 = res1(3,4);
res2(5,6);


((1 + 2) + 3) + 4;


function magic3(...rest) {
  function inner() {
    return magic3(inner.value, ...arguments);
  }
  inner.valueOf = function() {
    return inner.value;
  }
  inner.value = rest.reduce((a,e) => a + e);
  return inner;
}
