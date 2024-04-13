/**
 * @param error
 * @param hint
 * @param id
 */
const relatedIds = (error: boolean, hint: string, id: string): string => {
	let ids = '';

	if (hint) {
		ids += `${id}-hint`;
	}

	if (hint && error) {
		ids += ' ';
	}

	if (error) {
		ids += `${id}-error`;
	}

	return ids;
};

/**
 * @param number
 */
const round = (number: number): string => {
	return number
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
};

export { relatedIds, round };
