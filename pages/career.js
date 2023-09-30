/* eslint-disable @next/next/no-img-element */
import Layout from '@/layouts/Layout';
import Head from 'next/head';
import WorkSteps from '@/components/slider/WorkSteps';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import server from '@/providers/server';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Career = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		position: '',
		salary: '',
		experience: '',
		city: '',
		resume: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData({
			...formData,
			resume: file,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formDataToSubmit = new FormData();

		for (const key in formData) {
			if (formData.hasOwnProperty(key)) {
				formDataToSubmit.append(key, formData[key]);
			}
		}

		try {
			await server.post('/public/career', formDataToSubmit);
			toast.success('Applied successfully');
		} catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
		}
	};

	return (
		<>
			<Head>
				<title> Career | Kairaa Blockchain Academy</title>
			</Head>
			<Layout header footer newsletter={false} topbar={false}>
				<PageBanner pageName={'career'} pageTitle={'Career'} />
				<section className='join-our-team-area pt-120 rpt-90'>
					<div className='container'>
						<div className='row align-items-center large-gap'>
							<div className='col-lg-6'>
								<div className='join-our-team-image-part pt-5 wow fadeInRight delay-0-2s'>
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
									<div className='image-one'>
										<img
											src='/assets/images/instructor/join-team1.jpg'
											alt='Join Our Team'
										/>
									</div>
									<span className='bg-text'>Career</span>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='join-our-team-content rmb-75 wow fadeInLeft delay-0-2s'>
									<div className='section-title mb-20'>
										<span className='sub-title-two mb-3'>
											Your Gateway to a Successful Career
										</span>
										<h2>Start your career</h2>
									</div>
									<p>
										Kairaa Academy is a leading provider of online blockchain
										and technology courses. We are on a mission to empower the
										future of education by making high-quality education
										accessible and affordable htmlFor everyone. We are looking
										htmlFor talented and passionate individuals to join our team
										and help us achieve our mission. We offer a variety of
										roles.
									</p>
									<p>
										<strong className='lead'>Why Join Kairaa Academy?</strong>
									</p>
									<ul className='mt-2'>
										<li>Competitive salaries and benefits</li>
										<li>A supportive and collaborative work environment</li>
										<li>
											Opportunities htmlFor professional growth and development
										</li>
										<li>The chance to make a real difference in the world</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Join Our Team End */}

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
							<div className='col-lg-12 contact-form pt-30 rounded-3'>
								<div className='section-title text-center my-30'>
									<span className='sub-title-two'>
										Register your details here to
									</span>
									<h2>
										Start career with <span> Kairaa</span>
									</h2>
								</div>
								<form
									className='row g-3 w-75 pb-50 mx-auto career-form'
									onSubmit={handleSubmit}
									encType='multipart/form-data'
								>
									<div className='col-md-6 mb-3'>
										<label className='form-label'>Full name</label>
										<input
											className='form-control'
											placeholder='Your name'
											type='text'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='col-md-6'>
										<label className='form-label'>Email</label>
										<input
											className='form-control'
											placeholder='Current email address'
											type='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='col-md-3 mb-3'>
										<label className='form-label'>Experience</label>
										<input
											className='form-control'
											placeholder='In years'
											type='text'
											name='experience'
											value={formData.experience}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='col-md-4'>
										<label className='form-label'>Expected salary</label>
										<input
											className='form-control'
											placeholder='Per Annum'
											type='text'
											name='salary'
											value={formData.salary}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='col-md-5'>
										<label className='form-label'>Position</label>
										<select
											name='position'
											value={formData.position}
											onChange={handleInputChange}
											required
										>
											<option value=''>Select Position</option>
											<option value='full-stack-developer'>
												Full-Stack Developer
											</option>
											<option value='laravel-developer'>
												Laravel Developer
											</option>
											<option value='backend-developer'>
												Backend Developer
											</option>
											<option value='customer-support'>Customer Support</option>
										</select>
									</div>
									<div className='col-md-5 mb-3'>
										<label htmlFor='inputAddress' className='form-label'>
											Your city
										</label>
										<input
											className='form-control'
											placeholder='Your current city'
											type='text'
											name='city'
											value={formData.city}
											onChange={handleInputChange}
											required
										/>
									</div>

									<div className='col-md-7'>
										<label htmlFor='inputAddress' className='form-label'>
											Upload resume
										</label>
										<input
											type='file'
											accept='.pdf,.doc,.docx'
											onChange={handleFileChange}
											required
											className='bg-light'
										/>
									</div>

									<div className='col-md-6'>
										<button
											type='submit'
											className='theme-btn mt-3 mb-10 w-100'
										>
											Submit Details
										</button>
									</div>
									<div className='col-md-4 ms-auto'>
										<Link href='/courses'>
											<a className='theme-btn style-three mt-3 mb-10 w-100'>
												Buy Course
											</a>
										</Link>
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

export default Career;
