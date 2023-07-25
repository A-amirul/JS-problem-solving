function sumPositiveNumbers(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}
let input = [2, -5, 10, -3, 7];
let result = sumPositiveNumbers(input);
console.log(result);
