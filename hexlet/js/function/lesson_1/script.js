function checkPrimeOrNot(n) {
  if(n < 2) {
    return "no";
  }
  if(n === 2) {
    return "yes";
  }
  for(let i = 2; i < 10; i++) {
    if(n % i === 0 && n !== i) {
      return "no";
    }
  }
  return "yes";
}
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
function sayPrimeOrNot(arr) {
  for(let key of arr) {
    console.log(checkPrimeOrNot(key));
  }


}
sayPrimeOrNot([8, 4, 1, 0, -3, 9]);