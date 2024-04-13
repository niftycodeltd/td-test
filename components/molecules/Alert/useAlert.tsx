import { useState } from 'react';

import { TUseAlertParams } from './types';

const useAlert = ({ isDismissible }: TUseAlertParams) => {
	const [visible, setVisible] = useState<boolean>(true);

	if (!isDismissible) {
		setTimeout(function () {
			setVisible(false);
		}, 6000);
	}

	return { setVisible, visible };
};

export { useAlert };
