// функция-предикат определяет, является ли число num четным
function isEven(num) {
  num % 2 === 0;
} 

// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

num = 6;
// Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
console.log(result);

// Задание 2
testScore = 10;
res = testScore < 10 ? 'bad' : 'good';
console.log(res);

// Задание 3
const finalGrade = (exam, projects) => {
  if(exam > 90 || projects > 10) {
    return 100;
  }
  else if(exam > 75 && projects >= 5) {
    return 90;
  }
  else if(exam > 50 && projects >= 2) {
    return 75;
  }
  else {
    return 0;
  }
}
console.log(finalGrade(100, 12));
console.log(finalGrade(80, 6));
console.log(finalGrade(65, 6));