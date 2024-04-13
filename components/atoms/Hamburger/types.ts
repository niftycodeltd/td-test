import { SyntheticEvent } from 'react';

interface IHamburgerProps {
	closeLabel: string;
	isDisabled?: boolean;
	onClick?: (e: SyntheticEvent) => void;
	openLabel: string;
	utilities?: string[];
}

type TUseHamburgerParams = {
	closeLabel: string;
	openLabel: string;
};

export type { IHamburgerProps, TUseHamburgerParams };
