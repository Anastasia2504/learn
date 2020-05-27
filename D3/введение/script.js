var width = 400,
    height = 400;

let svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

svg.append("line")
    .attr("x1", 20)
    .attr("y1", 30)
    .attr("x2", 300)
    .attr("y2", 300)
    .style("stroke", "red");