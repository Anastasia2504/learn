function group_by_book(a, book) {
  if (!(book.author_id in a)) {
    a[book.author_id] = 0;
  }
  a[book.author_id]++;
  // console.log(a);
  return a;
}
let books_2 = books.reduce(group_by_book, {});
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

x += '<ul class="mylist">';


let index = {};
for (let i = 0; i < authors.length; i++) {
  let author = authors[i];
  // словарь[ключ] = значение 
  index[author.id] = author;
}


let books_full_2 = books.map(function (book) {
  let author = index[book.author_id];
  return {
    id: book.id,
    year: book.year,
    title: book.title,
    name: author.name,
    surname: author.surname,
    age: author.age,
    author_id: book.author_id
  };
});

let lenght = authors.length;

let index_color = {};
  for(let i = 0; i < lenght; i++) {
    var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));
      let color = `rgb(${r},${g},${b})`;
      let author = authors[i];
      // словарь[ключ] = значение 
      index_color[author.id] = color;
      // console.log(index_color);
      // console.log(color);
    
    
    
    /*let color_id = books[i].author_id;
    console.log(color_id);
    index_color[color_id] = `rgb(${r},${g},${b})`;
    console.log(index_color);*/
};

for (let i = 0; i < books_full_2.length; i++) {
  let book_list = books_full_2[i];
  let color_id = books[i].author_id;
  let author = authors[i];
  let author_id = book_list.author_id;
  // console.log(author_id);

  x += `
    <li style="background-color:${index_color[author_id]}" class="colors ${book_list.year > 2000 ? "new": "old"}" >${book_list.name} ${book_list.surname}, ${book_list.title}, ${book_list.year}</li>
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

