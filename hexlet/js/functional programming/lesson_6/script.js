

function reverse(str, ind = str.length - 1, acc = '') {
    // ind = str.length - 1;
    if(ind === -1) {
      return acc;
    } else{
      console.log(str[ind]);
      return reverse(str, ind - 1, acc + str[ind]);
    }
}
console.log(reverse("strvfvs"));

const iter2 = (index, acc) => {
  if (index > lastIndex) {
    return acc;
  }
  return iter2(index + 1, `${str[index]}${acc}`);
};