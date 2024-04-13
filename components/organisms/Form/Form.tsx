'use client';

import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';

import Field from '@/components/molecules/Field';
import Hidden from '@/components/atoms/Hidden';
import { relatedIds } from '@/utils/helpers';

import { IFormProps } from './types';
import { useFormResend } from './useFormResend';

const Alert = dynamic(() => import('@/components/molecules/Alert'), {
	ssr: false,
});
const Button = dynamic(() => import('@/components/atoms/Button'), {
	ssr: false,
});
const Input = dynamic(() => import('@/components/atoms/Input'), {
	ssr: false,
});

const Form = ({ action, rows, title, utilities }: IFormProps) => {
	const {
		errors,
		handleSubmit,
		isInvalid,
		isSubmitting,
		onSubmit,
		onError,
		rhfControl,
	} = useFormResend({ action, title });

	return (
		<form
			className={[utilities].join(' ')}
			acceptCharset="UTF-8"
			action={action}
			method="post"
			name={title}
			noValidate
			onSubmit={handleSubmit(onSubmit, onError)}
		>
			<Controller
				control={rhfControl}
				name="form"
				render={({ field: { name, value } }) => (
					<Hidden id={name} name={name} value={value} />
				)}
			/>

			{rows &&
				rows.map((row, index) => (
					<div
						key={`row-${index}`}
						className={[
							...(row.controls.length === 2
								? ['flex', 'flex-wrap', 'justify-center']
								: []),
						].join(' ')}
					>
						{row &&
							row.controls.map((control, index) => {
								switch (control.__type) {
									case 'alert':
										return (
											isInvalid && (
												<Alert
													key={`control-${index}__${control.type}`}
													isDismissible
													text={`Failed to save because ${errors.length} field${errors.length > 1 ? 's are' : ' is'} invalid`}
													variant="error"
												/>
											)
										);
									case 'button':
										return (
											<Button
												key={`control-${index}__${control.type}`}
												isDisabled={isSubmitting}
												label={control.label}
												type="submit"
												utilities={[
													'grow-0',
													'max-h-[64px]',
												]}
											/>
										);
									case 'input':
										return (
											<Controller
												key={`control-${index}__${control.type}`}
												control={rhfControl}
												name={control.name}
												render={({
													field: {
														name,
														onBlur,
														onChange,
													},
												}) => (
													<Field
														error={
															errors[name]
																?.message
														}
														hasHiddenLabel={
															control.hideLabel
														}
														hint={control.hint}
														id={control.id}
														label={control.label}
													>
														<Input
															id={control.id}
															isInvalid={
																name in errors
															}
															isOptional={
																control.isOptional
															}
															name={name}
															onBlur={onBlur}
															onChange={onChange}
															placeholder={
																control.placeholder
															}
															relatedIds={relatedIds(
																name in errors,
																control.hint,
																control.id,
															)}
															type={control.type}
															utilities={['grow']}
														/>
													</Field>
												)}
												rules={{
													required:
														!control.isOptional &&
														`${control.name} is required`,
												}}
											/>
										);
								}
							})}
					</div>
				))}
		</form>
	);
};

export default Form;
