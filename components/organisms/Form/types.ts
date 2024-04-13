interface IFormProps {
	action: string;
	rows: {
		controls: {
			__type: string;
			hideLabel?: boolean;
			hint?: string;
			id?: string;
			isOptional?: boolean;
			label?: string;
			name?: string;
			placeholder?: string;
			type?: 'text';
		}[];
	}[];
	title: string;
	utilities?: string[];
}

type TUseFormParams = {
	action: IFormProps['action'];
	title: IFormProps['title'];
};

export type { IFormProps, TUseFormParams };
