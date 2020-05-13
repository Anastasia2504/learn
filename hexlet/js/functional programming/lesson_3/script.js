
let items = [
  'Milano','Italy'
];
let table = (...children) => `<table>${children.join('')}</table>`;
let tr = (...children) => `<tr>${children.join('')}</tr>`;
let td = (...children) => `<td>${children.join('')}</td>`;
let p = (...children) => `<p>${children.join('')}</p>`;

function buildHtml(arr) {
return table(
  tr(
    td("lang"),
    td("comment")
  ),
  tr(
    td("php"),
    td("statements")
  ),
  tr(
    td("clojure"),
    td("expressions")
  )
)

}
buildHtml(items);

function  five(a, b){ return a + b;};
function  three(a, b){ return a + b;};
function  two(a, b) { return a + b;};
function  one(a, b) { return a + b;};
function main(a, b) { return a + b;};
let a = main(one(two(2, three(2, 3)), 3), five(2, 3)); 
console.log(a);

// Реализуйте и экспортируйте по умолчанию функцию buildHtml, простой вызов которой:

// export default () => table(
//   tr(td('lang'), td('comment')),
//   tr(td('php'), td('statements')),
//   tr(td('clojure'), td('expressions')),


// );
// 
//  <table>
//   <tr>
//   <td>lang</td>
//   <td>comment</td>
// </tr>
// <tr>
//   <td>php</td>
//   <td>statements</td>
// </tr>
// <tr>
//   <td>clojure</td>
//   <td>expressions</td>
// </tr>


function test(arr) {
  let x = `<table>`
  x +=`<tr>`;
  x +=`<td>`;
  x +=`<p>${arr.join(' ')}</p>`;
  x += `</td>`;
  x +=`<td>`;
  x +=`<p>${arr.join(' ')}</p>`;
  x += `</td>`;
  x += `</tr>`;
  x += `</table>`;
  document.getElementById("table").innerHTML = x;
}