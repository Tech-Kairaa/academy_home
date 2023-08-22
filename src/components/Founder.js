/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Founder = () => {
	return (
		<section className='bg-lighter py-100'>
			<div className='container'>
				<div className='row shadow-lg align-content-center'>
					<div className='col-md-4 p-0'>
						<div className='position-relative'>
							<img
								src='/assets/images/teams/founder.jpg'
								className='founder-image'
								alt='Kairaa Blockchain Academy Founder'
							/>
						</div>
					</div>
					<div className='col-md-8 bg-light py-30 px-5'>
						<h2 className='text-uppercase mt-1 mb-0'>Mr Agilan</h2>
						<h4
							className='mt-0 mb-1 font-weight-lighter font-italic'
							style={{ fontFamily: 'initial' }}
						>
							Founder and CEO of Kairaa
						</h4>
						<p className='mt-10'>
							<span className='lead font-weight-bold'>A</span>s the CEO of
							Kairaa, we strive to provide innovative solutions and exceptional
							services that meet our clients unique needs. We prioritize
							building strong relationships with our clients and exceeding their
							expectations. <span className='lead font-weight-bold'>O</span>ur
							Kairaa Blockchain Academy offers industry-leading education and
							training to help professionals thrive in the rapidly evolving
							blockchain industry. With our expertise, we equip individuals and
							teams with the skills and expertise needed to stay ahead of the
							curve and succeed in the fast-growing blockchain industry.
						</p>
						<div className='social-style-two'>
							<a href='#'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#'>
								<i className='fab fa-instagram'></i>
							</a>
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='#'>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Founder;