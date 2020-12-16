const repeatString = function(string, repeats) {
    let repeatedString = '';
    if (repeats < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeats; i++) {
        repeatedString += string;  
    }
    return repeatedString;
}

module.exports = repeatString
