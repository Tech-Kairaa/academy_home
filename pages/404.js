/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Image from 'next/image';
const E404 = () => {
	return (
		<Layout>
			<section className='error-section py-130 rpy-100'>
				<div className='container'>
					<div className='error-inner text-center wow fadeInUp delay-0-2s'>
						<img src='/assets/images/404.png' className='w-50' alt='Error' />
						<div className='section-title mt-50 mb-40'>
							<h2>OPPS! Page Not Found</h2>
						</div>
						<Link href='/'>
							<a className='theme-btn style-two'>
								goto home <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default E404;
