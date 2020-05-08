// Filter(callback)
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
// собственная реализация
const myFilter = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    // Предикат используется только для проверки
    // Внутрь callback по очереди передается каждый элемент коллекции collection
    if (callback(item)) {
      // В результат всегда добавляется элемент исходной коллекции
      result.push(item);
    }
  }

  return result;
}

const users = [{
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

const filteredUsers = myFilter(users, (user) => user.age > 10);
// console.log(filteredUsers);

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1)
    return false;
  else if (num === 2)
    return true;
  else {
    for (let i = 2; i < num; i++)
      if (num % i === 0)
        return false;
    return true;
  }
}

// console.log(array.filter(isPrime));

// Реализуйте и экспортируйте по умолчанию функцию getGirlFriends, которая принимает на вход список пользователей и возвращает плоский список подруг всех пользователей (без сохранения ключей). Друзья каждого пользователя хранятся в виде массива в ключе friends. Пол доступен по ключу gender и может принимать значения male или female.

function getGirlFriends(arr) {
  let res = [];
  for(let key of arr) {
    res.push(key.friends);
  }
  res = res.flat();
  let girls = res.filter((word) => {
    if(word.gender === "female") {
      return true;
    } else {
      return false;
    }
    
  });
  console.log(girls);
  return girls;
}
const friends = [{
    name: 'Tirion',
    friends: [{
        name: 'Mira',
        gender: 'female'
      },
      {
        name: 'Ramsey',
        gender: 'male'
      },
    ],
  },
  {
    name: 'Bronn',
    friends: []
  },
  {
    name: 'Sam',
    friends: [{
        name: 'Aria',
        gender: 'female'
      },
      {
        name: 'Keit',
        gender: 'female'
      },
    ],
  },
  {
    name: 'Rob',
    friends: [{
      name: 'Taywin',
      gender: 'male'
    }, ],
  },
];

console.log(getGirlFriends(friends));
// второй вариант
getGirlFriends2(users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};