
// Метод hasOwnProperty 
// принимает на вход имя проверяемого свойства и возвращает булево значение: true — если такое свойство есть в объекте, и false — если нет.
const obj = {
  color: 'red',
  height: 10,
};

console.log(obj.hasOwnProperty('color'));
function sumFruicts() {
  let bag = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
  ];
  let index = {};
  for(let i = 0; i < bag.length; i++) {
    let key = bag[i];
    if(index.hasOwnProperty(key) === true) {
      index[key] += 1;
    } else {
      index[key] = 1;
    };
  }
  return index;
}
sumFruicts();

// второй вариант
const fruitsCounter = (fruits) => {
  const statistics = {};

  for (const fruit of fruits) {
    if (statistics.hasOwnProperty(fruit)) {
      statistics[fruit] += 1;
    } else {
      statistics[fruit] = 1;
    }
  }
  return statistics;
}
let fruits = [
  'apple', 'banana', 'pear',
  'apricot', 'apple', 'banana',
  'apple', 'orange', 'pear',
];
// console.log(fruitsCounter(fruits));


// Функция has из библиотеки lodash
/* <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script> */
// _.has(object, path);
// Функция has первым параметром принимает объект, у которого проверяется свойство, вторым параметром — путь до свойства (строка или массив)


let object = { a: { b: 2 } };
// console.log(_.has(object, 'a'));

// Напишем функцию, считающую количество вхождений каждого слова в предложение.
function sumContent(content) {
  arr_content = content.split(" ");
  console.log(arr_content);
  let obj_content = {};
  for(let word of arr_content) {
    if(obj_content.hasOwnProperty(word) === true){
      obj_content[word] +=1;
    } else {
      obj_content[word] = 1;
    }
  }
  return obj_content;
}
console.log(sumContent('cat dog cat eye see cat dog'));

const getWordsCount = (content) => {
  const words = content.split(' ');
  const result = {};

  for (const word of words) {
    // Функция get извлекает из объекта значение по ключу
    // Третьим параметром функция принимает дефолтное значение
    // Оно используется тогда, когда в result нет ключа word
    result[word] = _.get(result, word, 0) + 1;
  }

  return result;
};
console.log(getWordsCount('cat dog cat eye see cat dog'));

// _.get(object, path, [defaultValue])
// ищет значение ключей 
let test = {
  name:"Tim",
  surname: "Titov",
  age: 30,
  merried: true,
  children: {
    daughter: "Mila",
    son: "Tom"
  },
  friends: ["Tola", "Kit"],
  hobby: {
    street: ["football", "bike"],
    home: ["books", "piano"]
  }
};
console.log(_.get(test, ["hobby", "friends"], [3]))

let data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

function getIn(data,arr) {
  let str = "";
  if(_.has(data, arr)) {
    for(let i = 0; i < arr.length; i++) {
      data = data[arr[i]];
    }
    console.log(data);
    return data;
  } else {
    return null;
  }
}
getIn(data, ['hosts', 1, 'name']);

// второй вариант
const getIn = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (!has(current, key)) {
      return null;
    }
    current = current[key];
  }

  return current;
};
