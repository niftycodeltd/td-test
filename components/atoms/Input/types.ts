import { ChangeEvent, FocusEvent } from 'react';

interface IInputProps {
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
	isInvalid?: boolean;

	/**
	 * Some description...
	 */
	isOptional?: boolean;

	/**
	 * Some description...
	 */
	name: string;

	/**
	 * Some description...
	 */
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

	/**
	 * Some description...
	 */
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

	/**
	 * Some description...
	 */
	placeholder?: string;

	/**
	 * Some description...
	 */
	relatedIds?: string;

	/**
	 * Some description...
	 */
	tinaField?: string;

	/**
	 * Some description...
	 */
	type?:
		| 'date'
		| 'email'
		| 'number'
		| 'password'
		| 'tel'
		| 'text'
		| 'time'
		| 'url';

	/**
	 * Some description...
	 */
	utilities?: string[];
}

export type { IInputProps };
