import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { TUseFormParams } from '@/components/organisms/Form/types';

const useFormResend = ({ action, title }: TUseFormParams) => {
	const router = useRouter();

	const [isInvalid, setIsInvalid] = useState<boolean>(false);

	const {
		control: rhfControl,
		formState: { errors, isSubmitting },
		handleSubmit,
		reset,
	} = useForm({
		defaultValues: {
			form: title,
		},
		mode: 'onBlur',
	});

	const onError = () => {
		setIsInvalid(true);
	};

	/* eslint-disable @typescript-eslint/no-explicit-any */
	const onSubmit: SubmitHandler<any> = (data, e) => {
		e?.preventDefault();

		fetch('/api/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(async () => {
				router.push(action);
				reset();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return {
		errors,
		handleSubmit,
		rhfControl,
		isInvalid,
		isSubmitting,
		onSubmit,
		onError,
	};
};

export { useFormResend };
