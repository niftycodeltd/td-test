/** @type {import('next').NextConfig} */

const nextConfig = {
	poweredByHeader: false,

	reactStrictMode: true,

	async rewrites() {
		return [
			{
				source: '/',
				destination: '/home',
			},
		];
	},

};

export default nextConfig;
