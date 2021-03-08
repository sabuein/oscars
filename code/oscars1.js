/** 
 * @author Salaheddin AbuEin
 * @id 123
 */

console.log(`%cReading the JavaScript file...`, "font-weight: bold;");
console.log(`Hello Dr Peter,
I hope you are well and doing fine!
I look forward to receiving your feedback on this project,
Thanks for introducing me to all this knoweldge, such a massive ocean.
Sincerely,
Salah.`);

var theForm, jsonData, moreYears, results, darker, testing;

try {
    $(window).on("load", function () {

        //Reading and saving the JSON file content into jsonData var.
        getTheFile();

        console.log(`%c>>> The window has loaded sussessfully!`, "font-weight: bold; color: #f0ffff;"); //Azure

        moreYears = document.getElementById("more-years");
        darker = document.getElementById("toggle-dark-mode");
        theForm = document.getElementById("search-form");
        results = document.getElementById("results-section");


        // The testing button
        testing = document.getElementById("clickMe");
        testing.addEventListener("click", checkThat);

        // mouseenter event fires when a pointer enters an element.
        // focus event fires when an element has received focus
        // only once: true
        //moreYears.addEventListener("click", createTheList, {once: true});

        moreYears.addEventListener("click", function (e) {
            // Remove all of the options
            // moreYears.removeChild(moreYears.lastElementChild);
            createTheList(jsonData);
        }, { once: true });

        //theForm.addEventListener("focus", getFocus, true);

        // blur event fires when an element has lost focus.
        //theForm.addEventListener("blur", getBlur, true);


        let x = filterItems(jsonData, "2007");


        // submit event fires when a form element has submitted.
        theForm.addEventListener("submit", function (e) {
            // Prevent the default submit behavior
            e.preventDefault();

            // Set theForm to the HTMLFormControlsCollection interface which represents a collection of HTML form control elements.
            // Read more: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection


            console.log("%c>>>%cForm default behavior has been disabled.", 'font-weight: bold; color: #f0ffff;');
            //console.log("Form elements:", theForm.elements);

            if (theForm.year.value && theForm.category.value && theForm.nominee.value && theForm.info.value) {
                console.log("It works!", theForm.year);
                console.log("It works!", theForm.category);
                console.log("It works!", theForm.nominee);
                console.log("It works!", theForm.info);
            }
            // Variables defined without var keyword become global variables.
            theYear = theForm.year;
            theCategory = theForm.category;
            theNominee = theForm.nominee;
            theInfo = theForm.info;

            // This value can appear in either the Nominee or Info elements.
            theNomineeInfo = theForm.nomineeInfo;


            winnersSelected = theForm.selectWinners;

            // <input type="radio" required name="select-winners" id="all-winners" value="all-winners" checked="true" /><label for="all-winners">All-nominations</label>
            // if (coffee[i].checked) {txt = txt + coffee[i].value + " ";};

            selectedYear = theForm["more-years"];

            console.log("%c>>>%cReceiving form data...", 'font-weight: bold; color: #f0ffff;');

            // More colors: https://www.w3schools.com/colors/colors_names.asp
            console.log(`%c${theYear.name}%c: %c${theYear.value}`, "font-weight: bold; color: #00ffff;", "", "color: silver;"); //Cyan
            console.log(`%c${theCategory.name}%c: %c${theCategory.value}`, "font-weight: bold; color: #7fff00;", "", "color: silver;"); //Chartreuse
            console.log(`%c${theNominee.name}%c: %c${theNominee.value}`, "font-weight: bold; color: #dc143c;", "", "color: silver;"); //Crimson
            console.log(`%c${theInfo.name}%c: %c${theInfo.value}`, "font-weight: bold; color: #ff8C00;", "", "color: silver;"); //DarkOrange

            console.log(`%c${theNomineeInfo.name}%c: %c${theNomineeInfo.value}`, "font-weight: bold; color: #ff69b4;", "", "color: silver;"); //HotPink
            console.log(`%c${winnersSelected[0].name}%c: %c${winnersSelected.value}`, "font-weight: bold; color: #6495ed;", "", "color: silver;"); //CornflowerBlue
            console.log(`%c${selectedYear.name}%c: %c${selectedYear.value}`, "font-weight: bold; color: #32cd32;", "", "color: silver;"); //LimeGreen

            // console.log(typeof selectedYear.value);
            // The string.includes() method determines whether a string contains the characters of a specified string.

            /* 3. For each of year, category, nominee and info, the user should be able to enter a value in a text box.
            If a value is entered, then the output should contain the string entered in the corresponding key/property value.
            So entering 2010 in the text box for year should produce the above rows as well as all the others for 2010.*/

            // This checks if the first four input elements are either undefined, null or empty string.
            // "Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement".
            // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

            if (theYear.value || theCategory.value || theNominee.value || theInfo.value) {
                console.log("p.s. At least one of the first four inputs is not empty string.");
                /*theYear.value = "Nothing";
                theCategory.value = theYear.value;
                theNominee.value = theCategory.value;
                theInfo.value = theNominee.value;*/
            } else { console.log("p.s. The first four inputs are empty strings."); }


            /* 4. In a separate text box, the user should be able to enter a value which could appear in either the Nominee or Info elements.
            This is useful for retrieving nominations where, e.g., a person has been nominated either as an actor or as a director.
            If a user enters a value in this box, they should not enter a value in either the nominee or info boxes;
            if they do, an error should be produced, warning them of this.*/

            // This checks if there's a value in the Nominee/Info element and in either the Nominee or Info elements at the same time.
            if (theNomineeInfo.value && (theNominee.value || theInfo.value)) {
                console.log("p.s. You should not enter a value in either the nominee or info boxes if you want to type in this box");
                theNominee.disabled = true;
                theInfo.disabled = true;
            }

            /* 5. The user should be able to specify that they want all nominations, only those that won, or only those that did not win.
            This is probably best specified using a select element. */

            /* 6. There should be a select element for the user to choose the exact year value, e.g., "2010 (83rd)".
            The options for this element should be obtained from the JSON file programmatically. The first option should be "None",
            corresponding to no selection having being made, and each year value in the file should appear only once in the option list.
            If the user enters both a value in the text box for year (as in 3 above) and selects an option other than "None" here,
            an error should be produced, stating that only one or the other can be chosen. */

            // This checks if

            if (theYear.value && selectedYear.value) {
                console.log("Year >>> ", theYear.value);
                console.log("Select >>> ", selectedYear.value);
                selectedYear.disabled = true;
            }

            console.log("%c>>>%cForm received.", 'font-weight: bold; color: #f0ffff;');
        });

        darker.addEventListener("click", () => {
            if (document.body.classList.value == "") document.body.classList.toggle("enable-black");
            else document.body.removeAttribute("class");
        });

        // Turns the form auto-complete on.
        //turnAuto();



    }
    )
} catch (e) {
    console.log(`%cAn error has occured >>>%c ${e.message}`, "font-weight: bold; color: #f0ffff;", ""); //Azure
}


