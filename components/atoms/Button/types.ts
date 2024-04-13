import { SyntheticEvent } from 'react';

interface IButtonProps {
	isDisabled?: boolean;
	label: string;
	onClick?: (e: SyntheticEvent) => void;
	type?: 'button' | 'reset' | 'submit';
	utilities?: string[];
}

export type { IButtonProps };
