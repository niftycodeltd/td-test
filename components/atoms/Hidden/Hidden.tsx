import { IHiddenProps } from './types';

const Hidden = ({ id, isOptional, name, value }: IHiddenProps) => {
	return (
		<input
			defaultValue={value}
			id={id}
			name={name}
			required={!isOptional}
			type="hidden"
		/>
	);
};

export default Hidden;
