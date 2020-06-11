function isValidField2(arr) {
  let val = arr[0][0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      switch (arr[i][j]) {
        case 1:
          if (count <= 4) {
            count++;
          } else {
            return false;
          }
          break;
        case 0:
          count = 0;
          break;
      }
    }
  }
  return true;
}

function isValidField(arr) {
  let count = 0;
  let val1 = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 1) {
      count++;
      if (count > 4) {
        return false;
      }
    }
    for (let j = 1; j < arr.length - 1; j++) {
      console.log(arr[i][j + 1]);
      if (arr[i][j] === 1 && arr[i][j - 1] === 1) {
        return false;
      }
    }
  }
  return true;
}

function isValidField(arr) {
  let c = 0;
  let r = 0;
  let count = 0;
  while (r < 4) {
    switch (r) {
      case r % 2 === 0:
        console.log(r);
        console.log(r, c);
        while (c < arr[0].length) {
          if (arr[r][c] === 1) {
            count++;
            if (count === 5 && arr[r][c] === 1) {
              return false
            } else {
              count = 0;
            };
          }
          c++;
        }
        break;
      case r % 2 !== 0 :
        console.log(r, c);
        if (arr[r][c] === 1) {
          return false;
        }
        while (c < arr[0].length) {
          if (arr[r][c] === 1) {
            count++;
            if (count === 5 && arr[r][c] === 1) {
              return false
            } else {
              count = 0;
            };
          }
          c++;
        }
        break;
    }
    r++;
  }
  return true;
}
isValidField([
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
]);