const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS";
    }
    let fibonacciArray = [1, 1]
    let i = num
    do {
        console.log(i);
        console.log(fibonacciArray[fibonacciArray.length - 1]);
        fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2])
        i--;
    } while (i > 2);
    return fibonacciArray[num - 1];
}
module.exports = fibonacci
