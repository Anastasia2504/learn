let DATA;
d3.json("coronavirus.json").then(function (data) {
    DATA = data;
    console.log(data);
    let arr = data.records;
    let index = {};
    for(let value of arr) {
        let month = value.month;
        if(+month < 10) {
            month = `0${month}`;
        }
        let day = value.day;
        if(+day < 10) {
            day = `0${day}`;
        }
        let date = `${value.year}.${month}.${day}`;
        // index[date] = [c, d];

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
    // result.sort((a, b) => {
    //     // console.log(a);
    //     if(a.date < b.date) {
    //         return -1;
    //     } else if(a.date === b.date){
    //         return 0;
    //     } else {
    //         return 1;
    //     }
    // });
    console.log(result);

    let max_cases = d3.max(result.map(d => d.cases));

    let width = 500,
        height = 1600,
        margin = {left: 10, right: 10, top: 20, bottom: 20};

    let svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("g").selectAll("rect")
        .data(result)
        .join("rect")
        .attr("height", 4)
        .attr("x", margin.left)
        .attr("width", d => d.cases / max_cases * (width - margin.left - margin.right))
        .attr("y", (d, i) => i * 12 + margin.top)
        .attr("class", "case-bar")

    svg.append("g").selectAll("rect")
        .data(result)
        .join("rect")
        .attr("height", 4)
        .attr("x", margin.left)
        .attr("width", d => d.deaths / max_cases * (width - margin.left - margin.right))
        .attr("y", (d, i) => i * 12 + 4 + margin.top)
        .attr("class", "death-bar")

});
