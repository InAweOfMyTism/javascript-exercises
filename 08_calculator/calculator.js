const add = function(addend1, addend2) {
	return parseInt(addend1) + parseInt(addend2);
};

const subtract = function(addend1, addend2) {
	return parseInt(addend1) - parseInt(addend2);
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number <= 1){
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
