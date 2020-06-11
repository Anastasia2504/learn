// Реализуйте и экспортируйте по умолчанию функцию buildSnailPath, которая принимает на вход матрицу и возвращает список элементов матрицы по порядку следования от левого верхнего элемента по часовой стрелке к внутреннему. Движение по матрице напоминает улитку:
// Улитка
function buildSnail2(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
      res.push(arr[i]);
    } else {
      res.push(arr[i].reverse());
    }
  }
  console.log(res);
  console.log(_.flatten(res));
}
function buildSnail3(arr) {
  let res = [];
  res.push(arr[0]);
  for(let val of arr) {
    // console.log(val);
    res.push(val[val.length - 1]);
  }
  // res.push(arr[);
  // console.log(arr[arr.length-1].pop().reverse());
}

function buildSnail(arr) {
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }
  let r1 = 0;
  let r2 = arr.length - 1;
  let c1 = 0;
  let c2 = arr[0].length - 1;
  let res = [];
  while (true) {
    // ->
    for(let c = c1; c <= c2; c++) {
      res.push(arr[r1][c]);
    }
    r1++; 
    if(r1 > r2) {
      break;
    }
    // v
    for(let r = r1; r <= r2; r++) {
      res.push(arr[r][c2]);
    }
    c2--;
    if(c1 > c2) {
      break;
    }
    // <-
    for(let c = c2; c >= c1; c--) {
      res.push(arr[r2][c]);
    }
    r2--;
    if(r1 > r2) {
      break;
    }
    // ^
    for(let r = r2; r >= r1; r--) {
      res.push(arr[r][c1]);
    }
    c1++;
    if(c1 > c2) {
      break;
    }
  }
  console.log(res);
  return res;
}
buildSnail([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
const rotate = (matrix) => _.reverse(_.zip(...matrix));

const buildSnailPath = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const [head, ...tail] = matrix;
  return [head, buildSnailPath(rotate(tail))].flat();
};

