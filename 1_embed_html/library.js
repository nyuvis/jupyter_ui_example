function circle(){
    d3.select("#div_id")
    .append("div")
    .style("width", "50px")
    .style("height", "50px")
    .style("background-color", "#00CCCC")
    .style("border-radius", "50px")
}

function bar_chart(div_id, data){
    const div = d3.select(div_id)
    const height = data.length * 20;
    
    const scaleY = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([0, height])
        .paddingInner(0.1);
    const scaleX = d3.scaleLinear()
        .domain(d3.extent(data))
        .range([1, 120]);
    
    const svg = div.append("svg")
        .style("width", "120px")
        .style("height", height+"px");
    
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", (d, i) => scaleY(i))
        .attr("width", d => scaleX(d))
        .attr("height", scaleY.bandwidth);
}
