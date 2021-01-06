const getTheTitles = function(array) {
    let titleArray = [];
    for (const book of array) {
        console.log(book.title);
            titleArray.push(book.title);
        }
        return titleArray;
    }
module.exports = getTheTitles;
