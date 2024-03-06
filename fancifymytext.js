function showAlert() { 
    alert("Hello, world!");
}

document.getElementById("bigger-btn").onclick = function(){
    document.getElementById("text-input").style.fontSize = "24pt";
};
document.getElementById("fancy-radio").onchange = function() {
    if (document.getElementById("fancy-radio").checked) {
        document.getElementById("text-input").style.fontWeight = "bold";
        document.getElementById("text-input").style.color = "blue";
        document.getElementById("text-input").style.textDecoration = "underline";
    }
};

document.getElementById("boring-radio").onchange = function() {
    if (document.getElementById("boring-radio").checked) {
        document.getElementById("text-input").style.fontWeight = "normal";
        document.getElementById("text-input").style.color = "black";
        document.getElementById("text-input").style.textDecoration = "none";
    }
};
document.getElementById("moo").onclick = function() {
    var text = document.getElementById("text-input").value;
    var sentences = text.split(".");
    var newText = sentences.map(function(sentence) {
        var words = sentence.split(" ");
        var lastWord = words.pop();
        if (lastWord.endsWith(" ")) {
            lastWord = lastWord.slice(0, -1);
        }
        lastWord = lastWord.toUpperCase();
        words.push(lastWord + " Moo");
        return words.join(" ");
    });
    document.getElementById("text-input").value = newText.join(".");
};