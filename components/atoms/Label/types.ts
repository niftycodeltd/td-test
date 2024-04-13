interface ILabelProps {
	/**
	 * Some description...
	 */
	colour?: 'black' | 'white';

	/**
	 * Some description...
	 */
	id: string;

	/**
	 * Some description...
	 */
	isDisabled?: boolean;

	/**
	 * Some description...
	 */
	isHidden?: boolean;

	/**
	 * Some description...
	 */
	size?:
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl';

	/**
	 * Some description...
	 */
	text: string;

	/**
	 * Some description...
	 */
	tinaField?: string;

	/**
	 * Some description...
	 */
	utilities?: string[];

	/**
	 * Some description...
	 */
	weight?:
		| 'thin'
		| 'extra-light'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semi-bold'
		| 'bold'
		| 'extra-bold'
		| 'black';
}

export type { ILabelProps };
