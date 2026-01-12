function helloWorld() {
  return "Hello, World!";
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

module.exports = { helloWorld, divide };