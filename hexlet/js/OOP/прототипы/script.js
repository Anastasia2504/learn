const date = new Date();
// Эта функция извлекает прототип не из конструктора, а из объекта!
Object.getPrototypeOf(date); // Date {}

const numbers = [1, 2]
Object.getPrototypeOf(numbers); // [] – отображение отличается, но это массив

// Прототипы есть и у конструкторов, которые мы определяем сами
function Company(name) {
  this.name = name;
}

const company2 = new Company();
Object.getPrototypeOf(company2); // Company {}

const obj = {}; // То же самое можно сделать так: const obj = new Object();
// Это функция-конструктор из которой был получен текущий объект, в данном случае Object
obj.constructor; // [Function: Object]
// У obj нет своего собственного свойства constructor, оно пришло из прототипа
obj.hasOwnProperty('construtor') // false
obj.hasOwnProperty('name'); // false
obj.name = 'hexlet';
// Имя есть в самом объекте, потому что мы его только что добавили
obj.hasOwnProperty('name'); // true

function Company(name) {
  this.name = name;
}

// Одно и тоже полученное разными способами
// Company.prototype === Object.getPrototypeOf(new Company())

// Добавляем свойство getName (делаем его методом)
Company.prototype.getName = function getName() {
  // this по прежнему зависит от контекста в котором вызывается
  return this.name;
}

const company = new Company('Hexlet');
// Свойство доступно!
console.log(company.getName()); // => Hexlet

const company5 = new Company('Hexlet');
const company7 = new Company('Google');
company5.getName = function getName() {
  return 'Alphabet';
}
const numbers1 = [1, 3];

// // Как только выполнится этот код, все массивы, включая уже созданные, обзаведутся методом last
// Array.prototype.last = function last() {
//   // Такое обращение законно, ведь this это ссылка на сам объект, который в нашем случае массив
//   return this[this.length - 1];
// }

// numbers1.last(); // 3

// const numbers2 = [10, 0, -2];
// numbers2.last(); // -2

// // Пример замены

// Money.js
// Реализуйте абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов
function getValue() {
 return this.value;
}


function Money (value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
  this.getValue = getValue;
  this.exchangeTo = function(cur) {
    if(this.currency === cur) {
      let val = +this.value * 1.2;
      return new Money(val, 'usd');
    }
    if(this.currency !== cur) {
      let val = +this.value * 0.7;
      return  new Money(val, 'eur');
    }
  };
  this.add = function(money) {
    if(this.currency === money.currency) {
      let value3 = this.value + money.value;
      return new Money(value3, this.currency);
    } else {
      let dop = money.exchangeTo(this.currency).getValue();
      console.log(dop);
      return new Money((dop + this.value), this.currency);
    }
  };
  this.format = function() {
    return this.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
  }
}
const money1 = new Money(100);
console.log(money1);
// Возвращает значение
console.log(money1.getValue()); // 100
// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo('eur')); // 70
const money2 = new Money(200, 'eur');
console.log(money2);
money2.getValue(); // 200
const money3 = money2.add(money1);
console.log(money3);
 money3.getValue(); // 270
const money4 = money1.add(money2);
 money4.getValue(); // 340

console.log(money1.format()); // "$100.00"
money2.format(); // "€200.00"

const money5 = new Money(10000);
money5.format(); // "$10,000.00"

// BEGIN
const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.format = function format() {
  // bad design (pass undefined the function), but it is js
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  if (currency === newCurrency) {
    return new Money(this.getValue(), currency);
  }
  const newValue = this.getValue() * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
  const convertedMoney = money.exchangeTo(this.getCurrency());
  const additionalValue = convertedMoney.getValue();
  return new Money(this.getValue() + additionalValue, this.getCurrency());
};
// END
