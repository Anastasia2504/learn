// Агрегация - любые вычисления, которые строятся на основе всего набора данных, например, поиск максимального, среднего, суммы и так далее.
const calculateMax = (coll) => {
  if (coll.length === 0) {
    return null;
  }

  // Другой вариант — поставить максимальным числом отрицательную бесконечность
  // Любое число заведомо больше, чем она
  // let max = Number.NEGATIVE_INFINITY
  let max = coll[0]; // Принимаем за максимальное первый элемент
  for (let i = 1; i < coll.length; i += 1) {
    const currentElement = coll[i];
    if (currentElement > max) {
      max = currentElement;
    }
  }

  return max;
};
// Охра́на (охраня́ющее выраже́ние, охранное выражение) — логическое выражение, которое предназначено для ограничения вычислительных процессов и выбора варианта вычислений. 

console.log(calculateMax([])); // => null
console.log(calculateMax([3, 2, -10, 38, 0])); // => 38

// Поиск суммы
const calculateSum = (coll) => {
  let sum = 0;
  for (let i = 0; i < coll.length; i += 1) {
    sum += coll[i];
  }

  return sum;
};

// console.log(calculateSum([])); // => 0
// console.log(calculateSum([3, 2, -10, 38, 0])); // => 33
// Нейтральный элемент бинарной операции — элемент, который ничего не меняет в результате его использования.

const calcSum = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
      result = result + arr[i];
    }
  }
  return result;
}
console.log(calcSum([8, 9, 21, 19, 18, 22, 7]));