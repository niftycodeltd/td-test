interface IBannerProps {
	images: {
		alt?: string;
		src: string;
	}[];
	text: (string | Element)[];
	title: string;
}

export type { IBannerProps };
