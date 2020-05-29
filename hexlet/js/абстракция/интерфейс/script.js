
// создает точку с полярными координатами
const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};
// возвращает х в декартовой системе координат
const getX = (point) => {
  let x = point.radius * Math.cos(point.angle);
  console.log(x);
 return x;
}
// возвращает y в декартовой системе координат
const getY = (point) => {
  let y = point.radius * Math.sin(point.angle);
  console.log(y);
 return y;
}
const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};
let segment = makeSegment(point1, point2);

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getX = (point) => { 
  point.x
}
console.log(getBeginPoint(segment));
// параллельно оси Х
const isParallelWithX = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  return Math.abs(getY(beginPoint) - getY(endPoint)) < 1e-6;
};
// параллельно оси Y
const isParallelWithY = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  return Math.abs(getX(beginPoint) - getX(endPoint)) < 1e-6;
};
