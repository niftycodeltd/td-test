'use client';

import { useEffect, useState } from 'react';

const useHeader = () => {
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isSticky, setIsSticky] = useState<boolean>(false);

	useEffect(() => {
		let lastScrollTop = scrollY;
		window.addEventListener(
			'scroll',
			() => {
				const scrollTop =
					window.scrollY || document.documentElement.scrollTop;

				switch (true) {
					// Top
					case scrollTop === 0:
						setIsHidden(false);
						setIsSticky(false);
						break;
					// Scrolling down
					case scrollTop > lastScrollTop:
						setIsHidden(true);
						setIsSticky(false);
						break;
					// Scrolling up
					case scrollTop < lastScrollTop:
						setIsHidden(false);
						setIsSticky(true);
						break;
				}

				lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
			},
			false,
		);

		return () => {
			window.removeEventListener(
				'scroll',
				() => {
					const scrollTop =
						window.scrollY || document.documentElement.scrollTop;

					switch (true) {
						// Top
						case scrollTop === 0:
							setIsHidden(false);
							setIsSticky(false);
							break;
						// Scrolling down
						case scrollTop > lastScrollTop:
							setIsHidden(true);
							setIsSticky(false);
							break;
						// Scrolling up
						case scrollTop < lastScrollTop:
							setIsHidden(false);
							setIsSticky(true);
							break;
					}

					lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
				},
				false,
			);
		};
	}, []);

	useEffect(() => {
		// @ts-expect-error TODO
		const keyupEventCallback = (e) => {
			if (e.key === 'Escape') {
				setIsOpen(false);

				document.body.classList.remove(
					'after:visible',
					'after:opacity-100',
				);
				document.body.classList.add(
					'after:invisible',
					'after:opacity-0',
				);
			}
		};

		document.addEventListener('keyup', keyupEventCallback);

		return () => {
			document.removeEventListener('keyup', keyupEventCallback);
		};
	}, []);

	const toggleMenu = () => {
		document.body.classList.toggle('after:invisible');
		document.body.classList.toggle('after:opacity-0');
		document.body.classList.toggle('after:opacity-100');
		document.body.classList.toggle('after:visible');

		switch (isOpen) {
			case false:
				setIsOpen(true);
				break;
			case true:
				setIsOpen(false);
		}
	};

	return { isHidden, isOpen, isSticky, toggleMenu };
};

export { useHeader };
