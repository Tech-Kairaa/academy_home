/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Layout from '../../src/layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import WorkSteps from '@/components/slider/WorkSteps';
import PageBanner from '@/components/PageBanner';
import { useRouter } from 'next/router';
import server from '@/providers/server';
import { toast } from 'react-toastify';

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
				role: 'instructor',
			});

			toast.success(response?.data?.message);
			const isTrue = confirm('Do you want to open dashboard?');
			if (isTrue) {
				router.push('https://instructor.kairaaacademy.com/');
			}
			router.push('/');
		} catch (error) {
			console.log(error);
			if (error?.response?.status === 400) {
				setError(
					'Already a learner. If you want to perform a instructor, Change email id and retry!'
				);
				setTimeout(() => router.reload(), 8000);
			} else {
				setError(error?.response?.data.message);
			}
		}
	};

	setTimeout(() => setError(false), 8500);

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
								<form onSubmit={handleSubmit} className='p-50 z-1 rel'>
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
													required
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
										</div>
										<div className='col-md-6 col-lg-5'>
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
										<div className='col-md-6 col-lg-5'>
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
													Register Account
												</button>
											</div>
										</div>

										{error && (
											<p className='text-danger text-center lead fs-6'>
												{error}
											</p>
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
