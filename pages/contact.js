/* eslint-disable @next/next/no-img-element */
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import server from '@/providers/server';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ContactUs = () => {
	const initialValues = {
		name: '',
		email: '',
		mobile: '',
		message: '',
	};

	const [values, setValues] = useState(initialValues);

	const handleInputs = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await server.post('/public/contact', values);
			toast.success('Will contact you soon!');
		} catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
		}

		setValues({ ...values, message: '' });
	};

	return (
		<ProtectedRoute>
			<Head>
				<title>Contact | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true}>
				<PageBanner pageName={'contact'} pageTitle={'Contact Us'} />
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
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt-fill' />
												<h4>Head Office</h4>
												<span>
													No 10, Eswari Nagar, Gowrivakkam, Chennai - 73.
												</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-envelope-fill' />
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
											<div className='contact-info-box h-100'>
												<i className='bi bi-telephone-fill' />
												<h4>Helpline</h4>
												<span>+91 7092 771133</span>
											</div>
										</div>
									</div>
								</div>
								<div className='contact-info-wrap rmb-75 wow fadeInUp delay-0-2s'>
									<div className='row mt-50'>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt' />
												<h4>Trichy Branch</h4>
												<span>
													No 76-O, Sri jothi complex, 3rd floor, N.E.E Complex,
													Thillai nagar.
												</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt' />
												<h4>Coimbatore Branch</h4>
												<span>No 131, 2nd floor, DB Road, RS Puram.</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt' />
												<h4>Tirunelveli Branch</h4>
												<span>
													No 12, Shanthi complex, Near new bus stand, Vasanth
													nagar.
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className='contact-info-wrap rmb-75 wow fadeInUp delay-0-2s'>
									<div className='row mt-50'>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt' />
												<h4>Ranipet Branch</h4>
												<span>
													No 117, Annadhanachatram road,Amaravathi nagar,
													Kondapalayam, Sholinghur.
												</span>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='contact-info-box h-100'>
												<i className='bi bi-geo-alt' />
												<h4>Salem Branch</h4>
												<span>
													Sairam complex, Veeranganur main road, Mummadi,
													Thalaivasal.
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
						<form onSubmit={handleSubmit} className='contact-form p-50 z-1 rel'>
							<div className='section-title text-center mb-50'>
								<span className='sub-title-two'>Send Us Message</span>
								<h2>Have Any Questions! Say Hello</h2>
							</div>
							<div className='row mt-25'>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											className='form-control'
											placeholder='Full Name'
											value={values.name}
											autoComplete='off'
											onChange={handleInputs}
											required
										/>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='email'
											name='email'
											className='form-control'
											placeholder='Email Address'
											value={values.email}
											onChange={handleInputs}
											autoComplete='off'
											required
										/>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='form-group'>
										<input
											type='text'
											name='mobile'
											className='form-control'
											placeholder='Mobile Number'
											value={values.mobile}
											onChange={handleInputs}
											autoComplete='off'
										/>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='form-group'>
										<textarea
											name='message'
											className='form-control'
											rows={4}
											placeholder='Write Message'
											value={values.message}
											onChange={handleInputs}
											autoComplete='off'
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
