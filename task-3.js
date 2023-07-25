function findMostFrequentElement(arr) {
	let elementCount = {};
	let maxCount = 0;
	let mostFrequentElement = null;

	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];
		elementCount[currentElement] = (elementCount[currentElement] || 0) + 1;

		if (elementCount[currentElement] > maxCount) {
			maxCount = elementCount[currentElement];
			mostFrequentElement = currentElement;
		}
	}

	return mostFrequentElement;
}
let input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let result = findMostFrequentElement(input);
console.log(result);
