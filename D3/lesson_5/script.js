let DATA, X, Y, COLOR;
d3.json("coronavirus.json").then(function (data) {
    DATA = data;
    console.log(data);

    // Парсинг: строка -> объект
    // Форматирование: объекта -> строка
    var	parseDate = d3.timeParse("%d/%m/%Y");
    var	formatDate = d3.timeFormat("%Y-%m-%d");
    
    let result = {};
    for (let record of data.records) {
        let date = formatDate(parseDate(record.dateRep));
        if (!result.hasOwnProperty(date)) {
            result[date] = [];
        }
        result[date].push(record);
    }
    console.log(result);

    let margin = {top: 20, right: 20, bottom: 70, left: 100},
    width = 500 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    let svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let currentDate = "2020-05-17";
    let currentData = result[currentDate]
        .sort((x, y) => y.cases - x.cases)
        .slice(0, 12);

    // Шкала для оси Х
    let maxCases = d3.max(currentData.map(d => +d.cases));
    console.log(maxCases);
    var x = d3.scaleLinear()
        .rangeRound([0, width])
        .domain([0, maxCases]);

    // Шкала для оси Y
    let countries = currentData.map(d => d.countriesAndTerritories);
    console.log(countries);
    var y = d3.scaleBand()
        .domain(countries)
        .range([0, height])
        .padding(0.1);

    // Шкала для цвета
    var continents = _.uniq(currentData.map(d => d.continentExp)).sort();
    console.log(continents);
    var color = d3.scaleOrdinal()
        .domain(continents)
        .range(d3.schemeTableau10);

    // Создаем верхнюю ось
    g.append("g")
        .call(d3.axisTop(x));

    // Создаем левую ось
    g.append("g")
    	.call(d3.axisLeft(y));


    g.append("g")
        .selectAll("rect")
        .data(currentData)
        .join("rect")
        .attr("height", y.bandwidth())
        .attr("width", d => x(d.cases) - x(0))
        .attr("x", d => x(0) + 1)
        .attr("y", d => y(d.countriesAndTerritories))
        .attr("fill", d => color(d.continentExp));

    DATA = currentData;
    X = x;
    Y = y;
    COLOR = color;
});
