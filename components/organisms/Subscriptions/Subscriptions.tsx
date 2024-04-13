import Container from '@/components/layouts/Container';
import Form from '@/components/organisms/Form';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';

import { ISubscriptionsProps } from './types';

const Subscriptions = ({ form, text, title }: ISubscriptionsProps) => {
	return (
		<section className={['py-3xl', 'relative'].join(' ')}>
			<svg
				className={[
					'absolute',
					'h-[130px]',
					'hidden',
					'left-[10%]',
					'top-[10%]',
					'w-[130px]',
					'lg:block',
				].join(' ')}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 130 130"
			>
				<rect
					x="62.2529"
					y="1.47107"
					width="5.61334"
					height="127.876"
					fill="#005595"
					stroke="#005595"
				/>
				<rect
					x="128.998"
					y="62.6026"
					width="5.61334"
					height="127.876"
					transform="rotate(90 128.998 62.6026)"
					fill="#005595"
					stroke="#005595"
				/>
			</svg>

			<Container tag="header">
				<Title
					level={2}
					isSrOnly={!title}
					text={title || 'Subscriptions'}
				/>
			</Container>

			{form && (
				<Container width="md">
					<Form
						action={form.action}
						rows={form.rows}
						title={form.title}
					/>
				</Container>
			)}

			{text && (
				<Container utilities={['mt-lg']} width="sm">
					<Text
						colour="neutral-500/40"
						family="secondary"
						size="xs"
						text={text}
						utilities={['text-center']}
					/>
				</Container>
			)}
		</section>
	);
};

export default Subscriptions;
