/* eslint-disable @next/next/no-img-element */
import server from '@/providers/server';
import { loadState } from '@/providers/storage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { stickyNav } from '../utils';
import MobileHeader from './MobileHeader';

const Header = ({ header, topbar }) => {
	const router = useRouter();
	useEffect(() => stickyNav(), []);
	const [navToggle, setNavToggle] = useState(false);
	const user = useSelector((state) => state.auth.userProfile);
	const [profileCard, showCard] = useState(false);

	const logout = async () => {
		const isTrue = confirm('Do you want to logout?');
		if (!isTrue) return;
		try {
			await server.get('/auth/logout/learner');
			toast.success('Logged out safely');
			router.reload();
		} catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
		}
	};

	return (
		<>
			{header && (
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
									<nav className='main-menu navbar-expand-lg'>
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
									{!user && (
										<>
											<Link href='/learner/login'>
												<a className='theme-btn style-one py-2 me-2'>LogIn</a>
											</Link>
											<Link href='/learner/signup'>
												<a className='theme-btn style-two py-2 ms-2'>SignUp</a>
											</Link>
										</>
									)}

									{user && (
										<>
											<button
												className='theme-btn style-one px-3'
												onClick={() => showCard(!profileCard)}
											>
												<em className='fa fa-user-alt'></em>
											</button>
										</>
									)}
								</div>
							</div>
							{profileCard && (
								<div
									className='position-relative'
									onMouseLeave={() => showCard(false)}
								>
									<div
										className='position-absolute z-2 bg-light shadow-lg rounded-2 p-25'
										style={{
											right: 0,
											top: 0,
											width: '250px',
										}}
									>
										{user && (
											<div className='text-center mb-3'>
												<h5 className='m-0 p-0 lead fw-bolder text-uppercase'>
													{user.name}
												</h5>
												<p className='m-0 p-0' style={{ fontSize: '13px' }}>
													{user.email}
												</p>
											</div>
										)}
										<Link
											href={{
												pathname: 'https://learner.kairaaacademy.com/',
												query: loadState('AUTH'),
											}}
										>
											<a
												className='theme-btn style-one w-100 mb-2'
												target='_blank'
											>
												Dashboard
											</a>
										</Link>
										<button
											onClick={logout}
											className='theme-btn style-three mt-10 w-100'
										>
											Logout
										</button>
									</div>
								</div>
							)}
						</div>
					</div>

					{/*End Header Upper*/}
				</header>
			)}
		</>
	);
};
export default Header;

const Menus = () => {
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
			<li className={activeItem === '/workshops' ? 'current' : ''}>
				<Link href='/workshops'>
					<a className='bg-theme-primary px-3 rounded-5'>Exclusive workshops</a>
				</Link>
			</li>
			<li className={activeItem === '/courses' ? 'current' : ''}>
				<Link href='/courses'>
					<a>Courses</a>
				</Link>
			</li>
			<li className={activeItem === '/career' ? 'current' : ''}>
				<Link href='/career'>
					<a>Career</a>
				</Link>
			</li>

			<li className={activeItem === '/contact' ? 'current' : ''}>
				<Link href='/contact'>
					<a>Contact</a>
				</Link>
			</li>

			{/* <li className='dropdown'>
				<a href='#'>blog</a>
				<ul>hi</ul>
				<div className='dropdown-btn'>
					<span className='fas fa-chevron-down' />
				</div>
			</li> */}
		</ul>
	);
};

const HeaderTop = () => (
	<div className='header-top bg-light-blue text-white'>
		<div className='container'>
			<div className='top-inner'>
				<div className='top-left d-flex'>
					<p className='px-3'>
						<i className='far fa-envelope' /> Support@kairaaacademy.com
					</p>
					<p className='px-3'>
						<i className='fas fa-phone-alt pe-1' />
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
