// Генерация строки в цикле
const coll = ['milk', 'butter', 'eggs', 'bread'];
let result = '';
for (const item of coll) {
  result += `<li>${item}</li>`;
  // либо так:
  // result = `${result}<li>${item}</li>`;
}
result = `<ul>${result}</ul>`;
// Minus:серьёзному расход памяти и может влиять на производительность


// 2 вариант
const parts = []; // переименовал для того, чтобы не менять значения переменной
for (const item of coll) {
  parts.push(`<li>${item}</li>`);
}

// const innerValue = parts.join('');
// const result = `<ul>${innerValue}</ul>`;

// Plus: Такой код проще отлаживать и анализировать внутренности.
// Массив можно дообработать, если надо, а строчку — уже нет.

// join
// \n - с новой строки
// const parts = ['JavaScript', 'PHP', 'Python'];

// const output = parts.join('\n'); // теперь каждое слово будет начинаться с новой строки

// console.log(output); // =>
// JavaScript
// PHP
// Python

function buildDefinitionList(arr) {
  let arr_dt = [];
  let arr_dd = [];
  let mydiv = document.createElement('div');
  document.body.append(mydiv);
  let x = '';
  x += '<dl>';
  for (let i = 0; i < arr.length; i++) {
    arr_dt.push(`<dt>${arr[i][0]}</dt>`);
    arr_dd.push(`<dd>${arr[i][1]}</dd>`);
    x += `<dt>${arr[i][0]}</dt>`;
    x += `<dd>${arr[i][1]}</dd>`;
  }
  x += '<dl>';
  mydiv.append(x);
  // console.log(arr_dd);
}
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
buildDefinitionList(definitions);

const buildDefinitionList2 = (arr) => {
  if (arr.length === 0) {
    return '';
  }
  let result = '';
  let arr_dt = [];
  // let x = '';
  // x += '<dl>';
  for (let i = 0; i < arr.length; i++) {
    arr_dt.push(`<dt>${arr[i][0]}</dt>`);
    // console.log(arr_dt);
    arr_dt.push(`<dd>${arr[i][1]}</dd>`);
    // x += `<dt>${arr[i][0]}</dt>`;
    // x += `<dd>${arr[i][1]}</dd>`;
  }
  // console.log(arr_dt);
  let value = arr_dt.join('');
  result = `<dl>${value}</dl>`;
  // console.log(result);
  // x += '<dl>';
  return result;
}
buildDefinitionList2(definitions);


const buildDefinitionList3 = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const definition of definitions) {
    const name = definition[0];
    const description = definition[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }
  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};


// Дана строка текста. Нужно сделать заглавной первую букву каждого слова в тексте. 
//  Решение
// Посимвольный перебор строки. Эта задачка может быть решена двумя способами. Один из которых связан с использованием конечных автоматов.
// Регулярные выражения.
// Через преобразование в массив. Этот способ тоже распадается на два. Одно решение через функции высших порядков мы рассмотрим в следующих курсах, а сейчас исследуем решение через цикл.


const capitalizeWords = (sentence) => {
  // определяем разделитель — пробел
  const separator = ' ';
  const words = sentence.split(separator);
  const capitalizedWords = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    // Функция _.upperFirst() приводит первый символ слова
    // к верхнему регистру,
    // Мы подключили библиотеку Lodash, чтобы воспользоваться этой функцией.
    // capitalizedWords[index] = _.upperFirst(word);
  }
  return capitalizedWords.join(separator);
};

// console.log(capitalizeWords('hello from malasia'));

//  случае, если строку нужно разбить по символам, а не по словам, то в метод split в качестве разделителя следует передать пустую строку (''):
const text = 'Hello Friend';

const separator = ''; // пустая строка
const chars = text.split(separator);

for (const char of chars) {
  // console.log(char);
}
// Реализуйте и экспортируйте по умолчанию функцию makeCensored, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. 

function makeCensored(text, stop) {
  let text_arr = text.split(" ");
  console.log(text_arr);
  for(let i = 0;  i < text_arr.length; i++){
    for(let j = 0;  j < text_arr.length; j++) {
      if(text_arr[i] === stop[j]){
        text_arr[i] = '$#%!';
      } else {
        continue;
      }
    }

  }
  let text_str = text_arr.join(' ');
  console.log(text_str);
}

const sentence = 'When you play the game of thrones, you win or you die';
makeCensored(sentence, ['play', 'die']);

const makeCensored2 = (text, stopWords) => {
  const words = text.split(' ');

  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(' ');
};


