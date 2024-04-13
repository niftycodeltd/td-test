import { IButtonProps } from './types';

const Button = ({
	isDisabled,
	label,
	onClick,
	type = 'button',
	utilities = [],
}: IButtonProps) => {
	return (
		<button
			className={[
				'bg-secondary-500',
				'font-normal',
				'inline-flex',
				'items-center',
				'justify-center',
				'mt-sm',
				'px-md',
				'py-xs',
				'rounded-md',
				'shadow-button',
				'text-md',
				'text-primary-800',
				'uppercase',
				'sm:mt-0',
				'sm:rounded-e-md',
				'sm:rounded-s-none',
				...utilities,
			].join(' ')}
			disabled={isDisabled}
			onClick={onClick}
			type={type}
		>
			{label}
		</button>
	);
};

export default Button;
