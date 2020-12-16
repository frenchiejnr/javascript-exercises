const reverseString = function(string) {
    let splitString = string.split("");
    let reversedString = [];
    for (let i = splitString.length -1; i >= 0; i--) {
        reversedString.push(splitString[i]);
    }
    return reversedString.join("");
}

reverseString("hello");

module.exports = reverseString
