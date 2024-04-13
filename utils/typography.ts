import { round } from './helpers';

/**
 * https://chrisburnell.com/clamp-calculator/
 *
 * @param minFontSize
 * @param maxFontSize
 * @param minViewPort
 * @param maxViewport
 */
const clamp = (
	minFontSize: number,
	maxFontSize: number,
	minViewPort = 375,
	maxViewport = 1280,
): string => {
	const change: number =
		(maxFontSize - minFontSize) / (maxViewport - minViewPort);

	const a: number = maxFontSize - maxViewport * change;

	const b: number = 100 * change;

	const preferredSize = `${pxToRem(a)} + ${b}vw`;

	return `clamp(${pxToRem(minFontSize)}, ${preferredSize}, ${pxToRem(
		maxFontSize,
	)})`;
};

/**
 * @param fontSize
 * @param px
 */
const pxToEm = (px: number, fontSize: number): string => {
	return `${round(px / fontSize)}em`;
};

/**
 * @param baseFont
 * @param px
 */
const pxToRem = (px: number, baseFont = 16): string => {
	return `${round(px / baseFont)}rem`;
};

export { clamp, pxToEm, pxToRem };
