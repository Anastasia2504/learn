function group_by_book(a, book) {
  if (!(book.author_id in a)) {
    a[book.author_id] = 0;
  }
  a[book.author_id]++;
  console.log(a);
  return a;
}
let books_2 = books.reduce(group_by_book, {});
// создать таблицу HTML внутри переменной х
/*let x = '';
// let row_even;
// let row_odd;
x += '<table class="mytable">';
x += `<tr>
<th>name</th>
<th>surname</th>
<th>age</th>
</tr>`;
for (let i = 0; i < authors.length; i++) {
  let author = authors[i];
  //x += 'Author: ' + author.name + ' ' + author.surname + " " + author.age + "yo\n";
  //x += `Author: ${author.name} ${author.surname} ${author.age}yo\n`;
  // создать строку таблицы

  // if (i % 2 === 0) {
  //   x += `<tr class="row_even">`;
  // } else {
  //   x += `<tr class="row_odd">`
  // }
  x += `



}
x += "</table>";*/
// напечатать базу данных на странице

/*
1. Сделать в строковой переменной HTML-список <ul> книг
   используя шаблоны строк и цикл
2. Старые книги до 2000 года сделать на сером фоне
3. Добавить имена и фамилии авторов (см предыдущее задание про JOIN)
4. Книги каждого автора печатать разым цветом
   (программно сгенерировать каждому автору свой уникальный цвет)
5. Заменить цикл на reduce (tip: в качестве аггрегата использовать строку)

*/

let x = '';
// let row_even;
// let row_odd;
x += '<ul class="mylist">';


let index = {};
for (let i = 0; i < authors.length; i++) {
  let author = authors[i];
  // словарь[ключ] = значение 
  index[author.id] = author;
}


let books_full_2 = books.map(function (book) {
  let author = index[book.author_id];
  var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));
  return {
    id: book.id,
    year: book.year,
    title: book.title,
    name: author.name,
    surname: author.surname,
    age: author.age
  };
});

let lenght = books.length;

let index_color = {};
index_color = new function() {
  for(let i = 0; i < lenght; i++) {
    var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));
    let color_id = books[i].author_id;
    // console.log(color_id);
    index_color[color_id] = `rgb(${r},${g},${b})`;
    console.log(index_color);
  }
};


/*let index_color = {};
for (let i = 0; i < books.length; i++) {
  let color = books[i];
  console.log(color);
  // словарь[ключ] = значение 
 index_color[color.id] = color;
}*/

for (let i = 0; i < books_full_2.length; i++) {
  let book_list = books_full_2[i];
  
  let author = authors[i];
  let author_id = book_list.author_id;
  console.log(author_id);

  x += `
    <li ‘style=«background-color: ${index_color[author_id]}»’ class="colors ${book_list.year > 2000 ? "new": "old"}" >${book_list.name} ${book_list.surname}, ${book_list.title}, ${book_list.year}</li>
  `;

}



x += "</ul>";

document.getElementsByTagName("body")[0].innerHTML = x;

/*var colors = document.getElementsByClassName(colors);
for (var j = 0; j < colors.length; j++) {
colors[j].style.color = "blue";
}*/


  // $(document).ready(function(){
    // var r = Math.floor(Math.random() * (256));
    // var g = Math.floor(Math.random() * (256));
    // var b = Math.floor(Math.random() * (256));
    // $(`li.list_style`).css('color', `rgb(${r},${g},${b})`);
  // });
  // document.getElementById('list_style').style.backgroundColor = "red";

