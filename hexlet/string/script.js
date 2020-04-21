// \"Bag\" - экранирование
// \n - новая строка
// str = "call \"Bag\" me"

function Reversed(str) {
  console.log(str);
  let len;
  len = str.length;
  console.log(len);
  result = "";
  while(len > 0) {
    result = result + str[len-1];
    len--;
  }
  return result;
}
console.log(Reversed('hello, world!'));
console.log(Reversed('cat'));

// простое число
function searchSimple(num) {
  if(num <= 1) {
    return false;
  }
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
      // false;
    } 
  }
  return true;
}
console.log(searchSimple(1));
console.log(searchSimple(11));
console.log(searchSimple(10));