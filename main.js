
var randomX = d3.random.normal(500, 100);
var randomY = d3.random.normal(500, 100);

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

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span class='tooltip'>" + d.label + "</span>";
  })

svg.call(tip);

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", 10)
  .attr("class", d => "query-point " + (d.value ? "positive" : "negative"))
  .attr("stroke", "black")
  .attr("stroke-width", 1)
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide)
