// пузырьковая сортировка (bubble sort)
const bubbleSort = (arr) => {
  let stepsCount = arr.length - 1;
  // Объявляем переменную swapped, значение которой показывает был ли
  // совершен обмен элементов во время перебора массива
  let swapped;
  do {
    swapped = false;
    // Перебираем массив и меняем местами элементы, если предыдущий
    // больше, чем следующий
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        // temp – временная перменная для хранения текущего элемента
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // Если сработал if и была совершена перестановка,
        // присваиваем swapped значение true
        swapped = true;
      }
    }
    // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
    // в конце массива
    stepsCount -= 1;
  } while (swapped); // продолжаем, пока swapped === true

  return arr;
};

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. 
// arr.sort([compareFunction])


// map для сортировки ???
// обойти массив один раз, чтобы извлечь фактические значения, используемые для сортировки, во временный массив, отсортировать временный массив, а затем обойти временный массив для получения правильного порядка.
// массив для сортировки


// Выражение do...while создает цикл, который выполняет указанное выражение до тех пор, пока условие не станет ложным. Условие проверяется после выполнения выражения, то есть выражение выполнится как минимум один раз.
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

// Реализуйте и экспортируйте по умолчанию функцию bubbleSort, которая сортирует массив используя пузырьковую сортировку.
function bubbleSort2(a) {
  for (let i = a.length - 1; i > 0; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[j+1]) {
        let x = a[j];
        a[j] = a[j+1];
        a[j+1] = x;
      }
    }
  }
}
bubbleSort2([1,3,5,2,9,7]); 