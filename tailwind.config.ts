import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { clamp } from './utils/typography';

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	plugins: [
		require('@tailwindcss/forms'),

		plugin(({ addVariant }) => {
			addVariant('after/before', ['&::after', '&::before']);
		}),
	],

	theme: {
		boxShadow: {
			DEFAULT: '0 0 54px 0 rgba(0 0 0, 0.75)',
			button: '0 0 54px 0 rgba(255 118 60, 0.6)',
		},
		colors: {
			black: {
				DEFAULT: '#000000',
			},
			current: {
				DEFAULT: 'currentColor',
			},
			error: {
				50: '#fef2f2',
				500: '#ef4444',
				950: '#450a0a',
			},
			neutral: {
				500: '#e5f2f8',
			},
			primary: {
				300: '#54c9ff',
				500: '#005595',
				600: '#003e6d',
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
		fontFamily: {
			primary: ['var(--font-primary)'],
			secondary: ['var(--font-secondary)'],
			tertiary: ['var(--font-tertiary)'],
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
			backgroundImage: {
				radial: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMzc4IiB2aWV3Qm94PSIwIDAgMTQ0MCAxMzc4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGNpcmNsZSBjeD0iNzE5LjY0NyIgY3k9IjU4Mi42MDYiIHI9Ijc5NS4zMTIiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8xOTRfMjI1NykiLz4KICAgIDxkZWZzPgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xOTRfMjI1NyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg3MTkuNjQ3IDU4Mi42MDYpIHJvdGF0ZSg5MCkgc2NhbGUoNzk1LjMxMikiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDg2Q0I1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4N0VEMyIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==")',
			},
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
