interface IBannerProps {
	/**
	 * Some description...
	 */
	images: {
		alt?: string;
		src: string;
	}[];

	/**
	 * Some description...
	 */
	text: (string | Element)[];

	/**
	 * Some description...
	 */
	title: string;
}

export type { IBannerProps };
