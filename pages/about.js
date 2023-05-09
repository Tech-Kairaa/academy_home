/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Slider from 'react-slick';
import Advertise from '../src/components/Advertise';
import Counter from '../src/components/Counter';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import { coachSlider } from '../src/sliderProps';
import dynamic from 'next/dynamic';
import Founder from '../src/components/Founder';
import Team from '../src/components/Team';
const Index1Isotope = dynamic(
	() => import('../src/components/isotope/Index1Isotope'),
	{
		ssr: false,
	}
);

const About = () => {
	return (
		<Layout header footer newsletter={true}>
			<PageBanner pageName={'about_us'} />
			{/* Page Banner End */}
			{/* About Section Start */}
			<section className='about-page-section pt-120 rpt-90'>
				<div className='container'>
					<div className='row align-items-center large-gap'>
						<div className='col-lg-5'>
							<div className='about-page-content wow fadeInLeft delay-0-2s'>
								<div className='section-title mb-30'>
									<span className='sub-title-two'>
										About Kairaa Blockchain Academy
									</span>
									<h2>We Are Excellent Choice To Learning New Skills</h2>
								</div>
								<p>
									Kairaa Blockchain Academy is a leading online learning center
									that offers a wide range of courses and programs to students
									around the world. With its focus on flexibility and support,
									Kairaa Academy has become a popular choice for those looking
									to advance their education or learn new skills.
								</p>
								<b>
									Students have access to a wide range of learning resources
									that are designed to help them fully understand and retain the
									material.
								</b>
								<div className='about-btns pt-25'>
									<Link href='/about'>
										<a className='theme-btn my-15'>
											Enrol Now <i className='fas fa-arrow-right' />
										</a>
									</Link>
									<Link href='/faqs'>
										<a className='read-more'>
											Contact us <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s'>
								<img src='/assets/images/about/about-page.png' alt='About' />
								<div className='circle-content bg-light px-2 py-1'>
									<img
										src='/assets/images/about/about-four1.jpg'
										className='rounded-circle'
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='col-lg-2'>
							<div className='counter-wrap style-two wow fadeInRight delay-0-4s'>
								<div className='success-item'>
									<span
										className='count-text plus'
										data-speed={3000}
										data-stop={166}
									>
										<Counter end={166} />
									</span>
									<span>Enrolled Learner</span>
								</div>
								<div className='success-item'>
									<span
										className='count-text plus'
										data-speed={3000}
										data-stop='2.36'
									>
										<Counter end={62} />
									</span>
									<span>Finished Session</span>
								</div>
								<div className='success-item'>
									<span
										className='count-text percent'
										data-speed={3000}
										data-stop={99}
									>
										<Counter end={99} />
									</span>
									<span>Saticfiction Rate</span>
								</div>
								<div className='success-item'>
									<span
										className='count-text plus'
										data-speed={3000}
										data-stop={83}
									>
										<Counter end={12} />
									</span>
									<span>New Courses</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section End */}
			{/* About Section Start */}
			<section className='about-section-three my-100'>
				<div className='container'>
					<div className='row large-gap align-items-center'>
						<div className='col-lg-6'>
							<div className='about-three-image rmb-65 wow fadeInUp delay-0-2s'>
								<img src='/assets/images/about/about-three.jpg' alt='About' />
								<div className='about-three-image-content bg-light-blue rel text-white br-10 p-30'>
									<p className='lead'>
										<i className='fas fa-quote-left mr-3'></i>
										We offer courses and services that will help you stay ahead
										of the curve. We have a wide range of courses that will fit
										your needs.
										<i className='fas fa-quote-right ml-3'></i>
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='about-content-three wow fadeInUp delay-0-4s'>
								<div className='section-title mb-40'>
									<span className='sub-title-three mb-25'>
										Kairaa Blockchain Academy<span> create&apos;s</span>
									</span>
									<h2>Space to Learn Latest Technologies</h2>
								</div>
								<div className='feature-five-item'>
									<div className='icon'>
										<img src='/assets/images/features/icon21.png' alt='Icon' />
									</div>
									<div className='content'>
										<h4>Innovative Classroom</h4>
										<p>
											Kairaa Blockchain Academy offers an Innovative Classroom
											to help students learn from anywhere.
										</p>
									</div>
								</div>
								<div className='feature-five-item'>
									<div className='icon'>
										<img src='/assets/images/features/icon22.png' alt='Icon' />
									</div>
									<div className='content'>
										<h4>Top Instructors</h4>
										<p>
											Top instructors with industry experience, providing
											comprehensive and individualized learning experiences.
										</p>
									</div>
								</div>
								<div className='feature-five-item'>
									<div className='icon'>
										<img src='/assets/images/features/icon23.png' alt='Icon' />
									</div>
									<div className='content'>
										<h4>ISO Cretified Courses</h4>
										<p>
											The Kairaa Blockchain Academy offers a variety of
											ISO-certified courses, perfect for students to improve
											their skills.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section End */}

			{/*Founder Section Start*/}
			<Founder />
			{/*Founder Section End*/}

			<Team />

			{/* Advertise Area Start */}
			<section className='advertise-area pt-20 rpt-100 pb-50 rpb-60'>
				<div className='container'>
					<Advertise />
				</div>
			</section>
			{/* Advertise Area End */}
		</Layout>
	);
};
export default About;
