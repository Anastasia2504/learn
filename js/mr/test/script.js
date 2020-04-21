
let mydata = data_worker;

// console.log(mydata[0]);
let data = [
    {name: "vasya", surname: "pupkin", age: 10, sex: "m"},
    {name: "kolya", surname: "pupkin", age: 13, sex: "m"},
    {name: "veronika", surname: "petrova", age: 22, sex: "f"},
    {name: "vera", surname: "ivanova", age: 30, sex: "f"},
    {name: "ivan", surname: "ivanov", age: 65, sex: "m"}
];
let test = data[0];
let test_2 = test["sex"];

// MAP
let ages1 = data.map(function(d){return d.age;});
let ages2 = data.map(d => d.age);

// REDUCE
let avg_age1 = data.reduce(function(a,d){return a + d.age;}, 0) / data.length;
let avg_age2 = data.reduce((a,d) => a + d.age, 0) / data.length;

// FILTER
let females1 = data.filter(function(d){
    if (d.sex === "f") {
        return true;
    }
    return false;
});
let females2 = data.filter(function(d){return d.sex === "f";})
let females3 = data.filter(d => d.sex === "f");

// MAP -> REDUCE
let avg_age3 = data.map(function(d) {return d.age;}).reduce(function(a,age) {return a + age;}, 0) / data.length;
let avg_age5 = data.map(d => d.age).reduce((a,age) => a + age, 0) / data.length;

// FILTER -> MAP -> REDUCE
let males_age_sum = data.filter(d => d.sex === "m").map(m => m.age).reduce((a,age) => a + age, 0);

// Самый старший
let oldest1 = data.map(d => d.age).reduce(function(a,age){
    return Math.max(a, age);
}, 0);
let oldest2 = data.map(d => d.age).reduce((a,age) => Math.max(a, age), 0);
//let oldest3 = data.map(d => d.age).reduce(Math.max, 0); // NaN


let count_females = data.filter(function(d){return d.sex === "f";}).length;
let count_males = data.filter(function(d){return d.sex === "m";}).length;

let count_females_2 = data.filter(d => d.sex === "f").length;
let count_males_2 = data.filter(d => d.sex === "m").length;

// GROUP BY
function group_by_surname(a, d) {
    if (!(d.surname in a)) {
        a[d.surname] = 0;
    }
    a[d.surname]++;
    // console.log(a);
    return a;
}
let surnames = mydata.reduce(group_by_surname, {});

let counter = 0;

for (let key in surnames) {
  counter++;
}

function group_by_age(a, d) {
  if (!(d.age in a)) {
      a[d.age] = 0;
  }
  a[d.age]++;
  // console.log(a);
  return a;
}
let ages = mydata.reduce(group_by_age, {});

let counter_2 = 0;

for (let key in ages) {
counter_2++;
}

// d.surname - ключ; a[d.surname] - значение ключа
function group_by_avg(a, d) {
  if (!(d.surname in a)) {
      a[d.surname] = {count:0,sum:0};
  }
  a[d.surname].count++;
  a[d.surname].sum += d.age;
  console.log(a);
  return a;
}

let ages_aggr = mydata.reduce(group_by_avg, {});
let avg_ages = []; // [{surname:"Petrov",avg_age:20},{...}]
for (let surname in ages_aggr) {
  avg_ages.push({
    "surname": surname,
    "avg_age": Math.floor(ages_aggr[surname].sum / ages_aggr[surname].count)
  });
}



 
