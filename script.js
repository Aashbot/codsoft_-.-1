let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  displayValue += ` ${operator} `;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}
