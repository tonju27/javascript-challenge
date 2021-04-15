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
        
        var filterdates = tableData.filter(tableData => tableData.datetime === inputdate);
        var filterCities = tableData.filter(tableData => tableData.city === inputcity);
        var filterstates = tableData.filter(tableData => tableData.state === inputstate);
        var filtercountries = tableData.filter(tableData => tableData.country === inputcountry);
        var filtershapes = tableData.filter(tableData => tableData.shape === inputshape);
        
        
        if (inputdate.length !== 0 || inputcity.length !== 0 
            || inputstate.length !== 0 || inputcountry.length !== 0
            || inputshape.length !== 0) {

                var combinedfilter = tableData.filter(tableData => tableData.datetime === inputdate 
                    && tableData.city === inputcity && tableData.state === inputstate
                    && tableData.country === inputcountry && tableData.shape === inputshape)
                    
                    // remove any data from the list
                    $tbody.html("");

                    // call function
                    ufodata(combinedfilter);
                }

        if (inputcity.length !== 0 
            || inputstate.length !== 0 || inputcountry.length !== 0
            || inputshape.length !== 0) {

                var combinedfilter = tableData.filter(tableData => tableData.city === inputcity && tableData.state === inputstate
                    && tableData.country === inputcountry && tableData.shape === inputshape)
                    
                    // remove any data from the list
                    $tbody.html("");

                    // call function
                    ufodata(combinedfilter);
                }
            
        if (inputstate.length !== 0 || inputcountry.length !== 0
            || inputshape.length !== 0) {
            
                var combinedfilter = tableData.filter(tableData =>  tableData.state === inputstate
                    && tableData.country === inputcountry && tableData.shape === inputshape)
                    
                    // remove any data from the list
                    $tbody.html("");

                    // call function
                    ufodata(combinedfilter);
                }   
            
        if (inputcountry.length !== 0
            || inputshape.length !== 0) {
            
                var combinedfilter = tableData.filter(tableData => tableData.country === inputcountry 
                    && tableData.shape === inputshape)
                    
                    // remove any data from the list
                    $tbody.html("");

                    // call function
                    ufodata(combinedfilter);
                }   
     
        // singles
        if (inputshape.length !== 0) {
            
                var combinedfilter = tableData.filter(tableData => tableData.shape === inputshape)
                    
                    // remove any data from the list
                    $tbody.html("");

                    // call function
                    ufodata(combinedfilter);
                }  
        
        if (inputcountry.length !== 0) {
    
            var combinedfilter = tableData.filter(tableData => tableData.country === inputcountry)
                
                // remove any data from the list
                $tbody.html("");

                // call function
                ufodata(combinedfilter);
            }
        
        



        

        // // remove any data from the list
        // $tbody.html("");

        // if(filterdates.length !== 0 ) {
        //    ufodata(filterdates);

        // }
    
        else {
                $tbody.append("tr").append("td").text("No Sightings");
            }
    }