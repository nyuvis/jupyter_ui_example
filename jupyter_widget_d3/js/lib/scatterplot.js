/*
- create a javascript file to render a scatterplot
- in the folder of file (js/):
    - run `npm install d3` to install the library of d3
    - run `npm install style-loader` to install the library of loading style file
    - run `npm install css-loader` to install the library of loading css file
    - you will need to install other packages like 'webpack'. 
        just install whatever the error information reminds you to install when running the command `npm install`
- import this file in example.js
- adapt the scatterplot rendering code from https://www.d3-graph-gallery.com/graph/scatter_basic.html
- in the end of the code, export the functions that needed to be accessed by other file
 */


var d3 = require('d3');
window.d3=d3;
require('./scatterplot.css');

// constant for svg
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var xScale, yScale;

function create(that) {
    console.log('start create');

    // intialize the html
    that.el.setAttribute('class', 'd3-scatterplot');
    that.el.innerHTML = `
        <div id="my_dataviz">
            <svg class="scatterplot-svg"></svg>
        </div>
    `
    window.dom = that.el;
    render(that);
}

function render(that) {
    console.log('start render');
    var svgElmt = that.el.getElementsByClassName('scatterplot-svg')[0];
    svgElmt.setAttribute('width', width + margin.left + margin.right);
    svgElmt.setAttribute('height', height + margin.top + margin.bottom);

    var svg = d3.select(svgElmt);
    window.svg = svg;

    // append the svg object to the body of the page
    svg = svg.append("g")
        .attr('id', 'plot')
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    xScale = d3.scaleLinear()
        .domain([0, 4000])
        .range([ 0, width ]);
    svg.append("g")
        .attr('id', 'x-axis')
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    // Add Y axis
    yScale = d3.scaleLinear()
        .domain([0, 500000])
        .range([ height, 0]);
    svg.append("g")
        .attr('id', 'y-axis')
        .call(d3.axisLeft(yScale));

    render_scatterplot(that);
}

function render_scatterplot(that) {
    var svg = window.svg.select('#plot');

    //Read the data
    data = that.model.get('value');
    // Add dots
    svg.append('g')
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
          .attr('class', 'dot')        
          .attr("cx", function (d) { return xScale(d.GrLivArea); } )
          .attr("cy", function (d) { return yScale(d.SalePrice); } )
          .attr("r", 1.5)
}

var view = {
    create: create,
    render_scatterplot: render_scatterplot,
};

module.exports = view;
