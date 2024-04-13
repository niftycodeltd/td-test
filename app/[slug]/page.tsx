import Banner from '@/components/organisms/Banner';
import CallToAction from '@/components/organisms/CallToAction';
import Picture from '@/components/organisms/Picture';
import Subscriptions from '@/components/organisms/Subscriptions';

const Page = () => {
	return (
		<>
			<Banner
				images={[
					{
						alt: '',
						src: '/imgs/pic_banner_left.png',
					},
					{
						alt: '',
						src: '/imgs/pic_banner_right.png',
					},
				]}
				text={[
					'Expand your provider network ',
					// @ts-expect-error TODO
					<em
						key="text-italic"
						className={['font-tertiary'].join(' ')}
					>
						anywhere
					</em>,
					' in the country. Or lease just the network locations you need. With MagnaCare Access, ',
					// @ts-expect-error TODO
					<strong key="text-bold">the choice is yours.</strong>,
				]}
				title="Choose your"
			/>

			<Subscriptions
				form={{
					action: '/thank-you',
					rows: [
						{
							controls: [
								{
									__type: 'alert',
								},
							],
						},
						{
							controls: [
								{
									__type: 'input',
									hideLabel: true,
									id: 'email',
									label: 'Email Address',
									name: 'Email',
									placeholder: 'Email Address',
								},
								{
									__type: 'button',
									label: 'Learn more',
								},
							],
						},
					],
					title: 'Subscriptions',
				}}
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
			/>

			<Picture
				image={{
					alt: '',
					src: '/imgs/pic.png',
				}}
			/>

			<CallToAction
				action={{
					label: 'Contact us',
					path: '/contact',
				}}
				text="MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico, with top-rated doctors and hospitals, as well as inpatient and outpatient services such as rehab centers, urgent care centers and ambulatory surgery centers."
				title={[
					'Need to offer ',
					// @ts-expect-error TODO
					<em
						key="text-italic"
						className={['font-tertiary'].join(' ')}
					>
						nationwide
					</em>,
					' access to health care providers?',
				]}
			/>
		</>
	);
};

export default Page;
