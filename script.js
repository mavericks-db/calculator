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
    firstDisplay.innerText = '';
}

let num = [];
function removeItem() {
    num = num.slice(0, -1);
    firstDisplay.innerText = num.join('');
}

function digit(e) {
    firstDisplay.innerText += e.target.dataset.value;
    num.push(e.target.dataset.value);
    console.log(num);
}

let storeNum;
let operator = "";

function operation(e) {
    firstNum = num;
    operator = e.target.dataset.value;
    firstDisplay.innerText += e.target.dataset.value;
}

let result = 0;
function operate(storeNum, operator, num) {
    switch (operator) {
        case '/':
            result = storeNum / num;
            secondDisplay.innerText = result;
            break;
        case '*':
            result = storeNum * num;
            secondDisplay.innerText = result;
            break;
        case '+':
            result = storeNum + num;
            secondDisplay.innerText = result;
            console.log(result);
            break;
        case '-':
            result = storeNum - num;
            secondDisplay.innerText = result;
            break;
    }
    return result;
}

setInterval(console.log(storeNum), 1000);
setInterval(console.log(operator), 1000);
setInterval(console.log(num), 1000);

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
