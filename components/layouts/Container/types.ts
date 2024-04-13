import { ReactNode } from 'react';

interface IContainerProps {
	children: ReactNode;
	tag?: 'div' | 'header';
	utilities?: string[];
	width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export type { IContainerProps };
