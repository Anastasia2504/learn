let DATA, X, Y;
d3.json("coronavirus.json").then(function (data) {
    DATA = data;
    console.log(data);

    // Парсинг: строка -> объект
    // Форматирование: объекта -> строка
    var	parseDate = d3.timeParse("%d/%m/%Y");
    var	formatDate = d3.timeFormat("%Y-%m-%d");

    let arr = data.records;
    let index = {};
    for(let value of arr) {
        let date = formatDate(parseDate(value.dateRep)); // Переформатируем дату
        if(index.hasOwnProperty(date)) {
            index[date].cases += +value.cases;
            index[date].deaths += +value.deaths;
        } else {
            index[date] = {cases: +value.cases, deaths: +value.deaths};
        }
    }
    let result = [];
    for(let key of Object.keys(index).sort()) {
        let obj = {
            date: key,
            cases: index[key].cases,
            deaths: index[key].deaths
        }
        result.push(obj);
    }

    console.log(result);

    let margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    let svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Шкала для оси Х
    var x = d3.scaleBand()
        .rangeRound([0, width]) // диапазон значений шкалы
        .domain(result.map(d => d.date)) // область определений - это массив дат
        .padding(0.1); // 10% зазор между барами
        
    // Шкала для оси Y
    let maxCases = d3.max(result.map(d => d.cases));
    var y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, maxCases]);
    
    // Создаем нижнюю ось
    g.append("g")
    	.attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-90)");        

    // Создаем левую
    g.append("g")
    	.call(d3.axisLeft(y))
    	.append("text")
    	  .attr("fill", "#000")
    	  .attr("transform", "rotate(-90)")
    	  .attr("y", 6)
    	  .attr("dy", "0.71em")
    	  .attr("text-anchor", "end")
    	  .text("Cases");

    g.selectAll(".bar")
        .data(result)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.date))
        .attr("y", d => y(d.cases))
        .attr("width", x.bandwidth())
        .attr("height", d => y(0) - y(d.cases));
});
