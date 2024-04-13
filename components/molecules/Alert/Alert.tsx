import dynamic from 'next/dynamic';

import { IAlertProps, TAlertVariants } from './types';
import { useAlert } from './useAlert';

const Close = dynamic(() => import('@/components/atoms/Close'), {
	ssr: false,
});

const Alert = ({
	isDismissible = false,
	text,
	utilities = [],
	variant = 'info',
}: IAlertProps) => {
	const { setVisible, visible } = useAlert({ isDismissible });

	const variants: TAlertVariants = {
		error: {
			classes: ['bg-error-50', 'border-error-500', 'text-error-500'],
			icon: 'r-error',
		},
		info: {
			classes: ['bg-info-50', 'border-info-500', 'text-info-500'],
			icon: 'r-info',
		},
		success: {
			classes: [
				'bg-success-50',
				'border-success-500',
				'text-success-500',
			],
			icon: 'r-check-circle',
		},
		warning: {
			classes: [
				'bg-warning-50',
				'border-warning-500',
				'text-warning-500',
			],
			icon: 'r-warning',
		},
	};

	if (!visible) {
		return null;
	}

	return (
		<div
			className={[
				'border-l-solid',
				'flex',
				'gap-x-md',
				'items-center',
				// 'justify-between',
				'border-l-8',
				'pl-md',
				...(isDismissible ? [] : ['p-3']),
				...variants[variant].classes,
				...utilities,
			].join(' ')}
			data-cy="alert"
			role="alert"
		>
			<p className={['text-md', 'font-normal', 'text-black'].join(' ')}>
				{text}
			</p>

			{isDismissible && (
				<Close
					label="Dismiss alert"
					onClick={() => setVisible(false)}
					utilities={['ml-auto']}
					variant="secondary"
				/>
			)}
		</div>
	);
};

export default Alert;
