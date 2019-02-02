//create event handler for button and fires function
document.getElementById("printInfo").onclick = function() {
    console.log("is this working?");
    var textInput = document.getElementById("textbox").nodeValue;
    console.log(textInput);
    document.getElementById("results").innerHTML = "Just change";
};