/* картинка
"imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=gYtIDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=gYtIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
 }*/
//  Juvenile Fiction - детская фантастика

var mydata = data;
console.log(mydata);
var img = document.createElement("IMG");
img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
let y = '';
// y += '<img class="img" src = "http://books.google.com/books/content?id=gYtIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api">'

y += `<img class="img" src = "${data.items[0].volumeInfo.imageLinks.thumbnail}"`;
let z = '';
z += '<img class="img_2" src = "bookmark.png">';
let x = '';

x += '<table class="mytable">';
x += `
  <tr class="">
  <td>${y}</td>
  <td>
  <div class = "title caption">${data.items[0].volumeInfo.title}</div>
  <div class = "title">${data.items[0].volumeInfo.authors}</div>
  <div class = "grey">${data.items[0].volumeInfo.publisher}</div>
  <div class = "grey">${data.items[0].volumeInfo.publishedDate}</div>
  <div class = "desc">${data.items[0].volumeInfo.description}</div>
  <div class = "count">Hardcover: ${data.items[0].volumeInfo.pageCount}  pages</div>
  <div class = "like">
  ${z}
  <p>Добавить в избранное</p>
  </div>
  img
  <div class = "box"></div>
  <div class = "box"></div>
  <div class = "categories">${data.items[0].volumeInfo.categories}, </div>
  <div class = "type">${data.items[0].volumeInfo.printType}</div>
  </td>
 
 
  
  `;

  x += "</table>";
  document.getElementsByTagName("body")[0].innerHTML = x;
  // ${i % 2 === 0? "row_even": "row_odd"}