import { SyntheticEvent } from 'react';

interface ICloseProps {
	isDisabled?: boolean;
	label: string;
	onClick: ((e: SyntheticEvent) => void) | undefined;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	thickness?: 'thin' | 'normal' | 'thick';
	utilities?: string[];
	variant?: 'primary' | 'secondary';
}

type TCloseVariants = {
	primary: string[];
	secondary: string[];
};

export type { ICloseProps, TCloseVariants };
