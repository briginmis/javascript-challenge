// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create table by iterating through data and appending to table
var tbody = d3.select("tbody");

tableData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    })
});

// Event listener

// select button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Create function to run for both events
function runEnter() {
    // prevent page from refreshing
    d3.event.preventDefault();

    // select input element and get raw HTML node
    var inputElement_datetime = d3.select("#datetime");
    var inputElement_city = d3.select("#city");
    var inputElement_state = d3.select("#state");
    var inputElement_country = d3.select("#country");
    var inputElement_shape = d3.select("#shape");

    // Get value property of the input element
    var inputValue_datetime = inputElement_datetime.property("value")
    var inputValue_city = inputElement_city.property("value")
    var inputValue_state = inputElement_state.property("value")
    var inputValue_country = inputElement_country.property("value")
    var inputValue_shape = inputElement_shape.property("value")

    // filter the data

    // make a copy of the table data to filter
    var filteredData = tableData;

    // filter datetime
    if (inputValue_datetime == "") {
        console.log(`No datetime entered`)
    }
    else {
        filteredData = filteredData.filter((items) => {
            return items.datetime == inputValue_datetime
        })
    };

    // filter city
    if (inputValue_city == "") {
        console.log(`No city entered`)
    }
    else {
        filteredData = filteredData.filter((items) => {
            return items.city == inputValue_city
        })
    };

    // filter state
    if (inputValue_state == "") {
        console.log(`No state entered`)
    }
    else {
        filteredData = filteredData.filter((items) => {
            return items.state == inputValue_state
        })
    };

    // filter country
    if (inputValue_country == "") {
        console.log(`No country entered`)
    }
    else {
        filteredData = filteredData.filter((items) => {
            return items.country == inputValue_country
        })
    };

    // filter shape
    if (inputValue_shape == "") {
        console.log(`No shape entered`)
    }
    else {
        filteredData = filteredData.filter((items) => {
            return items.shape == inputValue_shape
        })
    };

    // print filtered data to the console
    console.log(filteredData);

    // remove existing table data
    d3.select("tbody").remove();

    // make new tbody section
    var new_tbody = d3.select("table").append("tbody")

    // append filtered data to table
    filteredData.forEach((item) => {
        var row = new_tbody.append("tr");
        Object.entries(item).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    });    

}

