// Цикл forEach
arr.forEach((item, index) => {
  // TODO
})

// Цикл for...of
for (const item of arr) {
  await something()
}

// Клонирование массива (с таким массивом можно работать без изменения исходного массива)
const arr = [1,2,3]
const newArray = arr.map(item => item * 2)
console.log(newArray)

// Фильтрация массива по условию
const arr = [1,2,3,1]
const newArray = arr.filter(item => {
  if (item === 1) { return item }
})
console.log(newArray)

// Слияние массивов
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

// Получение свойства объекта
const { email, address } = user
console.log(email, address)

// Копирование объектов и массивов
const obj = { name: 'my name' }
const clone = { ...obj }
console.log(obj === clone)