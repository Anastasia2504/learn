// От A до B
// Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае
function printAtoB(a, b) {
  // let count = a;
  if(a === b) {
    return a;
  }
  if(a < b) {
    // console.log(a);
    return printAtoB(a + 1, b);
    // console.log(count);
  } 
  if(a > b) {
    // console.log(a);
    return printAtoB(a - 1, b);
  }
}
  // console.log(printAtoB(5, 2));

  // Функция Аккермана
  
function funcAccerman(m, n) {
        // Базовый случай
        if (m == 0) {
            return n + 1;
        } 
        else if (n == 0 && m > 0) {
            return funcAccerman(m - 1, 1);
        } 
        else {
            return funcAccerman(m - 1, funcAccerman(m - 1, n - 1));
        }
}
// console.log(funcAccerman(5, 0));

function checkEven(n) {
  if(n % 2 !== 0) {
    return "No";
  }
  if(n === 0 || n === 1) {
    return "Yes";
  }
  if(n === 2) {
    return "Yes";
  }
  return checkEven(n / 2);
  
}
// console.log(checkEven(0));


// E: Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
function sumNum(n, acc = 0) {
  if(n < 1) {
    return acc;
  }
  return sumNum(Math.floor(n / 10), acc + n % 10)
}
console.log(sumNum(5638));

// F: Цифры числа справа налево
// Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
function printNum(acc, n) {
  if(n < 1) {
    return acc;
  }
  return sumNum(acc + n % 10, Math.floor(n / 10))
}
console.log(sumNum(0, 5638));
