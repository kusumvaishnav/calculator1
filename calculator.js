let currentDisplay = '';

function clearDisplay() {
	currentDisplay = '';
	document.querySelector('#display').value = currentDisplay;
}

function clearLast() {
	currentDisplay = currentDisplay.slice(0, -1);
	document.querySelector('#display').value = currentDisplay;
}

function appendToDisplay(value) {
	currentDisplay += value;
	document.querySelector('#display').value = currentDisplay;
}

function calculateResult() {
	try {
		currentDisplay = eval(currentDisplay).toString();
		document.querySelector('#display').value = currentDisplay;
	} catch (error) {
		document.querySelector('#display').value = 'Error';
		currentDisplay = '';
	}
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearLast();
    }
});




