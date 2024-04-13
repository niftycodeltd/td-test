import { ReactNode } from 'react';

interface ITextProps {
	children?: ReactNode;
	colour?: 'neutral-500' | 'neutral-500/40' | 'neutral-500/60';
	family?: 'primary' | 'secondary';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
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

export type { ITextProps };
