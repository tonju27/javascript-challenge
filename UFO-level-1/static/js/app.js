console.log("app has loaded")
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

