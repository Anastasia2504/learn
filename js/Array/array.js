// Методы массивов

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// arr.splice(index[, deleteCount, elem1, ..., elemN])
// Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место

let removed = arr.splice(0, 2);

console.log(removed);

let arr2 = ["t", "e", "s", "t"];
let newArr = arr2.slice(1, 3);
console.log(newArr);
let sumArr = [];
sumArr = arr.concat(removed, newArr);
console.log(sumArr);

arr2.forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
  
});


