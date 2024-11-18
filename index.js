let currentInput = '';
let currentOperator = '';
let currentResult = 'null';

function appendNumber(number) {
    currentInput += number 
    updateDisplay(); 
}

function appendOperator(operator) {
    if(currentInput === '' && currentOperator !== 'null') {
        currentInput = currentResult.toString()
    }
    currentInput += operator;
    updateDisplay();
}

function clearResult() {
    currentInput = ''
    currentResult = 'null'
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0,-1)
    updateDisplay();
}

function updateDisplay() {
    const resultElement = document.getElementById('result');
    resultElement.value = currentInput;
}

function calculateResult() {
    try {
        currentResult = eval(currentInput)
        currentInput = currentResult.toString();
        updateDisplay();
    }
    catch(error) {
        currentInput = 'Error';
        updateDisplay();
    }
}
