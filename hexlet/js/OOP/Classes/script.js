// Класс
// toString
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}
theDog = new Dog('Болтушка', 'лабрадор', 'шоколадный', 'девочка');



Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
Dog.prototype.toString();
console.log(theDog.toString());

function Company2(name) {
  this.name = name;
};

Company2.prototype.toString = function toString() {
  return this.name;
}

const company2 = new Company2('Hexlet');
console.log(`I love ${company2}!`); // "I love Hexlet!"

const company3 = new Company2('Hexlet');
// JSON – это строка! 
// JSON.stringify() - распечатать объект
console.log(JSON.stringify(company2)); // => '{"name":"Hexlet"}'

// Класс
// Каждый класс должен лежать в своем собственном файле
// Идеально если имя класса совпадает с именем файла с учетом регистра
class Company { // имя класса это имя функции конструктора
  // Метод с именем constructor соответствует функции-конструктору
  // Он вызывается когда мы делаем new Company(name, email)
  constructor(good, email) {
    this.name = name;
    this.email = email;
  }

  // Это свойство getName с записанной в него обычной (function) функцией
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
}

// С точки зрения использования не меняется ничего
// const company = new Company('Hexlet', 'support@hexlet.io'); // вызывается метод constructor
// console.log(company.getName()); // => "Hexlet"

// const company = new Company();
// company.getEmployees(); // []
// // Как этого добиться? Без классов это делается прямо внутри функции-конструктора:
// function Company() {
//   this.employees = [];
// }
// // Так же поступают и в классах:
// class Company {
//   constructor() {
//     this.employees = [];
//   }
//   // остальные методы
// }

// Синтаксис «class»
class MyClass {
  // методы класса
  // constructor() { ... }
  // method1() { ... }
  // method2() { ... }
  // method3() { ... }
  // ...
}

class User2 {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// доказательство: User - это функция
// alert(typeof User2); // function

// Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.

class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// класс - это функция
console.log(typeof User); // function

// ...или, если точнее, это метод constructor
console.log(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Classes:
// Во-первых, функция, созданная с помощью class, помечена специальным внутренним свойством [[FunctionKind]]:"classConstructor". Поэтому это не совсем то же самое, что создавать её вручную.
// Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable вfalse для всех методов в "prototype".
// Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.

// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
let User3 = class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};

new User3().sayHi(); // работает, выводит определение MyClass

// alert(MyClass); // ошибка, имя MyClass не видно за пределами класса

class User5 {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}
let user = new User5("Иван");
console.log(user.name); // Иван
user = new User5(""); // Имя слишком короткое.

class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' рычит.');
  }
}































class Cart { 
  constructor(good, count) {
    this.good = good;
    this.count = count;
  }
  getCartData(){
    console.log(this.good.name);
    return this;
  }

  addItem(good, count)  {
    if(this.good.name === good.name){
     return this.count += 1;
    } else {
      new Cart(good, count);
    }
  }

  getCount(good, count) {
    let c = 0;

    c += this.count;
    return c;
  }

  setEmail(email) {
    this.email = email;
  }
}


let theBag = new Cart({ name: 'car', price: 3 }, 5);
console.log(theBag. addItem({ name: 'house', price: 3 }, 5));


class Cart2 {
  // ключ: значение
  items = [];
  // ключ addItem: значение function(good, count) {}
  addItem(good, count) {
    this.items.push({ good, count });
  }
  getItems() {
    return this.items;
  }
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  }
  getCost() {
    return _.sumBy(this.items, (item) => item.good.price * item.count);
  }
}

const cart = new Cart2();
console.log(cart);
console.log(cart.addItem({ name: 'car', price: 3 }, 5));
console.log(cart.addItem({ name: 'house', price: 10 }, 2));
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35