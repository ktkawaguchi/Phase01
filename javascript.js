var member1 = "http://www.google.com";
var member2 = "https://www.cpp.edu/";
var member3 = "http://yahoo.com";
var link = document.createElement("a");
link.setAttribute("id","newLink");

//create event handler for button and fires function
document.getElementById("printInfo").onclick = function() {
    var textInput = document.getElementById("textbox").value;
    var numberInput = document.getElementById("numberbox").value;
    console.log(textInput + " " + numberInput);
    document.getElementById("link").innerHTML = textInput + " " + numberInput;
    linkLogic(numberInput);
};

//logic for deciding what link to create and creates it
function linkLogic (num) {
    if (num < 0) {
        console.log(member1);
        link.href = member1;
    } else if (num >= 0 && num < 30) {
        console.log(member2);
        link.href = member2;
    } else {
        console.log(member3);
        link.href = member3;
    }
    link.textContent = "Members Link";
    document.getElementById("results").appendChild(link);
};