const company3 = {
  name: 'Hexlet'
};
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company3.getName = () => 'Hexlet'; // Функция возвращает строку "Hexlet"

// Вызов метода
company3.getName(); // "Hexlet"

const company = {
  name: 'Hexlet'
};
// Методы извлекающие данные из объекта называются геттерами
// Поэкспериментируйте со стрелочной функцией, убедитесь, что она работает по-другому
company.getName = function getName() {
  return this.name;
};

// this дает возможность не только читать данные, но и менять их:

const company1 = {
  name: 'Hexlet',
  getName: function getName() {
    return this.name
  }
};
const company2 = {
  name: 'Hexlet Plus'
};

company1.getName(); // "Hexlet"

// Копируется ссылка на функцию, а не сама функция
// Сама функция существует независимо от этих объектов
company2.getName = company1.getName;

const getNameCompany = function getNameCompany() {
  return this.name;
};

const companyH = {
  name: 'Hexlet'
};
getNameCompany.call(companyH); // "Hexlet"

const companyHP = {
  name: 'Hexlet Plus'
};
getNameCompany.call(companyHP); // "Hexlet Plus"

const companySecret = {
  name: 'Hexlet',
  country: {
    name: 'Finland',
    getName() {
      return this.name;
    }
  },
};

console.log(companySecret.country.getName());

// "синтаксический сахар" - это обычная функция, а не стрелочная. 
const companyEx = {
  name: 'Hexlet',
  getName() {
    return this.name;
  },
};

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

function foo(num) {
  console.log("foo: " + num);

  // следим, сколько раз вызывается функция
  foo.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// сколько раз `foo` была вызвана?
console.log(foo.count); // 4

function foo2(num) {
  console.log("foo: " + num);

  // следим, сколько раз вызывается функция
  // Заметьте: `this` теперь действительно ссылается на `foo`, это основано на том,
  // как `foo` вызывается (см. ниже)
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    // используя `call(..)` мы гарантируем что `this`
    // ссылается на объект функции (`foo`) изнутри
    foo.call(foo, i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// сколько раз `foo` была вызвана?
console.log(foo.count); // 4

function fooWrong(num) {
  console.log("foo: " + num);

  // Отслеживаем сколько раз `foo` была вызвана
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// Сколько раз была вызвана `foo`?
console.log(foo.count); // 0 -- WTF?

function make(a, b) {
  return {
    numer: a,
    denom: b,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.numer} / ${this.denom}`;
    },
    add(rat2) {
      return make(
        this.numer * rat2.denom + this.denom * rat2.numer,
        this.denom * rat2.denom
      );
      // return {
      //   numer: this.numer * rat2.denom + this.denom * rat2.numer,
      //   denom: this.denom * rat2.denom
      // };
    }
  };
};
console.log(make(3, 9).add(make(10, 3)));
