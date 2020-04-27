// spread
let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
// console.log(min);

// создание новых массивов
const newArr = [...arr, 5, 6, 7];
// console.log(newArr);

// Вложенные циклы
let arr2 = [[3, 2], 5, 3, [3, 4, 2], 10].flat();
// console.log(arr2);

const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    // Array.isArray — функция-предикат стандартной библиотеки,
    // которая проверяет, является ли значение массивом.
    // См. ссылку на документацию в разделе "Дополнительные материалы". 
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

// includes() - эта функция заменяет собой цикл
// Но не забывайте что внутри все равно остается полный обход массива
[1, 10, 3].includes(10); // true

// встроенный метод concat
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// var newArray = arr.flat(depth);
let arr7 = [1, 2, [3, 4]];
arr7.flat(2); 
// console.log(arr7);

let arr5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let arr_fl = arr5.flat(Infinity);
// console.log(arr_fl);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Метод flat удаляет пустые слоты из массива:
var arr6 = [1, 2, , 4, 5];
arr6.flat();
// console.log(arr6);

// Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
// console.log(Array.isArray([1]));
// console.log(Array.isArray(null));
// console.log(Array.isArray(new Array()));

// Lodash - это библиотека, с набором полезных функций, для работы с данными, для конвертирования их из одного формата в другой, фильтрации, маппинга и других вещей.
// https://monsterlessons.com/project/series/lodash-dlya-nachinayushih

var array5 = [1, 2, null, 4, 5, false];
// console.log(_.compact(array5));


// _.uniq(array)
// Создает версию массива без дубликатов, используя SameValueZero для сравнений на равенство, в которых сохраняется только первое вхождение каждого элемента.
function getSameCount(array1, array2){
  let count = 0;
  array1 = _.uniq(array1);
  array2 = _.uniq(array2);
  // console.log(array1, array2);
  for(let i = 0; i < array1.length; i++ ) {
    for(let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
        count++;
        // console.log(count);
      } 
    }

  }
  return count;
}
function getSameCount2(array1, array2) {
  let count = 0;
  if(array1.length > array2.length) {
    count = calcElem(array1, array2, array1.length, array2.length);
    // console.log(5);
  } else if(array1.length === array2.length){
    count = calcElem(array1, array2, array1.length, array1.length);
  } else {
    count = calcElem(array1, array2, array2.length, array1.length);
  }
  return count;
}
// console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2]));
//  console.log(getSameCount([1, 1, 2, 3], [2, 3]));

//  const actual2 = getSameCount([1, 2], []);

// const actual3 = getSameCount([0], ['one', 'two']);

// const actual4 = getSameCount([5, 3, 3], ['one', 'two']);

// const actual5 = getSameCount([1, 2, 3], [2, 8, 10]);

// const actual6 = getSameCount([1, 8, 2, 3], [2, 8, 10]);

// const actual7 = getSameCount([1, 3, 2, 2], [3, 1, 1, 2]);

// const actual8 = getSameCount([1, 1, 1, 2, 3], [1, 1]);


// const actual9 = getSameCount([1, 1, 2, 3], [2, 3]);

// _.intersection([arrays])
// Создает массив уникальных значений, которые включаются во все заданные массивы, используя SameValueZero для сравнений на равенство. Порядок и ссылки на значения результатов определяются первым массивом.


function getSameCount3(array1, array2) {
  // array1 = _.uniq(array1);
  // array2 = _.uniq(array2);
  let array = _.intersection(array1, array2);
  console.log(array);
  return array.length;
}
// getSameCount([4,4], [4,4]);
// getSameCount([1, 1, 2, 3], [2, 3]);

const getSameCount5 = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = uniq(coll1);
  const uniqColl2 = uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};

// Реализуйте и экспортируйте по умолчанию функцию getIntersectionOfSortedArrays, которая принимает на вход два отсортированных массива и находит их пересечение.
function getIntersectionOfSortedArrays(arr1, arr2) {
  let result = [];
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      } else if(arr1[i] < arr2[j]) {
        break;
      }
    }
  }
  return result;
}
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]));
console.log(getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21]));
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));
console.log(getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10]));
console.log(getIntersectionOfSortedArrays([], [2]));
console.log(getIntersectionOfSortedArrays([1], []));
console.log(getIntersectionOfSortedArrays([], []));

function getIntersectionOfSortedArrays2(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while(i < arr1.length && j < arr2.length)  {
    if(arr1[i] === arr2[j]){
      result.push(arr1[i]);
      i++;
      j++;
    } else if(arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}
console.log(getIntersectionOfSortedArrays2([10, 11, 24], [-2, 3, 4]));
console.log(getIntersectionOfSortedArrays2([3, 5, 10], [10, 12, 19, 21]));
console.log(getIntersectionOfSortedArrays2([10, 11, 24], [10, 13, 14, 18, 24, 30]));