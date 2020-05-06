// spread и создание новых объектов
let user_test = { name: 'Vasya', married: true, age: 25 };
// Копирование объекта, а не ссылки на объект
let newUser = { ...user_test};
let user2 = { ...user_test, married: false, age: 30}

const user = { name: 'Ann', surname: 'Anova', age: 25 };
const user_family = { married: true, children: {
  daughter: 'Sara',
  son: 'Mike'
} };
let portfolio = { ...user, ...user_family};


// for in
// for..in выводит не только свойства самого объекта, но и свойства добавленные в прототип этого объекта. Эту тему мы пока не проходили и дается она позже, но если в двух словах, то объекты в JavaScript могут быть связаны друг с другом и обращение к свойству в одном объекте, может приводить к обращению (неявному) к свойству в другом объекте (прототипе).

// Object.keys(obj)
// позволяет получить массив всех ключей объекта
let keys = Object.keys(portfolio);


// Object.values(obj)
// получить массив значений свойств объекта
let values = Object.values(portfolio);


// Object.entries(obj)
// возвращает сразу ключи и значения объекта
let sum = Object.entries(portfolio);
// console.log(sum);
for (const [keys, values] of sum) {
  // console.log("key: " + keys + " , " + "values: " + values);
}
// Реализуем функцию findKeys, которая возвращает список ключей объекта, значение которых равно переданному значению
function findKeys(obj, num) {
  let arr = Object.entries(obj);
  let res = [];
  for (let [keys, values] of arr) {
    if(values === num) {
      res.push(keys);
    }
  }
  return res;

}
let list = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};
// console.log(findKeys(list, 2));


function pick(data, arr) {
  let ind = {};
  for(let i = 0; i < arr.length; i++){
    let a = arr[i];
    if(data.hasOwnProperty(a)) {
      ind[a] = data[a];
      console.log(ind);
    }
  }
  return ind;   

}
const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']);
console.log(pick(data, ['user', 'os']));