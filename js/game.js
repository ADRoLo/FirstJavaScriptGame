window.onload = initialize;

function initialize(){
    var buttoncheck = document.getElementById("check");
    buttoncheck.addEventListener("click", checkWord);
}

function checkWord() {
    console.log("user has clicked on check button")

    var letter1 = document.getElementById("letter1");
    var letter1Value = letter1.nodeValue;
    console.log(letter1Value);
}