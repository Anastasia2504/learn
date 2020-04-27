const terribleNumbers = [4, 13];
if (terribleNumbers.includes(10)) {
  console.log('woah!');
}

function countUniqChars(str) {
  // str = str.replace(/\s/g, '');
  // str.
  console.log(str);
  let str_arr = str.split('');
  // str_arr.sort();
  // let count = 0;
  let new_arr = [...new Set(str_arr)];
  console.log(new_arr);
  return new_arr.length;
}
console.log(countUniqChars( 'You know nothing Jon Snow'));

