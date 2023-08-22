/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Slider from 'react-slick';
import Advertise from '../src/components/Advertise';
import Counter from '../src/components/Counter';
import Layout from '../src/layout/Layout';
import { index2Course, testimonialtwoSlider } from '../src/sliderProps';
const Index2 = () => {
	return (
		<Layout>
			{' '}
			<section className='hero-section-two text-white text-center bg-blue rel z-1 pt-240 rpt-150 pb-80'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-8 col-lg-10'>
							<div className='hero-content-two'>
								<h1 className='mb-35 wow fadeInUp delay-0-2s'>
									Build Bright Life? Learn Many Things Us
								</h1>
								<ul className='list-style-one wow fadeInUp delay-0-4s'>
									<li>Experts Advisors</li>
									<li>538+ Courses</li>
									<li>Events &amp; Program</li>
								</ul>
								<div className='hero-two-btns mt-30 wow fadeInUp delay-0-6s'>
									<Link href='/about'>
										<a className='theme-btn mb-15'>
											Get started <i className='fas fa-arrow-right' />
										</a>
									</Link>
									<a
										href='https://www.youtube.com/watch?v=9Y7ma241N8k'
										className='mfp-iframe video-play mb-15'
									>
										<i className='fas fa-play' /> <span>How it works</span>
									</a>
								</div>
								<div className='admin-speech mt-110 rmt-35 wow fadeInUp delay-0-8s'>
									<div className='image'>
										<img src='/assets/images/hero/admin.jpg' alt='Admin' />
									</div>
									<p>
										Sit amet consectetur adipiscing elit sed do eiusmod tempore
										incididunt ut labore et dolore magna aliqua.
									</p>
									<span className='name'>Brendan E. Cote</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='hero-two-left wow fadeInUp delay-0-6s'>
					<img src='/assets/images/hero/hero-two-left.png' alt='Hero' />
				</div>
				<div className='hero-two-right wow fadeInRight delay-0-6s'>
					<img src='/assets/images/hero/hero-two-right.png' alt='Hero' />
				</div>
				<img
					className='circle-one'
					src='/assets/images/shapes/circle-one.png'
					alt='Circle'
				/>
				<img
					className='circle-two'
					src='/assets/images/shapes/circle-two.png'
					alt='Circle'
				/>
			</section>
			{/* Hero Section End */}
			{/* Features Section Start */}
			<section className='features-section-two rel z-1 pt-120 rpt-90 pb-75 rpb-45'>
				<div className='container'>
					<div className='section-title text-center mb-55'>
						<span className='sub-title-two'>How About Learn Us</span>
						<h2>Opportunity for Online Learning</h2>
					</div>
					<div className='row justify-content-center'>
						<div className='col-lg-4 col-sm-6'>
							<div className='feature-two-item wow fadeInUp delay-0-2s'>
								<span className='number'>01</span>
								<div className='icon'>
									<img src='/assets/images/features/icon4.png' alt='Icon' />
								</div>
								<h4>Courses From Experts</h4>
								<p>
									Sed ut perspiciatis unde omnis natus error sit voluptatem
									accusantium dolor emque laudantium, totam rem
								</p>
								<Link href='/about'>
									<a className='details-btn'>
										<i className='fas fa-long-arrow-alt-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<div className='feature-two-item wow fadeInUp delay-0-4s'>
								<span className='number'>02</span>
								<div className='icon'>
									<img src='/assets/images/features/icon5.png' alt='Icon' />
								</div>
								<h4>Over 500+ Quality Topics</h4>
								<p>
									Sed ut perspiciatis unde omnis natus error sit voluptatem
									accusantium dolor emque laudantium, totam rem
								</p>
								<Link href='/about'>
									<a className='details-btn'>
										<i className='fas fa-long-arrow-alt-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<div className='feature-two-item wow fadeInUp delay-0-6s'>
								<span className='number'>03</span>
								<div className='icon'>
									<img src='/assets/images/features/icon6.png' alt='Icon' />
								</div>
								<h4>Program Video Update</h4>
								<p>
									Sed ut perspiciatis unde omnis natus error sit voluptatem
									accusantium dolor emque laudantium, totam rem
								</p>
								<Link href='/about'>
									<a className='details-btn'>
										<i className='fas fa-long-arrow-alt-right' />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Features Section End */}
			{/* About Section Start */}
			<section className='about-section-two pb-120 rpb-95'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='about-two-left rmb-75 wow fadeInLeft delay-0-2s'>
								<div className='about-two-images'>
									<img src='/assets/images/about/about-two1.jpg' alt='About' />
									<img src='/assets/images/about/about-two2.jpg' alt='About' />
								</div>
								<div className='about-image-over'>
									<div className='about-image-over-item'>
										<img src='/assets/images/about/icon1.png' alt='Icon' />
										<h5>Experience Advisor</h5>
									</div>
									<div className='about-image-over-item'>
										<img src='/assets/images/about/icon2.png' alt='Icon' />
										<h5>Quality Video Tutorials</h5>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='about-content-two wow fadeInRight delay-0-2s'>
								<div className='section-title mb-30'>
									<span className='sub-title-two'>About Learn Us</span>
									<h2>Experience to Online Learning Center</h2>
								</div>
								<p>
									Sit amet consectetur adipiscing sed eiusmod tempor indunt ut
									labore et dolore magna aliquaes ipsum suspendisse ultrice
									gravida. Risus commodo viverra maecenas accumsan lacus vel
									facilisis dolorem fugiat voluptas nulla pariatur.{' '}
								</p>
								<div className='about-btns'>
									<Link href='/about'>
										<a className='theme-btn my-15'>
											Learn more <i className='fas fa-arrow-right' />
										</a>
									</Link>
									<Link href='/faqs'>
										<a className='read-more'>
											How it works <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
								<div className='counter-wrap'>
									<div className='success-item'>
										<span
											className='count-text plus'
											data-speed={3000}
											data-stop={256}
										>
											<Counter end={256} />
										</span>
										<span>Enrolled Learner</span>
									</div>
									<div className='success-item'>
										<span
											className='count-text plus'
											data-speed={3000}
											data-stop='2.36'
										>
											<Counter end={2.36} />
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
										<span>Saticfaction Rate</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section End */}
			{/* Categories Section Start */}
			<section className='categories-section bg-lighter rel z-1 py-75 rpb-85'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-5'>
							<div className='categories-content rmb-65 wow fadeInUp delay-0-2s'>
								<div className='section-title mb-25'>
									<span className='sub-title-two'>Popular Category</span>
									<h2>Browse Our Online Course Categories</h2>
								</div>
								<p>
									Sit amet consectetur adipiscing sed eiusmod tempore labore
									dolore magna aliuaes suspendisse ultrice gravida. commodo
									viverra maecenas accumsan lacus
								</p>
								<Link href='/about'>
									<a className='read-more color-two mt-5'>
										View categories <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-7'>
							<div className='categories-wrap wow fadeInUp delay-0-4s'>
								<div className='row'>
									<div className='col-md-4 col-sm-6'>
										<div className='category-item mt-35'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon1.png'
													alt='Icon'
												/>
											</div>
											<h4>Web Design</h4>
										</div>
										<div className='category-item'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon2.png'
													alt='Icon'
												/>
											</div>
											<h4>Development</h4>
										</div>
									</div>
									<div className='col-md-4 col-sm-6'>
										<div className='category-item'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon3.png'
													alt='Icon'
												/>
											</div>
											<h4>Marketing</h4>
										</div>
										<div className='category-item'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon4.png'
													alt='Icon'
												/>
											</div>
											<h4>Technology</h4>
										</div>
									</div>
									<div className='col-md-4 col-sm-6'>
										<div className='category-item mt-40'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon5.png'
													alt='Icon'
												/>
											</div>
											<h4>Technology</h4>
										</div>
										<div className='category-item'>
											<div className='icon'>
												<img
													src='/assets/images/categories/icon6.png'
													alt='Icon'
												/>
											</div>
											<h4>SEO Optimize</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Categories Section End */}
			{/* Coach Section Start */}
			<section className='coach-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-7 col-md-8'>
							<div className='section-title text-center mb-45'>
								<span className='sub-title-two'>Latest Courses</span>
								<h2>Browser Latest Courses</h2>
							</div>
						</div>
					</div>
					<Slider {...index2Course} className='coach-slider'>
						<div className='coach-item style-two wow fadeInUp delay-0-2s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach1.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Web Design</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Basic Web Design by Photoshop and Figma
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(50)</span>
									</div>
									<span className='price'>95</span>
								</div>
							</div>
						</div>
						<div className='coach-item style-two wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach2.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Development</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Web Development by Php and WordPress
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(32)</span>
									</div>
									<span className='price'>38</span>
								</div>
							</div>
						</div>
						<div className='coach-item style-two wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach3.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Marketing</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Basic Marketing Strategy for Research
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(68)</span>
									</div>
									<span className='price'>0</span>
								</div>
							</div>
						</div>
						<div className='coach-item style-two wow fadeInUp delay-0-2s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach1.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Web Design</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Basic Web Design by Photoshop and Figma
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(50)</span>
									</div>
									<span className='price'>95</span>
								</div>
							</div>
						</div>
						<div className='coach-item style-two wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach2.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Development</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Web Development by Php and WordPress
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(32)</span>
									</div>
									<span className='price'>38</span>
								</div>
							</div>
						</div>
						<div className='coach-item style-two wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<img src='/assets/images/coachs/coach3.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<Link href='/course-list'>
									<a className='category'>Marketing</a>
								</Link>
								<h4>
									<Link href='/course-details'>
										How to Learn Basic Marketing Strategy for Research
									</Link>
								</h4>
								<ul className='coach-footer'>
									<li>
										<i className='fas fa-user-graduate' />
										<span>
											By <b>Bennie L.</b>
										</span>
									</li>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Lessions</span>
									</li>
									<li>
										<i className='far fa-user' />
										<span>seats</span>
									</li>
								</ul>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<span>(68)</span>
									</div>
									<span className='price'>0</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>
			{/* Coach Section End */}
			{/* Advertise Area Start */}
			<section className='advertise-area pb-100 rpb-70'>
				<div className='container'>
					<Advertise />
				</div>
			</section>
			{/* Advertise Area End */}
			{/* Team Section Start */}
			<section className='team-section rel z-1 bg-blue text-white pb-100 rpb-70'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-lg-5'>
							<div className='team-content pt-120 rpt-90 mb-30 rmb-75 wow fadeInUp delay-0-2s'>
								<div className='section-title mb-25'>
									<span className='sub-title-two'>Meet Our Team</span>
									<h2>We Have Thousands Of Experience Team Members</h2>
								</div>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit volup
									tatem accusantium doloremque laudantium totam rem aperiam
									eaques quae abillo inventore veritatis et quasi architecto
								</p>
								<ul className='list-style-one pt-10 pb-45'>
									<li>Experience Team Members</li>
									<li>Lot’s of Video Tutorials</li>
									<li>Events &amp; Programs</li>
									<li>Free &amp; Premium Courses</li>
								</ul>
								<Link href='/about'>
									<a className='theme-btn'>
										Learn more <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='team-members'>
								<div className='row align-items-center'>
									<div className='col-sm-6 wow fadeInRight delay-0-2s'>
										<div className='team-member'>
											<img
												src='/assets/images/teams/member1.png'
												alt='Team Member'
											/>
											<div className='team-over'>
												<h4>David S. Wickman</h4>
												<span>Wed Designer</span>
												<div className='social-style-two'>
													<Link href='/contact'>
														<a>
															<i className='fab fa-twitter' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-facebook-f' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-instagram' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-pinterest-p' />
														</a>
													</Link>
												</div>
											</div>
										</div>
										<div className='team-member'>
											<img
												src='/assets/images/teams/member2.png'
												alt='Team Member'
											/>
											<div className='team-over'>
												<h4>Steven A. Davis</h4>
												<span>Wed Developer</span>
												<div className='social-style-two'>
													<Link href='/contact'>
														<a>
															<i className='fab fa-twitter' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-facebook-f' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-instagram' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-pinterest-p' />
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='col-sm-6 wow fadeInRight delay-0-4s'>
										<div className='team-member'>
											<img
												src='/assets/images/teams/member3.png'
												alt='Team Member'
											/>
											<div className='team-over'>
												<h4>Joe L. Bergmann</h4>
												<span>UI/UX Designer</span>
												<div className='social-style-two'>
													<Link href='/contact'>
														<a>
															<i className='fab fa-twitter' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-facebook-f' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-instagram' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-pinterest-p' />
														</a>
													</Link>
												</div>
											</div>
										</div>
										<div className='team-member'>
											<img
												src='/assets/images/teams/member4.png'
												alt='Team Member'
											/>
											<div className='team-over'>
												<h4>Marco A. Tolliver</h4>
												<span>Web Designer</span>
												<div className='social-style-two'>
													<Link href='/contact'>
														<a>
															<i className='fab fa-twitter' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-facebook-f' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-instagram' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-pinterest-p' />
														</a>
													</Link>
												</div>
											</div>
										</div>
										<div className='team-member'>
											<img
												src='/assets/images/teams/member5.png'
												alt='Team Member'
											/>
											<div className='team-over'>
												<h4>Claude M. Remley</h4>
												<span>Web Developer</span>
												<div className='social-style-two'>
													<Link href='/contact'>
														<a>
															<i className='fab fa-twitter' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-facebook-f' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-instagram' />
														</a>
													</Link>
													<Link href='/contact'>
														<a>
															<i className='fab fa-pinterest-p' />
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<span className='bg-text'>Advisors</span>
			</section>
			{/* Team Section End */}
			{/* Event Section Start */}
			<section className='event-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100'>
				<div className='container'>
					<div className='section-title text-center mb-55'>
						<span className='sub-title-two'>Event &amp; Program</span>
						<h2>Upcoming Events &amp; program</h2>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='event-item-two wow fadeInUp delay-0-2s'>
								<span className='date'>
									Mar <b>03</b> <span>2022</span>
								</span>
								<img src='/assets/images/events/event-two1.jpg' alt='Event' />
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='/contact'>
											Useful VS Code Extensions Front-End Developers
										</Link>
									</h4>
									<Link href='/contact'>
										<a className='read-more color-two'>
											Get ticket <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='event-item-two wow fadeInUp delay-0-4s'>
								<span className='date'>
									Mar <b>09</b> <span>2022</span>
								</span>
								<img src='/assets/images/events/event-two2.jpg' alt='Event' />
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='/contact'>
											Guide To Newly Suppored Modern CSS Pseudo
										</Link>
									</h4>
									<Link href='/contact'>
										<a className='read-more color-two'>
											Get ticket <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-12'>
							<hr className='mb-55' />
						</div>
						<div className='col-lg-6'>
							<div className='event-item-two wow fadeInUp delay-0-6s'>
								<span className='date'>
									Mar <b>15</b> <span>2022</span>
								</span>
								<img src='/assets/images/events/event-two3.jpg' alt='Event' />
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='/contact'>
											Deep Dive Into Eleventy Static Site Generator
										</Link>
									</h4>
									<Link href='/contact'>
										<a className='read-more color-two'>
											Get ticket <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='event-item-two wow fadeInUp delay-0-8s'>
								<span className='date'>
									Mar <b>15</b> <span>2022</span>
								</span>
								<img src='/assets/images/events/event-two4.jpg' alt='Event' />
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='/contact'>
											Contexts Variables In That Static Site Generator
										</Link>
									</h4>
									<Link href='/contact'>
										<a className='read-more color-two'>
											Get ticket <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='event-more-btn text-center pt-15'>
						<Link href='/blog'>
							<a className='theme-btn style-three'>
								view more events <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
				</div>
			</section>
			{/* Event Section End */}
			{/* Testimonials Section Start */}
			<section className='testimonials-section-two my-80 rel z-1'>
				<div className='container'>
					<Slider
						{...testimonialtwoSlider}
						className='testimonial-two-wrap wow fadeInUp delay-0-2s'
					>
						<div className='testimonial-item-two'>
							<div className='testimonial-author-two'>
								<img
									src='/assets/images/testimonials/testimonial-two1.jpg'
									alt='Author'
								/>
							</div>
							<div className='testimonial-content-two'>
								<div className='designation'>
									<h3>Justin C. Swanson</h3>
									<span>Business Manager</span>
								</div>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremq udantium totam rem aperiam eaque quae
									abillo inventore veritatis et quasi architecto beatae
								</p>
								<div className='ratting'>
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
								</div>
							</div>
						</div>
						<div className='testimonial-item-two'>
							<div className='testimonial-author-two'>
								<img
									src='/assets/images/testimonials/testimonial-two2.jpg'
									alt='Author'
								/>
							</div>
							<div className='testimonial-content-two'>
								<div className='designation'>
									<h3>Daniel E. Yager</h3>
									<span>Business Manager</span>
								</div>
								<p>
									Aperiam eaque quae abillo inventore veritatis et quasi
									architecto beatae Sed ut perspiciatis unde omnis iste natus
									error sit voluptatem accusantium doloremq udantium totam rem
								</p>
								<div className='ratting'>
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
								</div>
							</div>
						</div>
						<div className='testimonial-item-two'>
							<div className='testimonial-author-two'>
								<img
									src='/assets/images/testimonials/testimonial-two3.jpg'
									alt='Author'
								/>
							</div>
							<div className='testimonial-content-two'>
								<div className='designation'>
									<h3>Stewart R. Platt</h3>
									<span>Business Manager</span>
								</div>
								<p>
									Voluptatem accusantium doloremq udantium totam rem Sed ut
									perspiciatis unde omnis iste natus error sit aperiam eaque
									quae abillo inventore veritatis et quasi architecto beatae
								</p>
								<div className='ratting'>
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
									<i className='fas fa-star' />
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>
			{/* Testimonials Section End */}
			{/* Blog Section Start */}
			<section className='blog-section pt-120 rpt-90'>
				<div className='container'>
					<div className='section-title text-center mb-55'>
						<span className='sub-title-two'>Latest News &amp; Blog</span>
						<h2>Get Every Single Updates</h2>
					</div>
					<div className='row'>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two wow fadeInUp delay-0-2s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two1.jpg' alt='Blog' />
									<span className='date'>
										March <span>15</span>
									</span>
								</div>
								<div className='blog-content'>
									<div className='content'>
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
										<h4>
											<Link href='/blog-details'>
												Designing Better Link Web Site and Emailsite
											</Link>
										</h4>
										<Link href='/blog-details'>
											<a className='read-more'>
												Read more <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two wow fadeInUp delay-0-4s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two2.jpg' alt='Blog' />
									<span className='date'>
										March <span>23</span>
									</span>
								</div>
								<div className='blog-content'>
									<div className='content'>
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
										<h4>
											<Link href='/blog-details'>
												Variables In The Hugo Seen Static Site Generator
											</Link>
										</h4>
										<Link href='/blog-details'>
											<a className='read-more'>
												Read more <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='blog-item style-two wow fadeInUp delay-0-6s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog-two3.jpg' alt='Blog' />
									<span className='date'>
										April <span>04</span>
									</span>
								</div>
								<div className='blog-content'>
									<div className='content'>
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
										<h4>
											<Link href='/blog-details'>
												Performance Checklist 2022 Apple Pages MS Word
											</Link>
										</h4>
										<Link href='/blog-details'>
											<a className='read-more'>
												Read more <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className='mt-95 rmt-65' />
				</div>
			</section>
			{/* Blog Section End */}
			{/* Partner Section Start */}
			<section className='partner-section rel z-1 pt-105 rpt-75 pb-75 rpb-55'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='categories-content mb-50 wow fadeInRight delay-0-2s'>
								<div className='section-title mb-25'>
									<span className='sub-title-two'>Global Partners</span>
									<h2>We’ve More Then 235+ Global Partners</h2>
								</div>
								<Link href='/contact'>
									<a className='read-more mt-5'>
										View more partners <i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='logo-inner style-two wow fadeInLeft delay-0-2s'>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two1.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two2.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two3.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two4.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two5.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
								<div className='logo-item'>
									<Link href='/about'>
										<img
											src='/assets/images/client-logos/client-logo-two6.png'
											alt='Client Logo'
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Index2;
