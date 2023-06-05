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
  let firstNumber = '';
  let operator = null;
  let secondNumber = '';
  let waitForSecondNumber = false;
  
// operate function
function operate(operator, a, b) {
    if (operator === '÷' && b === 0) {
      console.error('Cannot divide by zero!');
      return 'Error: Cannot divide by zero!';
    }
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '×':
        return multiply(a, b);
      case '÷':
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
      if (waitForSecondNumber) {
        display.innerText = '';
        waitForSecondNumber = false;
      }
      if (display.innerText === '0') {
        display.innerText = this.innerText;
      } else {
        display.innerText += this.innerText;
      }
    });
  }
  
  // Attach click event to operator buttons
// calculator logic
let operatorButtons = document.getElementsByClassName('operator');
for (let button of operatorButtons) {
  button.addEventListener('click', function() {
    if (firstNumber !== '' && operator !== null && !waitForSecondNumber) {
      secondNumber = parseFloat(display.innerText);
      if (operator === '÷' && secondNumber === 0) {
        updateDisplay('Error: Cannot divide by zero!');
        return;
      }
      firstNumber = operate(operator, firstNumber, secondNumber);
      updateDisplay(firstNumber);
    } else {
      firstNumber = parseFloat(display.innerText);
    }
    operator = this.innerText;
    waitForSecondNumber = true;
  });
}


  
  // Attach click event to equals button
  document.getElementById('equals').addEventListener('click', function() {
    if (operator !== null) {
      let secondNumber = parseFloat(display.innerText);
      if (operator === '÷' && secondNumber === 0) {
        updateDisplay('Error: Cannot divide by zero!');
      } else {
        let result = operate(operator, firstNumber, secondNumber);
        if (result === 'Error') {
          updateDisplay('Error: Cannot divide by zero!');
        } else {
          if (Number.isInteger(result)) {
            updateDisplay(result);
          } else {
            updateDisplay(result.toFixed(2)); // round result to 2 decimal places
          }
          firstNumber = result; // store result for chained operations
        }
      }
      waitForSecondNumber = true;
    }
  });
  
  
  
  // Attach click event to clear button
  document.getElementsByClassName('clear')[0].addEventListener('click', function() {
    firstNumber = '';
    operator = null;
    secondNumber = '';
    waitForSecondNumber = false;
    updateDisplay(0);
  });
  
  // Attach click event to delete button
  document.getElementsByClassName('delete')[0].addEventListener('click', function() {
    display.innerText = display.innerText.slice(0, -1);
  });
  