'use client';

import Link from 'next/link';

import Container from '@/components/layouts/Container';
import Hamburger from '@/components/atoms/Hamburger';
import Logo from '@/components/atoms/Logo';

import { useHeader } from './useHeader';

const Header = () => {
	const { isHidden, isOpen, isSticky, toggleMenu } = useHeader();

	return (
		<header
			className={[
				...(isOpen ? ['bg-primary-500'] : []),
				...(isSticky ? ['bg-primary-500'] : []),
				...(isHidden
					? isOpen
						? ['opacity-100']
						: ['opacity-0']
					: ['opacity-100']),
				'py-xl',
				'sticky',
				'top-0',
				'transition-opacity',
				'z-10',
			].join(' ')}
			itemScope
			itemType="https://schema.org/Header"
		>
			<Container utilities={['flex', 'items-center', 'justify-between']}>
				<Link
					href="/"
					itemScope
					itemType="https://schema.org/Organization"
					rel="home"
					title="Back to Home"
				>
					<Logo
						fill="neutral-500"
						h="h-[26px]"
						name="Magnarcare"
						w="w-[234px]"
					/>
				</Link>

				<Hamburger
					closeLabel="Close menu"
					onClick={toggleMenu}
					openLabel="Open menu"
				/>
			</Container>
		</header>
	);
};

export default Header;
