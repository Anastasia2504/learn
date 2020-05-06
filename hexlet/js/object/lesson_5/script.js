// Деструктуризация
// Деструктуризация (дестракчеринг) — специальный синтаксис, позволяющий извлекать части из составных данных.
let point = [3, 5];
let x = point[0];
let y = point[1];
// Слева массив повторяет структуру правого массива
// но вместо значений используются идентификаторы
// они заполняются значениями, стоящими на тех же позициях в правом массиве
[x, y] = point;
let arr = [1, 2, 3, 4, 5];
[x, y, , z] = arr;


let person = {
  first: 'Tim',
  last: 'Lerdorf',
  age: 28,
  work: "manager",
  hobby: ['fishing', 'running'],
  merried: true,
  children: {
    daughter: "Lika",
    son: "Tom"
  }
};
// ключевое слово { что записывать: куда записывать }
// let { first: firstName, last: lastName, manager: manager } = person;
let {merried, first: firstName } = person;
console.log(merried);

// let {age, children: { son: name } } = person;
// console.log(name);

// Реализуйте и экспортируйте по умолчанию функцию getSortedNames, которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.
function getSortedNames(data) {
  let name_arr = [];
  for(let i = 0; i < data.length; i++) {
    let name = data[i]["name"];
    name_arr.push(name);
    
  }
  return name_arr.sort();
}
let users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];
getSortedNames(users);


