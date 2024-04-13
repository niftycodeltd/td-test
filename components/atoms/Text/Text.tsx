import { colours, families, sizes, weights } from './constants';
import { ITextProps } from './types';

const Text = ({
	children,
	colour = 'neutral-500',
	family = 'primary',
	size = 'md',
	text,
	utilities = [],
	weight = 'normal',
}: ITextProps) => {
	return (
		<p
			className={[
				'leading-normal',
				colours[colour],
				families[family],
				sizes[size],
				weights[weight],
				...utilities,
			].join(' ')}
		>
			{children || text}
		</p>
	);
};

export default Text;
