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

clear.addEventListener('click', reset);
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
point.addEventListener('click', digit);
keypad0.addEventListener('click', digit);
equal.addEventListener('click', operate);
plus.addEventListener('click', operation);

function reset(e) {
    location.reload();
}

let num = [];
function removeItem() {
    num = num.slice(0, -1);
    firstDisplay.innerText = num.join('');
}

function digit(e) {
    firstDisplay.innerText += e.target.dataset.value;
    num.push(e.target.dataset.value);
}

let storeNum1 = [];
let storeNum2 = [];
let operator = "";

function operation(e) {
    if (storeNum1 !== null) {
        operate();
    }
    storeNum1.push(...num);
    storeNum1 = parseInt(storeNum1.join(''));;
    num = [];
    operator += e.target.dataset.value;
    firstDisplay.innerText += operator;
}

let result = 0;
function operate(a, b, ope) {
    storeNum2 = [];
    storeNum2.push(...num);
    storeNum2 = parseInt(storeNum2.join(''));
    switch (operator) {
        case '/':
            result = div(storeNum1, storeNum2);
            storeNum1 = [];
            num = [];
            operator = "";
            firstDisplay.innerText = '';
            firstDisplay.innerText = result;
            secondDisplay.innerText = result;
            storeNum1 = result.toString().split('');
            storeNum2 = [];
            break;
        case '*':
            result = mul(storeNum1, storeNum2);
            storeNum1 = [];
            num = [];
            operator = "";
            firstDisplay.innerText = '';
            firstDisplay.innerText = result;
            secondDisplay.innerText = result;
            storeNum1 = result.toString().split('');
            storeNum2 = [];
            break;
        case '+':
            result = add(storeNum1, storeNum2);
            storeNum1 = [];
            num = [];
            operator = "";
            firstDisplay.innerText = '';
            firstDisplay.innerText = result;
            secondDisplay.innerText = result;
            storeNum1 = result.toString().split('');
            storeNum2 = [];
            break;
        case '-':
            result = sub(storeNum1, storeNum2);
            storeNum1 = [];
            num = [];
            operator = "";
            firstDisplay.innerText = '';
            firstDisplay.innerText = result;
            secondDisplay.innerText = result;
            storeNum1 = result.toString().split('');
            storeNum2 = [];
            break;
    }
    return num;
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
