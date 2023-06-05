// basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.error('Cannot divide by zero!');
    return 'Error';
  }
  return a / b;
}

// calculator operation variables
let firstNumber = 0;
let operator = null;
let secondNumber = 0;

// operate functions
function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;
  }
}

// populate display
let display = document.getElementById('display');

// Update display
function updateDisplay(value) {
  display.innerText = value;
}

// Attach click event to digit buttons
let digitButtons = document.getElementsByClassName('digit');
for (let button of digitButtons) {
  button.addEventListener('click', function() {
    display.innerText += this.innerText;
  });
}


// calculator logic
let operatorButtons = document.getElementsByClassName('operator');
for (let button of operatorButtons) {
  button.addEventListener('click', function() {
    firstNumber = parseFloat(display.innerText);
    operator = this.innerText;
    display.innerText = '';
  });
}

document.getElementById('equals').addEventListener('click', function() {
  secondNumber = parseFloat(display.innerText);
  let result = operate(operator, firstNumber, secondNumber);
  updateDisplay(result.toFixed(2)); // round result to 2 decimal places
  firstNumber = result; // store result for chained operations
});

// divide by zero 
document.getElementsByClassName('clear')[0].addEventListener('click', function() {
    firstNumber = 0;
    operator = null;
    secondNumber = 0;
    updateDisplay(0);
  });
  