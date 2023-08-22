/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Fragment } from 'react';
import Newsletters from '../components/Newsletters';

const Footer = ({ footer, newsletter }) => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	if (footer) {
		return <FooterItems scrollTop={scrollTop} newsletter={newsletter} />;
	}
};
export default Footer;
const FollowIcon = () => (
		<Fragment>
			<Link href='https://www.facebook.com/profile.php?id=100088443571314'>
				<a target='_blank'>
					<i className='fab fa-facebook-f' />
				</a>
			</Link>
			<Link href='https://twitter.com/Kairaa_academy'>
				<a target='_blank'>
					<i className='fab fa-twitter' />
				</a>
			</Link>
			<Link href='https://www.instagram.com/kairaaacademy/'>
				<a target='_blank'>
					<i className='fab fa-instagram' />
				</a>
			</Link>
			<Link href='https://www.linkedin.com/company/kairaa-academy/?viewAsMember=true'>
				<a target='_blank'>
					<i className='fab fa-linkedin' />
				</a>
			</Link>
		</Fragment>
	),
	Courses = () => (
		<Fragment>
			<li>
				<Link href='/course-details'>Home</Link>
			</li>
			<li>
				<Link href='/course-details'>About Us</Link>
			</li>

			<li>
				<Link href='/course-details'>Career</Link>
			</li>
			<li>
				<Link href='/course-details'>Enroll</Link>
			</li>
			<li>
				<Link href='/course-details'>Contact</Link>
			</li>
		</Fragment>
	),
	Resources = () => (
		<Fragment>
			<li>
				<Link href='/contact'>Community</Link>
			</li>
			<li>
				<Link href='/contact'>Support</Link>
			</li>
			<li>
				<Link href='/contact'>Video Guides</Link>
			</li>
			<li>
				<Link href='/contact'>Documentation</Link>
			</li>
			<li>
				<Link href='/contact'>Latest Blogs</Link>
			</li>
		</Fragment>
	),
	FooterBottom = () => (
		<Fragment>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/#about'>About</Link>
			</li>
			<li>
				<Link href='/#courses'>Enroll</Link>
			</li>
			<li>
				<Link href='/#contact'>Contact</Link>
			</li>
		</Fragment>
	),
	CopyRight = () => (
		<p>
			© {new Date().getFullYear()}. <Link href='/'>Kairaaacademy.COM</Link>
		</p>
	),
	FooterItems = ({ scrollTop, newsletter }) => (
		<footer className='main-footer bg-blue'>
			<div className='container'>
				{newsletter && <Newsletters />}
				<div className='row justify-content-between text-white pt-75'>
					<div className='col-lg-3 col-sm-4'>
						<div className='footer-widget about-widget pb-6'>
							<h5 className='footer-title'>About Us</h5>
							<p>
								Kairaa Blockchain Academy is a top-notch online learning center that offers
								a wide range of courses.
							</p>
							<h5 className='pt-5'>Follow Us</h5>
							<div className='social-style-one'>
								<FollowIcon />
							</div>
						</div>
					</div>
					<div className='col-lg-2 col-md-3 col-sm-4'>
						<div className='footer-widget menu-widget pb-6'>
							<h5 className='footer-title'>Quick Links</h5>
							<ul>
								<Courses />
							</ul>
						</div>
					</div>
					<div className='col-lg-2 col-md-3 col-sm-4'>
						<div className='footer-widget menu-widget pb-6'>
							<h5 className='footer-title'>Resources</h5>
							<ul>
								<Resources />
							</ul>
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='row'>
							<div className='col-sm-6'>
								<div className='footer-widget contact-info-widget pb-6'>
									<h5 className='footer-title'>Get In Touch</h5>
									<ul>
										<li>
											<i className='far fa-envelope' />{' '}
											<a href='mailto:support@kairaaacademy.com'>
												Support@
												<br />
												kairaaacademy.com
											</a>
										</li>
										<li>
											<i className='fas fa-phone' />{' '}
											<a href='callto:+0123456789'>+91-7092774077</a>
										</li>
										<li>
											<i className='far fa-clock' /> Monday - Saturday,
											<br /> 09 am - 09 pm
										</li>
									</ul>
								</div>
							</div>
							<div className='col-sm-6'>
								<div className='footer-widget video-widget pb-6'>
									<h5 className='footer-title'>Interview Preparation</h5>
									<div className='video-widget overlay my-20'>
										<img src='/assets/images/footer/video.jpg' alt='Video' />
										<a
											href='https://www.youtube.com/watch?v=9Y7ma241N8k'
											className='mfp-iframe video-play'
										>
											<i className='fas fa-play' />
										</a>
									</div>
									<Link href='/about'>
										<a className='read-more'>
											view more <i className='fas fa-arrow-right' />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright-area bg-dark-blue text-white rel'>
				<div className='container'>
					<div className='copyright-inner'>
						<CopyRight />
						<ul className='footer-menu'>
							<FooterBottom />
						</ul>
					</div>
				</div>
				{/* Scroll Top Button */}
				<button
					className='scroll-top scroll-to-target'
					data-target='html'
					style={{ display: 'inline-block' }}
					onClick={() => scrollTop()}
				>
					<span className='fas fa-angle-double-up' />
				</button>
			</div>
		</footer>
	);
