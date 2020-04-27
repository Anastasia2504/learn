function swamp(arr) {
  if(arr.length < 2) {
    return arr;
  }
let end = arr.length - 1;
let last = arr.pop();
arr.push(arr[0]);
arr.shift();
arr.unshift(last);
console.log(arr);
return arr;
}
console.log(swamp([1,2,3,4,5,6,7,8,9]));
console.log(swamp([]));
console.log(swamp([1]));
// console.log(getWeekends("long"));
// console.log(getWeekends("short"))