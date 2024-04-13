import { ReactNode } from 'react';

interface IFieldProps {
	children: ReactNode;
	error?: string;
	hasHiddenLabel?: boolean;
	hint?: string;
	id: string;
	label: string;
	utilities?: string[];
}

export type { IFieldProps };
