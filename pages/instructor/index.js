/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Layout from '@/layouts/Layout';
import { useForm } from 'react-hook-form';

const BecomeAnInstructor = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<Layout header footer newsletter={true} topbar={false}>
			<PageBanner pageName={'banner'} pageTitle={'Become An Instructor'} />
			<section className='join-our-team-area pt-120 rpt-90'>
				<div className='container'>
					<div className='row align-items-center large-gap'>
						<div className='col-lg-6'>
							<div className='join-our-team-content rmb-75 wow fadeInLeft delay-0-2s'>
								<div className='section-title mb-20'>
									<span className='sub-title-two'>Join Our Team</span>
									<h2>Shape the Future of Blockchain Education</h2>
								</div>
								<p>
									Are you passionate about blockchain technology and its
									potential to transform the world? Do you have experience
									teaching others about the intricacies of decentralized
									networks and the impact they can have on industries like
									finance, healthcare, and logistics? If so, we want you to join
									our team at Kairaa Blockchain Academy!
								</p>
								<p>
									As a blockchain instructor with Kairaa Blockchain Academy, you
									will have the opportunity to: Develop and deliver innovative
									online courses that teach students the fundamentals of
									blockchain technology and its applications Work with a dynamic
									team of experienced blockchain professionals who are
									passionate about the potential of this groundbreaking
									technology.
								</p>
								<Link href='#apply'>
									<a className='theme-btn mt-10'>
										become an instructor <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='join-our-team-image-part pt-5 wow fadeInRight delay-0-2s'>
								<div className='image-one'>
									<img
										src='/assets/images/instructor/join-team1.jpg'
										alt='Join Our Team'
									/>
								</div>
								<div className='image-two'>
									<img
										src='/assets/images/instructor/join-team2.jpg'
										alt='Join Our Team'
									/>
									<img
										src='/assets/images/instructor/join-team3.jpg'
										alt='Join Our Team'
									/>
								</div>
								<span className='bg-text'>Instructor</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Join Our Team End */}
			{/* Benefit Work Process Start */}
			<section className='benefit-work-process rel z-2 pt-120 rpt-90 pb-120'>
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
			<section className=' pb-195' id='apply'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='contact-form p-50 z-1 rel'
							>
								<div className='section-title text-center mb-50 mt-25'>
									<h2>
										Join Our <span>Team</span>
									</h2>
								</div>
								<div className='row py-25 justify-content-center'>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
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
													<p className='text-danger mt-1'>
														Enter at least 3 characters
													</p>
												)}
											{errors.fullName &&
												errors.fullName.type === 'required' && (
													<p className='text-danger mt-1'>Name is empty</p>
												)}
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='email'
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
									<div className='col-md-5'>
										<div className='form-group'>
											<input
												type='tel'
												placeholder='Mobile number'
												{...register('mobileNumber', {
													required: true,
													minLength: 10,
													maxLength: 10,
													pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
												})}
												aria-invalid={errors.mobileNumber ? 'true' : 'false'}
											/>
											{errors.mobileNumber &&
												errors.mobileNumber.type === 'pattern' && (
													<p className='text-danger mt-1'>Number not valid</p>
												)}
											{errors.mobileNumber &&
												errors.mobileNumber.type === 'minLength' &&
												errors.mobileNumber.type ===
													'maxLength'(
														<p className='text-danger mt-1'>
															Number is invalid length
														</p>
													)}
											{errors.mobileNumber &&
												errors.mobileNumber.type === 'required' && (
													<p className='text-danger mt-1'>Name is empty</p>
												)}
										</div>
									</div>
									<div className='col-md-7'>
										<div className='form-group'>
											<input
												type='text'
												placeholder='Experience'
												{...register('experience', {
													required: true,
												})}
												aria-invalid={errors.experience ? 'true' : 'false'}
											/>
											{errors.experience &&
												errors.experience.type === 'required' && (
													<p className='text-danger mt-1'>
														Experience is empty
													</p>
												)}
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<div className='dropdown'>
												<select
													name='position'
													{...register('position', {
														required: 'Position is empty',
													})}
													aria-invalid={errors.position ? 'true' : 'false'}
												>
													<option value='' disabled>
														Position
													</option>
													<option value='Ethereum'>Ethereum</option>
													<option value='DeFi'>DeFi</option>
												</select>
												{errors.position && (
													<p className='text-danger mt-1'>
														{errors.position.message}
													</p>
												)}
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='position-relative'>
											<input
												type='file'
												accept='.pdf,.doc,.docx'
												className='custom-file-input position-absolute file-input'
												{...register('resume', {
													required: true,
												})}
												aria-invalid={errors.resume ? 'true' : 'false'}
											/>
											<div className='file-label'>Upload Resume</div>
										</div>
										{errors.resume && errors.resume.type === 'required' && (
											<p className='text-danger mt-1'>Please upload resume</p>
										)}
									</div>
									<div className='col-md-12'>
										<div className='form-group'>
											<textarea
												cols='30'
												rows='2'
												placeholder='want to say anything?'
												{...register('message', {
													required: true,
												})}
												aria-invalid={errors.message ? 'true' : 'false'}
											></textarea>
											{errors.message && errors.message.type === 'required' && (
												<p className='text-danger mt-1'>Message is empty</p>
											)}
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												placeholder='Expected Salary'
												{...register('salaryExp')}
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group text-right'>
											<button type='submit' className='theme-btn'>
												Submit
											</button>
										</div>
									</div>
									<p className='mt-30'>
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
			</section>
			{/* Benefit Work Process End */}
			<div className='py-100'></div>
		</Layout>
	);
};
export default BecomeAnInstructor;
