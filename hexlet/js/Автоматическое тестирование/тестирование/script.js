// Тестирование программ
// assert - библиотека проверок для js кода
// Example

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
assert.equal = checkExm(factorial(n), checking);
function checkExm(value1, value2) {
  return value1 === value2;
}
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);