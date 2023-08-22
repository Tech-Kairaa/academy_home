/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Layout from '../src/layout/Layout';

import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import Index1WorkStepSlider from '../src/components/slider/WorkSteps';
import { index1EventWrap, index1Testimonial } from '../src/sliderProps';

const Index1Isotope = dynamic(
	() => import('../src/components/isotope/Index1Isotope'),
	{
		ssr: false,
	}
);

const Index = () => {
	return (
		<Layout header={1} footer={1}>
			<section className='hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-7'>
							<div className='hero-content rpt-25 rmb-75'>
								<span className='sub-title style-two mb-20 wow fadeInUp delay-0-2s'>
									Coaching &amp; Speker
								</span>
								<h1 className='mb-20 wow fadeInUp delay-0-4s'>
									Build Bright Life? Take Our Life Coach
								</h1>
								<p className='wow fadeInUp delay-0-6s'>
									Sit amet consectetur adipiscing elit sed do eiusmod tempor
									incididunt labore dolore magna aliqua suspendisse ultrices
									gravida.
								</p>
								<div className='hero-btn mt-30 wow fadeInUp delay-0-8s'>
									<Link href='/course-grid'>
										<a className='theme-btn'>
											Get Your Free Coach <i className='fas fa-arrow-right' />
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
				<span className='bg-text'>coach</span>
			</section>
			{/* Hero Section End */}
			{/* Features Section Start */}
			<section className='features-section rel z-1 pt-80 pb-40 bg-blue text-white'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-4 col-md-6'>
							<div className='feature-item wow fadeInUp delay-0-2s'>
								<div className='image'>
									<img src='/assets/images/features/icon1.png' alt='Icon' />
								</div>
								<div className='content'>
									<h4>Online Courses From Experts</h4>
									<p>
										Sit amet consectetur adipisc elit sed do eiusmod temporse
										incididunt labore dolore
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='feature-item wow fadeInUp delay-0-4s'>
								<div className='image'>
									<img src='/assets/images/features/icon2.png' alt='Icon' />
								</div>
								<div className='content'>
									<h4>Over 500+ High Quality Topics</h4>
									<p>
										Sit amet consectetur adipisc elit sed do eiusmod temporse
										incididunt labore dolore
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6'>
							<div className='feature-item wow fadeInUp delay-0-6s'>
								<div className='image'>
									<img src='/assets/images/features/icon1.png' alt='Icon' />
								</div>
								<div className='content'>
									<h4>Event &amp; Program Video Update</h4>
									<p>
										Sit amet consectetur adipisc elit sed do eiusmod temporse
										incididunt labore dolore
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					className='rectangle-dots'
					src='/assets/images/shapes/rectangle-dots.png'
					alt='Shape'
				/>
				<img
					className='circle-dots'
					src='/assets/images/shapes/circle-dots.png'
					alt='Shape'
				/>
			</section>
			{/* Features Section End */}
			{/* About Section Start */}
			<section className='about-section pt-130 rpt-100'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-5 align-self-end'>
							<div className='about-man rmb-75 wow fadeInLeft delay-0-2s'>
								<img src='/assets/images/about/man.png' alt='Man' />
							</div>
						</div>
						<div className='col-lg-7'>
							<div className='about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s'>
								<div className='section-title mb-40'>
									<span className='sub-title mb-25'>about us</span>
									<h2>We Provide Life Coach From Expert Advisors</h2>
								</div>
								<div className='about-features'>
									<div className='row'>
										<div className='col-sm-6'>
											<div className='feature-item'>
												<div className='icon'>
													<i className='fas fa-check' />
												</div>
												<div className='content'>
													<h5>Exclusive Coach</h5>
													<p>Sit consectetur adipiscing eiuse tempor incides</p>
												</div>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className='feature-item'>
												<div className='icon'>
													<i className='fas fa-check' />
												</div>
												<div className='content'>
													<h5>Creative Minds</h5>
													<p>Sit consectetur adipiscing eiuse tempor incides</p>
												</div>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className='feature-item'>
												<div className='icon'>
													<i className='fas fa-check' />
												</div>
												<div className='content'>
													<h5>Master Certified</h5>
													<p>Sit consectetur adipiscing eiuse tempor incides</p>
												</div>
											</div>
										</div>
										<div className='col-sm-6'>
											<div className='feature-item'>
												<div className='icon'>
													<i className='fas fa-check' />
												</div>
												<div className='content'>
													<h5>Video Tutorials</h5>
													<p>Sit consectetur adipiscing eiuse tempor incides</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='about-btns'>
									<Link href='/about'>
										<a className='theme-btn style-two my-15'>
											Learn more us <i className='fas fa-arrow-right' />
										</a>
									</Link>
									<Link href='/faqs'>
										<a className='read-more'>
											How it works <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section End */}
			{/* Coach Section Start */}
			<Index1Isotope />
			{/* Coach Section End */}
			{/* Work Process Section Start */}
			<section className='work-process-section bg-white rel z-1 pt-130 rpt-100 pb-100 rpb-70'>
				<div className='container'>
					<Index1WorkStepSlider />
				</div>
			</section>
			{/* Work Process Section End */}
			{/* Newsletter Section Start */}
			<section className='newsletter-section pb-130 rpb-100 wow fadeInUp delay-0-2s'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='newsletter-video overlay'>
								<img src='/assets/images/video/video-bg.jpg' alt='Video' />
								<a
									href='https://www.youtube.com/watch?v=9Y7ma241N8k'
									className='mfp-iframe video-play'
								>
									<i className='fas fa-play' />
								</a>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='newsletter-content bg-lighter'>
								<div className='section-title mb-20'>
									<span className='sub-title mb-25'>Newsletters</span>
									<h2>Get Our Every Single Notifications</h2>
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
											placeholder='Enter Email Address'
											required=''
										/>
										<button type='submit' className='theme-btn'>
											Subscribe <i className='fas fa-arrow-right' />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Newsletter Section End */}
			{/* Events Section Start */}
			<section className='events-section rel z-1 py-130 rpy-100 bg-blue text-white'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-7 col-lg-8 col-md-9'>
							<div className='section-title text-center mb-55'>
								<span className='sub-title mb-25'>Events &amp; Program</span>
								<h2>We’reArranged Yearly Cultural Events &amp; Program</h2>
							</div>
						</div>
					</div>
					<Slider {...index1EventWrap} className='event-wrap'>
						<div className='event-item wow fadeInUp delay-0-2s'>
							<div className='image'>
								<img src='/assets/images/events/event1.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
						<div className='event-item wow fadeInUp delay-0-4s'>
							<div className='image'>
								<img src='/assets/images/events/event2.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
						<div className='event-item wow fadeInUp delay-0-6s'>
							<div className='image'>
								<img src='/assets/images/events/event3.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
						<div className='event-item wow fadeInUp delay-0-2s'>
							<div className='image'>
								<img src='/assets/images/events/event1.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
						<div className='event-item wow fadeInUp delay-0-4s'>
							<div className='image'>
								<img src='/assets/images/events/event2.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
						<div className='event-item wow fadeInUp delay-0-6s'>
							<div className='image'>
								<img src='/assets/images/events/event3.jpg' alt='Event' />
								<span className='date'>25 march 2022</span>
							</div>
							<div className='content'>
								<h4>How Much Needs Life Coach For Human Beings</h4>
								<span className='location'>
									<i className='fas fa-map-marker-alt' /> 55 Main Street, New
									York
								</span>
							</div>
						</div>
					</Slider>
				</div>
				<span className='bg-text'>coach</span>
				<img
					className='rectangle-dots'
					src='/assets/images/shapes/rectangle-dots.png'
					alt='Shape'
				/>
				<img
					className='circle-dots'
					src='/assets/images/shapes/circle-dots.png'
					alt='Shape'
				/>
			</section>
			{/* Events Section End */}
			{/* Testimonials Section Start */}
			<section className='testimonials-section bg-white rel z-1 py-130 rpy-100'>
				<div className='container'>
					<div className='row align-items-center justify-content-between'>
						<div className='col-lg-5'>
							<div className='testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s'>
								<div className='section-title'>
									<span className='sub-title mb-15'>Testimonials</span>
									<h2>Happy Clients Say About Coach</h2>
								</div>
								<p>
									Quis autem veleum iure reprehenderit voluptate velit esse quam
									nihil molestiae consequatur vel illum dolore eum fugiat quo
									voluptas nulla pariatur
								</p>
								<h4 className='partner-title mt-25 mb-15'>
									We Have <span>1356+</span> Global Partners
								</h4>
								<div className='partner-iamges-wrap'>
									<img
										src='/assets/images/testimonials/partner1.jpg'
										alt='Partner'
									/>
									<img
										src='/assets/images/testimonials/partner2.jpg'
										alt='Partner'
									/>
									<img
										src='/assets/images/testimonials/partner3.jpg'
										alt='Partner'
									/>
									<img
										src='/assets/images/testimonials/partner4.jpg'
										alt='Partner'
									/>
									<img
										src='/assets/images/testimonials/partner5.jpg'
										alt='Partner'
									/>
									<img
										src='/assets/images/testimonials/partner6.jpg'
										alt='Partner'
									/>
									<span className='plus'>+</span>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<Slider
								{...index1Testimonial}
								className='testimonial-wrap wow fadeInRight delay-0-2s'
							>
								<div className='testimonial-item'>
									<div className='testimonial-author'>
										<img
											src='/assets/images/testimonials/author.jpg'
											alt='Author'
										/>
									</div>
									<div className='testimonial-content'>
										<div className='designation'>
											<h4>Justin C. Swanson</h4>
											<span>Business Manager</span>
										</div>
										<p>
											Voluptatem accusantium doloremq udantium totam rem aperiam
											eaque quae abillo inventore veritatis et quasi architecto
											beatae Sed ut perspiciatis unde omnis iste natus error sit
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
								<div className='testimonial-item'>
									<div className='testimonial-author'>
										<img
											src='/assets/images/testimonials/author.jpg'
											alt='Author'
										/>
									</div>
									<div className='testimonial-content'>
										<div className='designation'>
											<h4>Gerardo M. Jordan</h4>
											<span>Business Manager</span>
										</div>
										<p>
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremq udantium totam rem aperiam
											eaque quae abillo inventore veritatis et quasi architecto
											beatae
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
								<div className='testimonial-item'>
									<div className='testimonial-author'>
										<img
											src='/assets/images/testimonials/author.jpg'
											alt='Author'
										/>
									</div>
									<div className='testimonial-content'>
										<div className='designation'>
											<h4>Justin C. Swanson</h4>
											<span>Business Manager</span>
										</div>
										<p>
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremq udantium totam rem aperiam
											eaque quae abillo inventore veritatis et quasi architecto
											beatae
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
								<div className='testimonial-item'>
									<div className='testimonial-author'>
										<img
											src='/assets/images/testimonials/author.jpg'
											alt='Author'
										/>
									</div>
									<div className='testimonial-content'>
										<div className='designation'>
											<h4>Gerardo M. Jordan</h4>
											<span>Business Manager</span>
										</div>
										<p>
											Voluptatem accusantium doloremq udantium totam rem aperiam
											eaque quae abillo inventore veritatis et quasi architecto
											beatae Sed ut perspiciatis unde omnis iste natus error sit
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
					</div>
				</div>
			</section>
			{/* Testimonials Section End */}
			{/* Blog Section Start */}
			<section className='blog-section'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-7 col-md-8'>
							<div className='section-title text-center mb-55'>
								<span className='sub-title mb-20'>News &amp; Blog</span>
								<h2>Read Some Store About News &amp; Blog</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='blog-item big-item wow fadeInUp delay-0-2s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog1.jpg' alt='Blog' />
								</div>
								<div className='blog-content'>
									<span className='date'>
										<span>25</span> March
									</span>
									<div className='content'>
										<h4>
											<Link href='/blog-details'>
												Building Web Layouts For Dual-Screen And Foldable
												Devices Designing
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
									</div>
								</div>
							</div>
						</div>
						<div className='col-xl-3 col-lg-6 col-sm-6'>
							<div className='blog-item wow fadeInUp delay-0-4s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog2.jpg' alt='Blog' />
								</div>
								<div className='blog-content'>
									<span className='date'>
										<span>25</span> March
									</span>
									<div className='content'>
										<ul className='blog-meta'>
											<li>
												<i className='far fa-user' />{' '}
												<Link href='/blog'>By Somalia</Link>
											</li>
											<li>
												<i className='far fa-comments' />{' '}
												<Link href='/blog'>Com (5)</Link>
											</li>
										</ul>
										<h5>
											<Link href='/blog-details'>
												Designing Better Linke Website And Email
											</Link>
										</h5>
										<p>
											Sit amet consectetur adiscins eiusmod tempor incididunt
										</p>
										<Link href='/blog-details'>
											<a className='read-more'>
												Read more <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xl-3 col-lg-6 col-sm-6'>
							<div className='blog-item wow fadeInUp delay-0-6s'>
								<div className='blog-image'>
									<img src='/assets/images/blog/blog3.jpg' alt='Blog' />
								</div>
								<div className='blog-content'>
									<span className='date'>
										<span>03</span> April
									</span>
									<div className='content'>
										<ul className='blog-meta'>
											<li>
												<i className='far fa-user' />{' '}
												<Link href='/blog'>By Somalia</Link>
											</li>
											<li>
												<i className='far fa-comments' />{' '}
												<Link href='/blog'>Com (5)</Link>
											</li>
										</ul>
										<h5>
											<Link href='/blog-details'>
												Useful VS Code Esions Front-End Develop
											</Link>
										</h5>
										<p>
											Sit amet consectetur adiscins eiusmod tempor incididunt
										</p>
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
					<div className='blog-more-btn pt-30 text-center'>
						<Link href='/blog'>
							<a className='theme-btn style-three'>
								view more news <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
				</div>
			</section>
			{/* Blog Section End */}
			{/* Logo Section Start */}
			<div className='logo-section pt-130 rpt-100 pb-80 rpb-50'>
				<div className='container'>
					<div className='logo-inner'>
						<div className='logo-item wow fadeInUp delay-0-1s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo1.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
						<div className='logo-item wow fadeInUp delay-0-2s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo2.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
						<div className='logo-item wow fadeInUp delay-0-3s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo3.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
						<div className='logo-item wow fadeInUp delay-0-4s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo4.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
						<div className='logo-item wow fadeInUp delay-0-5s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo5.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
						<div className='logo-item wow fadeInUp delay-0-6s'>
							<Link href='/contact'>
								<img
									src='/assets/images/client-logos/client-logo6.png'
									alt='Client Logo'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Logo Section End */}
			{/* Instagram Section Start */}
			<div className='instagram-section pb-120 rpb-90'>
				<div className='container-fluid'>
					<div className='row small-gap justify-content-center'>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-1s'>
								<img
									src='/assets/images/instagram/instagram1.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram1.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-2s'>
								<img
									src='/assets/images/instagram/instagram2.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram2.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-3s'>
								<img
									src='/assets/images/instagram/instagram3.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram3.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-4s'>
								<img
									src='/assets/images/instagram/instagram4.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram4.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-5s'>
								<img
									src='/assets/images/instagram/instagram5.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram5.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
							<div className='instagram-item wow fadeInUp delay-0-6s'>
								<img
									src='/assets/images/instagram/instagram6.jpg'
									alt='Instagram'
								/>
								<div className='instagram-hover'>
									<a href='/assets/images/instagram/instagram6.jpg'>
										<i className='fab fa-instagram' />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Index;
