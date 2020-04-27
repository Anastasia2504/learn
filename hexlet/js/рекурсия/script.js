// рекурсия
function factorial(n) {
  if(n === 1) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}
// 
function factorial2(num) {
  function iter(counter, acc) {
    if(counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  }
  return iter(num, 1);
}
// задание 1
function sequenceSum(begin, end) {
  if (begin > end) {
    return NaN;
  }
  if( begin === end) {
    return begin;
  }
  else {
    return begin + sequenceSum(begin + 1, end);
  }
};
console.log(sequenceSum(1, 5));
console.log(sequenceSum(4, 10));
console.log(sequenceSum(-3, 2));

// задание 2
function smallestDivisor(num) {
  if (num < 2) {
    return 1;
  }
  function del(x) {
    if (num % x == 0) {
      return x;
    } else {
      return del(x + 1);
    }
  }
  return del(2);
}

// задание 2 императивный итеративный процесс
function smallestDivisor2(num) {
  if(num < 1) {
    return NaN;
  }
  if(num === 1) {
    return 1;
  }
  let x = 2;
  while(x <= num) {
    if (num % x === 0) {
      return x;
    } else {
      x = x + 1;
      if(num % x === 0)
      return x;
    }
  }
}
console.log(smallestDivisor2(15));
console.log(smallestDivisor2(17));
console.log(smallestDivisor2(2));
console.log(smallestDivisor2(0));
console.log(smallestDivisor2(-3));