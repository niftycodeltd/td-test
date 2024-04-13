import { IFormProps } from '@/components/organisms/Form/types';

interface ISubscriptionsProps {
	/**
	 * Some description...
	 */
	form: IFormProps[];

	/**
	 * Some description...
	 */
	text: string;

	/**
	 * Some description...
	 */
	title?: string;
}

type TUseSubscriptionsParams = {
	/**
	 * Some description...
	 */
	form: ISubscriptionsProps['form'];
};

export type { ISubscriptionsProps, TUseSubscriptionsParams };
