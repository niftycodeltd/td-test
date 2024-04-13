interface IAlertProps {
	/**
	 * Some description...
	 */
	isDismissible?: boolean;

	/**
	 * Some description...
	 */
	text: string;

	/**
	 * Some description...
	 */
	tinaField?: string;

	/**
	 * Some description...
	 */
	utilities?: string[];

	/**
	 * Some description...
	 */
	variant?: 'error' | 'info' | 'success' | 'warning';
}

type TAlertVariants = {
	/**
	 * Some description...
	 */
	error: {
		classes: string[];
		icon: 'r-error';
	};

	/**
	 * Some description...
	 */
	info: {
		classes: string[];
		icon: 'r-info';
	};

	/**
	 * Some description...
	 */
	success: {
		classes: string[];
		icon: 'r-check-circle';
	};

	/**
	 * Some description...
	 */
	warning: {
		classes: string[];
		icon: 'r-warning';
	};
};

type TUseAlertParams = {
	/**
	 * Some description...
	 */
	isDismissible: IAlertProps['isDismissible'];
};

export type { IAlertProps, TAlertVariants, TUseAlertParams };
