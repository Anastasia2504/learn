// Замыкание
let name = "Pete";
 name = "John";

function sayHi() {
  console.log("Hi, " + name);
}


sayHi(name);

function makeWorker() {
  let name_2 = "Pete";

  return function() {
    console.log(name_2);
  };
}

let name_2 = "John";

// create a function
let work = makeWorker(name_2);

// call it
work(name_2);

// Объект лексического окружения состоит из двух частей:
// Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
// Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

// "Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».

// Все функции «при рождении» получают скрытое свойство [[Environment]], которое ссылается на лексическое окружение места, где они были созданы.

// [[Environment]]

// все функции в JavaScript являются замыканиями

// Одним из важных побочных эффектов в V8 (Chrome, Opera) является то, что такая переменная становится недоступной при отладке.
// возращает не то, что нужно


// тоже не работает
function returnCounter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
 
let counter_2 = new returnCounter();
alert( counter_2.up() ); // ?
alert( counter_2.down() );

// 






/*
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter());*/


