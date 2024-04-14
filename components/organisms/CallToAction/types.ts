interface ICallToActionProps {
	action: {
		label: string;
		path: string;
	};
	text: string;
	title: (string | Element)[];
}

export type { ICallToActionProps };
