// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// arr.includes(searchElement[, fromIndex = 0])
//  [1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true

function getSuperSeriesWinner(arr) {
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
   if(arr[i][0] > arr[i][1]) {
     count++;   
   } else if(arr[i][0] === arr[i][1]) {
     continue;
   } else {
    count2++; 
   }
  }
  console.log(count);
  console.log(count2);
  if (count > count2) {
    return 'canada';
  } else if (count === count2) {
    return null;
  } else {
    return 'ussr';
  }
}
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];
console.log(getSuperSeriesWinner(scores));