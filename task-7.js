function romanToInt(romanNumeral) {
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let integerValue = 0;

	for (let i = 0; i < romanNumeral.length; i++) {
		const currentSymbol = romanNumeral[i];
		const currentValue = romanNumerals[currentSymbol];
		const nextValue = romanNumerals[romanNumeral[i + 1]];

		if (nextValue > currentValue) {
			integerValue += nextValue - currentValue;
			i++; 
		} else {
			integerValue += currentValue;
		}
	}

	return integerValue;
}
console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 
console.log(romanToInt("IV")); 
console.log(romanToInt("MCMXCIV")); 
