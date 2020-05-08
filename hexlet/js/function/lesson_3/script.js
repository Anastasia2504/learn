// Реализуйте внутреннюю функцию takeLast, которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
function  takeLast(str, n) {
  if(str.length === 0 || n > str.length) {
    return null;
  }
  let arr = str.split('');
  arr.reverse();
  let res = [];
  for(let i = 0; i < n; i++) {
    res.push(arr[i]);
  }

  return res.join('');
}
function run(str, n) {
  return takeLast(str, n);
}
// console.log(run('power',4));
// console.log(run('hexlet', 4));

const users2 = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];
// функция сортировки
// arr.sort([compareFunction]);
// compare - callback
const compare2 = (a, b) => {
  if (a.age === b.age) {
    return 0;
  }

  return a.age > b.age ? 1 : -1;
};
users2.sort(compare2);
// console.log(users2);
// a.sort((a,b) => a - b) - механизм сортировки

// sort относится к так называемым функциям высшего порядка (higher order functions)

// Реализуйте функцию takeOldest, которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице.


function takeOldest(obj) {
}
let users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

// сортировка пузырьком
function bubbleSort(a, cmp) {
  for (let i = a.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (cmp(a[j], a[j+1]) > 0) {
        let x = a[j];
        a[j] = a[j+1];
        a[j+1] = x;
      }
    }
  }
  console.log(a);
}

const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}

function getDateNumbers(str) {
  return [
    +str.split(" ")[2], // year
    MONTHS[str.split(" ")[0]], // month
    +str.split(" ")[1].replace(",","") // day of month
  ];
}

function cmpDates(a, b) {
  let x = getDateNumbers(a.birthday);
  let y = getDateNumbers(b.birthday);

  if (x[0] > y[0]) { return 1; }
  if (x[0] < y[0]) { return -1; }
  if (x[1] > y[1]) { return 1; }
  if (x[1] < y[1]) { return -1; }
  if (x[2] > y[2]) { return 1; }
  if (x[2] < y[2]) { return -1; }
  return 0;
}

bubbleSort(users, cmpDates);
console.log(users);

function takeOldest(input, n) {
  let users = [...input];
  if(n === undefined) {
    n = 1;
  }
  bubbleSort(users, cmpDates);
  return users.splice(0, n);
}

// второй вариант
const takeOldest = (users, count = 1) => {
  const sorted = sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};