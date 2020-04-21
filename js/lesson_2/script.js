let books_full = books.map(function (book) {
  for (let i = 0; i < authors.length; i++) {
    let author = authors[i];
    if (author.id === book.author_id) {
      return {
        id: book.id,
        year: book.year,
        title: book.title,
        name: author.name,
        surname: author.surname,
        age: author.age
      };
    }
  }
});

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
    age: author.age
  };
});