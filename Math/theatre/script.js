function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function sit() {
  // let res = [0];
  // let arr = [];
  // res[0] = 0;
  let a = 20;
  let count = 0;
  // while ( a > 0) {
  //   for(let j = 1; j < 4; j++) {
  //     let val = Math.round(Math.random());
  //     if(val === 1) {
  //       count++;
  //     }
  //     if(count < 3) {
  //       res[j] = val;
  //     } else {
  //       res[j] = 0;
  //       count = 0;
  //     }
  //   }
  //   console.log(res);
  //   arr.push(res);
  //   res = [0];
  //   a--;
  // }
  let arr = [0, 1, 1, 0];
  for(let i = 0; i < 12; i++) {
    console.log(shuffle(arr));
  }
}

sit();