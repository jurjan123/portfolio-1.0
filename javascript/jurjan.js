//window.alert("welkom op mijn portfolio")

function setup(){
    var textInput;
    textInput = document.querySelector(".footer");
    textInput.focus()

}

window.addEventListener("DOMcontentloaded", setup, false)

window.addEventListener("beforeunload", function(event){
    var message = "you have changes that have not been saved"
    (event || window.event).returnValue = message;
    return message;
}, false)