import { ReactNode } from 'react';

import { Krona_One } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const kronaOne = Krona_One({
	subsets: ['latin'],
	variable: '--font-primary',
	weight: ['400'],
});

const messinaSans = localFont({
	src: [
		{
			path: './fonts/MessinaSans-Regular.woff2',
			style: 'normal',
			weight: '400',
		},
	],
	variable: '--font-secondary',
});

const messinaSerif = localFont({
	src: [
		{
			path: './fonts/MessinaSerif-Regular.woff2',
			style: 'normal',
			weight: '400',
		},
	],
	variable: '--font-tertiary',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html
			className={[
				kronaOne.variable,
				messinaSans.variable,
				messinaSerif.variable,
			].join(' ')}
			lang="en"
		>
			<body
				className={[
					'bg-primary-600',
					'bg-radial',
					'bg-no-repeat',
					'bg-top',
					'bg-contain',
					'flex',
					'flex-col',
					'font-primary',
					'min-h-screen',
					'relative',
				].join(' ')}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
