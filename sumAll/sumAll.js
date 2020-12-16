const sumAll = function(start, end) {
    let total = 0;
    
    if (isNaN(start) || isNaN(end)) {
        return "ERROR";
    }
    
    if (typeof start === 'string' || typeof end === 'string') {
        return "ERROR";
    }


    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        [start, end] = [end, start]; // swap the variables
    }

    for (let i = start; i < end + 1; i++) {
        total += i; 
    }
    return total;
}

module.exports = sumAll
