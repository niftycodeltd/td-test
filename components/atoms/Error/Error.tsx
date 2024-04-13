import { IErrorProps } from './types';

const Error = ({ id, text, utilities = [] }: IErrorProps) => {
	return (
		<span
			className={[
				'block',
				'font-normal',
				'text-error-500',
				'text-md',
				...utilities,
			].join(' ')}
			aria-live="assertive"
			data-cy="error"
			id={`${id}-error`}
		>
			{text}
		</span>
	);
};

export default Error;
