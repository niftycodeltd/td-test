import { colours, families, sizes, weights } from './constants';
import { ITitleProps } from './types';

const Title = ({
	children,
	colour = 'neutral-500',
	family = 'primary',
	isSrOnly,
	level,
	size = '4xl',
	text,
	utilities = [],
	weight = 'normal',
}: ITitleProps) => {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const Tag: any = `h${level}`;

	return (
		<Tag
			className={[
				colours[colour],
				families[family],
				sizes[size],
				weights[weight],
				...(isSrOnly ? ['sr-only'] : []),
				...utilities,
			].join(' ')}
		>
			{children || text}
		</Tag>
	);
};

export default Title;
