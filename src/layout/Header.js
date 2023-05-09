/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { stickyNav } from '../utils';
import MobileHeader from './MobileHeader';
import { useRouter } from 'next/router';

const Header = ({ header, topbar }) => {
	useEffect(() => {
		stickyNav();
	}, []);
	const [navToggle, setNavToggle] = useState(false);
	if (header) {
		return (
			<HeaderItems
				navToggle={navToggle}
				setNavToggle={setNavToggle}
				topbar={topbar}
			/>
		);
	}
};
export default Header;
const HeaderItems = ({ navToggle, setNavToggle, topbar }) => (
		<Fragment>
			<header className='main-header'>
				<div className='d-none d-md-block'>{topbar && <HeaderTop />}</div>
				<div className='header-upper'>
					<div className='container-fluid clearfix'>
						<div className='header-inner d-flex align-items-center justify-content-between'>
							<div className='logo-outer d-lg-flex align-items-center'>
								<div className='logo'>
									<Link href='/'>
										<a>
											<img
												src='/assets/images/logos/logo.png'
												alt='Logo'
												title='Logo'
											/>
										</a>
									</Link>
								</div>
							</div>
							<div className='nav-outer clearfix'>
								{/* Main Menu */}
								<nav className='main-menu navbar-expand-lg mt-20'>
									<div className='navbar-header align-items-center mb-15'>
										<div className='mobile-logo br-10'>
											<Link href='/'>
												<a>
													<img
														src='/assets/images/logos/logo.png'
														alt='Logo'
														title='Logo'
														width='80%'
													/>
												</a>
											</Link>
										</div>
										{/* Toggle Button */}
										<button
											type='button'
											className='navbar-toggle'
											data-toggle='collapse'
											data-target='.navbar-collapse'
											onClick={() => setNavToggle(!navToggle)}
										>
											<span className='icon-bar' />
											<span className='icon-bar' />
											<span className='icon-bar' />
										</button>
									</div>
									<div
										className={`navbar-collapse collapse clearfix ${
											navToggle ? 'show' : ''
										}`}
									>
										<Menus />
										<MobileHeader />
									</div>
								</nav>
								{/* Main Menu End*/}
							</div>
							{/* Menu Button */}
							<div className='menu-btn-sidebar d-none d-md-flex align-items-center'>
								{/* <button
									className='menu-sidebar btn'
									onClick={() => sidebarOnclick()}
								>
									<span className='far fa-paper-plane' />
								</button> */}
								<Link href='/learner/signin'>
									<a className='theme-btn style-one py-2 me-2'>SignIn</a>
								</Link>
								<Link href='/learner/signup'>
									<a className='theme-btn style-two py-2 ms-2'>SignUp</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/*End Header Upper*/}
			</header>
		</Fragment>
	),
	Menus = () => {
		const router = useRouter();
		const [activeItem, setActiveItem] = useState(router.asPath);

		return (
			<ul className='navigation clearfix d-none d-lg-flex'>
				<li className={activeItem === '/' ? 'current' : ''}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li className={activeItem === '/about' ? 'current' : ''}>
					<Link href='/about'>
						<a>About us</a>
					</Link>
				</li>
				<li className={activeItem === '/courses' ? 'current' : ''}>
					<Link href='/courses'>
						<a>Courses</a>
					</Link>
				</li>
				<li className={activeItem === '/become-instructor' ? 'current' : ''}>
					<Link href='/instructor'>
						<a>Became a instructor</a>
					</Link>
				</li>
				<li className={activeItem === '/contact' ? 'current' : ''}>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
				{/*
			<li className='dropdown'>
				<a href='#'>blog</a>
				<ul>
					<Blog />
				</ul>
				<div className='dropdown-btn'>
					<span className='fas fa-chevron-down' />
				</div>
			</li> */}
			</ul>
		);
	},
	HeaderTop = () => (
		<div className='header-top bg-light-blue text-white'>
			<div className='container'>
				<div className='top-inner'>
					<div className='top-left d-flex'>
						<p className='px-3'>
							<i className='far fa-envelope' /> Support@kairaaacademy.com
						</p>
						<p className='px-3'>
							<i className='fas fa-phone-alt pr-1' />
							+91-7092774077
						</p>
					</div>
					<div className='top-right d-flex align-items-center'>
						<div className='social-style-two'>
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
						</div>
						<ul className='top-menu'>
							<li>
								<Link href='/faqs'>
									<a>Blogs</a>
								</Link>
							</li>
							<li>
								<Link href='/faqs'>
									<a>Faqs</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
