function Upper(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    const shouldBeBig = symbol !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? symbol.toUpperCase() : symbol;
  }

  return result;
};
function UpperAP(str)  {
  let result = '';
  let state = 'outside'; // outside, inside
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    // разбить её на независимые куски, которые легко анализировать
    switch (state) {
      case 'inside':
        if (symbol === ' ') {
          state = 'outside';
        }
        result += symbol;
        break;
      case 'outside':
        if (symbol !== ' ') {
          state = 'inside';
          result += symbol.toUpperCase();
        } else {
          result += symbol;
        }
        break;
    }
  }

  return result;
};

console.log(UpperAP('vfsbfbf  vfvfdbfdbfd bdbrgwegwe rgrg r grgrgrwgr'));

function awk(str)  {
  let word = '';
  let res = [];
  let state = 'outside'; // outside, inside
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    console.log(symbol);
    // разбить её на независимые куски, которые легко анализировать
    switch (state) {
      case 'inside':
        if (symbol === '\n' ) {
          state = 'outside';
        } else  {
          if(symbol !== '') {
            word += symbol;
          } else{
            continue;
          }
          
        }
        break;
      case 'outside':
        if (symbol !== ' \n') {
          state = 'inside';
          word += symbol;
          console.log(word);
          res.push(word);
        } else {
          word += symbol;
        }
        break;
    }
  }

  return res;
};
console.log(awk('  what who   \nhellomy\n hello who are you\n'));

function createAwk(text) {
  const result = [];
  // before, inside, after
  let state = 'before';
  let word = [];
  Array.from(text).forEach((symbol) => {
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          state = 'inside';
          word.push(symbol);
        }
        break;
      case 'inside':
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join(''));
          word = [];
          state = symbol === ' ' ? 'after' : 'before';
        } else {
          word.push(symbol);
        }
        break;
      case 'after':
        if (symbol === '\n') {
          state = 'before';
        }
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  });

  if (word.length > 0) {
    result.push(word.join(''));
  }

  return result;
};
function createAwk2(text) => {
    let result = [];
  
    for (const line of text.split('\n')) {
      let startIndex = 0;
  
      let currentSymbol = line[startIndex];
      while (currentSymbol === ' ') {
        startIndex++;
        currentSymbol = line[startIndex];
      }
  
      let endIndex = startIndex;
      while (currentSymbol !== ' ' && endIndex !== line.length) {
        endIndex++;
        currentSymbol = line[endIndex];
      }
  
      const word = [];
      for (let i = startIndex; i < endIndex; i++) {
        word.push(line[i]);
      }
  
      if (word.length > 0) {
        result.push(word.join(''));
      }
    }
  
    return result;
  };