const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        let toRemoveIndex = array.indexOf(arguments[i]);
        if (toRemoveIndex === -1) {
            continue;
        }
        array.splice(toRemoveIndex,1);
    }
    return array;
}

module.exports = removeFromArray
