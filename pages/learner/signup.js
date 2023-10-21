import { useState } from 'react';
import Layout from '../../src/layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import server from '@/providers/server';

const Signup = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (error) return;
		try {
			const response = await server.post(`/auth/register`, {
				name,
				email,
				password,
			});
			toast.success(response?.data?.message);
			router.push('/learner/login');
		} catch (error) {
			console.log(error);
			setError(error?.response?.data.message);
		}
	};

	return (
		<>
			<Head>
				<title>Signup | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={false} topbar={false}>
				<div className='pt-100'></div>
				<div className=' py-100 mb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-10 px-5 contact-form'>
								<form onSubmit={handleSubmit} className='p-50 z-1 rel'>
									<div className='section-title text-center mb-50 mt-25'>
										<h2>
											Kairaa <span>Academy</span>
										</h2>
									</div>
									<div className='row py-25 justify-content-center'>
										<div className='col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													style={{ padding: '11px 35px' }}
													placeholder='Full Name'
													required
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
										</div>
										<div className='col-md-6'>
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
										<div className='col-md-6'>
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
										<div className='col-md-4'>
											<div className='form-group'>
												<button type='submit' className='theme-btn'>
													Signup
												</button>
											</div>
										</div>

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
											&nbsp;password or want to&nbsp;
											<Link href='/account/signin'>
												<a className='text-primary'>signIn</a>
											</Link>
										</p>
									</div>
								</form>
								{/* <div className='d-flex justify-content-center'>
									<Image
										src='/assets/images/shapes/loader.gif'
										width={500}
										height={370}
										className='w-auto h-auto'
										alt='submitting form'
									/>
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

export default Signup;
