/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Slider from 'react-slick';
import Advertise from '../src/components/Advertise';
import Counter from '../src/components/Counter';
import Layout from '../src/layout/Layout';
import { coachSlider } from '../src/sliderProps';
const Index4 = () => {
	return (
		<Layout header={4} footer={4}>
			<section className='hero-section-three bg-lighter rel z-1 pt-150 rpt-150'>
				<div className='container'>
					<div className='row large-gap'>
						<div className='col-lg-6 align-self-end'>
							<div className='hero-three-image-part'>
								<img src='/assets/images/hero/hero-three-man.png' alt='Hero' />
								<div className='hero-chart wow fadeInUp delay-0-2s'>
									<img src='/assets/images/hero/hero-chart.png' alt='Chart' />
									<h5>95% Success Results</h5>
								</div>
								<div className='hero-over-text'>
									<div className='about-image-over-item wow fadeInRight delay-0-2s'>
										<img src='/assets/images/about/icon1.png' alt='Icon' />
										<h5>Experience Advisor</h5>
									</div>
									<div className='about-image-over-item wow fadeInLeft delay-0-2s'>
										<img src='/assets/images/about/icon2.png' alt='Icon' />
										<h5>Quality Video Tutorials</h5>
									</div>
								</div>
								<img
									className='hero-circle'
									src='/assets/images/shapes/circle-dots-two.png'
									alt='Shape'
								/>
							</div>
						</div>
						<div className='col-lg-6 align-self-center'>
							<div className='hero-content-three pt-10 pb-100 rpt-40'>
								<span className='hero-sub-title mb-10 wow fadeInUp delay-0-2s'>
									<span>2563+</span> Students
								</span>
								<h1 className='mb-25 wow fadeInUp delay-0-4s'>
									We’re Best <span>Online</span> Education Partners University
									2022
								</h1>
								<ul className='list-style-one wow fadeInUp delay-0-6s'>
									<li>Experts Advisors</li>
									<li>538+ Courses</li>
								</ul>
								<div className='hero-btns mt-10 wow fadeInUp delay-0-8s'>
									<Link href='/contact'>
										<a className='theme-btn mt-10'>
											Get started <i className='fas fa-arrow-right' />
										</a>
									</Link>
									<Link href='/course-grid'>
										<a className='theme-btn style-two mt-10'>
											our courses <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					className='hero-rectangle'
					src='/assets/images/shapes/rectangle-dots-two.png'
					alt='Shape'
				/>
				<div className='hero-circles-one wow fadeInUpRight delay-0-4s' />
				<div className='hero-circles-two wow fadeInUpRight delay-0-2s' />
			</section>
			{/* Hero Section End */}
			{/* Feature Section Start */}
			<section className='freature-section-six pt-120 rpt-90 pb-90 rpb-60'>
				<div className='container'>
					<div className='row large-gap mb-30'>
						<div className='col-lg-6'>
							<div className='freature-six-left wow fadeInUp delay-0-2s'>
								<div className='section-title mb-30'>
									<span className='sub-title-three'>Why Learn Us</span>
									<h2>
										Experience to <span>Online</span> Learning Center
									</h2>
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s'>
								<p>
									Sit amet consectetur adipiscing sed eiusmod tempor indunt ut
									labore et dolore magna aliquaes ipsum suspendisse ultrice
									gravida. Risus commodo viverra maecenas accumsan lacus vel
									facilisis dolorem fugiat voluptas nulla pariatur.
								</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-3 col-sm-6'>
							<div className='feature-six-item mt-30 wow fadeInUp delay-0-2s'>
								<div className='content'>
									<div className='icon'>
										<img
											src='/assets/images/features/feature-five-icon1.png'
											alt='Icon'
										/>
									</div>
									<h5>Exclusive Courses</h5>
									<p>
										Sit amet consectetur adiisc elit sed dseiusmod temorse
										incididunt labore dolore
									</p>
								</div>
								<Link href='/about'>
									<a className='read-more color-two'>
										raed more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='feature-six-item wow fadeInUp delay-0-4s'>
								<div className='content'>
									<div className='icon'>
										<img
											src='/assets/images/features/feature-five-icon2.png'
											alt='Icon'
										/>
									</div>
									<h5>Creative Advisors</h5>
									<p>
										Sit amet consectetur adiisc elit sed dseiusmod temorse
										incididunt labore dolore
									</p>
								</div>
								<Link href='/about'>
									<a className='read-more color-two'>
										raed more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='feature-six-item mt-30 wow fadeInUp delay-0-6s'>
								<div className='content'>
									<div className='icon'>
										<img
											src='/assets/images/features/feature-five-icon3.png'
											alt='Icon'
										/>
									</div>
									<h5>Certifications</h5>
									<p>
										Sit amet consectetur adiisc elit sed dseiusmod temorse
										incididunt labore dolore
									</p>
								</div>
								<Link href='/about'>
									<a className='read-more color-two'>
										raed more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='feature-six-item wow fadeInUp delay-0-8s'>
								<div className='content'>
									<div className='icon'>
										<img
											src='/assets/images/features/feature-five-icon4.png'
											alt='Icon'
										/>
									</div>
									<h5>Video Tutorials</h5>
									<p>
										Sit amet consectetur adiisc elit sed dseiusmod temorse
										incididunt labore dolore
									</p>
								</div>
								<Link href='/about'>
									<a className='read-more color-two'>
										raed more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Feature Section End */}
			{/* About Start */}
			<section className='about-four-section pb-130 rpb-100'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-5 col-lg-6'>
							<div className='about-four-content rmb-55 wow fadeInLeft delay-0-2s'>
								<div className='section-title mb-25'>
									<span className='sub-title-three'>About Wellearn</span>
									<h2>
										Know <span>Something</span> About Our Programs Culture at
										Wellearn
									</h2>
								</div>
								<p>
									Sit amet consectetur adipiscing sed eiusmod tempor indunt ut
									labore et dolore magna aliquaes ipsum suspendisse ultrice
									gravida. Risus commodo viverra maecenas accumsan lacus vel
									facilisis dolorem fugiat voluptas nulla pariatur.{' '}
								</p>
								<ul className='list-style-four pt-5 pb-35'>
									<li>Best Instructor &amp; Best Programs</li>
									<li>100% ISO Certified Gruentee</li>
								</ul>
								<Link href='/about'>
									<a className='theme-btn style-three'>
										Learn more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='about-four-right-part mt-10 wow fadeInRight delay-0-2s'>
								<img
									className='image-one'
									src='/assets/images/about/about-four1.jpg'
									alt='About'
								/>
								<img
									className='image-two'
									src='/assets/images/about/about-four2.jpg'
									alt='About'
								/>
								<div className='saticfiction bg-green br-5 text-white'>
									<span className='counter-number'>
										<span />
									</span>
									<h4>85% Saticfied Students</h4>
								</div>
								<div className='experience text-white bg-light-blue br-5'>
									<i className='fas fa-graduation-cap' />
									<h5>Experience Advisor</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About End */}
			{/* Counter Start */}
			<div className='counter-section-three'>
				<div className='container'>
					<div className='counter-three-wrap bg-light-blue text-white'>
						<div className='success-item'>
							<span
								className='count-text plus'
								data-speed={3000}
								data-stop={256}
							>
								<Counter end={256} />
							</span>
							<span>
								Students
								<br />
								Enrolled
							</span>
						</div>
						<div className='success-item'>
							<span
								className='count-text plus'
								data-speed={3000}
								data-stop={2456}
							>
								<Counter end={2456} />
							</span>
							<span>
								Finished
								<br />
								Seasons
							</span>
						</div>
						<div className='success-item'>
							<span
								className='count-text percent'
								data-speed={3000}
								data-stop='99.9'
							>
								<Counter end={99.9} />
							</span>
							<span>
								Saticfaction
								<br />
								Rate
							</span>
						</div>
						<div className='success-item'>
							<span
								className='count-text plus'
								data-speed={3000}
								data-stop={2563}
							>
								<Counter end={2563} />
							</span>
							<span>
								Experience
								<br />
								Instructors
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Counter End */}
			{/* Coach Section Start */}
			<section className='coach-section-three bg-lighter rel z-1 pt-180 rpt-150 pb-130 rpb-100'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-7 col-md-8'>
							<div className='section-title text-center mb-45'>
								<h2>
									Best Solutions <span>For Life</span> Coach Solutions
								</h2>
							</div>
						</div>
					</div>
					<Slider {...coachSlider} className='coach-slider'>
						<div className='coach-item-three wow fadeInUp delay-0-2s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three1.jpg' alt='Coach' />
								<div className='price'>256</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How to Learn Basic Web Design (UX/UI)
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three1.png'
										alt='Author'
									/>
									<h6>Richard L. Ramsey</h6>
								</div>
							</div>
						</div>
						<div className='coach-item-three wow fadeInUp delay-0-4s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three2.jpg' alt='Coach' />
								<div className='price'>0.0</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How to Learn Basic Web Development
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three2.png'
										alt='Author'
									/>
									<h6>Jason M. Parker</h6>
								</div>
							</div>
						</div>
						<div className='coach-item-three wow fadeInUp delay-0-6s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three3.jpg' alt='Coach' />
								<div className='price'>306</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How Learn Advance Web Development
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three3.png'
										alt='Author'
									/>
									<h6>Richard L. Ramsey</h6>
								</div>
							</div>
						</div>
						<div className='coach-item-three wow fadeInUp delay-0-2s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three1.jpg' alt='Coach' />
								<div className='price'>256</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How to Learn Basic Web Design (UX/UI)
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three1.png'
										alt='Author'
									/>
									<h6>Richard L. Ramsey</h6>
								</div>
							</div>
						</div>
						<div className='coach-item-three wow fadeInUp delay-0-4s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three2.jpg' alt='Coach' />
								<div className='price'>0.0</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How to Learn Basic Web Development
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three2.png'
										alt='Author'
									/>
									<h6>Jason M. Parker</h6>
								</div>
							</div>
						</div>
						<div className='coach-item-three wow fadeInUp delay-0-6s'>
							<div className='image'>
								<img src='/assets/images/coachs/course-three3.jpg' alt='Coach' />
								<div className='price'>306</div>
							</div>
							<div className='content'>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>25 seats</span>
									</li>
								</ul>
								<h4>
									<Link href='/course-details'>
										Learn How Learn Advance Web Development
									</Link>
								</h4>
								<div className='author'>
									<img
										src='/assets/images/coachs/course-author-three3.png'
										alt='Author'
									/>
									<h6>Richard L. Ramsey</h6>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>

			{/* Testimonial Area End */}
			{/* Advertise Area Start */}
			<section className='advertise-area pb-100 pt-100 rpb-70'>
				<div className='container'>
					<Advertise />
				</div>
			</section>
			{/* Advertise Area End */}
			{/* Newsletter Section Start */}
			<section className='newsletter-video-section'>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className='col-xl-10'>
							<div
								className='newsletter-video-part overlay p-100 rp-50 wow fadeInRight delay-0-2s'
								style={{
									backgroundImage:
										'url(/assets/images/video/newslatter-video-bg.jpg)',
								}}
							>
								<a
									href='https://www.youtube.com/watch?v=9Y7ma241N8k'
									className='mfp-iframe video-play'
								>
									<i className='fas fa-play' />
								</a>
								<div className='notification br-5 bg-white text-center'>
									<img
										src='/assets/images/shapes/notification.png'
										alt='Notification'
									/>
									<div className='content'>
										<h4>Get Our Online Courses</h4>
									</div>
								</div>
								<span className='bg-text'>Video</span>
							</div>
						</div>
						<div className='col-xl-2'>
							<div className='newsletter-video-content bg-light-blue text-white wow fadeInLeft delay-0-2s'>
								<div className='section-title mb-20'>
									<span className='sub-title-two mb-15'>Our Newsletter</span>
									<h2>
										Get Our Every <span>Single</span> Notifications
									</h2>
								</div>
								<p>
									Sit amet consectetur adipiscinelit eiusmod tempor incididunt
									ut labore et dolore magna aliqua suspendisse ultrices gravida.
									commodo viverra maecenas accumsan facilisis.
								</p>
								<form
									onSubmit={(e) => e.preventDefault()}
									className='newsletter-form mt-25'
									action='#'
								>
									<div className='newsletter-radios mb-25'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='hero-wekly'
												name='example1'
												defaultChecked=''
											/>
											<label
												className='custom-control-label'
												htmlFor='hero-wekly'
											>
												Regular Updates
											</label>
										</div>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='hero-monthly'
												name='example1'
											/>
											<label
												className='custom-control-label'
												htmlFor='hero-monthly'
											>
												Weekly Updates
											</label>
										</div>
									</div>
									<div className='newsletter-email'>
										<label htmlFor='email'>
											<i className='far fa-envelope' />
										</label>
										<input
											id='email'
											type='email'
											placeholder='Email Address'
											required=''
										/>
										<button type='submit' className='theme-btn'>
											sign up <i className='fas fa-arrow-right' />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Newsletter Section End */}
			{/* Blog Section Start */}
			<section className='blog-section pt-120 rpt-90 pb-100 rpb-70'>
				<div className='container'>
					<div className='section-title text-center mb-70'>
						<span className='sub-title-two'>Latest News &amp; Blog</span>
						<h2>
							Learn Every News <span>&amp; Blog</span>
						</h2>
					</div>
					<div className='row'>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two middle-image wow fadeInUp delay-0-2s'>
								<h4>
									<Link href='/blog-details'>
										Designing Better Link Web Site and Emailsite
									</Link>
								</h4>
								<ul className='blog-meta'>
									<li>
										<i className='far fa-user' />{' '}
										<Link href='/blog'>By Somalia</Link>
									</li>
									<li>
										<i className='far fa-comments' />{' '}
										<Link href='/blog'>Comments (5)</Link>
									</li>
								</ul>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two4.jpg' alt='Blog' />
									<span className='date'>
										March <span>15</span>
									</span>
								</div>
								<Link href='/blog-details'>
									<a className='read-more'>
										Read more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two middle-image wow fadeInUp delay-0-4s'>
								<h4>
									<Link href='/blog-details'>
										Variables In The Hugo Seen Static Sitegen
									</Link>
								</h4>
								<ul className='blog-meta'>
									<li>
										<i className='far fa-user' />{' '}
										<Link href='/blog'>By Somalia</Link>
									</li>
									<li>
										<i className='far fa-comments' />{' '}
										<Link href='/blog'>Comments (5)</Link>
									</li>
								</ul>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two5.jpg' alt='Blog' />
									<span className='date'>
										March <span>15</span>
									</span>
								</div>
								<Link href='/blog-details'>
									<a className='read-more'>
										Read more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two middle-image wow fadeInUp delay-0-6s'>
								<h4>
									<Link href='/blog-details'>
										Complete Gude Switch From HTTP To HTTPS
									</Link>
								</h4>
								<ul className='blog-meta'>
									<li>
										<i className='far fa-user' />{' '}
										<Link href='/blog'>By Somalia</Link>
									</li>
									<li>
										<i className='far fa-comments' />{' '}
										<Link href='/blog'>Comments (5)</Link>
									</li>
								</ul>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two6.jpg' alt='Blog' />
									<span className='date'>
										March <span>15</span>
									</span>
								</div>
								<Link href='/blog-details'>
									<a className='read-more'>
										Read more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Index4;
