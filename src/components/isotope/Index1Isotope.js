/* eslint-disable @next/next/no-img-element */
import Isotope from 'isotope-layout';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
const Index1Isotope = () => {
	// Isotope
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState('*');
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope('.coach-active', {
				itemSelector: '.item',
				//    layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: '.item',
				},
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				},
			});
		}, 1000);
		//     return () => isotope.current.destroy();
	}, []);
	useEffect(() => {
		if (isotope.current) {
			filterKey === '*'
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey]);
	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
	};
	const activeBtn = (value) => (value === filterKey ? 'current' : '');
	return (
		<section className='coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-6 col-lg-7 col-md-8'>
						<div className='section-title text-center mb-40'>
							<h2>
								Most Popular <span>Courses</span> of Kairaa Academy
							</h2>
						</div>
					</div>
				</div>
				<ul className='coach-filter mb-35'>
					<li
						data-filter='*'
						className={`c-pointer ${activeBtn('*')}`}
						onClick={handleFilterKeyChange('*')}
					>
						Show All
					</li>
					<li
						data-filter='.development'
						className={`c-pointer ${activeBtn('development')}`}
						onClick={handleFilterKeyChange('development')}
					>
						Development
					</li>
					<li
						data-filter='.business'
						className={`c-pointer ${activeBtn('business')}`}
						onClick={handleFilterKeyChange('business')}
					>
						Business
					</li>
					<li
						data-filter='.design'
						className={`c-pointer ${activeBtn('design')}`}
						onClick={handleFilterKeyChange('design')}
					>
						Design
					</li>
					<li
						data-filter='.software'
						className={`c-pointer ${activeBtn('software')}`}
						onClick={handleFilterKeyChange('software')}
					>
						IT &amp; Software
					</li>
					<li
						data-filter='.marketing'
						className={`c-pointer ${activeBtn('marketing')}`}
						onClick={handleFilterKeyChange('marketing')}
					>
						Marketing
					</li>
				</ul>
				<div className='row coach-active justify-content-center'>
					<div className='col-lg-4 col-md-6 item marketing'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>MARKETING</a>
								</Link>
								<img src='/assets/images/coaches/coach6.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>PRODUCTS ANALYSIS</span>
								<h4>
									<Link href='/course-details'>
										How to find, analyze and target your right costumer online
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<i className='far fa-star' />
										<span>(2.8k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>17 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>16.18 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item development'>
						<div className='coach-item wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Development</a>
								</Link>
								<img src='/assets/images/coaches/coach2.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>REACT NODE MONGODB</span>
								<h4>
									<Link href='/course-details'>
										The Complete 2023 Web Development Bootcamp
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<span>(3.4k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>32 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>36.20 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item design'>
						<div className='coach-item wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Design</a>
								</Link>
								<img src='/assets/images/coaches/coach5.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>EDITING DESIGNING</span>
								<h4>
									<Link href='/course-details'>
										Photoshop Master Course: From Beginner to Photoshop Pro
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='far fa-star' />
										<span>(4.1k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>42 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>52.20 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item development photography'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Development</a>
								</Link>
								<img src='/assets/images/coaches/coach3.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>ELECTRON JS</span>
								<h4>
									<Link href='/course-details'>
										Electron for Desktop Apps: The Complete Developers Guide
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<i className='far fa-star' />
										<span>(2.7k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>21 Lessions</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>25.00 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item business'>
						<div className='coach-item wow fadeInUp delay-0-2s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Business</a>
								</Link>
								<img src='/assets/images/coaches/coach4.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>DIGITAL PRODUCTS</span>
								<h4>
									<Link href='/course-details'>
										Online Business Masterclass: Sell Your Own Digital Products
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<i className='far fa-star' />
										<span>(2.9k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>16 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>26.32 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item software'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>IT & Software</a>
								</Link>
								<img src='/assets/images/coaches/coach6.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>DEEP LEARNING</span>
								<h4>
									<Link href='/course-details'>
										Deep Learning Prerequisites: Linear Regression in Python
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='far fa-star' />
										<i className='far fa-star' />
										<span>(1.7k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>12 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>13.42 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item development photography'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Development</a>
								</Link>
								<img src='/assets/images/coaches/coach3.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>FLUTTER DARK</span>
								<h4>
									<Link href='/course-details'>
										The Complete Flutter Development Bootcamp with Dart
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='far fa-star' />
										<span>(2.3k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>19 Lessions</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>28.40 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item business'>
						<div className='coach-item wow fadeInUp delay-0-2s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Business</a>
								</Link>
								<img src='/assets/images/coaches/coach4.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>ANALYSIS</span>
								<h4>
									<Link href='/course-details'>
										Business Analysis: Functional & Non-Functional
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<i className='far fa-star' />
										<span>(2.7k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>18 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>23.10 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 item design'>
						<div className='coach-item wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>Design</a>
								</Link>
								<img src='/assets/images/coaches/coach5.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>DRAWINGS DESIGNING</span>
								<h4>
									<Link href='/course-details'>
										72 AutoCAD 2D & 3D Drawings and Practical Projects
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='far fa-star' />
										<i className='far fa-star' />
										<span>(2.1k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>38 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>26.20 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item software'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>IT & Software</a>
								</Link>
								<img src='/assets/images/coaches/coach6.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>DEVELOPMENT OPERATIONS</span>
								<h4>
									<Link href='/course-details'>
										The Complete DevOps Engineer Course 2.0 - Java & Kubernetes
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='far fa-star' />
										<span>(1.4k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>15 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>17.03 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 item marketing'>
						<div className='coach-item wow fadeInUp delay-0-6s'>
							<div className='coach-image'>
								<Link href='/course-grid'>
									<a className='category'>MARKETING</a>
								</Link>
								<img src='/assets/images/coaches/coach6.jpg' alt='Coach' />
							</div>
							<div className='coach-content'>
								<span className='label'>FACEBOOK YOUTUBE & ETC</span>
								<h4>
									<Link href='/course-details'>
										The Social Media Marketing & Management - 2023
									</Link>
								</h4>
								<div className='ratting-price'>
									<div className='ratting'>
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star' />
										<i className='fas fa-star-half-alt' />
										<i className='far fa-star' />
										<span>(3.1k)</span>
									</div>
									<span className='price'>256.95</span>
								</div>
								<ul className='coach-footer'>
									<li>
										<i className='far fa-file-alt' />
										<span>28 Sections</span>
									</li>
									<li>
										<i className='far fa-clock' />
										<span>31.17 Hours</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Index1Isotope;
