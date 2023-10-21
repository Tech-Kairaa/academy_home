import Layout from '../../src/layout/Layout';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { toast } from 'react-toastify';
import server from '@/providers/server';

const LogIn = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (error) return;
		try {
			const response = await server.post('/auth/login', {
				email,
				password,
			});

			const verified = response?.data?.verified;

			if (verified === false || verified === 'false') {
				toast.warning('Account not activated');
				router.push('/learner/activate');
			} else {
				toast.success('Successfully logged in');
				router.push('/');
			}
		} catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
		}
	};

	setTimeout(() => setError(false), 8000);

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
								<form onSubmit={handleSubmit} className='p-50 z-1 rel'>
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
													required
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>
										<div className='col-md-8'>
											<div className='form-group'>
												<input
													type='password'
													style={{ padding: '11px 35px' }}
													placeholder='Password'
													required
													title='Must include uppercase, numbers & symbols'
													pattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$'
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
										</div>
										<div className='col-md-8 row justify-content-between'>
											<button type='submit' className='theme-btn w-50'>
												Login Account
											</button>
											<Link href='/learner/signup'>
												<a className='theme-btn style-three w-25'>Signup</a>
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

								{/* <div className='text-center'>
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

									<button className='theme-btn style-one mt-10 mb-50'>
										Click to activate
									</button>
								</div> */}
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
