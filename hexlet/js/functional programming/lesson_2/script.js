// Functional programming
// Default
function  f(x = Math.PI) {
  let sum = x + 5;
  return Math.ceil(sum);
};
function f2(x, y = Math.sqrt(x)) {
  let sum = y + x;
  return sum;
};
// console.log(f());
// console.log(f2(2));


function relSubstr(str, ind = 0, l = str.length) {
  if(l < 0) {
    l = 1;
  }
  if(ind < 0) {
    ind = 0;
  }
  if(l === 0) {
    return '';
  }
  if(ind + l > str.length) {
    l = str.length - ind;
  }
  let arr = str.split("");
  let res = [];
  for(let i = ind; i < l + ind; i++ ) {
    res.push(arr[i]);
  }
  // console.log(res.join(""));
  return res.join("");
}
relSubstr('abba', 1, 10);;
console.log(relSubstr(''));
console.log(relSubstr('abba', 4, -10));//('');
console.log(relSubstr('abba')); //('abba');
console.log(relSubstr('abba', 1, 0)); //('');
console.log(relSubstr('abba', 0, 1)); //('a');
console.log(relSubstr('abba', 1, 2)); //('bb');
console.log(relSubstr('abba', -10, 2)); //('ab');
console.log(relSubstr('abba', -1, 100)); //('abba');
console.log(relSubstr('abba', -1, -1)); //('a');
console.log(relSubstr('abba', 1, -10)); //('b');
console.log(relSubstr('abba', 1, 10)); //('bba');
console.log(relSubstr('abba', 0, 4));  //('abba');
console.log(relSubstr('abba', 0, 5));  //('abba');