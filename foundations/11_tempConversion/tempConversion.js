const convertToCelsius = function(a) {
  let celsius = (a - 32) * (5/9);
  celsius = celsius.toFixed(1);
  return +celsius;
};

const convertToFahrenheit = function(a) {
  let fahrenheit = (a * (9/5) + 32);
  fahrenheit = fahrenheit.toFixed(1);
  return +fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
