import type { Config } from 'tailwindcss';

import { clamp } from './utils/typography';

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	plugins: [require('@tailwindcss/forms')],

	theme: {
		boxShadow: {
			DEFAULT: '0 0 54px 0 rgba(0 0 0, 0.75)',
		},
		colors: {
			black: {
				DEFAULT: '#000000',
			},
			current: {
				DEFAULT: 'currentColor',
			},
			neutral: {
				500: '#e5f2f8',
			},
			primary: {
				300: '#54c9ff',
				500: '#005595',
				800: '#001a2e',
				900: '#00192c',
			},
			secondary: {
				500: '#ff763c',
			},
			transparent: {
				DEFAULT: 'transparent',
			},
			white: {
				DEFAULT: '#ffffff',
			},
		},
		fontSize: {
			xs: [clamp(12.0, 12.72), '1'],
			sm: [clamp(15.0, 15.72), '1'],
			md: [clamp(17.72, 17.72), '1'],
			lg: [clamp(18.0, 19.72), '1'],
			xl: [clamp(21.6, 25.72), '1'],
			'2xl': [clamp(30.72, 30.72), '1'],
			'3xl': [clamp(25.92, 35.72), '1'],
			'4xl': [clamp(37.32, 67.67), '1'],
		},
		extend: {
			spacing: {
				'3xs': clamp(5, 5),
				'2xs': clamp(9, 10),
				xs: clamp(14, 15),
				sm: clamp(18, 20),
				md: clamp(27, 30),
				lg: clamp(36, 40),
				xl: clamp(54, 60),
				'2xl': clamp(72, 80),
				'3xl': clamp(108, 120),
			},
		},
	},
};

export default config;
