function getInput() {
    let input = document.getElementById("textarea").value;
    let span = document.getElementById("outputSpan");
    console.log(input);
    span.textContent = wiggle(input);
}

function wiggle(string) {
    let potato = 2
    let newString = ""
    let radish = 0
    length = string.length;
    for (item in string) {
        string = string.toLowerCase()
        letter = string.slice(radish, radish + 1)
        radish++
        potato++
        if (potato / 2 == Math.floor(potato / 2)) {
            letter = letter.toUpperCase()
        }
        newString = newString + letter
    }
    return newString
}