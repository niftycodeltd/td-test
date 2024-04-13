import { IContainerProps } from './types';
import { widths } from './constants';

const Container = ({
	children,
	tag = 'div',
	utilities = [],
	width = 'xl',
}: IContainerProps) => {
	// console.log('Debug layout Container:', {
	// 	isCentered: isCentered,
	// 	isFullWidth: isFullWidth,
	// 	isSnapped: isSnapped,
	// 	mt: mt,
	// 	px: px,
	// 	spacey: spacey,
	// 	tag: tag,
	// 	tinaField: tinaField,
	// 	utilities: utilities,
	// 	width: width,
	// });

	/* eslint-disable @typescript-eslint/no-explicit-any */
	const Tag: any = tag;

	return (
		<Tag
			className={[widths[width], 'mx-auto', 'px-md', 'w-full', ...utilities].join(' ')}
		>
			{children}
		</Tag>
	);
};

export default Container;
