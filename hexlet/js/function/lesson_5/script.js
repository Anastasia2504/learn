// Declarative
function getDifference(arr1, arr2) {
  return arr1.filter((a) => arr2.indexOf(a) == -1);
}
// метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false
// arr.includes(searchElement[, fromIndex = 0])
function getDifference(items1, items2) {
  items1.filter((item) => !items2.includes(item))
};
console.log(getDifference([2, 1], [2, 3]));