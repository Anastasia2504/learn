// Частичное применение
const sum = (a, b, c) => a + b + c;
const partialApply2 = (fn, arg1) => (arg2, arg3) => fn(arg1, arg2, arg3);
let sumWithFour = partialApply2(sum, 4);
sumWithFour(3, 1);

// const salary1 = getAverageSalary('programmer', 'spain');
// const salary2 = getAverageSalary('programmer', 'russia');
// const salary3 = getAverageSalary('programmer', 'usa');

// const salary1 = getProgrammersSalaryByCountry('spain');
// const salary2 = getProgrammersSalaryByCountry('russia');
// const salary3 = getProgrammersSalaryByCountry('usa');

// const getProgrammersSalaryByCountry = partialApply(getAverageSalary, 'programmer');
// const salary1 = getProgrammersSalaryByCountry('spain');
// const salary2 = getProgrammersSalaryByCountry('russia');
// const salary3 = getProgrammersSalaryByCountry('usa');

// // const getProgrammersSalaryByCountry = country => getAverageSalary('programmer', country);
// const partialApply = (fn, arg1) => (arg2) => fn(arg1, arg2);


// Реализуйте и экспортируйте по умолчанию функцию partialApply. Эта функция умеет частично применять один (второй) аргумент у переданной функции
function takePart(fn, b) {
  return function name(a, b) {
    return  fn(a, b);
 }
}
const pow = (a, b) => a ** b;
const f1 = takePart(pow, 2);