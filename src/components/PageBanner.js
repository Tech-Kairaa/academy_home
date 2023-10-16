/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const PageBanner = ({ pageTitle, pageName }) => {
	return (
		<section
			className='page-banner-area rel z-1 text-white text-center mt-110'
			style={{ backgroundImage: `url(/assets/images/banners/${pageName}.png)` }}
		>
			<div className='container'>
				<div className='banner-inner rpt-10'>
					<h2 className='page-title wow fadeInUp delay-0-2s'>
						{pageTitle ? pageTitle : pageName}
					</h2>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb wow fadeInUp delay-0-4s'>
							<li className='breadcrumb-item'>
								<Link href='/'>
									<a>home</a>
								</Link>
							</li>
							<li className='breadcrumb-item active'>{pageName}</li>
						</ol>
					</nav>
				</div>
			</div>
			<img
				className='circle-one'
				src='/assets/images/shapes/circle-one.png'
				alt='Circle'
			/>
			<img
				className='circle-two'
				src='/assets/images/shapes/circle-two.png'
				alt='Circle'
			/>
		</section>
	);
};
export default PageBanner;
