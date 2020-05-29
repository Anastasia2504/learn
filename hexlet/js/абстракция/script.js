const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};
function getX(point) {
  return point.x;
}
function getY(point) {
  return point.y;
}
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const makeSegment = (point1, point2) => {
  const x1 = getX(point1);
  const y1 = getY(point1);
  const x2 = getX(point2);
  const y2 = getY(point2);
  return {
    p1: {x1, y1},
    p2: {x2, y2}
  }
}
let segment = makeSegment(beginPoint, endPoint);

const getMidpointOfSegment = (segment) => {
  console.log(segment);
  x = (segment.p1.x1 + segment.p2.x2) / 2;
  y = (segment.p1.y1 + segment.p2.y2) / 2;
  return {
    x: x,
    y: y
  }
}
console.log(getMidpointOfSegment(segment));

const getBeginPoint = (segment) => {
  return {
    x: segment.p1.x1,
    y: segment.p1.y1
    }
}
console.log(getBeginPoint(segment));
const getEndPoint = (segment) => {
  return {
    x: segment.p2.x2,
    y: segment.p2.y2
    }
}
console.log(getEndPoint(segment));