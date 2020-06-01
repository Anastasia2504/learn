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