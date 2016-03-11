//Create Calculator DOM

//Create Calculator Element
var calcElement = document.createElement('div');
calcElement.id = "container";
calcElement.innerHTML = "Hi, I'm a calculator";
document.getElementById('main').appendChild(calcElement);

//Create Calculator Display
var display = document.createElement('div');
display.id = "display";
display.innerHTML = "This is my display";
document.getElementById('container').appendChild(display);


//Create Calculator Number Buttons
		
var num1 = document.createElement('button');
num1.className = "numberButton";
num1.innerHTML = "1";
num1.id = "num1";
num1.addEventListener('click', buttonWorks);
document.getElementById('container').appendChild(num1);

var num2 = document.createElement('button');
num2.className = "numberButton";
num2.innerHTML = "2";
num2.id = "num2";
num2.addEventListener('click', console.log('two works!'));
document.getElementById('container').appendChild(num2);

var num3 = document.createElement('button');
num3.className = "numberButton";
num3.innerHTML = "3";
num3.id = "num3";
num3.addEventListener('click', console.log('three works!'));
document.getElementById('container').appendChild(num3);

var num4 = document.createElement('button');
num4.className = "numberButton";
num4.innerHTML = "4";
num4.id = "num4";
num4.addEventListener('click', console.log('four works!'));
document.getElementById('container').appendChild(num4);

var num5 = document.createElement('button');
num5.className = "numberButton";
num5.innerHTML = "5";
num5.id = "num5";
num5.addEventListener('click', console.log('five works!'));
document.getElementById('container').appendChild(num5);

var num6 = document.createElement('button');
num6.className = "numberButton";
num6.innerHTML = "6";
num6.id = "num6";
num6.addEventListener('click', console.log('six works!'));
document.getElementById('container').appendChild(num6);

var num7 = document.createElement('button');
num7.className = "numberButton";
num7.innerHTML = "7";
num7.addEventListener('click', console.log('seven works!'));
num7.id = "num7";
document.getElementById('container').appendChild(num7);

var num8 = document.createElement('button');
num8.className = "numberButton";
num8.innerHTML = "8";
num8.id = "num8";
num8.addEventListener('click', console.log('eight works!'));
document.getElementById('container').appendChild(num8);

var num9 = document.createElement('button');
num9.className = "numberButton";
num9.innerHTML = "9";
num9.id = "num9";
num9.addEventListener('click', console.log('nine works!'));
document.getElementById('container').appendChild(num9);

var num10 = document.createElement('button');
num10.className = "numberButton";
num10.innerHTML = "10";
num10.id = "num10";
num10.addEventListener('click', console.log('ten works!'));
document.getElementById('container').appendChild(num10);

var num00 = document.createElement('button');
num00.className = "numberButton";
num00.innerHTML = '00';
num00.id = "num00";
num00.addEventListener('click', console.log('00 works!'));
document.getElementById('container').appendChild(num00);

var numDecimal = document.createElement('button');
numDecimal.className = "numberButton";
numDecimal.innerHTML = ".";
numDecimal.id = "numDecimal";
numDecimal.addEventListener('click', console.log('decimal works!'));
document.getElementById('container').appendChild(numDecimal);


//Create Math Buttons

var numDivide = document.createElement('button');
numDivide.className = "mathButton";
numDivide.innerHTML = "/";
numDivide.id = "numDivide";
document.getElementById('container').appendChild(numDivide);

var numMultiply = document.createElement('button');
numMultiply.className = "mathButton";
numMultiply.innerHTML = "*";
numMultiply.id = "numMultiply";
document.getElementById('container').appendChild(numMultiply);

var numSubtract = document.createElement('button');
numSubtract.className = "mathButton";
numSubtract.innerHTML = "-";
numSubtract.id = "numSubtract";
document.getElementById('container').appendChild(numSubtract);

var numAdd = document.createElement('button');
numAdd.className = "mathButton";
numAdd.innerHTML = "+";
numAdd.id = "numAdd";
document.getElementById('container').appendChild(numAdd);

var numEqual = document.createElement('button');
numEqual.className = "mathButton";
numEqual.innerHTML = "=";
numEqual.id = "numEqual";
document.getElementById('container').appendChild(numEqual);


//Create Helper Buttons

var clearButtonElement = document.createElement('button');
clearButtonElement.className = "helperButton";
clearButtonElement.innerHTML = "clear";
clearButtonElement.id = "clearButtonElement";
document.getElementById('container').appendChild(clearButtonElement);

var getBalanceButtonElement = document.createElement('button');
getBalanceButtonElement.className = "helperButton";
getBalanceButtonElement.innerHTML = "get balance";
getBalanceButtonElement.id = "getBalanceButtonElement";
document.getElementById('container').appendChild(getBalanceButtonElement);

var depositCashButtonElement = document.createElement('button');
depositCashButtonElement.className = "helperButton";
depositCashButtonElement.innerHTML = "deposit cash";
depositCashButtonElement.id = "depositCashButtonElement";
document.getElementById('container').appendChild(depositCashButtonElement);

var withdrawCashButtonElement = document.createElement('button');
withdrawCashButtonElement.className = "helperButton";
withdrawCashButtonElement.innerHTML = "withdraw cash";
withdrawCashButtonElement.id = "withdrawCashButtonElement";
document.getElementById('container').appendChild(withdrawCashButtonElement);

//Create Functions

//Event Listener Functions
function buttonWorks() {
	console.log('I work!');
}

//Number Button Pressed Functions

//Operator Button Pressed Functions

//Clear, Get Balance, Deposit Cash, Withdraw Cash Functions

//Update Display
function 