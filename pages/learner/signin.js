import Layout from '../../src/layout/Layout';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import axios from 'axios';

const SignIn = () => {
	const [loginFailed, setLoginFailed] = useState(false);
	const [loginSucceed, setLoginSucceed] = useState(false);
	const [loginProcessing, setLoginProcessing] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = async (data) => {
		setLoginProcessing(true);
		const response = (
			await axios.get('/api/accounts/learner', {
				params: data,
			})
		).data;

		if (response.success) {
			const result = response.success && response.data;
			setLoginProcessing(false);
			setLoginSucceed(result);
		} else {
			const error = !response.success && response;
			setLoginProcessing(false);
			setLoginFailed(error);
			console.log(error);
		}
	};

	useEffect(() => {
		document
			.querySelector('.header-upper')
			.setAttribute(
				'style',
				'box-shadow:0px 0px 30px 0px rgba(87, 95, 245, 0.1)'
			);
	}, []);

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
		<Layout header footer newsletter={false} topbar={false}>
			<div className='pt-100'></div>
			<div className=' py-100 mb-100'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 contact-form'>
							{!loginSucceed && !loginProcessing && !loginFailed && (
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='p-50 z-1 rel'
								>
									<div className='section-title text-center mb-50 mt-25'>
										<h2>
											Kairaa <span>Academy</span>
										</h2>
									</div>
									<div className='row py-25 justify-content-center'>
										<div className='col-md-8'>
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
										<div className='col-md-8'>
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
										<div className='col-md-8 row justify-content-between'>
											<button type='submit' className='theme-btn w-50'>
												Login Account
											</button>
											<Link href='/account/signup'>
												<a className='theme-btn style-three w-25'>Signup</a>
											</Link>
										</div>
										<p className='text-danger text-center mt-30'>
											{loginFailed.type !== 'NOT_VERIFIED' &&
												loginFailed.message}
										</p>
										<p className='text-center fw-normal'>
											Can&apos;t remember your password?&nbsp;
											<Link href='/account/forgot'>
												<a className='text-primary'>Forgot</a>
											</Link>
											&nbsp;password.
										</p>
									</div>
								</form>
							)}

							{loginProcessing && (
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

							{loginFailed.type === 'NOT_VERIFIED' && (
								<div className='text-center'>
									<div className='section-title mt-30'>
										<h2 className='pt-10'>
											Account not <span>Verified</span>
										</h2>
									</div>
									<p className='lead mt-20'>
										Click the following button to get verification link via your registered email. After verification you can access your account properly.
									</p>
									<Link href='#'>
										<a className='theme-btn style-one mt-10 mb-50'>Click to Verify</a>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='py-100'></div>
		</Layout>
	);
};

export default SignIn;
