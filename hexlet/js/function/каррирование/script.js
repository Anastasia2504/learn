const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  console.log(result);
};