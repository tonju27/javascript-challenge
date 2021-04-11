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


// Use d3 to appends table with new rows of data for each UFO sighting
var ufodata = (dataInput) => {
    dataInput.forEach(ufosightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufosightings[column])
        )
    });
}


ufodata(tableData);


// Create event handlers for button
// button.on("click", () => {

    button.on("click", runEnter);

    function runEnter() {
    // Prevent the page from refreshing
        d3.event.preventDefault();
      
        
    // Get the value property of the input element and remove space at begining and end of input
        var inputdate = userinput.property("value").trim();
        
        console.log(inputdate);
            
        var filterdate = tableData.filter(tableData => tableData.datetime === inputdate);
        
        console.log(filterdate);

        $tbody.html("");
    
        let response = {
            filterDate
        }
    
    
        if(response.filterdate.length !== 0) {
            data(filterdate);
        }
    
        // Top if only works for filtering the date
        
            else {
                $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
            }
    }