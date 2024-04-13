import dynamic from 'next/dynamic';

import { IFieldProps } from './types';

const Error = dynamic(() => import('@/components/atoms/Error'), {
	ssr: false,
});
const Hint = dynamic(() => import('@/components/atoms/Hint'), {
	ssr: false,
});
const Label = dynamic(() => import('@/components/atoms/Label'), {
	ssr: false,
});

const Field = ({
	children,
	error,
	hasHiddenLabel,
	hint,
	id,
	label,
	utilities = [],
}: IFieldProps) => {
	return (
		<div className={[...utilities].join(' ')} data-cy="field">
			<Label id={id} isHidden={hasHiddenLabel} text={label} />

			{children}

			{hint && <Hint id={id} text={hint} utilities={['mt-sm']} />}

			{error && <Error id={id} text={error} utilities={['mt-sm']} />}
		</div>
	);
};

export default Field;
