/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Layout from '../../src/layout/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import WorkSteps from '@/components/slider/WorkSteps';
import { loadState, removeState, saveState } from 'lib/providers/storage';
import PageBanner from '@/components/PageBanner';

const Signup = () => {
	const [registerState, updateRegister] = useState(null);
	const [failed, setFailed] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		updateRegister('processing');
		const response = (await axios.post('/api/accounts/instructor', data)).data;
		if (response.success) {
			const result = response.data;
			updateRegister('registered');
			saveState({ name: 'VERIFY', value: data.email });
		} else {
			const error = response.message;
			const type = response.type;
			if (type === 'NOT_VERIFIED') {
				updateRegister('registered');
				saveState({ name: 'VERIFY', value: data.email });
			} else {
				updateRegister('failed');
				setFailed(error);
			}
		}
	};

	const ActivateAccount = async () => {
		updateRegister('processing');
		const data = {
			userId: loadState('VERIFY'),
			userType: 'instructor',
		};
		const response = (await axios.post('/api/accounts/sendmail', data)).data;
		if (response.success) {
			const result = response.data;
			updateRegister('mailed');
			removeState('VERIFY');
			console.log(response);
		} else {
			const error = response.message;
			updateRegister('!mailed');
			setFailed(error);
			console.log(response);
		}
	};

	const TestPassword = (password) => {
		return (
			<p className='text-danger fw-normal mt-1'>
				{password.type === 'required' && 'Password is empty'}
				{password.type === 'minLength' && 'Enter at least 8 characters'}
				{password.type === 'pattern' && 'Must include Symbol & number'}
			</p>
		);
	};

	return (
		<>
			<Head>
				<title>Become An Instructor | Kairaa Blockchain Academy</title>
			</Head>
			<Layout header footer newsletter={false} topbar={false}>
				<PageBanner pageName={'banner'} pageTitle={'Become An Instructor'} />
				{/* Benefit Work Process Start */}
				<section className='benefit-work-process rel z-2 pt-120 rpt-90 pb-70'>
					<div className='container'>
						<div className='section-title text-center mb-50'>
							<span className='sub-title-two'>
								Passionate Blockchain Instructor
							</span>
							<h2> for Innovative Education</h2>
						</div>
						<div className='row align-items-center justify-content-center'>
							<div className='col-lg-5'>
								<div className='benefit-image rmb-75 wow fadeInRight delay-0-2s'>
									<img src='/assets/images/about/benefit.jpg' alt='benefit' />
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='benefit-work-steps wow fadeInLeft delay-0-2s'>
									<div className='work-step-item'>
										<span className='number'>01</span>
										<div className='content'>
											<p className='lead'>
												Blockchain Expert with In-Depth Knowledge of Technology
												and Applications
											</p>
										</div>
									</div>
									<div className='work-step-item'>
										<span className='number'>02</span>
										<div className='content'>
											<p className='lead'>
												Experience developing and delivering online courses or
												workshops
											</p>
										</div>
									</div>
									<div className='work-step-item'>
										<span className='number'>03</span>
										<div className='content'>
											<p className='lead'>
												Strong communication skills and the ability to explain
												complex concepts in simple terms
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Benefit Work Process End */}
				{/* Work Process Section Start */}
				<section className='work-process-section bg-white rel z-1 pt-60 rpt-100 pb-100'>
					<div className='container'>
						<WorkSteps />
					</div>
				</section>
				{/* Work Process Section End */}
				<div className='pb-100 mb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-12 contact-form'>
								{(registerState === null || registerState === 'failed') && (
									<form
										onSubmit={handleSubmit(onSubmit)}
										className='p-50 z-1 rel'
									>
										<div className='section-title text-center my-30'>
											<span className='sub-title-two'>
												Register your account to
											</span>
											<h2>
												Become an <span> Instructor</span>
											</h2>
										</div>
										<div className='row p-30 justify-content-center'>
											<div className='col-md-6 col-lg-5'>
												<div className='form-group'>
													<input
														type='text'
														style={{ padding: '11px 35px' }}
														placeholder='Full Name'
														{...register('fullName', {
															required: true,
															minLength: 3,
															pattern: /^[A-Za-z]+$/i,
														})}
														aria-invalid={errors.fullName ? 'true' : 'false'}
													/>
													{errors.fullName &&
														errors.fullName.type === 'pattern' && (
															<p className='text-danger mt-1'>Name not valid</p>
														)}
													{errors.fullName &&
														errors.fullName.type === 'minLength' && (
															<p className='text-danger mt-1 fw-normal'>
																Enter at least 3 characters
															</p>
														)}
													{errors.fullName &&
														errors.fullName.type === 'required' && (
															<p className='text-danger mt-1 fw-normal'>
																Name is empty
															</p>
														)}
												</div>
											</div>
											<div className='col-md-6 col-lg-5'>
												<div className='form-group'>
													<input
														type='email'
														style={{ padding: '11px 35px' }}
														placeholder='Email Id'
														{...register('email', {
															required: true,
															pattern: /^\S+@\S+\.\S+$/,
														})}
														aria-invalid={errors.email ? 'true' : 'false'}
													/>

													{errors.email && errors.email.type === 'pattern' && (
														<p className='text-danger mt-1 fw-normal'>
															Email not valid
														</p>
													)}
													{errors.email && errors.email.type === 'required' && (
														<p className='text-danger mt-1 fw-normal'>
															Email is empty
														</p>
													)}
												</div>
											</div>
											<div className='col-md-6 col-lg-5'>
												<div className='form-group'>
													<input
														type='password'
														style={{ padding: '11px 35px' }}
														placeholder='Password'
														{...register('password', {
															required: true,
															minLength: 8,
															pattern:
																/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
														})}
														aria-invalid={errors.password ? 'true' : 'false'}
													/>
													{errors.password && TestPassword(errors.password)}
												</div>
											</div>
											<div className='col-md-4'>
												<div className='form-group'>
													<button type='submit' className='theme-btn'>
														Signup
													</button>
												</div>
											</div>
											{/* <div className='col-md-8'>
										<button type='button' className='style-google w-100'>
											<img
												src='/assets/images/shapes/search.png'
												width='20px'
												className='me-2'
												alt=''
											/>
											Continue with Google
										</button>
									</div> */}
											{registerState === 'failed' && (
												<p className='text-danger text-center'>{failed}</p>
											)}

											<p className='text-center fw-normal mt-10'>
												Can&apos;t remember your password?&nbsp;
												<Link href='/account/forgot'>
													<a className='text-primary'>Forgot</a>
												</Link>
												&nbsp;password or want to&nbsp;
												<Link href='/account/signin'>
													<a className='text-primary'>signIn</a>
												</Link>
											</p>
										</div>
									</form>
								)}

								{registerState === 'processing' && (
									<div className='d-flex justify-content-center'>
										<Image
											src='/assets/images/shapes/loader.gif'
											width={500}
											height={370}
											className='w-auto h-auto'
											alt='submitting form'
										/>
									</div>
								)}

								{(registerState === 'registered' ||
									registerState === '!mailed') && (
									<div className='text-center'>
										<div className='section-title mt-40'>
											<span className='sub-title-three'>
												You need to activate your account
											</span>
											<h2>
												Proceed to <span>Activation</span>
											</h2>
										</div>
										<p className='lead mt-20 px-5'>
											Click the following button to get activation link via your
											email. <br /> After activation you can access your account
											properly.
										</p>
										{registerState === '!mailed' && (
											<p className='text-danger'>{failed}</p>
										)}
										<button
											className='theme-btn style-one mt-10 mb-50'
											onClick={ActivateAccount}
										>
											Click to activate
										</button>
									</div>
								)}

								{registerState === 'mailed' && (
									<div className='text-center'>
										<h3 className='mt-40'>Check your email</h3>
										<p className='lead mt-10 px-5'>
											Your activation link has been sent successfully. Please
											check your email for further instructions.&nbsp;
											<span className='fw-bold'>
												Once you have activated your account, please go to login
												page.
											</span>
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='py-100'></div>
			</Layout>
		</>
	);
};

export default Signup;
