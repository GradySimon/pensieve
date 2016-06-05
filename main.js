var randomX = d3.random.normal(500, 100);
var randomY = d3.random.normal(500, 100);
var string = "query goes here"

var data = d3.range(50).map(_ => ({
  x: randomX(),
  y: randomY(),
  label: "query goes here",
  value: Math.random() < 0.5
}));

var svg = d3.select("body")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 1000);

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", 10)
  .attr("fill", d => d.value ? "green" : "red");


 svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(d => d.label)
  .attr('x', d => d.x)
  .attr('y', d => d.y)
  .attr("font-family", "Open Sans")
  .attr("font-size", "11px");