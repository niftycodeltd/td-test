import { ReactNode } from 'react';

import Header from '@/components/organisms/Header';
import Notification from '@/components/molecules/Notification';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Notification text="This is an example of a notification message. It can be used to promote a specific campaign, etc." />

			<Header />

			<main
				className={['grow'].join('')}
				id="main-content"
				itemProp="mainContentOfPage"
				tabIndex={-1}
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
