function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );
  return arguments;
  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}
let name = showName("Юлий", "Цезарь", "Цезарь","Цезарь", "Цезарь");

//  ... оператор расширения
let arr = [3, 5, 1];

console.log( Math.max(...arr) );

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) );

let arr_s = [3, 5, 1];
let arr_s2 = [8, 9, 15];
// слияние массивов
let merged = [0, ...arr_s, 2, ...arr_s2];
console.log(merged );

let str = "Привет";
// превращение строки в массиыв символов
console.log( [...str] ); 

// Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
// Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.


