// Необходимо реализовать функцию, которая проверяет, что парные скобки сбалансированы. То есть каждая открывающая скобка имеет закрывающую: (), ((()())). 
const checkIfBalanced = (expression) => {
  // Инициализация стека
  const stack = [];
  // Проходим по каждому символу в строке 
  for (let symbol of expression) {
    // Смотрим открывающий или закрывающий
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')') {
      // Если для закрывающего не нашлось открывающего, значит баланса нет
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};



// apply() для помещения всех элементов из второго массива в первый
// Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение 

// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет является ли эта строка сбалансированной.
function isBracketStructureBalanced(str) {
  let stack = [];
  let el;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '[':
      case '(':
      case '{':
      case '<':
        stack.push(str[i]);
        break;
      case ']':
        el = stack.pop();
        if (el !== '[') {
          return false;
        }
        break;
      case ')': // if (x === 'value1')
        el = stack.pop();
        if (el !== '(') {
          return false;
        }
        break;
      case '}': // if (x === 'value1')
        el = stack.pop();
        if (el !== '{') {
          return false;
        }
        break;
      case '>': // if (x === 'value1')
        el = stack.pop();
        if (el !== '<') {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
}


console.log(isBracketStructureBalanced('[()]]]]]]]][[[[[]]]['));
console.log(isBracketStructureBalanced('[()]'));
console.log(isBracketStructureBalanced('([)]'));
