/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Advertise from '@/components/Advertise';
import Layout from '@/layouts/Layout';
import Founder from '@/components/Founder';
import CourseGallery from '@/components/CourseGallery';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import ProtectedRoute from '@/components/ProtectedRoute';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';

const Index = () => {
	const auth = useSelector((state) => state.auth.loginState);
	const [showModal, setShowModal] = useState(false);
	const handleCloseModal = () => setShowModal(false);
	const triggerModal = () => setShowModal(true);

	// useEffect(() => triggerModal(), []);

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
								<div className='hero-three-image-part ps-0'>
									<img src='/assets/images/hero.png' alt='Hero' />
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
										Master blockchain skills for success
									</span>
									<h1 className='mb-25 wow fadeInUp delay-0-4s'>
										Discover Blockchain Technology with
										<span>Kairaa Academy&apos;s</span> Online Courses.
									</h1>
									<p className='lead'>
										Kairaa Academy is the leading provider of online blockchain
										courses. We offer a wide range of courses to meet the needs
										of students of all levels of experience, from beginners to
										advanced learners.
									</p>
									<ul className='list-style-one wow fadeInUp delay-0-6s'>
										<li>Comprehensive blockchain courses</li>
										<li>Online video tutorials and best practices </li>
									</ul>
									<div className='hero-btns mt-10 wow fadeInUp delay-0-8s'>
										{!auth && (
											<>
												<Link href='/courses'>
													<a className='theme-btn mt-10 me-2'>
														Buy Courses <i className='fas fa-arrow-right' />
													</a>
												</Link>
												<Link href='/career'>
													<a className='theme-btn style-two mt-10 ms-2'>
														Start Career <i className='fas fa-arrow-right' />
													</a>
												</Link>
											</>
										)}

										{auth === 'loggedIn' && (
											<>
												<Link href='/courses'>
													<a className='theme-btn mt-10 me-2'>
														Latest courses <i className='fas fa-arrow-right' />
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
						<div className='row large-gap mb-30 align-items-center'>
							<div className='col-lg-6'>
								<div className='feature-six-left wow fadeInUp delay-0-2s'>
									<div className='section-title'>
										<span className='sub-title-three'>Why Learn Here?</span>
										<h2>
											We offer innovative <span>online</span> classroom
										</h2>
									</div>
								</div>
							</div>
							<div className='col-lg-5'>
								<div className='feature-six-right rpt-0 wow fadeInUp delay-0-4s'>
									<p>
										Kairaa Blockchain Academy&apos;s outstanding feature is its
										wide range of educational materials, designed to assist
										students in understanding and retaining the subject by
										offering a diverse collection of learning resources.
									</p>
								</div>
							</div>
						</div>
						<div className='row mt-50'>
							<div className='col-lg-3 col-sm-6'>
								<div className='feature-six-item mt-30 wow fadeInUp delay-0-2s'>
									<div className='content'>
										<div className='icon'>
											<img
												src='/assets/images/features/reading.png'
												alt='Icon'
												className='w-25'
											/>
										</div>
										<h5>Exclusive Courses</h5>
										<p>
											Kairaa blockchain academy: Learn blockchain online at your
											own pace, with courses for all levels.
										</p>
									</div>
									{/* <Link href='/#about'>
										<a className='read-more color-two'>
											read more <i className='fas fa-arrow-right' />
										</a>
									</Link> */}
								</div>
							</div>
							<div className='col-lg-3 col-sm-6'>
								<div className='feature-six-item wow fadeInUp delay-0-4s'>
									<div className='content'>
										<div className='icon'>
											<img
												src='/assets/images/features/video.png'
												alt='Icon'
												className='w-25'
											/>
										</div>
										<h5>Video Tutorials</h5>
										<p>
											Learn blockchain at your own pace and on your own schedule
											with our online video tutorials.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-sm-6'>
								<div className='feature-six-item mt-30 wow fadeInUp delay-0-6s'>
									<div className='content'>
										<div className='icon'>
											<img
												src='/assets/images/features/social-media.png'
												alt='Icon'
												className='w-25'
											/>
										</div>
										<h5>Flexibility</h5>
										<p>
											Learn blockchain from anywhere in the world, at any time
											of day or night, with flexible online video tutorials.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-sm-6'>
								<div className='feature-six-item wow fadeInUp delay-0-8s'>
									<div className='content'>
										<div className='icon'>
											<img
												src='/assets/images/features/money-bag.png'
												alt='Icon'
												className='w-25'
											/>
										</div>
										<h5>Cost Efficiency</h5>
										<p>
											Save money on blockchain education with Kairaa blockchain
											academys cost-effective online courses.
										</p>
									</div>
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
										<img src='/assets/images/about/about_3.png' alt='About' />
										<img src='/assets/images/about/about_2.png' alt='About' />
									</div>
									{/* <div className='about-image-over'>
										<div className='about-image-over-item'>
											<img src='/assets/images/about/icon3.png' alt='Icon' />
											<h5>Wide Range Support</h5>
										</div>
										<div className='about-image-over-item'>
											<img src='/assets/images/about/icon4.png' alt='Icon' />
											<h5>Updated Materials</h5>
										</div>
									</div> */}
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='about-content-two wow fadeInRight delay-0-2s'>
									<div className='section-title mb-30'>
										<span className='sub-title-two'>About Kairaa Academy</span>
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
										<Link href='/about'>
											<a className='theme-btn my-15'>
												Learn more <i className='fas fa-arrow-right' />
											</a>
										</Link>
										<Link href='https://www.kairaatechserve.com'>
											<a className='read-more' target='_blank'>
												What is Kairaa <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
									{/* <div className='counter-wrap'>
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
									</div> */}
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
										<img
											src='/assets/images/features/verified.png'
											className='w-50'
											alt='Icon'
										/>
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
										<img
											src='/assets/images/features/open-book.png'
											alt='Icon'
											className='w-50'
										/>
									</div>
									<div className='content'>
										<h4>Over 30+ High Quality Topics</h4>
										<p>
											Topics cover a wide range of subjects, from blockchain and
											and much more.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4 col-md-6'>
								<div className='feature-item wow fadeInUp delay-0-6s'>
									<div className='image'>
										<img
											src='/assets/images/features/video-player.png'
											className='w-50'
											alt='Icon'
										/>
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
				{/* <section className='blog-section pb-100 pt-100'>
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
										<div className='coach-item-three wow fadeInUp delay-0-2s animated animated border rounded-2'>
											<div className='content'>
												<h4 className='pb-0 mb-2'>
													KAIT Coin - A fastest growing cryptocurrency{' '}
												</h4>
												<p>
													Kairaa has its own cryptocurrency, Name of KAIT. KAIT
													was created with the help of amazing blockchain
													technology.
												</p>
												<div className='author'>
													<Link href='https://kaitcoin.com/'>
														<a className='theme-btn' target='_blank'>
															Buy kaitcoin
															<i className='fas fa-arrow-right'></i>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='col-4'>
										<div className='coach-item-three wow fadeInUp delay-0-2s animated animated border rounded-2'>
											<div className='content'>
												<h4 className='pb-0 mb-2'>
													Kairaa Exchange - Crypto exchange for trade
												</h4>
												<p>
													The Kairaa exchange is a trading platform. You can buy
													and sell KAIT coins and other cryptocurrencies also.
												</p>
												<div className='author'>
													<Link href='https://kairaaexchange.com/'>
														<a className='theme-btn' target='_blank'>
															Trade cryptos
															<i className='fas fa-arrow-right'></i>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='col-4'>
										<div className='coach-item-three wow fadeInUp delay-0-2s animated animated border rounded-2'>
											<div className='content'>
												<h4 className='pb-0 mb-2'>
													KAIT Stack - A Crytocurrency stacking application
												</h4>
												<p>
													KAIT App is a new and exciting staking app that allows
													users to earn rewards for holding and staking their
													cryptocurrency.
												</p>
												<div className='author'>
													<Link href='https://play.google.com/store/apps/details?id=com.Kaitstaking.kait&pcampaignid=web_share'>
														<a className='theme-btn' target='_blank'>
															Download App
															<i className='fas fa-arrow-right'></i>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-12 mt-20'>
								<div className='d-block d-lg-none mt-50'></div>
								<div className='content text-center'>
									<p>
										Kairaa provides blockchain-based and web 3.0-based services
										to customers. It offers several blockchain-based products,
										including a
										<a
											href='https://kairaaexchange.com/'
											className='text-primary mx-1'
											target='_blank'
											rel='noreferrer'
										>
											cryptocurrency exchange
										</a>
										platform, an
										<a
											href='https://nftkairaa.com/'
											className='text-primary mx-1'
											target='_blank'
											rel='noreferrer'
										>
											NFT marketplace
										</a>
										, and its own
										<a
											href='https://kaitcoin.com/'
											className='text-primary mx-1'
											target='_blank'
											rel='noreferrer'
										>
											cryptocurrency
										</a>
										also
										<a
											href='https://coincore.in/'
											className='text-primary mx-1'
											target='_blank'
											rel='noreferrer'
										>
											crypto price listing
										</a>
										platform, and A
										<a
											href='http://kairaaacademy.com/'
											className='text-primary mx-1'
											target='_blank'
											rel='noreferrer'
										>
											blockchain academy.
										</a>
										Kairaa offers a wide range of services to meet the needs of
										its customers businesses.
									</p>
									<Link href='http://www.kairaatechserve.com'>
										<a className='theme-btn style-two my-15' target='_blank'>
											Learn more <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section> */}
				{/* Kairaa Section End */}

				{/*Founder Section Start*/}
				{/* <Founder /> */}
				{/*Founder Section End*/}

				{/* <Team /> */}

				{/* Advertise Area Start */}
				<section className='advertise-area pb-50 pt-100 rpb-70'>
					<div className='container'>
						<Advertise loggedIn={auth} />
					</div>
				</section>
				{/* Advertise Area End */}

				{/* Newsletter Section Start */}
				<section className='newsletter-section mb-100 rpb-100 wow fadeInUp delay-0-2s'>
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
									<div className='newsletter-radios mb-25 gap-3'>
										<span className='custom-control pl-0 pr-5'>
											<i className='far fa-check-circle mx-2 text-success'></i>
											Free Demo
										</span>
										<span className='custom-control pl-0'>
											<i className='far fa-check-circle mx-2 text-success'></i>
											Worth of 1,000 Rs
										</span>
									</div>
									<button
										className='btn theme-btn'
										onClick={() => toast.info('Will preparing for you!')}
									>
										Coming soon! <i className='fas fa-arrow-right' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Newsletter Section End */}

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
				{showModal && (
					<Modal show={showModal} handleClose={handleCloseModal} transparent>
						<div className='d-flex justify-content-center'>
							<Image
								src={'/event.jpeg'}
								alt='Event'
								className='w-100 h-100'
								height={550}
								width={550}
							/>
						</div>
					</Modal>
				)}
			</Layout>
		</ProtectedRoute>
	);
};
export default Index;
