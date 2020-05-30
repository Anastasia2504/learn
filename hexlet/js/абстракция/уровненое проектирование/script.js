
const makeRational2 = (numer, denom) => `${numer}/${denom}`;
const getNumer2 = (rational) => rational.split('/')[0];
const getDenom2 = (rational) => rational.split('/')[1];

const mul2 = (rational1, rational2) => {
  return {
    numer: rational1['numer'] * rational2['numer'],
    denom: rational1['denom'] * rational2['denom']
  };
};
// const num = makeRational(1, 2); // создали рациональное число "одна вторая"
// // const numer = getNumer(num); // 1
// // const denom = getDenom(num);

const makeRational = (numer, denom) => {
  return {
    numer, denom
  }
}
// правильный вариант
const getNumer = (num) => num.numer;
const getDenom = (num) => num.denom;

const mul = (rational1, rational2) => {
  return makeRational(
    getNumer(rational1) * getNumer(rational2),
    getDenom(rational1) * getDenom(rational2)
  );
};
let r1 =  makeRational(3, 5);
let r2 =  makeRational(3, 7);
// console.log(r1, r2);
// console.log(mul(r1, r2));

// Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям. Прямоугольник может располагаться в любом месте координатной плоскости.

// makeRectangle (конструктор) – создает прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту. Ширина и высота – положительные числа.
// Селекторы getStartPoint, getWidth и getHeight
// containsOrigin – проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). 
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

let makeRectangle = (mainpoint, width, height) => {
  let x = getX(mainpoint);
  let y = getY(mainpoint);
  let b = x + width;
  let c = y - height;
  return {
    pA: {x, y},
    pB: {b, y},
    pC: {b, c},
    pD: {x, c},
    width: width,
    height: height
  }
}
let rectangle = makeRectangle(makeDecartPoint(0, 1), 4, 5);

let getStartPoint = (rectangle) => rectangle.pA;
let getWidth = (rectangle) => rectangle.width;
let getgetHeight = (rectangle) => rectangle.height; 
getStartPoint(rectangle);

let containsOrigin = (rectangle) => {
  console.log(rectangle.pA.x, rectangle.pB.b, rectangle.pB.y,rectangle.pD.c)
  if(rectangle.pA.x < 0 && rectangle.pB.b > 0 && rectangle.pD.c < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(containsOrigin(rectangle));