const caesar = function (string, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let caesarResult = "";

    // If shift is negative, convert to positive
    if (shift < 0) {
        shift = alphabet.length + shift;
    }

    [...string].forEach((letter) => {
        console.log(letter);
        let letterIndex = alphabet.indexOf(letter.toLowerCase()) % alphabet.length;
        let shiftedIndex = (letterIndex + shift) % alphabet.length;
        if (/[a-zA-Z]/.test(letter)) {
            if (letter === letter.toUpperCase()) {
                caesarResult += alphabet[shiftedIndex].toUpperCase();
            } else {
                caesarResult += alphabet[shiftedIndex];
            }
        } else {
            caesarResult += letter;
        }
    });
    return caesarResult;
};

module.exports = caesar;
