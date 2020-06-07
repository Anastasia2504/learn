let N = (index, array = []) => {
  for (let i = 0; i <= index; i += 2) {
    array.push(i);
  }
  console.log(array);
  return array;
}




let isEven = (n) => {
    if (n % 2 === 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  
}

//N(5);
//isEven(5)

function sumArr(arr) {
let save = 0;
for (let i = 0; i < arr.length;i++){
  save += arr[i];
}
  return save;
}
