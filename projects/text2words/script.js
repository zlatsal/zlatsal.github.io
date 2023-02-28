const textAreaGrab = document.getElementById("text-area");

function grabSplit() {
    textAreaText = textAreaGrab.value;
    // clean all alphanumericals
    let cleanAlpha = textAreaText.replace(/[^a-z0-9 ]/gi, "");

    // all chars to lowercase
    let lowerCase = cleanAlpha.toLowerCase();

    // convert to array
    let words = lowerCase.split(" ");

    // clean duplicate values (in this case words in the sentence)
    let cleanDuplicate = [...new Set(words)];
    document.getElementById("result-words").innerHTML =
        cleanDuplicate.join("<br>");
}

const button = document.getElementById("btn-split");

function splitText() {}

button.addEventListener("click", () => {
    grabSplit();
});
