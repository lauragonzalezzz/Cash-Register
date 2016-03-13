var calc = calcModule();

//Put number in the display
function displayNumber() {
	display.value += this.id;
}

// //Store number to memory for calculation
// function storeDisplay(){
// 	total = display.value;
// }

//Get Balance Functionality
function getBalance() {
	display.value = calc.recallMemory();
}
console.log(calc.recallMemory());
console.log(display.value);

//Check if there is more than one operator in the expression
function invalidateMultipleOperators(){
var expressionArray = display.value.split(' ');

	var indices = [];
	
	for (var i = 0; i < expressionArray.length; i++) {
		indices.push(expressionArray[i].indexOf('+'));
		}
			
		if (indices.length > 2) {
			display.value = "One expression only, please!";
		}
		return evaluateExpression(expressionArray);
}

		function evaluateExpression(arr) {
					
			if (arr[1] === '+') {
				display.value = calc.add(Number(arr[0]), Number(arr[2]));
			} else if (arr[1] === '-') {
				display.value = calc.subtract(Number(arr[0]), Number(arr[2]));
			} else if (arr[1] === '*') {
				display.value = calc.multiply(Number(arr[0]), Number(arr[2]));
			} else if (arr[1] === '/') {
				display.value = calc.divide(Number(arr[0]), Number(arr[2]));
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
equals.addEventListener('click', invalidateMultipleOperators);

