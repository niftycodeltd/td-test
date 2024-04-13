
import { colours, sizes, weights } from './constants';
import { ILabelProps } from './types';
const Label = ({
	colour = 'black',
	id,
	isDisabled,
	isHidden,
	size = 'md',
	text,
	tinaField,
	utilities = [],
	weight = 'normal',
}: ILabelProps) => {
	return (
		<label
			className={[
				...(isHidden
					? ['sr-only']
					: [
							colours[colour],
							sizes[size],
							weights[weight],
							...(isDisabled
								? ['pointer-events-none']
								: ['cursor-pointer']),
							...utilities,
						]),
			].join(' ')}
			data-cy="label"
			data-tinafield={`${tinaField}.label`}
			htmlFor={id}
		>
			{text}
		</label>
	);
};

export default Label;
