function get(arr, ind, ans = null) {
  let l = arr.length;
  if (ind < l && ind >= 0) {
    console.log(arr[ind]);
    return arr[ind];

  } else if (ind > (l - 1) || ind < 0) {
    console.log(ans);
    return ans;
  } else if ((ind > (l - 1) || ind < 0) && ans == 'default') {
    return null;
  } else {
    return null;
  }
}
const cities = ['moscow', 'london', 'berlin', 'porto', ''];
// console.log(get(cities, 0));
// console.log(get(cities, 2, 'default'));
// console.log( get(cities, 5, false));
// console.log(get(cities, -1, 'oops'));
// console.log( get(cities, 5));
// console.log( get(cities, 4));

// console.log(getWeekends("long"));
// console.log(getWeekends("short"))


// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.
const money = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];

function calcMoney(arr, cur) {
  let new_arr = [];
  let result = 0;
  for (let i = 0; i < money.length; i++) {
    let new_elem = money[i].split(' ');
    new_arr.push(new_elem);
    for (let j = 0; j < 1; j++) {
      if (new_arr[i][0] === cur) {
        result = result + Number(new_arr[i][1]);
        console.log(new_arr[i][1]);
      } else {
        continue;
      }
    }
  }
  // console.log(result);
  return result;
}
// console.log(calcMoney(money, 'usd'));

// вариант 2

function calcMoney2(arr, currency) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    // console.log(/usd/.test(str));
    // console.log(/[0-9]/.split(str));
    // получение подстроки
    let new_str = arr[i].substr(0, 3);
    if (new_str === currency) {
      console.log(new_str);
      let count = arr[i].substr(4);
      count = Number(count);
      result = result + count;
    } else {
      continue;
    }
  }
  return result;
}
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
// console.log(calcMoney2(money, 'usd'));
// console.log(calcMoney2(money2, 'eur'));
// console.log(calcMoney2(money2, 'rub'));

// Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. 
const getSameParity = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  let new_arr = [];
  let ev, nv;
  if(arr[0] % 2 === 0) {
    ev = arr[0];
    new_arr.push(arr[0]);
  } else {
    nv = arr[0];
    new_arr.push(arr[0]);
  }
  for (let i = 1; i < arr.length; i++) {
    if( arr[0] === ev){
      if(arr[i] % 2 === 0) {
        new_arr.push(arr[i]);
      } else {
        continue;
      }
    } else {
      if(arr[i] % 2 !== 0) {
        new_arr.push(arr[i]);
      } else {
        continue;
      }
    }
  }
  return new_arr;
}

// 2 вариант
const getSameParity2 = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

export default getSameParity;
console.log(getSameParity([1, 2, 3]));
console.log(getSameParity([1, 2, 8]));
console.log(getSameParity([2, 2, 8]));