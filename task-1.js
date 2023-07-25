function reverseString(str) {
	let reversedString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str.charAt(i);
	}
	return reversedString;
}
let inputStr = "hello world";
let reversedStr = reverseString(inputStr);
console.log(reversedStr);
