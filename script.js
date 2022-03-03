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
    return operator(a, b);
}

console.log(operate(div, 15, 5));