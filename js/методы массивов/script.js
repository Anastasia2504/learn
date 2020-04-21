// Методы массивов
// Переведите текст вида border-left-width в borderLeftWidth
function changeStr(str) {
  let mystr = str.replace(/[-]/g, '');
  let arr_str = str.split('');
  for(let i = 0; i < arr_str.length; ) {
      if(arr_str[i] === "-") {
          arr_str.splice(i, 1);
          arr_str[i+1].toUpperCase();
      } else {
          i++;
      }

  }
  console.log(arr_str);
  return arr_str.join('');
}
let test = changeStr("-webkit-transition");
// Аналогичное решение данной задачи
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// Фильтрация по диапазону
function filterRange(arr, a, b) {
   let newArr = [];
  // arr.sort();
  for(let i = 0; i < arr.length; i++) {
    // console.log(arr);
    if(arr[i] > a && arr[i] < b) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr = [5, 3, 8, 1, 12, 5, 6, 45, 56, 34, 4, 5, 5];
let test2 = filterRange(arr, 2, 50);
// Аналогичное решение данной задачи
function filterRange2(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// Фильтрация по диапазону "на месте" c удалением лишних элементов

function transformfilterRange(arr, a, b) {
  let newArr = [];
 // arr.sort();
 for(let i = 0; i < arr.length; ) {
   // console.log(arr);
   if(arr[i] < a || arr[i] > b) {
     arr.splice(i,1);
   } else {
     i++;
   }
 }
 
 return arr;
}
let test3 = transformfilterRange(arr, 2, 50);