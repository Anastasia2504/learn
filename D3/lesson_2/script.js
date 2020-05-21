let data = [
  "hello",
  "world",
  "hi",
  "bye"
];

d3.select("#container2") // Выбрать элемент
  .attr("xx", "34") // Можно создать произвольный аттрибут
  .append("ul") // Добавить элемент
  .selectAll("li") // Выбрать все элементы li (пустая выборка)
  .data(data) // Соединить выборку с данными data
  .join("li") // Создать li для каждого элемента данных
  .text(function (d) {
    return d;
  }) // Использовать каждый элемент данных как текст
;

let name = [
  "Ann",
  "Tom",
  "Rianna",
  "Sara",
  "Samanta",
  "Sam"
];

// d3.select("#container")
//   .attr("class", "table")
//   .append("table")
//   .style("border-color", "pink")
//   .style("border-width", "2px")
//   .style("border-style", "solid")
//   .append("tr")
//   .selectAll("td")
//   .data(name)
//   .join("td")
//   .style("border-color", "lightcyan")
//   .style("border-width", "2px")
//   .style("border-style", "solid")
//   .text((d) => {
//     return `${d}: student`;
//   })
let width = 500;


function mercator(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
}

function randomLetters() {
  return d3.shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
    .slice(0, Math.floor(6 + Math.random() * 20))
    .sort();
}

const svg = d3.select("body")
  .append("svg")
  .attr("width", `${width}px`)
  .attr("height", 33)
  .attr("viewBox", `0 -20 ${width} 33`);

svg.selectAll("text")
  .data(randomLetters())
  .join("text")
  .attr("x", (d, i) => i * 16)
  .text(d => d);

setInterval(function () {
  svg.selectAll("text")
    .data(randomLetters(), d => d) // ключевая функция
    .join(
      enter => enter.append("text") // создаем элементы для новых данных
      .attr("fill", "red") // только для новых - цвет 
      .text(d => d)
      .attr("x", (d, i) => i * 16)
      .attr("y", -30)
      .transition()
      .duration(750)
      .attr("y", 0),
      update => update // вызывается для уже существующих элементов
      .attr("fill", "lightgrey") // меняем им цвет
      .transition()
      .duration(750)
      .attr("x", (d, i) => i * 16),
      exit => exit
      .attr("fill", "blue")
      .transition()
      .duration(750)
      .attr("y", 30)
      .remove()
    );
}, 25000000);


let svg2 = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500);

let g = svg2.append("g");

g.append("circle")
  .attr("cx", 70)
  .attr("cy", 70)
  .attr("r", 25)
  .style("fill", "pink")
  .style("stroke", "red")
  .on("click", function (event) {
    // alert("Stop!");
    d3.select(this)
      .transition()
      .duration(500)
      .style("fill", "lightblue")
      .style("stroke", "blue")
    g.transition()
      .attr("transform", `translate(${Math.random() * 400},${Math.random() * 400})`)
  })
  .transition()
  .duration(500)
  .attr("r", 50)
  .style("fill", "rgba(255, 0, 0, 1)")

g.append("text")
  .text("stop!")
  .style("font-size", 24)
  .attr("x", 45)
  .attr("y", 75)

  let svg3 = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500);

let flower = svg3.append("g");

flower.append("circle")
  .attr("cx", 95)
  .attr("cy", 67)
  .attr("r", 25)
  .style("fill", "#ed375b")
  .style("stroke", "red");

flower.append("circle")
  .attr("cx", 130)
  .attr("cy", 130)
  .attr("r", 25)
  .style("fill", "#d71868")
  .style("stroke", "red");
  flower.append("circle")
  .attr("cx", 85)
  .attr("cy", 140)
  .attr("r", 25)
  .style("fill", "#e3256b")
  .style("stroke", "red");
  flower.append("circle")
  .attr("cx", 60)
  .attr("cy", 100)
  .attr("r", 25)
  .style("fill", "#d5265b")
  .style("stroke", "red");
  flower.append("circle")
  .attr("cx", 140)
  .attr("cy", 90)
  .attr("r", 25)
  .style("fill", "#dc143c")
  .style("stroke", "red");
  flower.append("circle")
  .attr("cx", 100)
  .attr("cy", 105)
  .attr("r", 28)
  .style("fill", "#e0537d")
  .style("stroke", "red");


