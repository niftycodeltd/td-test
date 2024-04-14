interface ILabelProps {
	colour?: 'black' | 'white';
	id: string;
	isDisabled?: boolean;
	isHidden?: boolean;
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
	text: string;
	tinaField?: string;
	utilities?: string[];
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
