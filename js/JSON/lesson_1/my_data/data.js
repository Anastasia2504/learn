let authors = [
  {id: 111, name: "Роман", surname: "Огородников", age: 10},
  {id: 2, name: "Дмитрий", surname: "Петров", age: 35},
  {id: 3, name: "Иван", surname: "Огородников", age: 32},
  {id: 4, name: "Иван", surname: "Петров", age: 30},
  {id: 5, name: "Николай", surname: "Морев", age: 35},
  {id: 6, name: "Николай", surname: "Огородников", age: 45},
  {id: 7, name: "Роман", surname: "Огородников", age: 65},
  {id: 8, name: "Олег", surname: "Галецкий", age: 25},
  {id: 9, name: "Федор", surname: "Огородников", age: 35},
  {id: 10, name: "Максим", surname: "Мваненков", age: 25},
  {id: 11, name: "Петр", surname: "Петров", age: 25},
  {id: 12, name: "Тимур", surname: "Петров", age: 28},
  {id: 13, name: "Марк", surname: "Демчев", age: 28},
  {id: 140, name: "Никита", surname: "Громов", age: 34},
  {id: 15, name: "Владислав", surname: "Петров", age: 34},
  {id: 16, name: "Георгий", surname: "Огородников", age: 20},
  {id: 17, name: "Джамур", surname: "мельник", age: 20},
  {id: 18, name: "Иван", surname: "Романов", age: 21},
  {id: 19, name: "Марк", surname: "Мваненков", age: 51},
  {id: 20, name: "Максим", surname: "Огородников", age: 52},
  {id: 210, name: "Александр", surname: "Мваненков", age: 60},
  {id: 22, name: "Максим", surname: "Огородников", age: 25},
  {id: 23, name: "Марк", surname: "Леонов", age: 18},
  {id: 240, name: "Игорь", surname: "Мваненков", age: 24},
  {id: 25, name: "Игорь", surname: "Огородников", age: 23},
  {id: 26, name: "Максим", surname: "Мваненков", age: 28},
  {id: 27, name: "Игорь", surname: "Романов", age: 32},
  {id: 28, name: "Алексей", surname: "Мваненков", age: 42},
  {id: 29, name: "Александр", surname: "Романов", age: 38},
  {id: 30, name: "Игорь", surname: "Романов", age: 35},
  {id: 31, name: "Марк", surname: "Огородников", age: 35},
  {id: 32, name: "Александр", surname: "Сергеенко", age: 45},
  {id: 33, name: "Тимофей", surname: "Романов", age: 45},
  {id: 34, name: "Алексей", surname: "Огородников", age: 52},
  {id: 35, name: "Алексей", surname: "Романов", age: 56},
  {id: 36, name: "Петр", surname: "Тамашев", age: 68},
  {id: 37, name: "Александр", surname: "Резников", age: 28},
  {id: 38, name: "Петр", surname: "Новиков", age: 32},
  {id: 39, name: "Алексей", surname: "Резников", age: 65},
];

/*
index = {
  111: {id:111, name: ....}
  2: {id:2, name: ....}
  3: {id:3, name: ....}
};
*/
/*{
  id: 1,
  title: "Minecampf", 
  author_id: 39, 
  year: 1939,
  name: "Алексей", 
  surname: "Резников", 
  age: 65
};*/

let books = [
  {id: 1, title: "Minecampf", author_id: 39, year: 1939},
  {id: 2, title: "GardenBook1", author_id: 111, year: 2000},
  {id: 3, title: "GardenBook2", author_id: 111, year: 2001},
  {id: 4, title: "GardenBook3", author_id: 111, year: 2002},
  {id: 5, title: "Other Book", author_id: 2, year: 2000},
  {id: 6, title: "Physcology", author_id: 3, year: 2002},
  {id: 7, title: "Physics", author_id: 3, year: 2003},
  {id: 8, title: "Math", author_id: 4, year: 2005},
  {id: 9, title: "History", author_id: 4, year: 2006},
  {id: 10, title: "Geography", author_id: 5, year: 2002},
  {id: 11, title: "50 shades of grey", author_id: 6, year: 2002},
  {id: 12, title: "Kamasutra", author_id: 7, year: 2003},
];

/*
1. Подсчитать сколько книг написал каждый автор в формате:
   {author_id: books_count,...} (то есть {111:3, 4:2, 2:1, 8:0})
*/