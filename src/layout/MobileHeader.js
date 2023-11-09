import Link from 'next/link';
import { useState } from 'react';

const MobileHeader = () => {
	const NavItems = ({ title, link }) => {
		return (
			<li className='bg-light mb-2 w-100 text-center'>
				<Link href={link}>{title}</Link>
			</li>
		);
	};

	const [activeMenu, setActiveMenu] = useState('');
	return (
		<ul className='navigation d-block d-lg-none mobile-header d-flex flex-column align-items-center'>
			<NavItems title='Home' link='/' />
			<NavItems title='About Us' link='/about' />
			<NavItems title='Courses' link='/courses' />
			<NavItems title='Become a instructor' link='/become-instructor' />
			<NavItems title='Contact' link='/contact' />
			<NavItems title='Blog' link='/blog' />
			<NavItems title='Faq' link='/faqs' />
			<li className='my-2 w-100'>
				<Link href='/account/signin'>
					<a className='theme-btn style-one text-white mb-3 px-5 text-center'>
						SignIn
					</a>
				</Link>
				<Link href='/account/signup'>
					<a className='theme-btn style-two text-white w-100 text-center'>
						SignUp
					</a>
				</Link>
			</li>
			<li></li>
		</ul>
	);
};
export default MobileHeader;
