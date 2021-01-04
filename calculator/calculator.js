function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {
	const summed = numbers.reduce((acc, number) => {
		return acc + number;
	} ,0)

	return summed;
}

function multiply (numbers) {
	const multiplied =  numbers.reduce((acc, number) => {
		return acc * number;
	})

	return multiplied;
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(number) {
	if (number === 0 || number === 1) {
		return 1;
	}
	let total = number;
	while (number > 1) {
		number--;
		total = total * number;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}