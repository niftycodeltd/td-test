import { ReactNode } from 'react';

interface ITitleProps {
	children?: ReactNode;
	colour?: 'neutral-500';
	family?: 'primary' | 'secondary';
	isSrOnly?: boolean;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	size?: '3xl' | '4xl';
	text?: string | (string | Element)[];
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

export type { ITitleProps };
