const generateSumFinder = () => {
  const sum = (a, b) => a + b;     // создали функцию
  return sum;                      // и вернули её
};

const sum = generateSumFinder();   // sum теперь — функция, которую вернула функция generateSumFinder // 6                 // sum складывает числа

const check = (a, b) => {
  return sum(a, b) * 3;
}
const sum2 = x => y => x + y;
// sum(1)(5);
const secret = 'qwerty';
// Возвращается предикат.
const savePassword = password => passwordForCheck => password === passwordForCheck;
const isCorrectPassword = savePassword(secret);

// Теперь можно проверять
// console.log(isCorrectPassword('wrong password')); // => false
// console.log(isCorrectPassword('qwerty')); // => true

const x = 7;
const f = () => () => () => x;
// console.log(f()()()); // => 7

const getIncreasedNumFunction = multiplier => num => num * multiplier;

function flip(func) {
 return function name(a, b) {
    return  func(b, a);
 }
}
const wop = flip(Math.pow);
console.log(wop(3,2));
// export default (f) => (a, b) => f(b, a);

