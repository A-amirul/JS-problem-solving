function findTwoNumbersWithTarget(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];

		if (sum === target) {
			return [left, right];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return []; 
}

let inputArr = [1, 3, 6, 8, 11, 15];
let targetValue = 9;
let result = findTwoNumbersWithTarget(inputArr, targetValue);
console.log(result);

