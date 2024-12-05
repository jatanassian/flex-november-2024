// Inputs
// Outputs
// Processing

/**
 * Sum two numbers
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const sumTwoNums = function(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return;
	}

	return num1 + num2;
}

console.log('sumTwoNums(1, 2) ->', sumTwoNums(1, 2)); // Expected output: 3
console.log('sumTwoNums(1, "hello") ->', sumTwoNums(1, 'hello')); // Expected output: undefined