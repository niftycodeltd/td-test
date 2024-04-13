import { IHamburgerProps } from './types';
import { useHamburger } from './useHamburger';

const Hamburger = ({
	closeLabel,
	isDisabled,
	onClick,
	openLabel,
	utilities = [],
}: IHamburgerProps) => {
	const { isClicked, label, toggleState } = useHamburger({
		closeLabel,
		openLabel,
	});

	return (
		<button
			className={[
				'flex',
				'group',
				'h-11',
				'items-center',
				'justify-center',
				'w-11',
				'focus',
				'active',
				...utilities,
			].join(' ')}
			aria-label={label}
			data-cy="hamburger"
			disabled={isDisabled}
			onClick={() => {
				onClick && onClick;
				toggleState();
			}}
			type="button"
		>
			<div
				className={[
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'after/before:block',
					'after/before:h-0.5',
					'after/before:w-7',
					'after/before:rounded',
					'after/before:bg-white',
					'after/before:transition-transform',
					...(isClicked
						? [
								'before:rotate-45',
								'before:translate-y-[2px]',
								'after:translate-y-0',
								'after:-rotate-45',
							]
						: [
								'before:-translate-y-[6px]',
								'after:translate-y-[6px]',
								'after/before:rotate-0',
							]),
				].join(' ')}
			>
				<span
					className={[
						...(isClicked
							? ['hidden']
							: [
									'bg-white',
									'block',
									'h-0.5',
									'ml-auto',
									'rounded',
									'w-5',
								]),
					].join(' ')}
				></span>
			</div>
		</button>
	);
};

export default Hamburger;
