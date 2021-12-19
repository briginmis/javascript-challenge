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
    var inputElement = d3.select("#datetime");

    // Get value property of the input element
    var inputValue = inputElement.property("value")

    // filter the data
    var filteredData = tableData.filter((items) => {
        return items.datetime == inputValue;
    });


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

