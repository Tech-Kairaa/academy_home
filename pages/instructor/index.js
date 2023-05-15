/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Layout from '@/layouts/Layout';
import WorkSteps from '@/components/slider/WorkSteps';

const BecomeAnInstructor = () => {
	return (
		<Layout header footer newsletter={false} topbar={false}>
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
								<Link href='/instructor/signup'>
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
			{/* Work Process Section Start */}
			<section className='work-process-section bg-white rel z-1 pt-60 rpt-100 pb-100 rpb-70'>
				<div className='container'>
					<WorkSteps />
				</div>
			</section>
			{/* Work Process Section End */}
			{/* Benefit Work Process End */}
		</Layout>
	);
};
export default BecomeAnInstructor;
