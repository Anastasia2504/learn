function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function sit() {

  let arr = [0, 1, 1, 0];
  for(let i = 0; i < 12; i++) {
    console.log(shuffle(arr));
  }
}

sit();