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

