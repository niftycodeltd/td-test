import { ICloseProps, TCloseVariants } from './types';
import { sizes, thicknesses } from './constants';

const Close = ({
	isDisabled,
	label,
	onClick,
	size = 'md',
	thickness = 'normal',
	utilities = [],
	variant = 'primary',
}: ICloseProps) => {
	const variants: TCloseVariants = {
		primary: [
			'after/before:bg-white',
			'after/before:transition-colors',
			'hover:after/before:bg-black',
			'focus',
			'active',
		],
		secondary: [
			'opacity-50',
			'transition-opacity',
			'after/before:bg-black',
			'hover:opacity-100',
			'focus',
			'active',
		],
	};

	return (
		<button
			className={[
				'relative',
				'h-11',
				'w-11',
				'before:rotate-45',
				'after/before:absolute',
				'after/before:left-1/2',
				'after/before:top-1/2',
				'after/before:-translate-x-1/2',
				'after/before:-translate-y-1/2',
				'after:-rotate-45',
				sizes[size],
				thicknesses[thickness],
				...variants[variant],
				...utilities,
			].join(' ')}
			data-cy="close"
			disabled={isDisabled}
			onClick={onClick}
			type="button"
		>
			<span className={['sr-only'].join(' ')}>{label}</span>
		</button>
	);
};

export default Close;
