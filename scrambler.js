let input, inputField, outputField;
let scrambleToggle, shuffleToggle, lineToggle, commentToggle, bracketToggle, spaceToggle, leetVariablesToggle, leetFunctionsToggle, altVariablesToggle, altFunctionsToggle;
let toggles = [scrambleToggle, shuffleToggle, lineToggle, commentToggle, bracketToggle, spaceToggle, leetVariablesToggle, leetFunctionsToggle, altVariablesToggle, altFunctionsToggle];

window.onload = function () {
    inputField = document.getElementById("input");
    outputField = document.getElementById("output");

    scrambleToggle = document.getElementById("scrambleToggle");
    shuffleToggle = document.getElementById("shuffleToggle");
    lineToggle = document.getElementById("lineToggle");
    commentToggle = document.getElementById("commentToggle");
    bracketToggle = document.getElementById("bracketToggle");
    spaceToggle = document.getElementById("spaceToggle");
    leetVariablesToggle = document.getElementById("leetVariablesToggle");
    leetFunctionsToggle = document.getElementById("leetFunctionsToggle");
    altVariablesToggle = document.getElementById("altVariablesToggle");
    altFunctionsToggle = document.getElementById("altFunctionsToggle");
}

function Execute() {
    input = inputField.value;
    lines = inputField.value.split("\n");
    if (commentToggle.checked) {
        lines = Gibberish(lines);
        for (var i = 0; i < lines.length; i++) {
            outputField.value += lines[i] + '\n';
        }
    }
    if (lineToggle.checked) {
        lines = OneLine(lines);
        outputField.value = lines;
    }
}

function Gibberish(linesArr) {
    let characters = ["1234567890!@#$%^&*()_+~{}|:'<>?/;,.[]\-=`qwertyuiopasdfghjklzxcvbnm"];
    let len = 0;
    for (var i = 0; i < linesArr.length; i++) {
        for (var j = 0; j < linesArr[i].length - 1; j++) {
            if (linesArr[i][j] == '/' && linesArr[i][j + 1] == '/') {
                len = linesArr[i].length;
                linesArr[i] = linesArr[i].substr(0, j + 2);
                for (var z = 0; z < len - j - 2; z++) {
                    linesArr[i] += characters[0][Math.floor(Math.random() * characters[0].length)]
                }
                break;
            }

        }
    }
    console.log(linesArr);
    return linesArr;
}

function OneLine(linesArr) {
    let index = 0;
    let newText = "";
    for (var i = 0; i < linesArr.length; i++) {
        if (!linesArr[i].includes('#'))
            break;
        index++;
    }
    
    for (var i = linesArr.length - 1; i >= 0 ; i--) {
        if (linesArr[i].includes('//'))
            linesArr.splice(i,1);
    }

    for (var i = 0; i < index; i++) {
        newText += linesArr[i] + '\n';
    }

    for (var i = index; i < linesArr.length; i++) {
        newText += linesArr[i].replace(/(\r\n|\n|\r)/gm, "");
    }
    
    return newText;
}