'use strict'

var output = 'output';


function cashRegister(){

	var total = 0;
	var memory = 0;
	var firstNum = null;
	var operator = null;
	var secondNum = null;


	function keyClick() {
		if (operator === null && (typeof this.id === 'number' || this.id === '.')) {
			firstNum += this.id;
			output = firstNum;
		} else if ((this.id === '+' ||
				this.id === '-' ||
				this.id === '*' ||
				this.id === '/') && (operator === null)) {
			operator = this.id;
			clearOutput();
		} else if (operator !== null && (typeof this.id === 'number' || this.id === '.')) {
			secondNum += this.id;
			output = secondNum;
			selectEval();
			clearEverything();
		} else {
			throw new Error('Oh noes!');
		}
 	}

	function clearOutput(){
		output = null;
	}

	function clearEverything(){
		output = null;
		firstNum = null;
		operator = 0;
		secondNum = 0;
	}

	function selectEval(operator) {
			
		if (operator === '+') {
			return total = calc.add(firstNum, secondNum);
		} else if (operator === '-') {
			return total = calc.subtract(firstNum, secondNum);
		} else if (operator === '*') {
			return total = calc.multiply(firstNum, secondNum);
		} else if (operator === '/') {
			return total = calc.divide(firstNum, secondNum);
		}
	}

	function showTotal(total) {
		return output = total;
	}

	function depositCash(firstNum) {
		if (firstNum > 0) {	
			firstNum += memory;
		}
		return output = memory;
	}

	function withdrawCash(firstNum) {
		if (firstNum <= memory && firstNum > 0) {
			memory - firstNum;
			return getBalance();
		}
	}

	function getBalance() {
		return output = memory;
	}

	return {
		keyClick : keyClick()
	}

};

var module = cashRegister();

	// key onclick registers to output until operator !!vaidate if input === null, input = key, otherwise += key
	// number output is stored in var firstNum and in total !!validate
	// operator is stored in var operator  !!validate
	// total is displayed as output
		// key onclick registers to output until equal button clicked
	// number output is stored in var secondNum !!validate
	// var operator is evaluated to selected correct operation
	// firstNum and secondNum are passed as arguments
	// result stored as total
	// total is display as output

	//clear sets display value to null
	// depositCash adds input value to memory !!validate not negative
	// withdrawCash subtracts input value from memory !!validate not negative, not more than memory
	// getBalance displays memory