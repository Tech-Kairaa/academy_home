import React from 'react';
import Layout from '../../src/layout/Layout';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Forgot = () => {
	const [ready, setReady] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
	} = useForm();

	const password = watch('password');
	const confirmPassword = watch('confirmPassword');

	const onSubmit = (data) => console.log(data);
	const onLink = (data) => console.log(data);

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
						{!ready && (
							<div className='col-lg-8'>
								<form
									onSubmit={handleSubmit(onLink)}
									className='contact-form p-50 z-1 rel'
								>
									<div className='section-title text-center mb-50 mt-25'>
										<h2>
											Kairaa <span>Academy</span>
										</h2>
									</div>

									<div className='row py-25 justify-content-center'>
										<div className='col-md-6'>
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
										<div className='col-md-4 row justify-content-between'>
											<div className='form-group mb-0'>
												<button type='submit' className='theme-btn'>
													Send Link
												</button>
											</div>
										</div>
										<div className='col-md-9'>
											<ul>
												<li>
													<em className='far fa-check-circle mx-2'></em>
													Enter your email address above and press the send link
													button.
												</li>
												<li>
													<em className='far fa-check-circle mx-2'></em>You will
													receive a password reset link via email.
												</li>
												<li>
													<em className='far fa-check-circle mx-2'></em>Follow
													the link to reset your password.
												</li>
											</ul>
										</div>
									</div>
								</form>
							</div>
						)}

						{ready && (
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
										<div className='col-md-6'>
											<div className='form-group'>
												<input
													type='password'
													name='password'
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
														<p className='text-danger mt-1'>
															Password is empty
														</p>
													)}
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group'>
												<input
													type='password'
													style={{ padding: '11px 35px' }}
													placeholder='Confirm Password'
													{...register('confirmPassword', {
														required: true,
														pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
													})}
													aria-invalid={
														errors.confirmPassword ? 'true' : 'false'
													}
												/>
												{errors.confirmPassword &&
													errors.confirmPassword.type === 'pattern' && (
														<p className='text-danger mt-1'>
															Enter valid password
														</p>
													)}
												{errors.confirmPassword &&
													errors.confirmPassword.type === 'required' && (
														<p className='text-danger mt-1'>
															Password is empty
														</p>
													)}
											</div>
										</div>
										{password !== confirmPassword && (
											<p>Passwords do not match</p>
										)}
										<div className='col-md-12 text-center'>
											<div className='form-group mb-0'>
												<button type='submit' className='theme-btn'>
													Reset password
												</button>
											</div>
										</div>										
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='py-100'></div>
		</Layout>
	);
};

export default Forgot;
