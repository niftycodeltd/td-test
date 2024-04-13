interface ICallToActionProps {
	/**
	 * Some description...
	 */
	action: {
		label: string;
		path: string;
	};

	/**
	 * Some description...
	 */
	text: string;

	/**
	 * Some description...
	 */
	title: (string | Element)[];
}

export type { ICallToActionProps };
