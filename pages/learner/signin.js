import React from 'react';
import Layout from '../../src/layout/Layout';
import { useEffect } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignIn = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	useEffect(() => {
		document
			.querySelector('.header-upper')
			.setAttribute(
				'style',
				'box-shadow:0px 0px 30px 0px rgba(87, 95, 245, 0.1)'
			);
	}, []);

	return (
		<Layout header footer newsletter={false} topbar={false}>
			<div className='pt-100'></div>
			<div className=' py-100 mb-100'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='contact-form p-50 z-1 rel'
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
												<p className='text-danger mt-1'>Email not valid</p>
											)}
											{errors.email && errors.email.type === 'required' && (
												<p className='text-danger mt-1'>Email is empty</p>
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
													pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
												})}
												aria-invalid={errors.password ? 'true' : 'false'}
											/>
											{errors.password &&
												errors.password.type === 'pattern' && (
													<p className='text-danger mt-1'>
														Enter valid password
													</p>
												)}
											{errors.password &&
												errors.password.type === 'required' && (
													<p className='text-danger mt-1'>Password is empty</p>
												)}
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
									<p className='text-center mt-40 fw-normal'>
										Can&apos;t remember your password?&nbsp;
										<Link href='/account/forgot'>
											<a className='text-primary'>Forgot</a>
										</Link>
										&nbsp;password.
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='py-100'></div>
		</Layout>
	);
};

export default SignIn;
