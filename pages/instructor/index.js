/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Layout from '@/layouts/Layout';
import Head from 'next/head';

const BecomeAnInstructor = () => {
	return (
		<>
			<Head>
				<title>Instructor | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true} topbar={false}>
				<PageBanner pageName={'banner'} pageTitle={'Instructor'} />
				{/* Hero Section End */}
				<section className='join-our-team-area py-120 rpt-90'>
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
									<span className='bg-text'>Instructor</span>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='join-our-team-content rmb-75 wow fadeInLeft delay-0-2s'>
									<div className='section-title mb-20'>
										<span className='sub-title-two mb-3'>
											Welcome Back, Blockchain Instructor
										</span>
										<h2>Manage your courses</h2>
									</div>
									<p>
										Welcome back, Blockchain Instructor! We are excited to have
										you on board to help our students learn about blockchain
										technology. In your dashboard, you will find a variety of
										resources to help you in your teaching journey. Our course
										materials have been updated with the latest information on
										blockchain technology and its use cases. You can also access
										the forum to connect with other instructors, share ideas,
										and collaborate on strategies to engage students. Thank you
										for your dedication to helping our students unlock the
										potential of this innovative technology.
									</p>
									<Link href='https://instructor.kairaaacademy.com/'>
										<a className='theme-btn mt-10'>
											Login to dashboard
											<i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Join Our Team End */}
				<section className='hero-section rel z-1 py-150 rpt-135 pb-75 rpb-100'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-7'>
								<div className='hero-content rpt-25 rmb-75'>
									<span className='sub-title style-two mb-20 wow fadeInUp delay-0-2s'>
										Join with Our Team
									</span>
									<h1 className='mb-20 wow fadeInUp delay-0-4s'>
										Shape the Future of Blockchain
									</h1>
									<p className='wow fadeInUp delay-0-6s pe-5'>
										Are you passionate about blockchain technology and its
										potential to transform the world? Do you have experience
										teaching others about the intricacies of decentralized
										networks and the impact they can have on industries like
										finance, healthcare, and logistics? If so, we want you to
										join our team at Kairaa Blockchain Academy!
									</p>
									<p className='wow fadeInUp delay-0-6s pe-5'>
										As a blockchain instructor with Kairaa Blockchain Academy,
										you will have the opportunity to: Develop and deliver
										innovative online courses that teach students the
										fundamentals of blockchain technology and its applications
										Work with a dynamic team of experienced blockchain
										professionals who are passionate about the potential of this
										groundbreaking technology.
									</p>
									<div className='hero-btn mt-30 wow fadeInUp delay-0-8s'>
										<Link href='/instructor/signup'>
											<a className='theme-btn mt-10'>
												become an instructor{' '}
												<i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className='col-lg-5'>
								<div className='hero-right-images text-lg-right wow fadeInUp delay-0-2s'>
									<img src='/assets/images/hero/hero-right.png' alt='Hero' />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default BecomeAnInstructor;
