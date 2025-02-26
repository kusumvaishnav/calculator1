

let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const display = document.getElementById('display');
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');
const calculatorTitle = document.getElementById('calculatorTitle');
const calculatorTypes = document.querySelectorAll('.calculator-type');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
});

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        changeCalculator(type);
        menu.classList.remove('show');
    });
});

function changeCalculator(type) {
    calculatorTypes.forEach(calc => {
        calc.classList.remove('active');
    });
    
    document.getElementById(type + 'Calculator').classList.add('active');
    
    switch(type) {
        case 'basic':
            calculatorTitle.textContent = 'Basic Calculator';
            break;
        case 'advanced':
            calculatorTitle.textContent = 'Advanced Calculator';
            break;
        case 'programming':
            calculatorTitle.textContent = 'Programming Calculator';
            break;
        case 'financial':
            calculatorTitle.textContent = 'Financial Calculator';
            break;
    }
    
    clearDisplay();
}

function updateDisplay() {
    
    if (operator && firstOperand !== null && !waitingForSecondOperand) {
       
        let operatorSymbol = operator;
        switch(operator) {
            case '+': operatorSymbol = ' + '; break;
            case '-': operatorSymbol = ' - '; break;
            case '*': operatorSymbol = ' × '; break;
            case '/': operatorSymbol = ' ÷ '; break;
            case 'AND': operatorSymbol = ' AND '; break;
            case 'OR': operatorSymbol = ' OR '; break;
            case 'XOR': operatorSymbol = ' XOR '; break;
        }
        display.textContent = firstOperand + operatorSymbol + currentInput;
    } else if (waitingForSecondOperand && operator) {
        
        let operatorSymbol = operator;
        switch(operator) {
            case '+': operatorSymbol = ' + '; break;
            case '-': operatorSymbol = ' - '; break;
            case '*': operatorSymbol = ' × '; break;
            case '/': operatorSymbol = ' ÷ '; break;
            case 'AND': operatorSymbol = ' AND '; break;
            case 'OR': operatorSymbol = ' OR '; break;
            case 'XOR': operatorSymbol = ' XOR '; break;
        }
        display.textContent = firstOperand + operatorSymbol;
    } else {
        
        display.textContent = currentInput;
    }
}

function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentInput = number;
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        currentInput = '0.';
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }
    
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function setOperation(op) {
    const inputValue = parseFloat(currentInput);
    
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation();
        firstOperand = result;
        currentInput = String(result);
    }
    
    operator = op;
    waitingForSecondOperand = true;
    updateDisplay();
}

function performCalculation() {
    if (!operator || firstOperand === null) return parseFloat(currentInput);
    
    const secondOperand = parseFloat(currentInput);
    let result = 0;
    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case 'AND':
            result = firstOperand & secondOperand;
            break;
        case 'OR':
            result = firstOperand | secondOperand;
            break;
        case 'XOR':
            result = firstOperand ^ secondOperand;
            break;
    }
    
    return result;
}

function calculate() {
    if (!operator || firstOperand === null) return;
    
    const result = performCalculation();
    currentInput = String(result);
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
    return result;
}

function toggleSign() {
    currentInput = String(-parseFloat(currentInput));
    updateDisplay();
}

function percentage() {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function square() {
    const num = parseFloat(currentInput);
    currentInput = String(num * num);
    updateDisplay();
}

function squareRoot() {
    const num = parseFloat(currentInput);
    currentInput = String(Math.sqrt(num));
    updateDisplay();
}

function sin() {
    const num = parseFloat(currentInput);
    currentInput = String(Math.sin(num * Math.PI / 180));
    updateDisplay();
}


function toBinary() {
    const num = parseInt(currentInput);
    currentInput = num.toString(2);
    updateDisplay();
}

function toHex() {
    const num = parseInt(currentInput);
    currentInput = num.toString(16).toUpperCase();
    updateDisplay();
}

function toOctal() {
    const num = parseInt(currentInput);
    currentInput = num.toString(8);
    updateDisplay();
}


function bitwiseAND() {
    firstOperand = parseInt(currentInput);
    operator = 'AND';
    waitingForSecondOperand = true;
    updateDisplay();
}

function bitwiseOR() {
    firstOperand = parseInt(currentInput);
    operator = 'OR';
    waitingForSecondOperand = true;
    updateDisplay();
}

function bitwiseXOR() {
    firstOperand = parseInt(currentInput);
    operator = 'XOR';
    waitingForSecondOperand = true;
    updateDisplay();
}

function bitwiseNOT() {
    const num = parseInt(currentInput);
    currentInput = String(~num);
    updateDisplay();
}


function simpleInterest() {
    alert("Simple Interest Calculator: Enter Principal, Rate, Time");
}

function compoundInterest() {
    alert("Compound Interest Calculator: Enter Principal, Rate, Time");
}

function emi() {
    alert("EMI Calculator: Enter Loan Amount, Interest Rate, Tenure");
}
updateDisplay();