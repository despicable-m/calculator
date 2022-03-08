const inputDisplay = document.querySelector('#input-display');
const answerDisplay = document.querySelector('#answer-display');
const nums = document.querySelectorAll('.digit');

let initValue = 0;
let result = 0;

function add(firstVal, seconVal) {
    return firstVal + seconVal;
}


function subtract(firstVal, secondVal) {
    return firstVal - secondVal;
}


function multiply(firstVal, secondVal) {
    return firstVal * secondVal;
}


function divide (firstVal, secondVal) {
    return firstVal / secondVal;
}


function operate(e) {
    const fn = e.srcElement.id;
    initValue = inputDisplay.textContent;
    answerDisplay.textContent = initValue;
    inputDisplay.textContent = '';

    // nums.forEach(num => num.addEventListener('click', (f) => {
    //     inputDisplay.textContent += f.srcElement.textContent;
    // }));
}


function toDisplay(e) {
    let numToDisplay = document.querySelector(
        `[data-id="${e.srcElement.textContent}"]`).textContent;
    inputDisplay.textContent += numToDisplay;
}


nums.forEach(num => num.addEventListener('click', toDisplay));

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    inputDisplay.textContent = '';
    answerDisplay.textContent = '';
});

const toOperate = document.querySelectorAll('.operator');
toOperate.forEach(operator => 
    operator.addEventListener('click', operate));