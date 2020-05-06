let user = { 
  name: 'Vasya', 
  married: true, 
  age: 25 
};
// изменение значения ключа
user.married = false;
// добавление в объект
user.surname = 'Petrov';
user["country"] = 'Canada';
user.wrongProp = 't';
// удаление элементов массива
delete user.wrongProp;
user.friends = ['Kolya', 'Petya'];
user.children = [
  { name: 'Mila', age: 1 },
  { name: 'Petr', age: 10 },
];

console.log(user);
let n = 'name';
let m = 'married';
let a = 'age';

// динамическое создание объекта
let user2 = { [n]: 'Sara', [m]: true, [a]: 28 };
console.log(user2);

let name    = 'Tim';
let married = true;
let age     = 32;

let user3 = { name, married, age };

console.log(user3);

// Задание - создать ассоциативный массив
function getJsonFileData() {
  let obj = {};
  obj = {
    "common": {
      "files": [
        "src/objects.js"
      ]
    },
    "config": {
      "outdir": "/dist"
    }
  }
}