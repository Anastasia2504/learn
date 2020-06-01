// Конструктор 
// Реальное устройство будет значительно сложнее
// файл: company.js

// Конструктор (в общем смысле этого слова)
// Реальное устройство будет значительно сложнее
// файл: company.js

const make = (name, website) => {
  return {
    name,
    website,
    getName() {
      return this.name;
    },
    getWebsite() {
      return this.website;
    },
  };
}

// Селекторы


// const company2 = make('Hexlet', 'https://hexlet.io');
// console.log(getName(company)); // Hexlet

// Не забываем что нам нужны обычные, а не стрелочные функции!

function getName2() {
  return this.name;
};

function getWebsite2() {
  return this.website;
};

// С точки зрения использования ничего не поменялось, но зато перестали копироваться функции.
const make2 = (name, website) => {
  return {
    name,
    website,
    getName2,
    getWebsite2,
  };
}
const getName = (company) => Company.name;
const getWebsite = (company) => Company.website;
// конструктор
// Такую функцию принято называть конструктором (хотя технически это обычная функция с контекстом)
// Конструкторы пишутся с заглавной буквы
function Company(name, website) {
  // Такую функцию нельзя вызвать просто так, потому что тут есть this
  this.name = name;
  this.website = website;
  // Методы по прежнему определены снаружи как обычные функции
  this.getName = getName;
  this.getWebSite = getWebsite;
}
const company = new Company('Hexlet', 'https://hexlet.io');

// console.log(company.getName());

// Специальный синтаксис создания массивов
// Массивы это объекты, вспомните свойство length
const numbers = [10, 3, -3, 0]; // литерал

// Объектный способ создания через конструктор
// Результат ниже эквивалентен тому что происходит выше
// const numbers = new Array(10, 3, -3, 0);

// У дат нет литералов, они создаются как объекты
const date = new Date('December 17, 1995 03:24:00');
// У дат очень много методов
date.getMonth(); // 11

// Так можно создавать даже функции
// Последний аргумент это тело, все предыдущие – аргументы
const sum = new Function('a', 'b', 'return a + b');
sum(2, 6); // 8

// Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами, представляющими координаты на плоскости x и y.
function Point(x, y) {
  return {
  x: x,
  y: y,
  getX() {
    return this.x;
  },
  getY() {
    return this.y;
  },
  }
}
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

// Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.
function Segment(beginPoint, endPoint) {
  return {
    beginPoint: beginPoint,
    endPoint: endPoint,
    getBeginPoint() {
      return this.beginPoint;
    },
    getEndPoint() {
      return this.endPoint;
    }

  }
}

// Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).
// Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).
function reverse(segment) {
  let b = segment.getEndPoint();
  let e = segment.getBeginPoint();
  return Segment(Point(b.x, b.y), Point(e.x, e.y));
}
const segment = new Segment(beginPoint, endPoint);
console.log(reverse(segment));

// 
function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

export default function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

export default (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());

  return new Segment(newBeginPoint, newEndPoint);
};