/* eslint-disable @next/next/no-img-element */
import Advertise from '../src/components/Advertise';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';

const Privacy = () => {
	const auth = useSelector((state) => state.auth.loginState);
	return (
		<ProtectedRoute>
			<Head>
				<title>Privacy Policy | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true}>
				<PageBanner pageName={'privacy'} pageTitle={'Privacy Policy Kairaa Academy'} />
<div className='section-title mb-30'>
										<span className='sub-title-two'>
											About Kairaa Blockchain Academy
										</span>
										<h2>We Are Excellent Choice To Learning New Skills</h2>
									</div>
									<p>
										Kairaa Blockchain Academy is a leading online learning
										center that offers a wide range of courses and programs to
										students around the world. With its focus on flexibility and
										support, Kairaa Academy has become a popular choice for
										those looking to advance their education or learn new
										skills.
									</p>
									<b>
										Students have access to a wide range of learning resources
										that are designed to help them fully understand and retain
										the material.
									</b>
									<div className='about-btns pt-25'>
										<Link href='/about'>
											<a className='theme-btn my-15'>
												Signup Now <i className='fas fa-arrow-right' />
											</a>
										</Link>
										<Link href='/faqs'>
											<a className='read-more'>
												Contact us <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
  </section>
				{/* Rules & Conditions Area End */}

				{/* Advertise Area Start */}
				<section className='advertise-area pt-75 rpt-100 pb-50 rpb-60'>
					<div className='container'>
						<Advertise loggedIn={auth} />
					</div>
				</section>
				{/* Advertise Area End */}
			</Layout>
		</ProtectedRoute>
	);
};
export default About;
    
