/**
 * @author Salaheddin AbuEin
 * I confirm that this coursework submission is entirely my own work, except where explicitly stated otherwise.
 */


/* Classes

var person = {
    firstName: "Salaheddin",
    lastName: "AbuEin"
};

Object.defineProperty(person, "fullName", {
    get: function() {
        return firstName + " " + lastName;
    },
    set: function(name) {
        var words = name.split(" ");
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

});

Object.defineProperty(person, "age", {
    value: 42,
    writable: true
});

*/

function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function turnAuto() {
    // This will set the form auto-complete to on
    document.getElementById("search-form").autocomplete = "on";
}

function bismAllah(data) {

    // TO-CONTINUE-DEVELOPING

    /**
     * Know what are the object's attributes
     * For more: https://tc39.es/ecma262/#sec-object.keys
     * console.log(Object.keys(data));
     * for (var [key, value] of data) {
     * console.log(key, value);
     *
     */

    // Printing submit values in pairs to the console
    for (var pair of data.entries()) {
        console.log(">>> " + pair[0] + ": " + pair[1]);
    }

    // submit the data via XHR
    //var request = new XMLHttpRequest();
    //request.open("POST", "/formHandler");
    //request.send(data);

    /**
     * Search criteria:
     * Year: contains both the calendar year and the number of years since the start of the awards (e.g., "1960 (33rd)").
     * Category: contains values such as "Best Picture" or "Actress -- Leading Role".
     * Nominee: either a person (e.g., for the category "Actress -- Leading Role") or a film (e.g., for "Best Picture").
     * Info: contains varying information. For example, when the category is "Actress -- Leading Role", this contains the name of the film and the character played by the actress in it.
     * Won: has value "yes" if the nominee won the Academy Award, and "no" if not.
     */

    /*2010 (83rd)
    Animated Feature Film
    Toy Story 3
    Lee Unkrich
    ---
    yes*/

    var noIdea = 0;
    console.log(noIdea);

}

function autoYallah(times) {
    // Automating the process of fetching results using the two methods
    // and comparing results with output to the console
    let i = 0;
    do {
        generateTableOne();
        generateTableTwo();
        //console.log(true?generateTableTwo.time)
        i++;
    } while (i < times);

    finishThem();

    /* A bug is here!
          This needs enhancment;
          if automated table resutls were generated using autoYallah(times) method; then, the results will stay displayed.
          */
}

function hasTable() {
    // This method check if the HTML results section has a table element or not; return True or False
    var table = document.getElementById("results-table");
    return $results.contains(table);
}

function notPossible() {
    window.alert("Hello World!");
}

function darkMode() {
    var x = document.body.classList;
    console.log("The current body class is: " + x.value);
    if (x.value == "") document.body.classList.toggle("enable-black");
    else document.body.removeAttribute("class");

    var y = document.getElementsByTagName("input");
    console.log(Object.values(y));
    /*if (y.value == "") {
        y.classList.toggle("enable-black");
    } else {y.removeAttribute("class")};*/

    /*var y = document.getElementById("search-form");
    
    console.log(y.classList);
    console.log(y.classList.value);
    // nested ternary operators
    // var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))

    // console.log((y.classList!=null)?("The current form class is: ", y.value):"Sorry");
    console.log((y.value==""))?(y.toggle("enable-black")):(y.removeAttribute("class"));


*/

    /*if (typeof x != "undefined") {
            alert("Hi");
        }*/
    /*if (x) {
            alert("Hi 2");
        }*/

}

