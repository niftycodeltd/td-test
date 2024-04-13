import Image from 'next/image';

import { IPictureProps } from './types';

const Picture = ({ image }: IPictureProps) => {
	return (
		<section className={['flex', 'items-start'].join(' ')}>
			<Image
				className={['w-[60%]', 'xl:w-[928px]'].join(' ')}
				alt={image.alt || '#'}
				height={673}
				loading="lazy"
				src={image.src}
				width={928}
			/>

			<svg
				className={[
					'mx-auto',
					'mt-[15%]',
					'h-[104px]',
					'w-[100px]',
					'md:mt-[10%]',
					'xl:h-[264px]',
					'xl:w-[254px]',
				].join(' ')}
				height={264}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 255 265"
				width={254}
			>
				<circle cx="18.275" cy="18.3675" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="18.3675" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="18.3675" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="18.3675" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="18.3675" r="17.7755" fill="#005595" />
				<circle cx="18.275" cy="64.0758" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="64.0758" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="64.0758" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="64.0758" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="64.0758" r="17.7755" fill="#005595" />
				<circle cx="18.275" cy="109.784" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="109.784" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="109.784" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="109.784" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="109.784" r="17.7755" fill="#005595" />
				<circle cx="18.275" cy="155.492" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="155.492" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="155.492" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="155.492" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="155.492" r="17.7755" fill="#005595" />
				<circle cx="18.275" cy="201.2" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="201.2" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="201.2" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="201.2" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="201.2" r="17.7755" fill="#005595" />
				<circle cx="18.275" cy="246.908" r="17.7755" fill="#005595" />
				<circle cx="72.921" cy="246.908" r="17.7755" fill="#005595" />
				<circle cx="127.567" cy="246.908" r="17.7755" fill="#005595" />
				<circle cx="182.213" cy="246.908" r="17.7755" fill="#005595" />
				<circle cx="236.859" cy="246.908" r="17.7755" fill="#005595" />
			</svg>
		</section>
	);
};

export default Picture;
