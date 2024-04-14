interface IAlertProps {
	isDismissible?: boolean;
	text: string;
	tinaField?: string;
	utilities?: string[];
	variant?: 'error' | 'info' | 'success' | 'warning';
}

type TAlertVariants = {
	error: {
		classes: string[];
		icon: 'r-error';
	};
	info: {
		classes: string[];
		icon: 'r-info';
	};
	success: {
		classes: string[];
		icon: 'r-check-circle';
	};
	warning: {
		classes: string[];
		icon: 'r-warning';
	};
};

type TUseAlertParams = {
	isDismissible: IAlertProps['isDismissible'];
};

export type { IAlertProps, TAlertVariants, TUseAlertParams };
