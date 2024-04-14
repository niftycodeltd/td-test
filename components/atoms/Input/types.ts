import { ChangeEvent, FocusEvent } from 'react';

interface IInputProps {
	id: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	isOptional?: boolean;
	name: string;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	relatedIds?: string;
	tinaField?: string;
	type?:
		| 'date'
		| 'email'
		| 'number'
		| 'password'
		| 'tel'
		| 'text'
		| 'time'
		| 'url';
	utilities?: string[];
}

export type { IInputProps };
