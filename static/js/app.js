// from data.js
var table_data = data;

tbody = d3.select("tbody")

function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)    
    })
})}

displayData(table_data)

var input_text = d3.select("#datetime")
var button = d3.select("#filter-btn")

function changeHandler(){
    d3.event.preventDefault();
    console.log(input_text.property("value"));
    var new_table = table_data.filter(sighting => sighting.datetime===input_text.property("value"))
    displayData(new_table)
}

button.on("click", changeHandler)