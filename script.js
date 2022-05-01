const clear = document.getElementById('clr');
const backspace = document.getElementById('backspace');
const point = document.getElementById('point');
const equal = document.getElementById('equal');
const firstDisplay = document.getElementById('firstDisplay');
const secondDisplay = document.getElementById('secondDisplay');
const keypadBtn = document.querySelectorAll('.keypadBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

function cls() {
  document.location.reload();
}

function removeItem() {
  secondDisplay.innerText = secondDisplay.innerText.toString().slice(0, -1);
}

let resetCondition = false;
function digit(e) {
  if (secondDisplay.innerText === '0' || resetCondition === true) {
    secondDisplay.innerText = '';
    resetCondition = false;
  }
  secondDisplay.innerText += e.target.dataset.value;
}

function decimal(e) {
  if (resetCondition === true) {
    secondDisplay.innerText = '';
    resetCondition = false;
  }
  if (secondDisplay.innerText === '') {
    secondDisplay.innerText = '0';
  }
  if (secondDisplay.innerText.includes('.')) {
    return;
  }
  secondDisplay.innerText += e.target.dataset.value;
}
let currentOperator = null;
let storeNum1 = '';
let storeNum2 = '';

let result = 0;

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
    default:
      return null;
  }
  return result;
}

function checkResult() {
  if (currentOperator === null || resetCondition === true) {
    return;
  }
  if (currentOperator === '/' && secondDisplay.innerText === '0') {
    alert('Undefined');
    return;
  }
  storeNum2 = secondDisplay.innerText;

  secondDisplay.innerText = (operate(currentOperator, storeNum1, storeNum2)).toFixed(5);
  firstDisplay.innerText = `${storeNum1} ${currentOperator} ${storeNum2} =`;
  currentOperator = null;
}

function operation(e) {
  if (currentOperator !== null) {
    checkResult();
  }
  storeNum1 = secondDisplay.innerText;
  currentOperator = e.target.dataset.value;
  firstDisplay.innerText = `${storeNum1} ${currentOperator}`;
  resetCondition = true;
}

function keyboardInput(e) {
  e.target.dataset.value = e.key;
  if (e.key >= 0 && e.key <= 9) {
    digit(e);
  }
  if (e.key === '.') {
    decimal(e);
  }

  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    operation(e);
  }
  if (e.key === 'Backspace') {
    removeItem(e);
  }
  if (e.key === 'Enter') {
    checkResult(e);
  }
  if (e.key === 'Escape') {
    cls(e);
  }
}

// Added keyboard support
window.addEventListener('keydown', keyboardInput);

keypadBtn.forEach((button) => button.addEventListener('click', digit));
operatorBtn.forEach((button) => button.addEventListener('click', operation));

clear.addEventListener('click', cls);
backspace.addEventListener('click', removeItem);
point.addEventListener('click', decimal);
equal.addEventListener('click', checkResult);