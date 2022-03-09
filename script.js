const inputDisplay = document.querySelector('#input-display');
const answerDisplay = document.querySelector('#answer-display');
const nums = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let initValue = 0;
let newVal = 0;
let result = 0;
let operator = '';

// Does additions
function add(firstVal, secondVal) {
    return firstVal + secondVal;
}

// Does subtractions
function subtract(firstVal, secondVal) {
    return firstVal - secondVal;
}

// Does multiplications
function multiply(firstVal, secondVal) {
    return firstVal * secondVal;
}

// Does divisions
function divide (firstVal, secondVal) {
    return firstVal / secondVal;
}

// Calls an operation on numbers
function operate(firstVal, secondVal, operator) {
    inputDisplay.textContent = '';
    if (operator === 'divide' && parseFloat(secondVal) === 0) {
        return 'ERR!!!'
    } else {
        if (operator === 'add') {
            return add(parseFloat(firstVal), parseFloat(secondVal));
        }
        else if (operator === 'subtract') {
            return subtract(parseFloat(firstVal), parseFloat(secondVal));
        }
        else if (operator === 'multiply') {
            return multiply(parseFloat(firstVal), parseFloat(secondVal));
        }
        else if (operator === 'divide') {
            return divide(parseFloat(firstVal), parseFloat(secondVal));
        }
        else return initValue;        
    }

}

// Populates calculator screen
function toDisplay(e) {
    let numToDisplay = document.querySelector(
        `[data-id="${e.srcElement.textContent}"]`).textContent;
    newVal = inputDisplay.textContent += numToDisplay;
}

// Identifies the number to be displayed
nums.forEach(num => num.addEventListener('click', toDisplay));

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    inputDisplay.textContent = '';
    answerDisplay.textContent = '';
    initValue = 0;
    operator = '';
});

// Calls operate when equal is pressed
const equal = document.querySelector('#equal');

equal.addEventListener('click', () => {
    answerDisplay.textContent = operate(initValue, newVal, operator);
    initValue = operate(initValue, newVal, operator);
    operator = '';
});

// Gets operator and changes initial values to what's on the screen
function getOperator(e) {
    if (isNaN(parseFloat(answerDisplay.textContent))) {
    initValue = inputDisplay.textContent;
    answerDisplay.textContent = initValue;        
    }

    console.log(initValue)
    operator = e.target.id;
    inputDisplay.textContent = '';
}

// Identifies operator
operators.forEach(op => op.addEventListener('click', getOperator));