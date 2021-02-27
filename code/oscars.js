/**
 * @author Salaheddin AbuEin
 * I confirm that this coursework submission is entirely my own work, except where explicitly stated otherwise.
 * 
 * Year: contains both the calendar year and the number of years since the start of the awards (e.g., "1960 (33rd)").
 * Category: contains values such as "Best Picture" or "Actress -- Leading Role".
 * Nominee: either a person (e.g., for the category "Actress -- Leading Role") or a film (e.g., for "Best Picture").
 * Info: contains varying information. For example, when the category is "Actress -- Leading Role", this contains the name of the film and the character played by the actress in it.
 * Won: has value "yes" if the nominee won the Academy Award, and "no" if not.
 * 
 **/ 

function notPossible() {
    window.alert("Hello World!");
}

function darkMode() {
    document.body.classList.toggle("enable-black");
}

function clearAll() {
    $("#search-form").find("input[type=text]").val("");
    $("tbody").children().remove();
    // $("#search-form").find("input[type='radio'], select").removeAttr("checked").removeAttr("selected");
}

function generateTableOne(x) {
    var index, oldTable, section, table, row, cell;
    oldTable = document.getElementById("results-table");
    //oldTable.tBodies[0].remove();
    /*section = document.getElementById("results-section");
    table = document.createElement("table");
    section.appendChild(table);*/
    oldTable.createTBody();
    for (index = 0; index < x.length; index++) {
        row = oldTable.tBodies[0].insertRow();
        for (const [key, value] of Object.entries(x[index])) {
            cell = row.insertCell(-1);
            //console.log(value);
            cell.appendChild(document.createTextNode(value));
        }
    }
    // $x("/html/body/section[2]");
}

function generateTableTwo(data) {
    var theTable = document.getElementById("results-table");
    theTable.createTBody();
    for (let i = 0; i < data.length; i++) {
        // Insert a row at the end of the body of the table
        // Then insert five cells in that row
        let row, cell0, cell1, cell2, cell3, cell4;
        row = theTable.tBodies[0].insertRow();
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        // Append a text node to the cell
        //let theText = document.createTextNode();
        //theCell.appendChild(theText);
        cell0.innerHTML = data[i].Year;
        cell1.innerHTML = data[i].Category;
        cell2.innerHTML = data[i].Nominee;
        cell3.innerHTML = data[i].Info;
        cell4.innerHTML = data[i].Won;
        //var results = document.createTextNode(`<td>${flow.Year}</td><td>${flow.Category}</td><td>${flow.Nominee}</td><td>${flow.Info}</td><td>${flow.Won}</td>`);
    }
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function generateData() {
    var output; 
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            output = JSON.parse(this.response, );
            console.log(output);
            //this.responseText;
        }
    return output;
    };
    xhttp.open("GET", "./json/oscars.json", true);
    xhttp.send();
}

/*
// with DOM
try {
    document.ready(function() {
        //var data = new loadDoc();
        //console.log(data);
        //console.log(data.length);
        // getting the data in order to search results and create options

        
        document.getElementById("toggle-dark-mode").onclick = darkMode;
        document.getElementById("marhaba").onclick = notPossible;
        document.getElementById("clear-all").onclick = clearAll;
        document.getElementById("search-all-one").onclick = () => {
            const x = new getData();
            console.log(x);
            generateTableOne(x);
        }
        document.getElementById("search-all-two").onclick = () => {
            const y = new generateData();
            console.log(y);
            generateTableTwo(y);
        }
        //Creating new options on change
        //document.getElementById("select-year").onchange = selectYear(data);
    }; catch (e) { console.log(e); }
*/

// with jQuery
try {
    $().ready(function() {
        var output;
        $.getJSON("./json/oscars.json", function(data) {
        console.log(data);
        //$("#text").html(data["text"]);
        output = data;
        console.log(output);
    });
        //
        $("toggle-dark-mode").onclick = darkMode;
        $("marhaba").onclick = notPossible;
        $("clear-all").onclick = clearAll;
        $("search-all-one").onclick = () => {
            const x = new getData();
            console.log(x);
            generateTableOne(x);
        }
        $("search-all-two").onclick = () => {
            const x = new getData();
            console.log(x);
            generateTableTwo(x);
        }
        $("select-year").onchange = () => {
            const x = new getData();
            console.log(x);
            selectYear(x);
        }
});} catch (e) {console.log(e);};



//This one works
function getData() {
    let jsonURL, request;
    jsonURL = "https://raw.githubusercontent.com/sabuein/oscars/main/json/oscars.json";
    request = new XMLHttpRequest();
    request.open("GET", jsonURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        //const flow = request.response;
        var output = JSON.parse(request.response)
        console.log(output);
        // console.log(flow.length);
        // console.log(theTable.domContentLoadedEventEnd - theTable.domContentLoadedEventStart);
        //data = flow;
    };
}

function selectYear(data) {
    // Dynamically generating select options once the user change <option value="none">None</option>
    // document.getElementById("orange").selected = "true";
    var select = document.getElementById("select-year");
    for (let i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.text = data[i].Year
        select.add(option);
    }
}


// $('#addressCountry').change (
//     function () {
//         // Remove all of the options
//         $('#exact-year').empty();
//         if (this.value === 'none') return;
//         $.getJSON(
//             this.value + '.json',
//             function (json) {
//                 // Change the label
//                 $('label[for="addressState"]').text(
//                     json.label + ':'
//                 );
//                   ...see next slide
//                 }
// );
// $.each(
//     json.states,
//     function (id, state) {
//                         ...see next slide
//                       }
// );

//     }
// );

// function(id, state) {
//     $('#addressState').append(
//         $('<option/>')
//             .attr('value', id)
//             .text(state)
//     );
// }