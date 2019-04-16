// Variables
var total = 100;

var sum = (a, b) => {
    return a + b;
}

// Functions
function multiply(a, b) {
    return a * b;
}
function diff(a, b) {
    return a - b;
}

// // Objects
var math = {};
math.sum = (a, b) => {
    return a + b;
};

math.div = (a, b) => {
    return a/b;
};

// Multiple functions can be exported together as:

module.exports = {
  sum: (a, b) => {
    return a + b;
  },
  div: (a, b) => {
    return a / b;
  }
}

// if exports.function is mentioned, then don't need to write exports.

// if a new variable is declared afterwards, we need to export it by module.exports at the bottom.

// Single functions can be exported as:

exports.sum = (a, b) => {
  return a + b;
};

exports.div = (a, b) => {
  return a / b;
}

// Export variables and functions
module.exports = { total, sum, multiply, diff };

// // Export objects
module.exports = math;




