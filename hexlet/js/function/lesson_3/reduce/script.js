// reduce
let users = [{
    name: 'Igor',
    age: 19
  },
  {
    name: 'Danil',
    age: 1
  },
  {
    name: 'Vovan',
    age: 4
  },
  {
    name: 'Matvey',
    age: 16
  },
];

function searchOldest(arr) {
  let res = arr.sort((a, b) => {
    return (+a.age > +b.age) ? 1 : -1;
  });
  // console.log(res);
  return res;

}
// searchOldest([1,5,2,3,7]);

function groupUsers(users) {
  let usersByAge = {};
  for (let {
      age,
      name
    } of users) {
    // Функция _.has() проверяет наличие свойства в объекте,
    // Мы подключили библиотеку Lodash, чтобы воспользоваться этой функцией.
    if (_.has(usersByAge, age)) {
      usersByAge[age].push(name);
    } else {
      usersByAge[age] = [name];
    }
  }

  // console.log(usersByAge);
}
// array.reduce(callback[, initialValue])
// accumulator - текущее значение
// currentValue - текущий элемент
// index - индекс текущего обрабатываемого элемента массива
// array - массив
// initialValue - начальное значение
let res = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
let res2 = [1, 2, 3, 4, 5].reduce(function (acc, current, index) {
  return acc * current;
}, 15);


// Разворачивание массива массивов
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function (a, b) {
  return a.concat(b);
});
// console.log(flattened);

function createBooks() {
  var friends = [{
      name: "Anna",
      books: ["Bible", "Harry Potter"],
      age: 21
    },
    {
      name: "Bob",
      books: ["War and peace", "Romeo and Juliet"],
      age: 26
    },
    {
      name: "Alice",
      books: ["The Lord of the Rings", "The Shining"],
      age: 18
    }
  ]

  // allbooks - список, который будет содержать все книги друзей + 
  // дополнительный список указанный в initialValue
  var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
  }, ["Alphabet"]);
}

// myReduce (reduce):

let myReduce = (collection, callback, init) => {
  let acc = init;
  for (const item of collection) {
    acc = callback(acc, item); // Заменяем старый аккумулятор новым
  }
  return acc;
};

let oldest = myReduce(
  users,
  (acc, user) => (user.age > acc.age ? user : acc),
  users[0],
);

function getYears(arr) {
  let res = [];
  let ind = {};
  let i = 0;
  for (let key of arr) {
    let year = +key.birthday.split('-')[0];
    res.push(year);

  }
  console.log(res);
  let years = res.reduce((a, b) => {
    if(a.hasOwnProperty(b) === true) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {})
  return years;
}
function getYears2(arr) {
  let res = [];
  for (let key of arr) {
    let year = +key.birthday.split('-')[0];
    if(key.gender === 'male'){
      res.push(year);
    } else {
      
    }
  }
  let years = res.reduce((a, b) => {
    if(a.hasOwnProperty(b) === true) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {})
  return years;
}
let getMenCountByYear = (users) => {
  let men = users.filter(({ gender }) => gender === 'male');

  let years = men.map(({ birthday }) => birthday.slice(0, 4));

  return years.reduce((acc, year) => {
    // get - получить значение 
    let count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};
let people = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(getYears(people));
console.log(getYears2(people));
console.log(getMenCountByYear(people));