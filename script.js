let clear = document.getElementById('clr');
let backspace = document.getElementById('backspace');
let keypad7 = document.getElementById('keypad7');
let keypad8 = document.getElementById('keypad8');
let keypad9 = document.getElementById('keypad9');
let divide = document.getElementById('divide');
let keypad4 = document.getElementById('keypad4');
let keypad5 = document.getElementById('keypad5');
let keypad6 = document.getElementById('keypad6');
let multiply = document.getElementById('multiply');
let keypad1 = document.getElementById('keypad1');
let keypad2 = document.getElementById('keypad2');
let keypad3 = document.getElementById('keypad3');
let minus = document.getElementById('minus');
let point = document.getElementById('point');
let keypad0 = document.getElementById('keypad0');
let equal = document.getElementById('equal');
let plus = document.getElementById('plus');
let firstDisplay = document.getElementById('firstDisplay')
let secondDisplay = document.getElementById('secondDisplay')

clear.addEventListener('click', cls);
backspace.addEventListener('click', removeItem);
keypad7.addEventListener('click', digit);
keypad8.addEventListener('click', digit);
keypad9.addEventListener('click', digit);
divide.addEventListener('click', operation);
keypad4.addEventListener('click', digit);
keypad5.addEventListener('click', digit);
keypad6.addEventListener('click', digit);
multiply.addEventListener('click', operation);
keypad1.addEventListener('click', digit);
keypad2.addEventListener('click', digit);
keypad3.addEventListener('click', digit);
minus.addEventListener('click', operation);
point.addEventListener('click', decimal);
keypad0.addEventListener('click', digit);
equal.addEventListener('click', checkResult);
plus.addEventListener('click', operation);

function cls(e) {
    location.reload();
}


function removeItem() {
    secondDisplay.innerText = secondDisplay.innerText.toString().slice(0, -1);
}

let resetCondition = false;
function digit(e) {
    if (secondDisplay.innerText === '0' || resetCondition == true) {
        secondDisplay.innerText = '';
        resetCondition = false;
    }
    secondDisplay.innerText += e.target.dataset.value;
}

function decimal(e) {
    if (resetCondition == true) {
        secondDisplay.innerText = '';
        resetCondition = false;
    }
    if (secondDisplay.innerText === '') {
        secondDisplay.innerText = '0';
    }
    if (secondDisplay.innerText.includes('.')) {
        return
    }
    secondDisplay.innerText += e.target.dataset.value;
}

let currentOperator = null;
let storeNum1 = '';
let storeNum2 = '';
function operation(e) {
    if (currentOperator !== null) {
        checkResult();
    }
    storeNum1 = secondDisplay.innerText;
    currentOperator = e.target.dataset.value;
    firstDisplay.innerText = `${storeNum1} ${currentOperator}`;
    resetCondition = true;
}

function checkResult() {
    if (currentOperator === null || resetCondition == true) {
        return
    }
    storeNum2 = secondDisplay.innerText;
    secondDisplay.innerText = operate(currentOperator, storeNum1, storeNum2);
    firstDisplay.innerText = `${storeNum1} ${currentOperator} ${storeNum2} =`;
    currentOperator = null;
}

let result = 0;
function operate(operator, a, b) {
    a = Number(storeNum1);
    b = Number(storeNum2);
    operator = currentOperator;
    switch (operator) {
        case '/':
            result = div(a, b);
            break;
        case '*':
            result = mul(a, b);
            break;
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = sub(a, b);
            break;
    }
    return result;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
