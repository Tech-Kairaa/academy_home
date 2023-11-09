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
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/about'>About Us</Link>
			</li>
			<li>
				<Link href='/courses'>Courses</Link>
			</li>
			<li>
				<Link href='/contact'>Contact</Link>
			</li>
		</Fragment>
	),
	Resources = () => (
		<Fragment>
			<li>
				<Link href='/blog'>Latest Blogs</Link>
			</li>
			<li>
				<Link href='/faq'>FAQ&apos;s</Link>
			</li>
			<li>
				<Link href='/privacy-policy'>Privacy Policy</Link>
			</li>
			<li>
				<Link href='/terms-condition'>Our Terms</Link>
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
								Kairaa Blockchain Academy is a top-notch online learning center
								that offers a wide range of courses.
							</p>
							<Link href='/about'>
								<a className='theme-btn style-two'>Learn More</a>
							</Link>
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
											<i className='bi bi-envelope-fill mt-0' />
											support@kairaa.in
										</li>
										<li>
											<i className='bi bi-telephone-fill mt-0' />
											<a href='callto:+0123456789'>+91-709-277-4077</a>
										</li>
										<li>
											<i className='bi bi-geo-alt-fill mt-0' /> 131, 2nd floor, DB Road, RS Puram, Coimbatore - 641002.
										</li>
									</ul>
								</div>
							</div>
							<div className='col-sm-6'>
								<div className='footer-widget video-widget pb-6'>
									<p>
										Join our Blockchain Academy today and embark on a journey of
										endless possibilities. Don&apos;t miss out on the chance to
										enhance your blockchain knowledge.
									</p>
									<Link href='/signup'>
										<a className='theme-btn style-two'>Signup</a>
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
						<div className='social-style-one'>
							<FollowIcon />
						</div>
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
