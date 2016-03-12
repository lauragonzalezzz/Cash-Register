var calc = calcModule();

//Put number in the display
function displayNumber() {
	display.value += this.id;
}

//Store number to memory for calculation
function storeDisplay(){
	total = display.value;
}

function evaluateExpression() {
	
	//var expressionString = display.value.toString();
	
	var expressionArray = display.value.split(' ');

	if (expressionArray[1] === '+') {
		display.value = calc.add(Number(expressionArray[0]), Number(expressionArray[2]));
	} else if (expressionArray[1] === '-') {
		display.value = calc.subtract(Number(expressionArray[0]), Number(expressionArray[2]));
	} else if (expressionArray[1] === '*') {
		display.value = calc.multiply(Number(expressionArray[0]), Number(expressionArray[2]));
	} else if (expressionArray[1] === '/') {
		display.value = calc.divide(Number(expressionArray[0]), Number(expressionArray[2]));
	}
}





//Clear Total
function clearTotal() {
	display.value = null;
} 
var display = document.getElementById('display');
display.value = null;

//Add Event Listeners to EACH button
//Event Listeners on Numbered Buttons, not 00

for (var i = 0 ; i < 10; i++) {
	var btn = document.getElementById(i);
	btn.addEventListener('click', displayNumber);

}

//Event Listeners for Non-Numbered Buttons and 00

var doubleZero = document.getElementById('00');
doubleZero.addEventListener('click', displayNumber);

var decimal = document.getElementById('.');
decimal.addEventListener('click', displayNumber);

var add = document.getElementById(' + ');
add.addEventListener('click', displayNumber);

var subtract = document.getElementById(' - ');
subtract.addEventListener('click', displayNumber);

var multiply = document.getElementById(' * ');
multiply.addEventListener('click', displayNumber);

var divide = document.getElementById(' / ');
divide.addEventListener('click', displayNumber);

var equals = document.getElementById('=');
equals.addEventListener('click', evaluateExpression);

