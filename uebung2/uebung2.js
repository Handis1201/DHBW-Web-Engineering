"use strict";   // this gives us some more discipline in coding correct Javascript

document.getElementsByTagName("BODY")[0].onload = Init;


// the object. So what we do here is to define a string ' .JSON.... ' and then parse it.
function Init ()
{
    
// Define the JSON String
//
var jsonstring = ' { "Menschen" : [' +
    ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  },' +
    ' { "Vorname" : "Alfred", "Nachname" :"Strey", "Gender": "male", "Rolle" : "Dozent"  }' +
    ' ] }';

    console.log(jsonstring);
    window.Menschen = JSON.parse(jsonstring);

    document.getElementById('popupli1').addEventListener("click", showMenschen);
    document.getElementById('PullupOptionsBtn').addEventListener("click", function () { var pull = document.getElementById('PullupOptions'); pull.style.display = "none"; });
    document.getElementById('showwindowbtn').addEventListener("click", function () { document.getElementById('showwindow').style.display = "none" });
    document.getElementById('showwikibtn').addEventListener("click", function () { document.getElementById('showwiki').style.display = "none" });
    document.getElementById('PullupService').addEventListener("click", pullupWindow);
    document.getElementById('content').addEventListener("click", function() { alert("DOOOONNN'T CLICK THE CONTENT!!!!");});

}

function pullupWindow()
 {
  console.log("Pull up");
  var pull = document.getElementById('PullupOptions'); 
  pull.style.top = document.getElementById('content').offsetTop + "px";
  pull.style.display = "block";
   }

function showMenschen()  {

  console.log("showMenschen ");

  var tableheader = "<table> <tr>"; 
  tableheader += "<th>Vorname</th><th>Nachname</th><th>Gender</th><th>Rolle</th></tr>";
  var tabletext = "";
  var alle = window.Menschen;
  for (var i = 0; i < alle.Menschen.length; i++) {
    var person = alle.Menschen[i];
      tabletext += "<tr><td>" + person.Vorname + "</td>";
      tabletext += "<td>" + person.Nachname + "</td>";
      tabletext += "<td>" + person.Gender + "</td>";
      tabletext += "<td>" + person.Rolle + "</td>";
      tabletext += "</tr>";
  }

  var tableclosing = "</table>";
  var fulltext = tableheader + tabletext + tableclosing;
  //
  // save the full text as innerHTML of the popup element named showwindowData
  document.getElementById('showwindowData').innerHTML = fulltext;
  // show the curently invisible showwindow item
  document.getElementById('showwindow').style.display = "block";
  // somewhere in the middle of the page
  document.getElementById('showwindow').style.top = "50%";
}

function searchWiki() {
    var searchString = document.getElementById('searchString').value;
    console.log(searchString);
    var apiUrl = 'http://localhost:6001/proxy/?https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=extracts%7Cdescription&exintro=1&explaintext=1&exsentences=3&gpssearch=' + searchString;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var jsonObject = JSON.parse(this.response);
        var wikipages = jsonObject.response.query.pages;
        var tableheader = "<table> <tr>";
        tableheader += "<th>Search Argument</th><th>Description</th><th>Extract</th><th>Link</th></tr>";
        var tabletext = "";
        console.log(wikipages);
        for (let key in wikipages) {
            var wikipage = wikipages[key];
            tabletext += "<tr><td>" + wikipage.title + "</td>";
            tabletext += "<td>" + wikipage.description + "</td>";
            tabletext += "<td>" + wikipage.extract + "</td>";
            var page = "https://de.wikipedia.org/?curid=" + wikipage.pageid
            tabletext += "<td><a href='" + page + "'>" + page + "</a></td>";
            tabletext += "</tr>";
        }

        var tableclosing = "</table>";
        var fulltext = tableheader + tabletext + tableclosing;
        console.log(fulltext);
        //
        // save the full text as innerHTML of the popup element named showwindowData
        document.getElementById('showwikiData').innerHTML = fulltext;
        // show the curently invisible showwindow item
        document.getElementById('showwiki').style.display = "block";

    }
    xhttp.open("GET", apiUrl);
    xhttp.send();
}

