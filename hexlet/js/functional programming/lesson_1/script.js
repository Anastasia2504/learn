// Functional programming
// Complexity(цикломатическая сложность): 1
const sum = (a, b) => a + b;
sum(1, 3); // 4

// Complexity(цикломатическая сложность): 2
const abs = n => (n >= 0 ? n : -n);

// Guard Expression
const f = (age, sex) => {
  if (age >= 18) {
    if (sex === 'male') {
      return 'yes';
    }
    if (sex === 'female') {
      return 'no';
    }
  }

  return null;
}

// меньше ветвлений, уровень вложенности понизился
const f2 = (age, sex) => {
  // guard expression
  if (age < 18) {
    return null;
  }

  if (sex === 'male') {
    return 'yes';
  }

  if (sex === 'female') {
    return 'no';
  }
}

function isPalindrom(word) {
  let l = word.length - 1;
  if(word.length < 2) {
    return true;
  }
  if (word[0] !== word[l]) {
    return false;
  } else {
    word = word.substring(1, l);
   return isPalindrom(word);
  }
  
}
console.log(isPalindrom('radaooooooor'));
