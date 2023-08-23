/* eslint-disable @next/next/no-img-element */
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useSelector } from 'react-redux';

const ContactUs = () => {
	const user = useSelector((state) => state.auth.userProfile);
	return (
		<ProtectedRoute>
			<Head>
				<title>Contact | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true}>
				<PageBanner pageName={'banner3'} pageTitle={'Contact Us'} />
				<section className='contact-info-area rel z-1 pb-130 pt-70 rpb-100'>
					<div className='container'>
						<div className='row align-items-center justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-title text-center mb-20'>
									<span className='sub-title-two'>Need Any Helps ?</span>
									<h2>Contact For Information</h2>
								</div>
								<p className='text-center'>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium totam rem aperiam eaque ipsa
									quae abillo inventore veritatis et quasi architecto
								</p>
							</div>
							<div className='col-lg-12'>
								<div className='contact-info-wrap rmb-75 wow fadeInUp delay-0-2s'>
									<div className='row mt-50'>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box'>
												<i className='fas fa-map-marker-alt' />
												<h4>Address</h4>
												<span>
													No 10, Eswari Nagar, Gowrivakkam, Chennai - 73.
												</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box'>
												<i className='far fa-envelope' />
												<h4>Email Us</h4>
												<span>
													<a href='mailto:support@kairaaacademy.com'>
														support@kairaaacademy.com
													</a>
													<br />
													<a href='mailto:support@kairaaacademy.com'>
														team@kairaaacademy.com
													</a>
												</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box'>
												<i className='fas fa-phone-volume' />
												<h4>Helpline</h4>
												<span>
													<a href='callto:+896(321)4600'>+91 7092 771133</a>
													<br />
													<br />
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<span className='bg-text'>24/7</span>
				</section>
				{/* Contact Info End */}
				{/* Contact Form Start */}
				<section className='contact-form-area wow fadeInUp delay-0-2s'>
					<div className='container'>
						<form
							onSubmit={(e) => e.preventDefault()}
							id='contact-form'
							className='contact-form p-50 z-1 rel'
							name='contact-form'
							action='#'
							method='post'
						>
							<div className='section-title text-center mb-50'>
								<span className='sub-title-two'>Send Us Message</span>
								<h2>Have Any Questions! Say Hello</h2>
							</div>
							<div className='row mt-25'>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='text'
											id='full-name'
											name='full-name'
											className='form-control'
											defaultValue={user?.name || ''}
											placeholder='Full Name'
											required
										/>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='email'
											id='email-address'
											name='email'
											className='form-control'
											defaultValue={user?.email || ''}
											placeholder='Email Address'
											required
										/>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='text'
											id='phone'
											name='phone'
											className='form-control'
											defaultValue=''
											placeholder='Phone Number'
											required=''
										/>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group'>
										<textarea
											name='message'
											id='message'
											className='form-control'
											rows={4}
											placeholder='Write Message'
											required=''
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group text-center mb-0'>
										<button type='submit' className='theme-btn'>
											send Message <i className='fas fa-arrow-right' />
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</section>
				{/* Contact Form End */}
				{/* Location Map Area Start */}
				<div className='contact-page-map'>
					<div className='our-location'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.3849594929957!2d80.16391053932429!3d12.922504100612816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424bead677b3c9a5%3A0x9f8bd89bdca64146!2sKairaa%20Techserve!5e0!3m2!1sen!2sin!4v1682059368435!5m2!1sen!2sin'
							height={975}
							style={{ border: 0, width: '100%' }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</Layout>
		</ProtectedRoute>
	);
};
export default ContactUs;
