/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
module.exports = multiply = (num1, num2) => {
	return String(Math.floor(eval(num1.concat("*").concat(num2))));
};