class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    } start() {
        console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
    }
}



/* 1. The input provided by the user should be through an HTML form, with various fields specified below.
There should be a single 'search' button which generates output when clicked. There should also be a 'clear' button to clear all the user input. */



/* 2. The output should be in the form of an HTML table generated dynamically and appearing below the form.
The columns of the table should be headed Year, Category, Nominee, Info and Won. So for the first five nominations in the file,
the table might look as the one at: https://www.dcs.bbk.ac.uk/~ptw/teaching/IWT/2021/cw1-2021.html */

/*function eventListener(element, event, listener) {
    // first we call eventListener on element with event name
    // then inside the callback function, we first un-register the listener
    // and return the original listener passed to attach it with the event
    element.addEventListener(event, function() {
        element.removeEventListener(event, arguments.callee);
        return listener();
    });
}*/

function checkThat() {
    try {
        yallahSearch(theForm, jsonData);
        //buildTable1(jsonData);
        buildTable2(jsonData);

    } catch (e) {
        console.log(`%cAn error has occured >>> %c${e.message}`, "font-weight: bold; color: #f0ffff;", ""); //Azure
    }
}

function filterItems (array, query) {
    return Object.entries( filter(el => el.toLowerCase().includes(query.toLowerCase()) !== -1));
};

function yallahSearch(keywords, dataObjectArray) {
    let year, category, nominee, info, won;
    // Printing submit values in pairs to the console
    /*for (let i = 0; pair of dataObjectArray.entries()) {
        // With nice added style to the console output
        if (pair[1].Year.includes(keywords)) {
            console.log(`%c${pair[0]} = %c${pair[1].Year}`, "color: gray;", "font-weight: bold;");
        }
        
    };*/

    /*eywords.elements.forEach(function(i){
        console.log(i.value);
    });*/

    //var results = dataObjectArray.entries.map(i => i.year);

    /*
    The JSON Object:
    {
        "Year": "2010 (83rd)",
        "Category": "Actor -- Leading Role",
        "Nominee": "Javier Bardem",
        "Info": "Biutiful {'Uxbal'}",
        "Won": "no"
    }
    */

    for (let i = 0; i < dataObjectArray.length; i++) {
        year = dataObjectArray[i].Year;
        category = dataObjectArray[i].Category;
        nominee = dataObjectArray[i].Nominee;
        info = dataObjectArray[i].Info;
        won = dataObjectArray[i].Won;
        //console.log(year);

        for (const [key, value] of Object.entries(dataObjectArray[i])) {
            if (keywords["year"].value) {
                if (key === "Year" && value.includes(keywords["year"].value.toLowerCase())) {
                    console.log(key, value);
                }
            }
        }
    };


    console.log(filterItems(jsonData, keywords["year"].value));

    // This works
    // Object.entries(dataObjectArray).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"

    /*Object.keys(dataObjectArray).map(function(item)...;
    Object.keys(dataObjectArray).forEach(function(item)...;
    
    // ES way
    Object.keys(dataObjectArray).map(item => {...});
    Object.keys(dataObjectArray).forEach(item => {...});*/

    /*for (let i = 0; i < dataObjectArray.length; i++) {
        const map = new Map(Object.entries(dataObjectArray[i]));
        console.log(map);
    };

    console.log(map.length);*/

    console.log(keywords.elements.namedItem("year").name);

    if (keywords.elements.namedItem("year")) {
        // In JavaScript, using the array bracket syntax with a String, like collection["value"] is equivalent to collection.namedItem("value").
        console.log((keywords.elements.namedItem("year").value) ? true : false);
        console.log("The year is 1:", keywords.elements.namedItem("year").value);
        console.log((keywords["year"].value) ? true : false);
        console.log("The year is 2:", keywords["year"].value);
    }

    if (!keywords.year.defaultValue) {
        console.log("DefaultValue:", keywords.year.defaultValue);
    }

    console.log("Keywords:", keywords, "Type:", typeof keywords);
    console.log("Array:", dataObjectArray, "Type:", typeof dataObjectArray);

    console.log(moreYears.options[moreYears.selectedIndex].text);
    console.log(moreYears.options[moreYears.selectedIndex].value);

}

