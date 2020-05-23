[['index.html', 'main.js'], 'index.js', ['favicon.ico', 'app.css']];
//                    * корень – сам массив
//         /          |         \
//       *         index.js       * 
//  /         |               |        \
// index.html main.js   favicon.ico app.css

// Ещё пара примеров деревьев с произвольными данными:
[]; // пустое дерево
[3, 2, [3, 8], [[8], 3]];
[1, null, [[3]], [5, 'string', [undefined, [3], { key: 'value' }]]];

['app', [ // Корень
  ['dist', [ // Внутренний узел
    ['index.html'], // Лист
    ['main.js'] // Лист
  ]],
  ['index.js'], // Лист
  ['assets', [ // Внутренний узел
    ['favicon.ico'], // Лист
    ['app.css'], // Лист
  ]],
]];

//                   app
//         /          |         \
//       dist      index.js   assets
//  /         |               |        \

// И самый гибкий и удобный способ представления деревьев — это объекты. В таком дереве каждый узел это объект, а массивы используются только для хранения списка детей.
// Обратите внимание на разделение структуры и данных
// Здесь оно значительно более очевидное
let obj = {
  value: 5,
  children: [
    { value: 10 },
    { value: 100 },
    { value: 'nested', children: [/* ... */] }
  ]
};

function removeFirstLevel(arr) {
  let result = [];
  for(let a of arr) {
    if(Array.isArray(a)) {
      result.push(a);
    } 
  }
  result = result.flat();
  return result;
}
console.log(removeFirstLevel([1,2,3]));