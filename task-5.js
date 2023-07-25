function calculator(num1, operator, num2) {
	if (operator === '+') {
		return num1 + num2;
	} else if (operator === '-') {
		return num1 - num2;
	} else if (operator === '*') {
		return num1 * num2;
	} else if (operator === '/') {
		if (num2 === 0) {
			return "Error: Division by zero is not allowed.";
		}
		return num1 / num2;
	} else {
		return "Error: Invalid operator. Please use +, -, *, or /.";
	}
}
console.log(calculator(5, '+', 3)); 
console.log(calculator(10, '-', 4)); 
console.log(calculator(2, '*', 6)); 
console.log(calculator(10, '/', 2)); 
