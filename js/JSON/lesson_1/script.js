// JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов.
// stringify(authors) - преобразование в json
let json = JSON.stringify(authors);
// console.log(json);

let room = {
  number: 23
};

let meetup_2 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// преобразование в объект
user_2 = JSON.parse(user);

// console.log( user); // 1

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
})
console.log( meetup.date.getDate() );

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

// console.log( schedule.meetups[1].date.getDate() );

let book_basa = JSON.stringify(authors);
book_basa = JSON.stringify(books);

console.log(book_basa);