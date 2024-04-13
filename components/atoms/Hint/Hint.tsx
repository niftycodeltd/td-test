import { IHintProps } from './types';

const Hint = ({ id, text, utilities = [] }: IHintProps) => {
	return (
		<span
			className={[
				'block',
				'font-normal',
				'text-black',
				'text-md',
				...utilities,
			].join(' ')}
			data-cy="hint"
			id={`${id}-hint`}
		>
			{text}
		</span>
	);
};

export default Hint;
