// Языки программирования по типизации принято делить на два больших лагеря — типизированные и нетипизированные (бестиповые).
// типизированные языки разделяются
// Статическая / динамическая типизация.
// Статическая: C, Java, C#;
// Динамическая: Python, JavaScript, Ruby.

// Сильная / слабая типизация
// Явная / неявная типизация.
// C имеет статическую слабую явную типизацию
// Python — динамическую сильную неявную типизацию
function calcSum(num) {
  let str;
  str = String(num);
  let a;
  let res = 0;
  for(let i = 0; i < str.length; i++) {
    a = num % 10;
    res = a + res;
    num = Math.floor(num / 10);
  }
  return res;
}

function addDigits(num) {
  let result = calcSum(num);
  while(true) {
    if(result < 10) {
      return result;
    } else {
      result = calcSum(result);
    }
   }
  return result;
}
console.log(addDigits(5));
console.log(addDigits(10));
console.log(addDigits(19));
console.log(addDigits(38));
console.log(addDigits(1259));


