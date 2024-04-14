import Image from 'next/image';

import Container from '@/components/layouts/Container';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';

import { IBannerProps } from './types';

const Banner = ({ images, text, title }: IBannerProps) => {
	return (
		<header className={['relative'].join(' ')}>
			<Image
				className={[
					'absolute',
					'hidden',
					'right-0',
					'top-0',
					'xl:block',
				].join(' ')}
				alt={images[1].alt || ''}
				height={392}
				src={images[1].src}
				width={333}
			/>

			<Container utilities={['space-y-xl']}>
				{title && (
					<Title
						level={1}
						size="3xl"
						text={title}
						utilities={[
							'text-center',
							'tracking-widest',
							'uppercase',
						]}
					/>
				)}

				<svg
					className={[
						'relative',
						'right-[-45px]',
						'lg:right-[-75px]',
					].join(' ')}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1172 523"
				>
					<path
						d="M193.649 3.70718H244.206L357.958 238.886H307.853L289.045 199.313H151.669L133.462 238.886H83.2067L193.649 3.70718ZM270.236 160.042L219.379 53.2106L169.875 160.042H270.236ZM381.768 119.867C381.768 103.115 384.928 87.5169 391.247 73.0722C397.567 58.5271 406.695 45.9381 418.632 35.3051C430.67 24.5718 445.315 16.1457 462.568 10.0268C479.922 3.9078 499.533 0.848315 521.401 0.848315C540.56 0.848315 558.115 2.80438 574.064 6.7165C590.114 10.5283 605.01 16.3965 618.753 24.3211L596.784 60.433C592.672 57.7246 587.907 55.3171 582.49 53.2106C577.174 51.1041 571.456 49.3486 565.337 47.9443C559.318 46.4396 553.049 45.286 546.529 44.4836C540.109 43.6811 533.739 43.2798 527.419 43.2798C512.172 43.2798 498.58 45.1857 486.643 48.9976C474.706 52.7091 464.625 57.9754 456.399 64.7965C448.274 71.5174 442.055 79.5924 437.742 89.0216C433.528 98.3505 431.422 108.632 431.422 119.867C431.422 131.503 433.629 142.186 438.042 151.917C442.456 161.647 448.826 170.073 457.152 177.195C465.578 184.217 475.81 189.734 487.847 193.746C499.984 197.658 513.677 199.614 528.924 199.614C535.846 199.614 542.717 199.113 549.538 198.11C556.359 197.107 562.93 195.752 569.249 194.047C575.669 192.242 581.838 190.135 587.756 187.728C593.675 185.22 599.192 182.511 604.308 179.602L626.276 215.714C613.436 223.94 598.59 230.41 581.738 235.124C564.886 239.739 546.98 242.046 528.021 242.046C503.846 242.046 482.631 238.936 464.374 232.717C446.117 226.397 430.87 217.771 418.632 206.837C406.394 195.803 397.166 182.862 390.946 168.016C384.828 153.07 381.768 137.02 381.768 119.867ZM666.186 119.867C666.186 103.115 669.345 87.5169 675.665 73.0722C681.985 58.5271 691.113 45.9381 703.05 35.3051C715.087 24.5718 729.733 16.1457 746.986 10.0268C764.34 3.9078 783.951 0.848315 805.818 0.848315C824.978 0.848315 842.532 2.80438 858.482 6.7165C874.531 10.5283 889.428 16.3965 903.17 24.3211L881.202 60.433C877.089 57.7246 872.325 55.3171 866.908 53.2106C861.591 51.1041 855.874 49.3486 849.755 47.9443C843.736 46.4396 837.466 45.286 830.946 44.4836C824.526 43.6811 818.157 43.2798 811.837 43.2798C796.59 43.2798 782.998 45.1857 771.061 48.9976C759.124 52.7091 749.042 57.9754 740.817 64.7965C732.692 71.5174 726.472 79.5924 722.159 89.0216C717.946 98.3505 715.839 108.632 715.839 119.867C715.839 131.503 718.046 142.186 722.46 151.917C726.874 161.647 733.243 170.073 741.569 177.195C749.995 184.217 760.227 189.734 772.264 193.746C784.402 197.658 798.094 199.614 813.342 199.614C820.263 199.614 827.134 199.113 833.956 198.11C840.777 197.107 847.347 195.752 853.667 194.047C860.087 192.242 866.256 190.135 872.174 187.728C878.092 185.22 883.609 182.511 888.725 179.602L910.693 215.714C897.854 223.94 883.008 230.41 866.155 235.124C849.303 239.739 831.398 242.046 812.439 242.046C788.264 242.046 767.048 238.936 748.792 232.717C730.535 226.397 715.288 217.771 703.05 206.837C690.812 195.803 681.583 182.862 675.364 168.016C669.245 153.07 666.186 137.02 666.186 119.867ZM100.51 283.707H300.781V325.537H148.208V372.482H283.327V411.754H148.208V477.207H303.941V518.886H100.51V283.707ZM369.43 448.919C377.956 453.734 386.583 458.098 395.31 462.01C404.137 465.822 413.266 469.082 422.695 471.79C432.124 474.398 442.005 476.404 452.337 477.809C462.769 479.213 473.853 479.915 485.59 479.915C499.734 479.915 511.771 479.013 521.702 477.207C531.633 475.301 539.708 472.743 545.927 469.533C552.246 466.223 556.811 462.311 559.619 457.797C562.528 453.283 563.983 448.368 563.983 443.051C563.983 434.525 560.422 427.804 553.3 422.889C546.178 417.873 535.194 415.365 520.348 415.365C513.827 415.365 506.956 415.817 499.734 416.719C492.511 417.522 485.189 418.425 477.766 419.428C470.443 420.431 463.17 421.384 455.948 422.287C448.826 423.089 442.105 423.49 435.785 423.49C425.253 423.49 415.121 422.136 405.391 419.428C395.761 416.719 387.185 412.657 379.661 407.24C372.238 401.823 366.32 395.052 361.906 386.927C357.493 378.802 355.286 369.323 355.286 358.489C355.286 352.069 356.139 345.699 357.844 339.38C359.649 333.06 362.458 327.041 366.27 321.324C370.182 315.506 375.198 310.139 381.317 305.224C387.436 300.208 394.808 295.895 403.435 292.284C412.162 288.673 422.193 285.864 433.528 283.858C444.964 281.751 457.954 280.698 472.499 280.698C483.032 280.698 493.615 281.3 504.248 282.503C514.881 283.607 525.213 285.212 535.244 287.318C545.375 289.425 555.105 291.983 564.434 294.992C573.763 297.901 582.44 301.161 590.465 304.772L569.55 343.292C562.93 340.383 555.807 337.725 548.184 335.317C540.56 332.809 532.585 330.653 524.26 328.847C515.934 327.041 507.307 325.637 498.379 324.634C489.552 323.531 480.524 322.979 471.296 322.979C458.155 322.979 447.321 323.932 438.795 325.838C430.369 327.744 423.648 330.201 418.632 333.211C413.617 336.12 410.106 339.43 408.1 343.141C406.194 346.753 405.241 350.364 405.241 353.975C405.241 360.997 408.401 366.765 414.72 371.279C421.04 375.692 430.67 377.899 443.61 377.899C448.826 377.899 454.794 377.548 461.515 376.846C468.336 376.043 475.458 375.191 482.881 374.288C490.405 373.385 498.028 372.583 505.752 371.88C513.577 371.078 521.15 370.677 528.473 370.677C542.316 370.677 554.554 372.232 565.187 375.341C575.92 378.451 584.898 382.915 592.12 388.733C599.342 394.45 604.809 401.422 608.521 409.648C612.232 417.773 614.088 426.901 614.088 437.032C614.088 450.574 610.928 462.662 604.609 473.295C598.389 483.827 589.462 492.755 577.826 500.078C566.29 507.3 552.347 512.817 535.996 516.629C519.645 520.341 501.439 522.196 481.377 522.196C468.136 522.196 455.196 521.344 442.556 519.638C429.917 518.033 417.78 515.726 406.144 512.717C394.608 509.607 383.574 505.946 373.041 501.733C362.609 497.42 352.929 492.705 344.001 487.589L369.43 448.919ZM679.126 448.919C687.652 453.734 696.279 458.098 705.006 462.01C713.833 465.822 722.962 469.082 732.391 471.79C741.82 474.398 751.701 476.404 762.033 477.809C772.465 479.213 783.549 479.915 795.286 479.915C809.43 479.915 821.467 479.013 831.398 477.207C841.328 475.301 849.403 472.743 855.623 469.533C861.942 466.223 866.506 462.311 869.315 457.797C872.224 453.283 873.679 448.368 873.679 443.051C873.679 434.525 870.118 427.804 862.996 422.889C855.874 417.873 844.889 415.365 830.043 415.365C823.523 415.365 816.652 415.817 809.43 416.719C802.207 417.522 794.884 418.425 787.461 419.428C780.139 420.431 772.866 421.384 765.644 422.287C758.522 423.089 751.801 423.49 745.481 423.49C734.949 423.49 724.817 422.136 715.087 419.428C705.457 416.719 696.881 412.657 689.357 407.24C681.934 401.823 676.016 395.052 671.602 386.927C667.189 378.802 664.982 369.323 664.982 358.489C664.982 352.069 665.834 345.699 667.54 339.38C669.345 333.06 672.154 327.041 675.966 321.324C679.878 315.506 684.894 310.139 691.013 305.224C697.131 300.208 704.504 295.895 713.131 292.284C721.858 288.673 731.889 285.864 743.224 283.858C754.66 281.751 767.65 280.698 782.195 280.698C792.728 280.698 803.311 281.3 813.944 282.503C824.576 283.607 834.909 285.212 844.94 287.318C855.071 289.425 864.801 291.983 874.13 294.992C883.459 297.901 892.136 301.161 900.161 304.772L879.246 343.292C872.625 340.383 865.503 337.725 857.88 335.317C850.256 332.809 842.281 330.653 833.956 328.847C825.63 327.041 817.003 325.637 808.075 324.634C799.248 323.531 790.22 322.979 780.991 322.979C767.851 322.979 757.017 323.932 748.491 325.838C740.065 327.744 733.344 330.201 728.328 333.211C723.313 336.12 719.802 339.43 717.796 343.141C715.89 346.753 714.937 350.364 714.937 353.975C714.937 360.997 718.096 366.765 724.416 371.279C730.736 375.692 740.365 377.899 753.306 377.899C758.522 377.899 764.49 377.548 771.211 376.846C778.032 376.043 785.154 375.191 792.577 374.288C800.101 373.385 807.724 372.583 815.448 371.88C823.272 371.078 830.846 370.677 838.169 370.677C852.012 370.677 864.249 372.232 874.882 375.341C885.616 378.451 894.594 382.915 901.816 388.733C909.038 394.45 914.505 401.422 918.217 409.648C921.928 417.773 923.784 426.901 923.784 437.032C923.784 450.574 920.624 462.662 914.305 473.295C908.085 483.827 899.158 492.755 887.522 500.078C875.986 507.3 862.043 512.817 845.692 516.629C829.341 520.341 811.135 522.196 791.073 522.196C777.832 522.196 764.892 521.344 752.252 519.638C739.613 518.033 727.476 515.726 715.839 512.717C704.304 509.607 693.27 505.946 682.737 501.733C672.305 497.42 662.625 492.705 653.697 487.589L679.126 448.919Z"
						fill="#54C9FF"
					/>
					<path
						d="M193.649 3.70718H244.206L357.958 238.886H307.853L289.045 199.313H151.669L133.462 238.886H83.2067L193.649 3.70718ZM270.236 160.042L219.379 53.2106L169.875 160.042H270.236ZM381.768 119.867C381.768 103.115 384.928 87.5169 391.247 73.0722C397.567 58.5271 406.695 45.9381 418.632 35.3051C430.67 24.5718 445.315 16.1457 462.568 10.0268C479.922 3.9078 499.533 0.848315 521.401 0.848315C540.56 0.848315 558.115 2.80438 574.064 6.7165C590.114 10.5283 605.01 16.3965 618.753 24.3211L596.784 60.433C592.672 57.7246 587.907 55.3171 582.49 53.2106C577.174 51.1041 571.456 49.3486 565.337 47.9443C559.318 46.4396 553.049 45.286 546.529 44.4836C540.109 43.6811 533.739 43.2798 527.419 43.2798C512.172 43.2798 498.58 45.1857 486.643 48.9976C474.706 52.7091 464.625 57.9754 456.399 64.7965C448.274 71.5174 442.055 79.5924 437.742 89.0216C433.528 98.3505 431.422 108.632 431.422 119.867C431.422 131.503 433.629 142.186 438.042 151.917C442.456 161.647 448.826 170.073 457.152 177.195C465.578 184.217 475.81 189.734 487.847 193.746C499.984 197.658 513.677 199.614 528.924 199.614C535.846 199.614 542.717 199.113 549.538 198.11C556.359 197.107 562.93 195.752 569.249 194.047C575.669 192.242 581.838 190.135 587.756 187.728C593.675 185.22 599.192 182.511 604.308 179.602L626.276 215.714C613.436 223.94 598.59 230.41 581.738 235.124C564.886 239.739 546.98 242.046 528.021 242.046C503.846 242.046 482.631 238.936 464.374 232.717C446.117 226.397 430.87 217.771 418.632 206.837C406.394 195.803 397.166 182.862 390.946 168.016C384.828 153.07 381.768 137.02 381.768 119.867ZM666.186 119.867C666.186 103.115 669.345 87.5169 675.665 73.0722C681.985 58.5271 691.113 45.9381 703.05 35.3051C715.087 24.5718 729.733 16.1457 746.986 10.0268C764.34 3.9078 783.951 0.848315 805.818 0.848315C824.978 0.848315 842.532 2.80438 858.482 6.7165C874.531 10.5283 889.428 16.3965 903.17 24.3211L881.202 60.433C877.089 57.7246 872.325 55.3171 866.908 53.2106C861.591 51.1041 855.874 49.3486 849.755 47.9443C843.736 46.4396 837.466 45.286 830.946 44.4836C824.526 43.6811 818.157 43.2798 811.837 43.2798C796.59 43.2798 782.998 45.1857 771.061 48.9976C759.124 52.7091 749.042 57.9754 740.817 64.7965C732.692 71.5174 726.472 79.5924 722.159 89.0216C717.946 98.3505 715.839 108.632 715.839 119.867C715.839 131.503 718.046 142.186 722.46 151.917C726.874 161.647 733.243 170.073 741.569 177.195C749.995 184.217 760.227 189.734 772.264 193.746C784.402 197.658 798.094 199.614 813.342 199.614C820.263 199.614 827.134 199.113 833.956 198.11C840.777 197.107 847.347 195.752 853.667 194.047C860.087 192.242 866.256 190.135 872.174 187.728C878.092 185.22 883.609 182.511 888.725 179.602L910.693 215.714C897.854 223.94 883.008 230.41 866.155 235.124C849.303 239.739 831.398 242.046 812.439 242.046C788.264 242.046 767.048 238.936 748.792 232.717C730.535 226.397 715.288 217.771 703.05 206.837C690.812 195.803 681.583 182.862 675.364 168.016C669.245 153.07 666.186 137.02 666.186 119.867ZM100.51 283.707H300.781V325.537H148.208V372.482H283.327V411.754H148.208V477.207H303.941V518.886H100.51V283.707ZM369.43 448.919C377.956 453.734 386.583 458.098 395.31 462.01C404.137 465.822 413.266 469.082 422.695 471.79C432.124 474.398 442.005 476.404 452.337 477.809C462.769 479.213 473.853 479.915 485.59 479.915C499.734 479.915 511.771 479.013 521.702 477.207C531.633 475.301 539.708 472.743 545.927 469.533C552.246 466.223 556.811 462.311 559.619 457.797C562.528 453.283 563.983 448.368 563.983 443.051C563.983 434.525 560.422 427.804 553.3 422.889C546.178 417.873 535.194 415.365 520.348 415.365C513.827 415.365 506.956 415.817 499.734 416.719C492.511 417.522 485.189 418.425 477.766 419.428C470.443 420.431 463.17 421.384 455.948 422.287C448.826 423.089 442.105 423.49 435.785 423.49C425.253 423.49 415.121 422.136 405.391 419.428C395.761 416.719 387.185 412.657 379.661 407.24C372.238 401.823 366.32 395.052 361.906 386.927C357.493 378.802 355.286 369.323 355.286 358.489C355.286 352.069 356.139 345.699 357.844 339.38C359.649 333.06 362.458 327.041 366.27 321.324C370.182 315.506 375.198 310.139 381.317 305.224C387.436 300.208 394.808 295.895 403.435 292.284C412.162 288.673 422.193 285.864 433.528 283.858C444.964 281.751 457.954 280.698 472.499 280.698C483.032 280.698 493.615 281.3 504.248 282.503C514.881 283.607 525.213 285.212 535.244 287.318C545.375 289.425 555.105 291.983 564.434 294.992C573.763 297.901 582.44 301.161 590.465 304.772L569.55 343.292C562.93 340.383 555.807 337.725 548.184 335.317C540.56 332.809 532.585 330.653 524.26 328.847C515.934 327.041 507.307 325.637 498.379 324.634C489.552 323.531 480.524 322.979 471.296 322.979C458.155 322.979 447.321 323.932 438.795 325.838C430.369 327.744 423.648 330.201 418.632 333.211C413.617 336.12 410.106 339.43 408.1 343.141C406.194 346.753 405.241 350.364 405.241 353.975C405.241 360.997 408.401 366.765 414.72 371.279C421.04 375.692 430.67 377.899 443.61 377.899C448.826 377.899 454.794 377.548 461.515 376.846C468.336 376.043 475.458 375.191 482.881 374.288C490.405 373.385 498.028 372.583 505.752 371.88C513.577 371.078 521.15 370.677 528.473 370.677C542.316 370.677 554.554 372.232 565.187 375.341C575.92 378.451 584.898 382.915 592.12 388.733C599.342 394.45 604.809 401.422 608.521 409.648C612.232 417.773 614.088 426.901 614.088 437.032C614.088 450.574 610.928 462.662 604.609 473.295C598.389 483.827 589.462 492.755 577.826 500.078C566.29 507.3 552.347 512.817 535.996 516.629C519.645 520.341 501.439 522.196 481.377 522.196C468.136 522.196 455.196 521.344 442.556 519.638C429.917 518.033 417.78 515.726 406.144 512.717C394.608 509.607 383.574 505.946 373.041 501.733C362.609 497.42 352.929 492.705 344.001 487.589L369.43 448.919ZM679.126 448.919C687.652 453.734 696.279 458.098 705.006 462.01C713.833 465.822 722.962 469.082 732.391 471.79C741.82 474.398 751.701 476.404 762.033 477.809C772.465 479.213 783.549 479.915 795.286 479.915C809.43 479.915 821.467 479.013 831.398 477.207C841.328 475.301 849.403 472.743 855.623 469.533C861.942 466.223 866.506 462.311 869.315 457.797C872.224 453.283 873.679 448.368 873.679 443.051C873.679 434.525 870.118 427.804 862.996 422.889C855.874 417.873 844.889 415.365 830.043 415.365C823.523 415.365 816.652 415.817 809.43 416.719C802.207 417.522 794.884 418.425 787.461 419.428C780.139 420.431 772.866 421.384 765.644 422.287C758.522 423.089 751.801 423.49 745.481 423.49C734.949 423.49 724.817 422.136 715.087 419.428C705.457 416.719 696.881 412.657 689.357 407.24C681.934 401.823 676.016 395.052 671.602 386.927C667.189 378.802 664.982 369.323 664.982 358.489C664.982 352.069 665.834 345.699 667.54 339.38C669.345 333.06 672.154 327.041 675.966 321.324C679.878 315.506 684.894 310.139 691.013 305.224C697.131 300.208 704.504 295.895 713.131 292.284C721.858 288.673 731.889 285.864 743.224 283.858C754.66 281.751 767.65 280.698 782.195 280.698C792.728 280.698 803.311 281.3 813.944 282.503C824.576 283.607 834.909 285.212 844.94 287.318C855.071 289.425 864.801 291.983 874.13 294.992C883.459 297.901 892.136 301.161 900.161 304.772L879.246 343.292C872.625 340.383 865.503 337.725 857.88 335.317C850.256 332.809 842.281 330.653 833.956 328.847C825.63 327.041 817.003 325.637 808.075 324.634C799.248 323.531 790.22 322.979 780.991 322.979C767.851 322.979 757.017 323.932 748.491 325.838C740.065 327.744 733.344 330.201 728.328 333.211C723.313 336.12 719.802 339.43 717.796 343.141C715.89 346.753 714.937 350.364 714.937 353.975C714.937 360.997 718.096 366.765 724.416 371.279C730.736 375.692 740.365 377.899 753.306 377.899C758.522 377.899 764.49 377.548 771.211 376.846C778.032 376.043 785.154 375.191 792.577 374.288C800.101 373.385 807.724 372.583 815.448 371.88C823.272 371.078 830.846 370.677 838.169 370.677C852.012 370.677 864.249 372.232 874.882 375.341C885.616 378.451 894.594 382.915 901.816 388.733C909.038 394.45 914.505 401.422 918.217 409.648C921.928 417.773 923.784 426.901 923.784 437.032C923.784 450.574 920.624 462.662 914.305 473.295C908.085 483.827 899.158 492.755 887.522 500.078C875.986 507.3 862.043 512.817 845.692 516.629C829.341 520.341 811.135 522.196 791.073 522.196C777.832 522.196 764.892 521.344 752.252 519.638C739.613 518.033 727.476 515.726 715.839 512.717C704.304 509.607 693.27 505.946 682.737 501.733C672.305 497.42 662.625 492.705 653.697 487.589L679.126 448.919Z"
						fill="url(#paint0_radial_0_1)"
						fillOpacity="0.6"
					/>
					<path
						d="M193.649 3.70718H244.206L357.958 238.886H307.853L289.045 199.313H151.669L133.462 238.886H83.2067L193.649 3.70718ZM270.236 160.042L219.379 53.2106L169.875 160.042H270.236ZM381.768 119.867C381.768 103.115 384.928 87.5169 391.247 73.0722C397.567 58.5271 406.695 45.9381 418.632 35.3051C430.67 24.5718 445.315 16.1457 462.568 10.0268C479.922 3.9078 499.533 0.848315 521.401 0.848315C540.56 0.848315 558.115 2.80438 574.064 6.7165C590.114 10.5283 605.01 16.3965 618.753 24.3211L596.784 60.433C592.672 57.7246 587.907 55.3171 582.49 53.2106C577.174 51.1041 571.456 49.3486 565.337 47.9443C559.318 46.4396 553.049 45.286 546.529 44.4836C540.109 43.6811 533.739 43.2798 527.419 43.2798C512.172 43.2798 498.58 45.1857 486.643 48.9976C474.706 52.7091 464.625 57.9754 456.399 64.7965C448.274 71.5174 442.055 79.5924 437.742 89.0216C433.528 98.3505 431.422 108.632 431.422 119.867C431.422 131.503 433.629 142.186 438.042 151.917C442.456 161.647 448.826 170.073 457.152 177.195C465.578 184.217 475.81 189.734 487.847 193.746C499.984 197.658 513.677 199.614 528.924 199.614C535.846 199.614 542.717 199.113 549.538 198.11C556.359 197.107 562.93 195.752 569.249 194.047C575.669 192.242 581.838 190.135 587.756 187.728C593.675 185.22 599.192 182.511 604.308 179.602L626.276 215.714C613.436 223.94 598.59 230.41 581.738 235.124C564.886 239.739 546.98 242.046 528.021 242.046C503.846 242.046 482.631 238.936 464.374 232.717C446.117 226.397 430.87 217.771 418.632 206.837C406.394 195.803 397.166 182.862 390.946 168.016C384.828 153.07 381.768 137.02 381.768 119.867ZM666.186 119.867C666.186 103.115 669.345 87.5169 675.665 73.0722C681.985 58.5271 691.113 45.9381 703.05 35.3051C715.087 24.5718 729.733 16.1457 746.986 10.0268C764.34 3.9078 783.951 0.848315 805.818 0.848315C824.978 0.848315 842.532 2.80438 858.482 6.7165C874.531 10.5283 889.428 16.3965 903.17 24.3211L881.202 60.433C877.089 57.7246 872.325 55.3171 866.908 53.2106C861.591 51.1041 855.874 49.3486 849.755 47.9443C843.736 46.4396 837.466 45.286 830.946 44.4836C824.526 43.6811 818.157 43.2798 811.837 43.2798C796.59 43.2798 782.998 45.1857 771.061 48.9976C759.124 52.7091 749.042 57.9754 740.817 64.7965C732.692 71.5174 726.472 79.5924 722.159 89.0216C717.946 98.3505 715.839 108.632 715.839 119.867C715.839 131.503 718.046 142.186 722.46 151.917C726.874 161.647 733.243 170.073 741.569 177.195C749.995 184.217 760.227 189.734 772.264 193.746C784.402 197.658 798.094 199.614 813.342 199.614C820.263 199.614 827.134 199.113 833.956 198.11C840.777 197.107 847.347 195.752 853.667 194.047C860.087 192.242 866.256 190.135 872.174 187.728C878.092 185.22 883.609 182.511 888.725 179.602L910.693 215.714C897.854 223.94 883.008 230.41 866.155 235.124C849.303 239.739 831.398 242.046 812.439 242.046C788.264 242.046 767.048 238.936 748.792 232.717C730.535 226.397 715.288 217.771 703.05 206.837C690.812 195.803 681.583 182.862 675.364 168.016C669.245 153.07 666.186 137.02 666.186 119.867ZM100.51 283.707H300.781V325.537H148.208V372.482H283.327V411.754H148.208V477.207H303.941V518.886H100.51V283.707ZM369.43 448.919C377.956 453.734 386.583 458.098 395.31 462.01C404.137 465.822 413.266 469.082 422.695 471.79C432.124 474.398 442.005 476.404 452.337 477.809C462.769 479.213 473.853 479.915 485.59 479.915C499.734 479.915 511.771 479.013 521.702 477.207C531.633 475.301 539.708 472.743 545.927 469.533C552.246 466.223 556.811 462.311 559.619 457.797C562.528 453.283 563.983 448.368 563.983 443.051C563.983 434.525 560.422 427.804 553.3 422.889C546.178 417.873 535.194 415.365 520.348 415.365C513.827 415.365 506.956 415.817 499.734 416.719C492.511 417.522 485.189 418.425 477.766 419.428C470.443 420.431 463.17 421.384 455.948 422.287C448.826 423.089 442.105 423.49 435.785 423.49C425.253 423.49 415.121 422.136 405.391 419.428C395.761 416.719 387.185 412.657 379.661 407.24C372.238 401.823 366.32 395.052 361.906 386.927C357.493 378.802 355.286 369.323 355.286 358.489C355.286 352.069 356.139 345.699 357.844 339.38C359.649 333.06 362.458 327.041 366.27 321.324C370.182 315.506 375.198 310.139 381.317 305.224C387.436 300.208 394.808 295.895 403.435 292.284C412.162 288.673 422.193 285.864 433.528 283.858C444.964 281.751 457.954 280.698 472.499 280.698C483.032 280.698 493.615 281.3 504.248 282.503C514.881 283.607 525.213 285.212 535.244 287.318C545.375 289.425 555.105 291.983 564.434 294.992C573.763 297.901 582.44 301.161 590.465 304.772L569.55 343.292C562.93 340.383 555.807 337.725 548.184 335.317C540.56 332.809 532.585 330.653 524.26 328.847C515.934 327.041 507.307 325.637 498.379 324.634C489.552 323.531 480.524 322.979 471.296 322.979C458.155 322.979 447.321 323.932 438.795 325.838C430.369 327.744 423.648 330.201 418.632 333.211C413.617 336.12 410.106 339.43 408.1 343.141C406.194 346.753 405.241 350.364 405.241 353.975C405.241 360.997 408.401 366.765 414.72 371.279C421.04 375.692 430.67 377.899 443.61 377.899C448.826 377.899 454.794 377.548 461.515 376.846C468.336 376.043 475.458 375.191 482.881 374.288C490.405 373.385 498.028 372.583 505.752 371.88C513.577 371.078 521.15 370.677 528.473 370.677C542.316 370.677 554.554 372.232 565.187 375.341C575.92 378.451 584.898 382.915 592.12 388.733C599.342 394.45 604.809 401.422 608.521 409.648C612.232 417.773 614.088 426.901 614.088 437.032C614.088 450.574 610.928 462.662 604.609 473.295C598.389 483.827 589.462 492.755 577.826 500.078C566.29 507.3 552.347 512.817 535.996 516.629C519.645 520.341 501.439 522.196 481.377 522.196C468.136 522.196 455.196 521.344 442.556 519.638C429.917 518.033 417.78 515.726 406.144 512.717C394.608 509.607 383.574 505.946 373.041 501.733C362.609 497.42 352.929 492.705 344.001 487.589L369.43 448.919ZM679.126 448.919C687.652 453.734 696.279 458.098 705.006 462.01C713.833 465.822 722.962 469.082 732.391 471.79C741.82 474.398 751.701 476.404 762.033 477.809C772.465 479.213 783.549 479.915 795.286 479.915C809.43 479.915 821.467 479.013 831.398 477.207C841.328 475.301 849.403 472.743 855.623 469.533C861.942 466.223 866.506 462.311 869.315 457.797C872.224 453.283 873.679 448.368 873.679 443.051C873.679 434.525 870.118 427.804 862.996 422.889C855.874 417.873 844.889 415.365 830.043 415.365C823.523 415.365 816.652 415.817 809.43 416.719C802.207 417.522 794.884 418.425 787.461 419.428C780.139 420.431 772.866 421.384 765.644 422.287C758.522 423.089 751.801 423.49 745.481 423.49C734.949 423.49 724.817 422.136 715.087 419.428C705.457 416.719 696.881 412.657 689.357 407.24C681.934 401.823 676.016 395.052 671.602 386.927C667.189 378.802 664.982 369.323 664.982 358.489C664.982 352.069 665.834 345.699 667.54 339.38C669.345 333.06 672.154 327.041 675.966 321.324C679.878 315.506 684.894 310.139 691.013 305.224C697.131 300.208 704.504 295.895 713.131 292.284C721.858 288.673 731.889 285.864 743.224 283.858C754.66 281.751 767.65 280.698 782.195 280.698C792.728 280.698 803.311 281.3 813.944 282.503C824.576 283.607 834.909 285.212 844.94 287.318C855.071 289.425 864.801 291.983 874.13 294.992C883.459 297.901 892.136 301.161 900.161 304.772L879.246 343.292C872.625 340.383 865.503 337.725 857.88 335.317C850.256 332.809 842.281 330.653 833.956 328.847C825.63 327.041 817.003 325.637 808.075 324.634C799.248 323.531 790.22 322.979 780.991 322.979C767.851 322.979 757.017 323.932 748.491 325.838C740.065 327.744 733.344 330.201 728.328 333.211C723.313 336.12 719.802 339.43 717.796 343.141C715.89 346.753 714.937 350.364 714.937 353.975C714.937 360.997 718.096 366.765 724.416 371.279C730.736 375.692 740.365 377.899 753.306 377.899C758.522 377.899 764.49 377.548 771.211 376.846C778.032 376.043 785.154 375.191 792.577 374.288C800.101 373.385 807.724 372.583 815.448 371.88C823.272 371.078 830.846 370.677 838.169 370.677C852.012 370.677 864.249 372.232 874.882 375.341C885.616 378.451 894.594 382.915 901.816 388.733C909.038 394.45 914.505 401.422 918.217 409.648C921.928 417.773 923.784 426.901 923.784 437.032C923.784 450.574 920.624 462.662 914.305 473.295C908.085 483.827 899.158 492.755 887.522 500.078C875.986 507.3 862.043 512.817 845.692 516.629C829.341 520.341 811.135 522.196 791.073 522.196C777.832 522.196 764.892 521.344 752.252 519.638C739.613 518.033 727.476 515.726 715.839 512.717C704.304 509.607 693.27 505.946 682.737 501.733C672.305 497.42 662.625 492.705 653.697 487.589L679.126 448.919Z"
						fill="url(#paint1_radial_0_1)"
						fillOpacity="0.5"
					/>
					<g style={{ mixBlendMode: 'overlay' }}>
						<rect
							x="461.99"
							y="314.701"
							width="709.399"
							height="86.5121"
							fill="#E5F2F8"
						/>
					</g>
					<g style={{ mixBlendMode: 'overlay' }}>
						<rect
							x="0.810547"
							y="159.346"
							width="709.399"
							height="79.5406"
							fill="#E5F2F8"
						/>
					</g>
					<defs>
						<radialGradient
							id="paint0_radial_0_1"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(139.536 419.257) rotate(-28.1094) scale(287.109 693.863)"
						>
							<stop offset="0.0520833" stopColor="#000E1C" />
							<stop
								offset="0.5"
								stopColor="#002137"
								stopOpacity="0"
							/>
						</radialGradient>
						<radialGradient
							id="paint1_radial_0_1"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(902.415 203.763) rotate(-169.347) scale(152.052 370.033)"
						>
							<stop offset="0.447917" />
							<stop offset="1" stopOpacity="0" />
						</radialGradient>
					</defs>
				</svg>

				{text && (
					<Text
						family="secondary"
						size="2xl"
						text={text}
						utilities={['lg:ml-[25%]']}
					/>
				)}
			</Container>

			<Image
				className={[
					'absolute',
					'bottom-0',
					'hidden',
					'left-0',
					'xl:block',
				].join(' ')}
				alt={images[0].alt || ''}
				height={509}
				src={images[0].src}
				width={370}
			/>
		</header>
	);
};

export default Banner;
