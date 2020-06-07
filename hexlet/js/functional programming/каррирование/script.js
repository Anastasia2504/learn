const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  console.log(result);
};
// const sum2 = a => b => c => a + b + c
// вызовы происходят без создания промежуточных констант
const sum2 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
const sum = (a, b, c) => a + b + c;
console.log(sum(5, 10, -2));
console.log(sum2(5)(10)(-2));

function True2() {
  return (a) => {
    return () => {
      return a;
    }
  }
}
console.log(True2()(2)());
function False2() {
  return () => {
    return (b) => {
      return b;
    }
  }
}
console.log(False2()()(2));
function If2(True) {
  return True();
};
console.log(If(True)(2)());
// Пример использования функции:
If(True)('one')('two'); // 'one'

// Передаём в функцию If функцию True, возвращается так же функция.
If(True); // (x) => () => x

// В эту функцию передаём в качестве аргумента x значение 'one'
// и делаем вызов. Получаем вложенную функцию.
If(True)('one'); // () => 'one'

// Вызываем функцию с предыдущего шага и передаём в неё 'two'.
// Это значение игнорируется, так как вложенная функция
// не принимает аргументов и возвращает значение 'one'.
If(True)('one')('two'); // 'one'

// С False функция If работает аналогично.
If(False)('one')('two'); // 'two'

// Альтернативный способ определения функций:
const True = (x) => {
  return () => {
    return x;
  };
};

const False = () => {
  return (y) => {
    return y;
  };
};

const If = (f) => {
  return f;
};







const IfCheck = (a) => {
  return (b) => {
    return (c) => {
      return (a == 'True') ? b : c;
    };
  };
};
IfCheck('True')('one')('two');