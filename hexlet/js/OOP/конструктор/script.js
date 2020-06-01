const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};

setTimeout(() => printer.print(), 1000);
// "hello, Hexlet"

// Контекстом является тот же объект, в котором определен метод
// Это довольно странно выглядит, но жизнь сложная штука
const bindedPrint = printer.print.bind(printer);

// Теперь можно так 
bindedPrint(); // => "hello, Hexlet"
setTimeout(bindedPrint, 1000);

// Можно вызывать bind прямо по месту
setTimeout(printer.print.bind(printer), 1000);
// "hello, Hexlet"


// Apply && Call
// func.apply(thisArg, [ argsArray])
const print = printer.print;
print.apply(printer, ['hi']); // "hi, hexlet"

// func.call([thisArg[, arg1, arg2, ...argN]])
print.call(printer, 'hi'); // "hi, hexlet"

// Если контекста нет, то передают null
const numbers = [1, 10, 33, 9, 15]
const max = Math.max.apply(null, numbers); // 33

// Особенности работы this со стрелочными функциями

const f1 = () => { // стрелочная функция
  console.log(this);
};

f1(); // undefined

function f2() { // обычная функция
  console.log(this);
}

f2(); // undefined

const obj = {
  f1, f2,
};

obj.f1(); // undefined
obj.f2(); // { f1: [Function: f1], f2: [Function: f2] }

const company = {
  f1: () => { // стрелочная функция
    console.log(this);
  },
  f2() { // обычная функция
    console.log(this);
  },
};

company.f1(); // undefined
company.f2(); // { f1: [Function: f1], f2: [Function: f2] }

const printer = {
  items: [1],
  print() { // важно что внешняя функция имеет контекст
    // Стрелочная функция определяется внутри функции print,
    // но вызывается внутри функции forEach
    this.items.forEach(() => console.log(this.items));
  },
};

printer.print(); // [1]