console.log("app has loaded")
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Data columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Use d3 to appends table with new rows of data for each UFO sighting
var ufodata = (datainput) => {
    datainput.forEach(ufosightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufosightings[column]));
    });
}

ufodata(tableData);


// Create event handlers for button
button.on("click", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var userdate = d3.select("#datetime");
    var usercity = d3.select("#city");
    var userstate = d3.select("#state");
    var usercountry = d3.select("#country");
    var usershape = d3.select("#shape");


    // Get the value property of the input element
    var inputdate = userdate.property("value").trim();
    var inputcity = usercity.property("value").trim();
    var inputstate = userstate.property("value").trim();
    var inputcountry = usercountry.property("value").trim();
    var inputshape = usershape.property("value").trim();

    var filterdata = tableData;

    if (inputdate.length !== 0) {
        filterdata = filterdata.filter(data => data.datetime === inputdate);
        
    }
    
    if (inputcity.length !== 0) {
        filterdata = filterdata.filter(data => data.city === inputcity);
        
    }
    
    if (inputstate.length !== 0) {
        filterdata = filterdata.filter(data => data.state === inputstate);
        
    }

    if (inputcountry.length !== 0) {
        filterdata = filterdata.filter(data => data.country === inputcountry);
        
    }

    if (inputshape.length !== 0) {
        filterdata = filterdata.filter(data => data.shape === inputshape);
        
    }


    if (filterdata.length !== 0) {
        // remove any data from the list
        $tbody.html("");

        // call function
        ufodata(filterdata);

    }
    else {
        // remove any data from the list
        $tbody.html("");

        $tbody.append("tr").append("td").text("No Sightings");
        ufodata(filterdata);
    }


}