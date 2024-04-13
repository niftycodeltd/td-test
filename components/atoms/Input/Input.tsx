import { IInputProps } from './types';

const Input = ({
	id,
	isDisabled,
	isInvalid,
	isOptional,
	name,
	onBlur,
	onChange,
	placeholder,
	relatedIds,
	tinaField,
	type = 'text',
	utilities = [],
}: IInputProps) => {
	return (
		<>
			{/* @ts-expect-error TODO */}
			<input
				className={[
					'bg-neutral-500/5',
					'border',
					...(isInvalid
						? ['border-error-500']
						: ['border-neutral-500/35']),
					'border-solid',
					'caret-secondary-500',
					'font-normal',
					'font-secondary',
					'p-xs',
					'rounded-md',
					'text-white',
					'text-xl',
					'placeholder:text-neutral-500',
					'w-full',
					'sm:rounded-e-none',
					'sm:rounded-s-md',
					...utilities,
				].join(' ')}
				aria-describedby={relatedIds ? relatedIds : null}
				aria-invalid={isInvalid ? isInvalid : null}
				aria-required={!isOptional}
				data-cy="input"
				data-tinaField={`${tinaField}.name`}
				disabled={isDisabled}
				id={id}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
			/>
		</>
	);
};

export default Input;
