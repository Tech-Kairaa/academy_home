import Layout from '../../src/layout/Layout';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { toast } from 'react-toastify';
import server from '@/providers/server';

const LogIn = () => {
	const router = useRouter();
	const [otp, setOtp] = useState('');
	const [error, setError] = useState(false);
	const [processing, setProcessing] = useState(false);

	const sendOTP = async () => {
		try {
			await server.get(`/users/verify-user`);
			setProcessing(true);
		} catch (error) {
			console.log(error);
			setError('Failed to generate. Retry!');
		}
	};

	const activateAccount = async (e) => {
		e.preventDefault();
		try {
			await server.post(`/users/activate-user`, { otp });
			toast.success('Account activated successfully');
			router.push('/');
		} catch (error) {
			console.log(error);
			setError('Failed to activate. Refresh!');
		}
	};

	return (
		<>
			<Head>
				<title>Activate | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={false} topbar={false}>
				<div className='pt-100'></div>
				<div className=' py-100 mb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8 contact-form'>
								{processing && (
									<form onSubmit={activateAccount} className='p-50 z-1 rel'>
										<div className='row py-25 justify-content-center'>
											<div className='col-md-8'>
												<div className='form-group'>
													<input
														type='text'
														className='text-center otp-input'
														placeholder='OTP'
														required
														maxLength={6}
														onChange={(e) => setOtp(e.target.value)}
													/>
												</div>
											</div>

											<div className='col-md-8 row justify-content-between'>
												<button type='submit' className='theme-btn w-50'>
													Activate
												</button>
												<Link href='/learner/signup'>
													<a className='theme-btn style-three w-25'>Resend</a>
												</Link>
											</div>

											<div className='mt-50'>
												{error && (
													<p className='text-danger text-center text-capitalize'>
														{error}
													</p>
												)}

												<p className='text-center fw-normal'>
													Can&apos;t remember your password?&nbsp;
													<Link href='/account/forgot'>
														<a className='text-primary'>Forgot</a>
													</Link>
													&nbsp;password.
												</p>
											</div>
										</div>
									</form>
								)}

								{!processing && (
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
											Please, Avoid refreshing the page after clicking
											&ldquo;Send OTP.&rdquo;
										</p>
										{error && <p className='text-danger mt-20 px-5'>{error}</p>}

										<button
											className='theme-btn style-one mt-10 mb-50'
											onClick={sendOTP}
										>
											Send OTP
										</button>
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
