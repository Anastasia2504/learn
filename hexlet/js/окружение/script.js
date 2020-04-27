// Под лексической областью видимости можно понимать просто механизм поиска значений: смотрим в текущей области, если нет — идём на уровень выше, и так далее. Слово «лексический» означает, что видимость задаётся исключительно текстом программы, исходным кодом. То есть можно смотреть на программу, не запуская её, и понять область видимости в любой точке.
// замыкание-это запись, хранящая функцию [a] вместе с окружением. среда является отображением, связывающим каждую свободную переменную функции (переменные, которые используются локально, но определены в заключительной области) со значением или ссылкой, к которой было привязано имя при создании закрытия.
// Область видимости (scope) компонентов — это местоположение, где эти компоненты доступны.
// Компоненты, созданные снаружи функций, инструкций с if, циклов и так далее, находятся в глобальной области видимости
// Фигурные скобки { } задают новую локальную область видимости
const createPrinter = () => {
  const name = "King";

  const printName = () => {
    console.log(name);
  }

  return printName;
}

const myPrinter = createPrinter();
myPrinter();    // King
// Это замыкание: сочетание функции и окружения, где она была заявлена.
// Функция "замкнула" в себе некоторую информацию из области видимости.
const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();
// console.log(toUpperCase("My name")); 
// let str = "My name";
// char = str[2];
// console.log(toUpperCase(char) === char);
let char;
function bigLettersCount(str){
  // BEGIN (write your solution here)
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    char = str[i];
    if(toUpperCase(char) === char) {
      count++;
    } 
  }
  return count;
  // END
};
console.log(bigLettersCount("strSDS"));

function compare(first, second) {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if(firstCount > secondCount) {
    return 1;
  } else if(firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
  
  // END
};

console.log(compare("strSDS", "strS"));