import { ILogoProps } from './types';
import { fills } from './constants';

const Logo = ({
	fill,
	h,
	id = 'brand',
	name,
	utilities = [],
	w,
}: ILogoProps) => {
	return (
		<svg
			className={[
				...(fill ? [fills[fill]] : []),
				h,
				w,
				...utilities,
			].join(' ')}
			aria-label={name}
			data-cy="logo"
			role="img"
		>
			<use xlinkHref={`/imgs/lgo_sprite.svg#${id}`}></use>
		</svg>
	);
};

export default Logo;
