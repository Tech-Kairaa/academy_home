/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Advertise from '@/components/Advertise';
import Layout from '@/layouts/Layout';
import Founder from '@/components/Founder';
import Team from '@/components/Team';
import CourseGallery from '@/components/CourseGallery';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import ProtectedRoute from '@/components/ProtectedRoute';

const Index = () => {
	const auth = useSelector((state) => state.auth.loginState);
	return (
		<ProtectedRoute>
			<Head>
				<title>Learn Blockchain in Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true} topbar={true}>
				<section className='hero-section-three bg-lighter rel z-1 pt-150 rpt-150'>
					<div className='container'>
						<div className='row large-gap'>
							<div className='col-lg-6 align-self-end'>
								<div className='hero-three-image-part'>
									<img
										src='/assets/images/hero/hero-three-man.png'
										alt='Hero'
									/>
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
										<span>563+</span> Students
									</span>
									<h1 className='mb-25 wow fadeInUp delay-0-4s'>
										Learn <span>Blockchain</span> Technology And Web 3.0
									</h1>
									<ul className='list-style-one wow fadeInUp delay-0-6s'>
										<li>Experts Advisors</li>
										<li>20+ Blockchain Courses</li>
									</ul>
									<div className='hero-btns mt-10 wow fadeInUp delay-0-8s'>
										{!auth && (
											<>
												<Link href='/#enroll'>
													<a className='theme-btn mt-10 me-2'>
														Enroll now <i className='fas fa-arrow-right' />
													</a>
												</Link>
												<Link href='/#career'>
													<a className='theme-btn style-two mt-10 ms-2'>
														Start Career <i className='fas fa-arrow-right' />
													</a>
												</Link>
											</>
										)}

										{auth === 'loggedIn' && (
											<>
												<Link href='/#enroll'>
													<a className='theme-btn mt-10 me-2'>
														Latest courses <i className='fas fa-arrow-right' />
													</a>
												</Link>
												<Link href='/#career'>
													<a className='theme-btn style-two mt-10 ms-2'>
														Top courses <i className='fas fa-arrow-right' />
													</a>
												</Link>
											</>
										)}
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
				<section className='feature-section-six pt-120 rpt-90 pb-70 rpb-60'>
					<div className='container'>
						<div className='row large-gap mb-30'>
							<div className='col-lg-6'>
								<div className='feature-six-left wow fadeInUp delay-0-2s'>
									<div className='section-title mb-30'>
										<span className='sub-title-three'>Why Learn Here?</span>
										<h2>
											We Provides <span>Innovative</span> Classroom to learn
										</h2>
									</div>
								</div>
							</div>
							<div className='col-lg-5'>
								<div className='feature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s'>
									<p>
										The extensive course materials offered by Kairaa Blockchain
										Academy are one of its best qualities. Students have access
										to a variety of learning resources that are intended to aid
										in their comprehension and retention of the subject, from
										interactive exercises and quizzes to video lectures.
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
											Kairaa Blockchain Academy carefully selects
											industry-recognized courses in the newest technologies.
										</p>
									</div>
									<Link href='/#about'>
										<a className='read-more color-two'>
											read more <i className='fas fa-arrow-right' />
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
										<h5>Creative Instructors</h5>
										<p>
											Our instructors engage in their abilities to convey
											complex ideas in a valid and understandable manner.
										</p>
									</div>
									<Link href='/#about'>
										<a className='read-more color-two'>
											read more <i className='fas fa-arrow-right' />
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
											Kairaa Blockchain Academy&lsquo;s certifications are
											highly respected and sought-after within the industry.
										</p>
									</div>
									<Link href='/#about'>
										<a className='read-more color-two'>
											read more <i className='fas fa-arrow-right' />
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
											Our video tutorials are well organized and easy to follow.
											Each tutorial is structured around a specific topic.
										</p>
									</div>
									<Link href='/#about'>
										<a className='read-more color-two'>
											read more <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Feature Section End */}
				{/* About Section Start */}
				<section className='about-section-two pb-120 rpb-95'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='about-two-left rmb-75 wow fadeInLeft delay-0-2s'>
									<div className='about-two-images'>
										<img
											src='/assets/images/about/about-two1.jpg'
											alt='About'
										/>
										<img
											src='/assets/images/about/about-two2.jpg'
											alt='About'
										/>
									</div>
									<div className='about-image-over'>
										<div className='about-image-over-item'>
											<img src='/assets/images/about/icon3.png' alt='Icon' />
											<h5>Wide Range Support</h5>
										</div>
										<div className='about-image-over-item'>
											<img src='/assets/images/about/icon4.png' alt='Icon' />
											<h5>Updated Materials</h5>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='about-content-two wow fadeInRight delay-0-2s'>
									<div className='section-title mb-30'>
										<span className='sub-title-two'>
											About Kairaa Blockchain Academy
										</span>
										<h2>
											We Are <span>Excellent</span> Choice to Learning
											Blockchain
										</h2>
									</div>
									<p>
										Kairaa Blockchain Academy is a leading online learning
										center that offers a wide range of blockchain and web 3.0
										skills to students around the world. With its focus on
										flexibility and support, Kairaa Blockchain Academy has
										become a popular choice for those looking to advance their
										education or learn the new technology.
									</p>
									<div className='about-btns'>
										<Link href='/#about'>
											<a className='theme-btn my-15'>
												Learn more <i className='fas fa-arrow-right' />
											</a>
										</Link>
										<Link href='/#about'>
											<a className='read-more'>
												What is Kairaa <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
									<div className='counter-wrap'>
										<div className='success-item'>
											<span className='count-text plus'>166</span>
											<span>Enrolled Learner</span>
										</div>
										<div className='success-item'>
											<span className='count-text plus'>62</span>
											<span>Finished Session</span>
										</div>
										<div className='success-item'>
											<span className='count-text percent'>99</span>
											<span>Satisfaction Rate</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* About Section End */}

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
										<h4>Learn technologies From Experts</h4>
										<p>
											Blockchain courses we provide students with in-depth,
											specialized knowledge.
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
										<h4>Over 300+ High Quality Topics</h4>
										<p>
											Topics cover a wide range of subjects, from data science
											and and much more.
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
											Kairaa Blockchain Academy keeps its students informed
											about events and programs.
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

				{/* Courses Section Start */}

				{/* <Index1Isotope /> */}

				<CourseGallery />

				{/* Courses Section End */}

				{/* Kairaa Section Start */}
				<section className='blog-section pb-100 pt-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-xl-6 col-lg-7 col-md-8'>
								<div className='section-title text-center mb-55'>
									<span className='sub-title mb-20'>About Kairaa</span>
									<h2>Kairaa in Blockchain Technology</h2>
								</div>
							</div>
						</div>
						<div className='row align-items-center'>
							<div className='col-12'>
								<div className='row'>
									<div className='col-4'>
										<div className='px-4 pb-3 pt-3 border-thin shadow-sm hover-shadow-md rounded-3'>
											<h2 className='sub-title-three my-1'>KAIT CRYPTO</h2>
											<p className='mb-1'>
												Kairaa has its own cryptocurrency, Name of KAIT. KAIT
												was created with the help of amazing blockchain
												technology.
											</p>
											<Link href='https://kaitcrypto.com/'>
												<a className='read-more'>
													About Kait <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
									<div className='col-4'>
										<div className='px-4 pb-3 pt-3 border-thin shadow-sm hover-shadow-md rounded-3'>
											<h2 className='sub-title-three my-1'>KARAA EXCHANGE</h2>
											<p className='mb-1'>
												The Kairaa exchange is a trading platform. You can buy
												and sell KAIT coins and other cryptocurrencies also.
											</p>
											<Link href='https://kairaaexchange.com/'>
												<a className='read-more'>
													Buy and sell <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
									<div className='col-4'>
										<div className='px-4 pb-3 pt-3 border-thin shadow-sm hover-shadow-md rounded-3'>
											<h2 className='sub-title-three my-1'>KAIT APP</h2>
											<p className='mb-1'>
												KAIT App is a new and exciting staking app that allows
												users to earn rewards for holding and staking their
												cryptocurrency.
											</p>
											<Link href='https://net.kaitcrypto.com/account/'>
												<a className='read-more'>
													Stack Kait <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='col-12 mt-50'>
								<div className='d-block d-lg-none mt-50'></div>
								<div className='content text-center'>
									<p>
										Kairaa provides blockchain-based and web 3.0-based services
										to customers. It offers several blockchain-based products,
										including a
										<a
											href='https://kairaaexchange.com/'
											className='text-primary mx-1'
										>
											cryptocurrency exchange
										</a>
										platform, an
										<a
											href='https://nftkairaa.com/'
											className='text-primary mx-1'
										>
											NFT marketplace
										</a>
										, and its own
										<a
											href='https://kaitcrypto.com/'
											className='text-primary mx-1'
										>
											cryptocurrency
										</a>
										also
										<a
											href='https://coincore.in/'
											className='text-primary mx-1'
										>
											crypto price listing
										</a>
										platform, and A
										<a
											href='http://kairaaacademy.com/'
											className='text-primary mx-1'
										>
											blockchain academy.
										</a>
										Kairaa offers a wide range of services to meet the needs of
										its customers businesses.
									</p>
									<Link href='/#about'>
										<a className='theme-btn my-15'>
											Learn more <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Kairaa Section End */}

				{/*Founder Section Start*/}
				<Founder />
				{/*Founder Section End*/}

				<Team />

				{/* Newsletter Section Start */}
				<section className='newsletter-section rpb-100 wow fadeInUp delay-0-2s'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='newsletter-video overlay'>
									<img src='/assets/images/video/video-bg.jpg' alt='Video' />
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='newsletter-content bg-lighter'>
									<div className='section-title mb-20'>
										<span className='sub-title mb-25'>Free Session</span>
										<h2>Participate in the training session</h2>
									</div>
									<p>
										Every Saturday, Kairaa Blockchain Academy offers a free
										blockchain overview demo class. Participants should register
										for the blockchain overview session as soon as possible
										(worth of 1,000 Rupees).
									</p>
									<div className='newsletter-radios mb-25'>
										<span className='custom-control pl-0 pr-5'>
											<i className='far fa-check-circle mx-2 text-success'></i>
											Free Demo
										</span>
										<span className='custom-control pl-0'>
											<i className='far fa-check-circle mx-2 text-success'></i>
											Worth of 1,000 Rs
										</span>
									</div>
									<Link href='/free-session' legacyBehavior>
										<a className='theme-btn'>
											Take part <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Newsletter Section End */}

				{/* Advertise Area Start */}
				<section className='advertise-area pb-90 pt-100 rpb-70'>
					<div className='container'>
						<Advertise loggedIn={auth} />
					</div>
				</section>
				{/* Advertise Area End */}
				{/* Event Section Start */}

				{/*Event Section End */}
				{/* Blog Section Start */}
				<section className='blog-section pb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-xl-6 col-lg-7 col-md-8'>
								<div className='section-title text-center mb-55'>
									<span className='sub-title mb-20'>News &amp; Blog</span>
									<h2>Check out the recent news &amp; blogs</h2>
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
											<span>25</span> Dec 22
										</span>
										<div className='content'>
											<h4>
												<Link href='#blog'>
													An Ultimate Guide: How To Use The Polygon Bridge For
													Blockchain Developers
												</Link>
											</h4>
											<ul className='blog-meta'>
												<li>
													<i className='far fa-user' />
													<Link href='/#blog'>By Chris</Link>
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
											<span>28</span> Dec 22
										</span>
										<div className='content'>
											<ul className='blog-meta'>
												<li>
													<i className='far fa-user' />
													<Link href='/#blog'>By Roman</Link>
												</li>
											</ul>
											<h5>
												<Link href='/#blog'>
													Why Are Smart Contracts A Potential...
												</Link>
											</h5>
											<p>A smart contract is a blockchain-based contract...</p>
											<Link href='/#blog'>
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
											<span>03</span> Jan 23
										</span>
										<div className='content'>
											<ul className='blog-meta'>
												<li>
													<i className='far fa-user' />
													<Link href='/#blog'>By Somalia</Link>
												</li>
											</ul>
											<h5>
												<Link href='/#blog'>
													Understanding the Interdependence of...
												</Link>
											</h5>
											<p>
												Web3 and Blockchain are often considered parallel...
											</p>
											<Link href='/#blog'>
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
							<Link href='/#blog'>
								<a className='theme-btn style-three'>
									view more news <i className='fas fa-arrow-right' />
								</a>
							</Link>
						</div>
					</div>
				</section>
				{/* Blog Section End */}
			</Layout>
		</ProtectedRoute>
	);
};
export default Index;
