console.log("app has loaded")
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the input element and get the raw HTML node
var userinput = d3.select("#datetime");

// Data columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Use d3 to appends table and add new rows of data for each UFO sighting
var indata = (dataInput) => {
    dataInput.forEach(ufosightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufosightings[column])
        )
    });
}

indata(tableData);

// Create event handlers for button
button.on("click", () => {

    // Prevent the page from refreshing
        d3.event.preventDefault();
      
}
