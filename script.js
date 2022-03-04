let clear = document.getElementById('clr');
let backspace = document.getElementById('backspace');
let point = document.getElementById('point');
let equal = document.getElementById('equal');
let firstDisplay = document.getElementById('firstDisplay')
let secondDisplay = document.getElementById('secondDisplay')
let keypadBtn = document.querySelectorAll('.keypadBtn');
let operatorBtn = document.querySelectorAll('.operatorBtn');

keypadBtn.forEach(button => button.addEventListener('click', digit));
operatorBtn.forEach(button => button.addEventListener('click', operation));

clear.addEventListener('click', cls);
backspace.addEventListener('click', removeItem);
point.addEventListener('click', decimal);
equal.addEventListener('click', checkResult);

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
    if (currentOperator === '/' && secondDisplay.innerText === '0') {
        alert("Undefined");
        return
    }
    storeNum2 = secondDisplay.innerText;
    secondDisplay.innerText = (operate(currentOperator, storeNum1, storeNum2)).toFixed(5);
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