function clearTable() {
    var table;

    table = document.evaluate(
        "//*[@id='results-table']",
        document.body,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for (let i = 0; i < table.snapshotLength; i++) {
        table.snapshotItem(i).remove();
    }
}

function finishThem() {
    /** See also: https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotItem */
    // I have tried to automate the generation of tables, therefore; discover I need to use xPath in order to deep remove tables
    var tables;
    tables = document.evaluate(
        "//*[@id='results-table']",
        document.body,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    // console.log(tables);
    /*table = tables.iterateNext();
        while (table) {
            table.remove();
            tables.text = "";
            table = tables.iterateNext();
            
        }*/

    for (let i = 0; i < tables.snapshotLength; i++) {
        tables.snapshotItem(i).remove();
    }
    // console.log(tables);

    // Clearing the form items
    $("#search-form").find("input[type=text]").val("");
    // $("#search-form").find("input[type='radio'], select").removeAttr("checked").removeAttr("selected");

    console.log("Everything has cleard!");
    console.log($results.hasChildNodes());

    // Write into the results section if clearing has happen
    if ($results.innerText == "") {
        var div = document.createElement("div");
        div.setAttribute("id", "clear-results");
        div.innerHTML = "<h2>Everything has cleard!</h2>";
        $results.appendChild(div);
    }
}

function generateTableOne() {
    
    if (!hasTable()) {
        this.generateTableOne.time = "";
        $results.innerHTML = "";
        var table, rowX, title, titles, start, end, caption;
        start = new Date().getTime();
        table = document.createElement("table");
        table.setAttribute("id", "results-table");
        titles = ["Year", "Category", "Nominee", "Info", "Won?"];
        rowX = table.insertRow();
        for (let i = 0; i < 5; i++) {
            title = document.createElement("th");
            title.appendChild(document.createTextNode(titles[i]));
            rowX.appendChild(title);
        }
        table.createTBody();
        $.getJSON("./json/oscars.json", function (data) {
            for (let i = 0; i < data.length; i++) {
                var row = table.tBodies[0].insertRow();
                for (const [key, value] of Object.entries(data[i])) {
                    var cell = row.insertCell(-1);
                    cell.appendChild(document.createTextNode(value));
                }
            }
            caption = table.createCaption();
            end = new Date().getTime();
            // divide the time value by 1000 to get seconds About 3,690 results (0.36 seconds)
            generateTableOne.time = (end - start) / 1000;
            caption.innerHTML =
                "Found " + data.length + " results (About " + generateTableOne.time + " seconds)";
            console.log(caption.innerHTML);
            $results.appendChild(table);
            
        });
    } else {alert("Kindly clear the current results table in order to regenerate new one!");}

    console.log("Marhaba: " + generateTableOne.time);
}

function generateTableTwo() {
    if (!hasTable()) {
        $results.innerHTML = "";
        var table, rowX, title, titles, start, end, time, caption;
        start = new Date().getTime();
        table = document.createElement("table");
        table.setAttribute("id", "results-table");
        titles = ["Year", "Category", "Nominee", "Info", "Won?"];
        rowX = table.insertRow();
        for (let i = 0; i < 5; i++) {
            title = document.createElement("th");
            title.appendChild(document.createTextNode(titles[i]));
            rowX.appendChild(title);
        }
        table.createTBody();

        $.getJSON("./json/oscars.json", function (data) {
            //$("#text").html(data["text"]);
            for (let i = 0; i < data.length; i++) {
                // Insert a row at the end of the body of the table
                // Then insert five cells in that row
                let row, cell0, cell1, cell2, cell3, cell4;
                row = table.tBodies[0].insertRow();
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
            caption = table.createCaption();
            end = new Date().getTime();
            // divide the time value by 1000 to get seconds About 3,690 results (0.36 seconds)
            time = (end - start) / 1000;
            caption.innerHTML =
                "Found " + data.length + " results (About " + time + " seconds)";
            console.log(caption.innerHTML);
            $results.appendChild(table);
        });
    } else {
        alert(
            "Kindly clear the current results table in order to regenerate new one!"
        );
    }
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
        document.getElementById("clear-all").onclick = finishThem;
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
// $(window).load(function() {});   >>> should be changed to >>>    $(window).on('load', function (e) {})
try {
    $(window).on("load", function () {
        // fired after whole content is loaded like page contain images,css etc

        //$(document).on("ready", function () {
        // jQuery event that is fired when DOM is loaded, so it’s fired when the document structure is ready
        /*$.getJSON("./json/oscars.json", function (data) {
                    console.log(data);
                    //$("#text").html(data["text"]);
                    const result = data;
                    return result;
                });*/

        // When the user scrolls the page, execute myFunction 
        window.onscroll = function() {scroll()};

        $results = document.getElementById("results-section");
        $table = document.getElementById("results-table");

        $selectedYear = document.getElementById("select-year");

        // grab reference to form
        $formElem = document.getElementById("search-form");
        // console.log("Form elemnt: " + $formElem);

        // submit handler
        $formElem.addEventListener(
            "submit",
            (e) => {
                // on form submission, prevent default
                e.preventDefault();
                console.log($formElem);

                // construct a FormData object, which fires the formdata event
                new FormData($formElem);
            },
            false
        );

        // formdata handler to retrieve data
        $formElem.addEventListener("formdata", (e) => {
            console.log("formdata fired");

            // Get the form data from the event object
            let hit = e.formData;

            // Go to search
            bismAllah(hit);
        });

        /*
        
        // Building objects

        const o = {a: 0};
        
        Object.defineProperty(o, 'b', {
            set: function(x) {
                this.a = x / 2;
            }
        });
        
        o.b = 10;
        //  Runs the setter, which assigns 10 / 2 (5) to the 'a' property
        
        console.log(o.a);
        //  5

        class Example {
            constructor() {
                const proto = Object.getPrototypeOf(this);
                console.log(Object.getOwnPropertyNames(proto));
            }
            first(){let india = 5;}
            second(){let babel = 3;}
            static third(){let china = 9}
        }
        
        var x = new Example(); // ['constructor', 'first', 'second']

        console.log(x);

        */

        $("#toggle-dark-mode").on("click", darkMode);
        $("#marhaba").on("click", notPossible);
        $("#clear-all").on("click", finishThem);
        $("#search-all-one").on("click", generateTableOne);
        $("#search-all-two").on("click", generateTableTwo);
        $("#table-only").on("click", clearTable);
        //$("form").on("click", "select", function() {
        //$(selectedYear).addEventListener("click", generateList);

        $("#select-year").one("click mouseover", function (event) {
            generateList(this);
            $(this).off(console.log("The " + generateList.type + " event happened!"));
        });

        /* {
                $(this).empty();
                $(this).after(generateList);
            });*/

        /*$("body").on( "click", "p", function() {
                    $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
                });*/
    });

    // $("#first-choice").change(function() {$("#second-choice").load("textdata/" + $(this).val() + ".txt");});

    /*
            this.output = () => {
            $.getJSON("./json/oscars.json", function(data) {
                console.log(data);
                //$("#text").html(data["text"]);
                const result = data;
                return result;
            })};
    
        };*/
} catch (e) {
    console.log(e);
}

function generateList(x) {
    console.log(x == $selectedYear);
    console.log("Start: " + x.options.length);
    // $selectedYear = select
    var fixing = document.evaluate(
        "//*[@id='select-year']",
        document.body,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    console.log("xPath: ", fixing.snapshotLength);
    //console.log("The years select options size is: " + $selectedYear.length);
    /*
        for (let i = 0; i < fixing.snapshotLength; i++) {
            fixing.snapshotItem(i).remove();
        }*/
    console.log("$selectedYear: " + $selectedYear);
    // var select = x;
    console.log("select: " + x);

    if (x === $selectedYear) {
        console.log("Hi");
        console.log(x.options.length);
    }

    $.getJSON("./json/oscars.json", function (data) {
        // select.options[0].removeAttr("selected");
        // createElement(): Option(text, value, defaultSelected, selected)
        for (let i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.text = data[i].Year; // assumes option string and value are the same
            option.value = data[i].Year;
            //console.log(option.value);
            //console.log(typeof option.value);
            try {
                x.add(option); // this will fail in DOM browsers but is needed for IE
            } catch (e) {
                x.appendChild(option);
            }
        }
    });

    console.log("Finish: ", x.options.length);
    console.log(x.options.length);
    // $x("/html/body/section[2]");
}

// Dynamically generating select options once the user change <option value="none">None</option>
// document.getElementById("orange").selected = "true";

//This one works
function getData() {
    let jsonURL, request;
    jsonURL = "https://sabuein.github.io/oscars/json/oscars.json";
    request = new XMLHttpRequest();
    request.open("GET", jsonURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        //const flow = request.response;
        var output = JSON.parse(request.response);
        console.log(output);
        // console.log(flow.length);
        // console.log(theTable.domContentLoadedEventEnd - theTable.domContentLoadedEventStart);
        //data = flow;
    };
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
