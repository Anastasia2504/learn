// map
const users2 = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 18 },
  { name: 'Vovan', age: 42 },
  { name: 'Matvey', age: 36 },
];

const result = [];
for (const { name } of users2) {
  result.push(name);
}
const names = users2.map((user) => user.name);
// вариант с дестракчерингом параметра:
// const names = users.map(({ name }) => name);
// console.log(names);

let numbers = [5, 2, 3];
let newNumbers = numbers.map((number) => Math.pow(number, 2));
// console.log(newNumbers);

// Реализация
// Напишем свою собственную функцию myMap, работающую аналогично методу массива map:

const myMap = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    // Вызов переданного колбека на каждом элементе коллекции
    const newItem = callback(item);
    // Возврат из колбека добавляется в результирующий массив
    result.push(newItem);
  }

  return result;
};

const numbers2 = [5, 2, 3];
const newNumbers2 = myMap(numbers2, (number) => number ** 2);
// console.log(newNumbers2); // => [25, 4, 9]

function searchChildren(users) {
  let res = [];
  let children_arr = users.map((c) => {
    if(c.children.length !== 0) {
      let ch = c.children[0];
      res.push(ch);
    } 
    if(c.children.length == 2) {
      let ch = c.children[1];
      res.push(ch);
    }

  });
  return res;
}
let users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];
// console.log(searchChildren(users));

// правильный вариант
const getChildren = (users) => {
  const childrenOfUsers = users.map(({ children }) => children);
  return childrenOfUsers.flat();
};
console.log(getChildren(users));

