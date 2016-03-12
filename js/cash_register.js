var display = document.getElementById('display');
display.value = null;

//Add Event Listeners to EACH button
//Event Listeners on Numbered Buttons -00

for (var i = 0 ; i < 10; i++) {
	var btn = document.getElementById(i);
	btn.addEventListener('click', displayNumber);
}

//Event Listeners for Non-Numbered Buttons and 00

var doubleZero = document.getElementById('00');
doubleZero.addEventListener('click', displayNumber);

var decimal = document.getElementById('.');
decimal.addEventListener('click', displayNumber);

var add = document.getElementById('+');
add.addEventListener('click', displayNumber);

var subtract = document.getElementById('-');
subtract.addEventListener('click', displayNumber);

var multiply = document.getElementById('*');
multiply.addEventListener('click', displayNumber);

var divide = document.getElementById('/');
divide.addEventListener('click', displayNumber);

var equals = document.getElementById('=');
equals.addEventListener('click', evaluateExpression);

function displayNumber() {
	display.value += this.id;
}

function evaluateExpression() {
	console.log('evaluate');
}
//Clear Total
function clearTotal() {
	display.value = null;
} 



//Function To Create Number Buttons
// var calcBody = document.getElementById('calcBody');

// for (var i = 0; i < 11; i++) {
// 	var numButton = document.createElement('button');
// 	numButton.id = i + ' btn';
// 	numButton.class = 'numButton';
// 	numButton.addEventListener('click', displayNumber);
// 	numButton.innerHTML = i;
// 	calcBody.appendChild(numButton);
// }


// function displayNumber(x){
// 	console.log(x, 'this number is displayed');
// }
