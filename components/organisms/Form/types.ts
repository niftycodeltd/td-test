interface IFormProps {
	action: string;
	rows: {
		controls: object[];
	}[];
	title: string;

	/**
	 * Some description...
	 */
	utilities?: string[];
}

type TUseFormParams = {
	action: IFormProps['action'];
	title: IFormProps['title'];
};

export type { IFormProps, TUseFormParams };
