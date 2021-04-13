console.log("app has loaded")
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the input element and get the raw HTML node
// var userinput = d3.select("#datetime");

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
    
    // ufodata(tableData);


    // Create event handlers for button
    button.on("click", function() {
        // Prevent the page from refreshing
        d3.event.preventDefault();
      
        console.log("Tony");

        // Select the input element and get the raw HTML node
        var userinput = d3.select("#datetime");

        // Get the value property of the input element
        var inputvalue = userinput.property("value");
        
        console.log(inputvalue);
            
      
        var filterdata = tableData.filter(tableData => tableData.datetime === inputvalue);

        console.log(filterdata);

        console.log("Tony");

        $tbody.html("");

          
        if(filterdata.length !== 0) {
            ufodata(filterdata);
        }
    
        else {
                // ufodata(tableData);
                $tbody.append("tr").append("td").text("No Sightings");
            }
    });


