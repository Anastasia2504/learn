class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
let pointA = new Point(3, 7);
let pointB = new Point(2, 5);

class Segment {
  constructor(pointA, pointB) {
    this.head = pointA;
    this.tail = pointB;
  }
  searchLength() {
    let dopX = Math.pow(this.head.getX() - pointB.getX(), 2);
    let dopY = Math.pow(this.tail.getY() - pointB.getY(), 2);
    return Math.sqrt(dopX + dopY);
  }

}
let segment = new Segment(pointA, pointB); 



// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.
function createNumber(a, b) {
  let l = a + b;
  let arr = [];
  for(let i = 0; i < l; i++) {
    if(a > 0) {
      arr.push(1);
      a--;
    }
    if(b > 0) {
      arr.push(0);
      b--;
    }
}
return arr;
}
function withoutTwoZeros(a, b) {
  let l = a + b;
  let arr = [];
  for(let j = Math.pow(2, l); j > 0; j--) {
    arr.push(createNumber(a, b));
  }
  arr.filter((d) => {
    console.log(d);
    return d;
  });
}

withoutTwoZeros(2, 2);

