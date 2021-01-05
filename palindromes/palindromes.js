const palindromes = function (potentialPalindrome) {
    let palindrome = true;

    // remove punctuation, including whitespace
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    potentialPalindrome = potentialPalindrome.replace(regex, "");

    potentialPalindrome = potentialPalindrome.toLowerCase();

    let length = potentialPalindrome.length - 1;
    potentialPalindrome = [...potentialPalindrome];
    for (let i = 0; i < potentialPalindrome.length; i++) {
        if (potentialPalindrome[i] !== potentialPalindrome[length - i]) {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

palindromes('A car, a man, a maraca.');

module.exports = palindromes
