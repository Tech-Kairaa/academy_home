/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import advertise1 from '/public/assets/images/advertise/1.png';
import advertise2 from '/public/assets/images/advertise/2.png';
const Advertise = ({ loggedIn }) => {
	return (
		<div className='row'>
			<div className='col-lg-6'>
				<div className='advertise-item wow fadeInUp delay-0-2s'>
					<div className='content'>
						<h4>Start Your Career</h4>
						<p>
							Kairaa is a great place to start your career in the IT industry.
							The company offers a variety of opportunities for growth.
						</p>
						<Link href='/career'>
							<a className='theme-btn'>
								Join with us <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
					<div className='image'>
						<img src={advertise1.src} alt='Advertise' />
					</div>
				</div>
			</div>
			<div className='col-lg-6'>
				<div className='advertise-item bg-two wow fadeInUp delay-0-4s'>
					<div className='content'>
						<h4>Learn Blockchain</h4>
						<p>
							We offers a wide range of blockchain <br /> courses that are
							designed to help <br /> students advance their education.
						</p>
						<Link href='/courses'>
							<a className='theme-btn style-two'>
								Buy Course <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
					<div className='image'>
						<img src={advertise2.src} alt='Advertise' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Advertise;
