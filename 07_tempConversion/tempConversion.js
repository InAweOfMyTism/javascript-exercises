const convertToCelsius = function(tempF) {
  let tempC = (5/9)*(tempF - 32);
  //return tempC.toFixed(1);
  return Math.round((tempC * 10))/10;
};

const convertToFahrenheit = function(tempC) {
  let tempF = 32 + (tempC * 9/5);
  //return tempF.toFixed(1);
  return Math.round((tempF * 10))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
