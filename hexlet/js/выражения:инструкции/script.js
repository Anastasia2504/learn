function square(num) {
  return num * num;
}
function sumOfSquares(a, b) {
  return (a * a) + (b * b);
}
function squareSumOfSquares(a, b) {
  let sum = (a * a) + (b * b);
  return sum * sum;
}
console.log(square(5)); // 25
console.log(square(10)); // 100
console.log(sumOfSquares(5, 10)); // 125
console.log(sumOfSquares(10, -9)); // 181
console.log(squareSumOfSquares(1, 1)); // 4
console.log(squareSumOfSquares(2, 3)); // 169