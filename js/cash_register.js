var calc = calcModule();

var display = document.getElementById('display');
console.log(typeof display);
display.value = 0;
console.log(display);

//Put number in the display
function displayNumber() {
	display.value += this.id;
}


// Deposit Cash; adds input to memory
function depositCash() {
	parseFloat(display.value);
	console.log(typeof display.value);
	console.log('despositing...');
	//insert validation here?
	calc.saveMemory(calc.load());
	console.log('memory = ', calc.saveMemory());
	return display.value = total;
}


//Check if there is more than one operator in the expression
// function invalidateMultipleOperators(){

// 	var indices = [];
	
// 	for (var i = 0; i < expressionArray.length; i++) {
// 		indices.push(expressionArray[i].indexOf('+'));
// 		}
			
// 		if (indices.length > 1) {
// 			display.value = "One expression only, please!";
// 		}
// 		return evaluateExpression(expressionArray);
// }


// function invalidateMultipleOperators(func){
// 	return function(val) {
// 		var expressionArray = display.value.split(' ');
// 		var indices = [];

// 		for (var i = 0; i < expressionArray.length; i++) {
// 			indices.push(expressionArray[i].indexOf('+'));

// 			if (indices.length > 1); {
// 				throw new Error("One Expression Only, Please");
// 			} else {
// 				return func(val);
// 			}

// 		}		
// 	}
// }

		function evaluateExpression() {
					
var expressionArray = display.value.split(' ');
			
			if (expressionArray[1] === '+') {
				var sum = calc.add(Number(expressionArray[0]), Number(expressionArray[2]));
				return calc.load(sum);

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
	display.value = 0;
} 

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

