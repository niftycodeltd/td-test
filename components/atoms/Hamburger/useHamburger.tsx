import { useEffect, useState } from 'react';

import { TUseHamburgerParams } from './types';

const useHamburger = ({ closeLabel, openLabel }: TUseHamburgerParams) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [label, setLabel] = useState<string>(openLabel);

	useEffect(() => {
		const keyupEventCallback = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsClicked(false);
				setLabel(closeLabel);
			}
		};

		document.addEventListener('keyup', keyupEventCallback);

		return () => {
			document.removeEventListener('keyup', keyupEventCallback);
		};
	}, [closeLabel]);

	const toggleState = () => {
		setIsClicked(!isClicked);
		setLabel(!isClicked ? closeLabel : openLabel);
	};

	return { isClicked, label, toggleState };
};

export { useHamburger };
