/* eslint-disable @next/next/no-img-element */
import Advertise from '../src/components/Advertise';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';

const About = () => {
	const auth = useSelector((state) => state.auth.loginState);
	return (
		<ProtectedRoute>
			<Head>
				<title>About | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true}>
				<PageBanner pageName={'about_us'} pageTitle={'About Kairaa Academy'} />
				{/* Page Banner End */}
				{/* About Section Start */}
				<section className='about-page-section pt-120 rpt-90'>
					<div className='container'>
						<div className='row align-items-center large-gap'>
							<div className='col-lg-6'>
								<div className='about-page-content wow fadeInLeft delay-0-2s'>
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
							<div className='col-lg-6'>
								<div className='about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s'>
									<img
										src='/assets/images/about/about_1.png'
										className='rounded-3'
										alt='About'
									/>
								</div>
							</div>
							{/* <div className='col-lg-2'>
								<div className='counter-wrap style-two wow fadeInRight delay-0-4s'>
									<div className='success-item'>
										<span className='count-text plus'>166</span>
										<span>Enrolled Learner</span>
									</div>
									<div className='success-item'>
										<span className='count-text plus'>62</span>
										<span>Finished Session</span>
									</div>
									<div className='success-item'>
										<span className='count-text percent'>99</span>
										<span>Satisfaction Rate</span>
									</div>
									<div className='success-item'>
										<span className='count-text plus'>4</span>
										<span>New Courses</span>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
				{/* About Section End */}
				{/* About Section Start */}
				<section className='about-section-three my-100'>
					<div className='container'>
						<div className='row large-gap align-items-center'>
							<div className='col-lg-6'>
								<div className='about-three-image rmb-65 wow fadeInUp delay-0-2s'>
									<img
										src='/assets/images/about/about_4.jpg'
										className='rounded-3'
										alt='About'
									/>
									<div className='about-three-image-content bg-light-blue rel text-white br-10 p-30'>
										<p className='lead'>
											<i className='fas fa-quote-left mr-3'></i>
											We offer courses and services that will help you stay
											ahead of the curve. We have a wide range of courses that
											will fit your needs.
											<i className='fas fa-quote-right ml-3'></i>
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='about-content-three wow fadeInUp delay-0-4s'>
									<div className='section-title mb-40'>
										<span className='sub-title-three mb-25'>
											Kairaa Blockchain Academy<span> create&apos;s</span>
										</span>
										<h2>Space to Learn Latest Technologies</h2>
									</div>
									<div className='feature-five-item'>
										<div className='icon'>
											<img
												src='/assets/images/features/icon21.png'
												alt='Icon'
											/>
										</div>
										<div className='content'>
											<h4>Innovative Classroom</h4>
											<p>
												Kairaa Blockchain Academy offers an Innovative Classroom
												to help students learn from anywhere.
											</p>
										</div>
									</div>
									<div className='feature-five-item'>
										<div className='icon'>
											<img
												src='/assets/images/features/icon22.png'
												alt='Icon'
											/>
										</div>
										<div className='content'>
											<h4>Top Instructors</h4>
											<p>
												Top instructors with industry experience, providing
												comprehensive and individualized learning experiences.
											</p>
										</div>
									</div>
									<div className='feature-five-item'>
										<div className='icon'>
											<img
												src='/assets/images/features/icon23.png'
												alt='Icon'
											/>
										</div>
										<div className='content'>
											<h4>ISO Cretified Courses</h4>
											<p>
												The Kairaa Blockchain Academy offers a variety of
												ISO-certified courses, perfect for students to improve
												their skills.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* About Section End */}
				{/* Rules & Conditions Area Start */}
				<section className='rules-condition-area pt-50 pb-100 rpt-90'>
					<div className='container'>
						<div className='row align-items-center large-gap'>
							<div className='col-lg-5'>
								<div className='rules-condition-content rmb-50 wow fadeInLeft delay-0-2s'>
									<div className='section-title'>
										<span className='sub-title-two'>Who is Kairaa?</span>
										<h2>Kairaa is a tech company</h2>
									</div>
									<p>
										Kairaa is the best company for serving tech solutions.
										We&apos;ll develop enterprise solutions using web 3.0
										technologies. Our solutions will aid in our clients
										management and business optimization. To assist our clients
										in achieving their business objectives, we can offer the
										best technological solutions.
									</p>
									<p>
										Kairaa is ready to find a solution for your innovative
										idea&apos;s. Our team of engineers is experienced in a wide
										range of technologies and can help you turn your vision into
										a reality. Our solutions are custom-tailored to your
										industry, so we make it easy to implement the right solution
										for your business.
									</p>

									<Link href='https://www.kairaatechserve.com'>
										<a className='theme-btn mt-3' target='_blank'>
											Learn About Kairaa
										</a>
									</Link>
								</div>
							</div>
							<div className='col-lg-7'>
								<div className='rules-condition-image-part wow fadeInRight delay-0-2s'>
									<div className='row align-items-center'>
										<div className='col-5'>
											<img src='assets/images/about/about_6.png' alt='Rules' />
										</div>
										<div className='col-7'>
											<img src='assets/images/about/about_5.png' alt='Rules' />
										</div>
									</div>
								</div>
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
