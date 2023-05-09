/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Event = () => {
	return (
		<section className='event-section-three rel z-1'>
			<div className='container for-circle'>
				<div className='event-three-inner'>
					<div className='section-title text-center mb-40'>
						<span className='sub-title-three'>
							Events &amp; <span>Programs</span>
						</span>
						<h2>Browser Latest Events</h2>
					</div>
					<div className='row'>
						<div className='col-xl-6'>
							<div className='event-item-three wow fadeInUp delay-0-2s'>
								<div className='image'>
									<img
										src='/assets/images/events/event-three1.jpg'
										alt='Event'
									/>
									<span className='date'>March 15</span>
								</div>
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='contact'>
											Useful VS Code Extensions Front-End Developers
										</Link>
									</h4>
								</div>
								<Link href='/contact'>
									<a className='details-link'>
										<i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-xl-6'>
							<div className='event-item-three wow fadeInUp delay-0-4s'>
								<div className='image'>
									<img
										src='/assets/images/events/event-three2.jpg'
										alt='Event'
									/>
									<span className='date'>March 17</span>
								</div>
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='contact'>
											Roll New Features Without Hurting Loyal Users
										</Link>
									</h4>
								</div>
								<Link href='/contact'>
									<a className='details-link'>
										<i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-xl-6'>
							<div className='event-item-three wow fadeInUp delay-0-6s'>
								<div className='image'>
									<img
										src='/assets/images/events/event-three3.jpg'
										alt='Event'
									/>
									<span className='date'>March 19</span>
								</div>
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='contact'>
											Ethical Design The Practical Getting-Started Guide
										</Link>
									</h4>
								</div>
								<Link href='/contact'>
									<a className='details-link'>
										<i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-xl-6'>
							<div className='event-item-three wow fadeInUp delay-0-8s'>
								<div className='image'>
									<img
										src='/assets/images/events/event-three4.jpg'
										alt='Event'
									/>
									<span className='date'>March 23</span>
								</div>
								<div className='content'>
									<span className='location'>
										<i className='fas fa-map-marker-alt' /> 55 Main Street, USA
									</span>
									<h4>
										<Link href='contact'>
											Universal Principles Of User Experience Design
										</Link>
									</h4>
								</div>
								<Link href='/contact'>
									<a className='details-link'>
										<i className='fas fa-arrow-right' />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='event-more-btn text-center pt-15'>
						<Link href='/blog'>
							<a className='theme-btn style-five'>
								view more events <i className='fas fa-arrow-right' />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Event;
