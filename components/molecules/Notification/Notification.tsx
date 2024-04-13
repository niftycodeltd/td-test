import { INotificationProps } from './types';

const Notification = ({ text, utilities = [] }: INotificationProps) => {
	return (
		<div
			className={['bg-primary-900', 'p-xs', 'shadow', ...utilities].join(
				' ',
			)}
			role="alert"
		>
			<p
				className={[
					'font-normal',
					'font-secondary',
					'text-center',
					'text-neutral-500',
					'text-sm',
				].join(' ')}
			>
				{text}
			</p>
		</div>
	);
};

export default Notification;
