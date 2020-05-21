// Дословно: выбросить новую ошибку
// Исключения бросают
// throw new Error('описание исключения');
// Код, следующий за этим выражением, не выполнится, а сам скрипт завершится с ошибкой
// console.log('nothing');
const capitalize = (text) => {
  const firstSymbol = text[0].toUpperCase();
  const restSymbols = text.slice(1);
  return `${firstSymbol}${restSymbols}`;
}
// assert.equal(capitalize('hello'), 'Hello');
// capitalize('tgrt');
// if (capitalize('hello') !== 'Hello') { // Если результат функции не равен ожидаемому значению
//   // Выбрасываем исключение и завершаем выполнение теста
//   throw new Error('Функция работает неверно!');
// }
// Первое утверждение (проверка на пустую строку)
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
// Второе утверждение (проверка на слово)
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }


// console.log('Все тесты пройдены!');

// Напишите тесты для функции get(obj, key, defaultValue). Эта функция извлекает значение из объекта при условии, что ключ существует. В ином случае возвращается defaultValue.
let obj = {
  key1: "value1",
  key2: ""
};


const functions2 = {
  right1: _.get,
  fail1: (obj = {}, key = null) => obj[key],
  fail2: (obj = {}, key = null, defaultValue = null) => defaultValue || obj[key],
  fail3: (obj, key) => _.get(obj, key),
};
let get = functions2.fail3;
// функция тестирования
// if(get(obj, 'key1', 'default') !== 'value1') {
//   throw new Error('Функция работает неверно!');
// }
// if(get(obj, 'key3', 'default') !== 'default') {
//   throw new Error('Функция работает неверно!');
// }
// if(get(obj, 'default') !== undefined) {
//   throw new Error('Функция работает неверно!');
// };


// _.take(array, [n=1])
// Creates a slice of array with n elements taken from the beginning
let a = _.take([1, 2, 3], 2);
// => [1, 2]

const functions = {
  right1: (items, n = 1) => items.slice(0, n),
  wrong1: (items) => items.slice(0),
  wrong2: (items, n = 1) => (n <= items.length ? items.slice(0, n) : []),
  wrong3: (items, n = 5) => items.slice(0, n),
  wrong4: (items, n = 1) => (items.length === 0 ? [0] : items.slice(0, n)),
};
let take = functions.right1;

