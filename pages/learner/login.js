import Layout from '../../src/layout/Layout';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import axios from 'axios';
import { saveState, loadState, removeState } from 'lib/providers/storage';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LogIn = () => {
	const [loginState, updateState] = useState(null);
	const [failed, setFailed] = useState(false);
	const router = useRouter();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = async (data) => {
		updateState('processing');
		const response = (
			await axios.get('/api/accounts/learner', {
				params: data,
			})
		).data;

		if (response.success) {
			const token = response.data;
			saveState({ name: 'AUTH', value: token });
			router.reload('/');
			// Cookies.set('auth', token, { expires: 1 });
		} else {
			if (response.type === 'NOT_VERIFIED') {
				updateState('activate');
				saveState({ name: 'VERIFY', value: data.email });
			} else {
				updateState('failed');
				setFailed(response.message);
			}
		}
	};

	const ActivateAccount = async () => {
		updateState('processing');
		const data = {
			userId: loadState('VERIFY'),
			userType: 'learner',
		};
		const response = (await axios.post('/api/accounts/sendmail', data)).data;
		if (response.success) {
			const result = response.data;
			updateState('mailed');
			removeState('VERIFY');
		} else {
			const error = response.message;
			updateState('!mailed');
			setFailed(error);
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
				<title>Login | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={false} topbar={false}>
				<div className='pt-100'></div>
				<div className=' py-100 mb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8 contact-form'>
								{(loginState === null || loginState === 'failed') && (
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
											<p className='text-danger text-center mt-20'>{failed}</p>
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

								{loginState === 'processing' && (
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

								{(loginState === 'activate' || loginState === '!mailed') && (
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
											email. After activation you can access your account
											properly.
										</p>
										{loginState === '!mailed' && (
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

								{loginState === 'mailed' && (
									<div className='text-center'>
										<h3 className='mt-40'>Check your email</h3>
										<p className='lead mt-10 px-5'>
											Your activation link has been sent successfully. Please
											check your email for further instructions.&nbsp;
											<span className='fw-bold'>
												Once you have activated your account, please refresh and
												login again.
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

export default LogIn;