function createTheList(input) {
    console.log(`We have found ${input.length + 1} new options to add...`);
    input.forEach(function (item) {
        var option = document.createElement("option");
        option.text = item.Year;
        option.value = item.Year;
        try {
            moreYears.add(option); // this will fail in DOM browsers but is needed for IE
        } catch (e) {
            moreYears.appendChild(option);
        }
    });
    console.log("Successful. Now we have " + (moreYears.options.length + 1) + " options including the 'None'.");
};

function getTheFile() {
    $.getJSON("./json/oscars.json", function (data) {
        try {
            jsonData = data;
        } catch (e) {
            console.log("Something is wrong with getTheFile();");
        }
    })
};

function getFocus() {
    var inputs = $("input[type='search']");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "#a9d1f6";
    }
}

function getBlur() {
    var inputs = $("input[type='search']");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "";
    }
}

// Set the form auto-complete to on.
function turnAuto() {
    // This will set the form auto-complete to on
    document.getElementById("search-form").autocomplete = "on";
}

// Check if the HTML results section has a table element or not; return boolean.
function hasTable() {
    var table = document.getElementById("results-table");
    return results.contains(table);
}

function buildTable1(input) {
    let table, row, cell, title, titles, start, end, caption;
    results.innerHTML = "";
    start = new Date().getTime();
    table = document.createElement("table");
    table.setAttribute("id", "results-table");
    titles = ["Year", "Category", "Nominee", "Info", "Won?"];
    row = table.insertRow();
    for (let i = 0; i < titles.length; i++) {
        title = document.createElement("th");
        title.appendChild(document.createTextNode(titles[i]));
        row.appendChild(title);
    }

    // Creating the table body
    table.createTBody();

    for (let i = 0; i < input.length; i++) {
        row = table.tBodies[0].insertRow();
        for (const [key, value] of Object.entries(input[i])) {
            cell = row.insertCell(-1);
            cell.appendChild(document.createTextNode(value));
        }
    }

    caption = table.createCaption();
    end = new Date().getTime();
    // divide the time value by 1000 to get seconds About 3,690 results (0.36 seconds)
    time = (end - start) / 1000;
    caption.innerHTML = "Found " + input.length + " results (About " + time + " seconds)";
    console.log(caption.innerHTML);
    console.log("Time:", time);
    results.appendChild(table);

};

function buildTable2(input) {

    let table, rowX, title, titles, start, end, time, caption;
    start = new Date().getTime();

    results.innerHTML = "";
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

    for (let i = 0; i < input.length; i++) {
        // Insert a row at the end of the body of the table
        // Then insert five cells in that row
        let row, cell0, cell1, cell2, cell3, cell4;
        row = table.tBodies[0].insertRow();
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell0.innerHTML = input[i].Year;
        cell1.innerHTML = input[i].Category;
        cell2.innerHTML = input[i].Nominee;
        cell3.innerHTML = input[i].Info;
        cell4.innerHTML = input[i].Won;
    }

    caption = table.createCaption();
    end = new Date().getTime();

    // divide the time value by 1000 to get seconds About 3,690 results (0.36 seconds)
    time = (end - start) / 1000;

    caption.innerHTML = "Found " + input.length + " results (About " + time + " seconds)";
    console.log(caption.innerHTML);
    results.appendChild(table);

};

// Command the browser to wait a number of Milliseconds.
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
};