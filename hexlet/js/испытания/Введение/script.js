// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
function invertCase(str) {
  return str.split('').map(
    function (x) {
      if (x.toUpperCase() == x) {
        return x.toLowerCase();
      } else {
        return x.toUpperCase();
      }
    }
  ).join('');
}
// console.log(invertCase("str")) ;
// console.log(invertCase("welcome, Jhon"));
// console.log(invertCase("Hello, Sara"));

// Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.
function reverseInt(num) {
  let count;
  if (num < 0) {
    count = 1;
    num = num * (-1);
  }
  let s = String(num);
  let arr = [];
  let elem;
  for (let i = 0; i < s.length; i++) {
    elem = num % 10;
    arr.push(elem);
    num = Math.floor(num / 10);
  }
  num = arr.join("");
  num = Number(num);
  console.log(typeof (num));
  if (count === 1) {
    num = -1 * num;
  }
  return num;
}
// reverseInt(123);
// reverseInt(-123);


// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
function sumSquare(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = res + (i * i);
  }
  return res;
}

function sumSquare2(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = res + i;
  }
  return res * res;
}

function sumSquareDifference(n) {
  return sumSquare(n) - sumSquare2(n);
}
// console.log(sumSquareDifference(2));


// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки.
function isPowerOfThree(num) {
  let s = String(num);
  let count = 0;
  for (let i = 0; i < 100; i++) {
    if (num % 3 !== 0) {
      // console.log(num, count);
      return num;
    } else {
      if (num < 3) {
        break;
      }
      num = num / 3;
      count++;
    }

  }
  return count;

}
isPowerOfThree(81);

// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

function searchAngle(a, b) {
  let res = a - b;
  if (res < 0) {
    res = -1 * res;
  }
  if (res === 180) {
    return 0;
  } else if (res > 180) {
    res = 360 - res;
    return res;
  } else {
    return res;
  }
}
// console.log(searchAngle(0, 45));
// console.log(searchAngle(0, 180));
// console.log(searchAngle(0, 190));
// console.log(searchAngle(120, 240));
// console.log(searchAngle(120, 280));

// Функция Аккермана
function Acc(a, b) {
  if (a === 0) {
    return b + 1;
  } else if (a > 0 && b === 0) {
    return Acc(a - 1, 1);
  } else if (a > 0 && b > 0) {
    return Acc(a - 1, Acc(a, b - 1));
  }
}
// console.log(Acc(0, 0));
// console.log(Acc(2, 1));
// console.log(Acc(2, 3));

// Реализуйте и экспортируйте по умолчанию функцию isHappyTicket, проверяющую является ли номер счастливым.
function isHappyTicket(ticket) {
  let arr = [];
  let result1 = 0;
  let result2 = 0;
  arr = ticket.split('');
  medium = (ticket.length) / 2;
  for (i = 0; i < medium; i++) {
    result1 = result1 + Number(arr[i]);
  }
  for (i = medium; i < ticket.length; i++) {
    result2 = result2 + Number(arr[i]);
  }
  return result1 === result2;
}
// console.log(isHappyTicket('385916'));
// console.log(isHappyTicket('231002'));
// console.log(isHappyTicket('1222'));
// console.log(isHappyTicket('054702'));
// console.log(isHappyTicket("00"));

// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
function isPerfect(n) {
  let arr = [];
  let res = 0;
  if (n < 0) {
    return false;
  }
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      // arr.push(i);
      res = res + i;
    } else {

    }
  }
  return res === n;
}
// console.log(isPerfect(-3));
// console.log(isPerfect(0));
// console.log(isPerfect(6));
// console.log(isPerfect(27));
// console.log(isPerfect(8128));

// Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. 
function sumOfSquareDigits(n) {
  let s = String(n);
  let d;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    d = n % 10;
    d = d * d;
    res = res + d;
    n = Math.floor(n / 10);

  }
  // console.log(res);
  return res;
}

function isHappyNumber(n) {
  let num = sumOfSquareDigits(n);
  for (let i = 0; i < 20; i++) {
    if (num === 1) {
      return true;
    } else {
      if (num < 10) {
        return false;
      } else {
        num = sumOfSquareDigits(num);
      }
    }
  }
}
console.log(isHappyNumber(12));
console.log(isHappyNumber(7));
console.log(isHappyNumber(123));