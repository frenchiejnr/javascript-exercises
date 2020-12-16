const ftoc = function(farenheit) {
  let celcius = ((farenheit - 32) *(5/9));
  celcius = roundTo1Decimal(celcius);
  return celcius;
}

const ctof = function(celcius) {
  let farenheit = (celcius * (9/5))+ 32;
  farenheit = roundTo1Decimal(farenheit);
  return farenheit;
}

function roundTo1Decimal(num) {
  if (num % 1 != 0) {
    num = parseFloat(num.toFixed(1));
  }
  return num;
}

module.exports = {
  ftoc,
  ctof
}

