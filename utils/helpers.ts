/**
 * @param number
 */
const round = (number: number): string => {
	return number
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
};

export { round };
