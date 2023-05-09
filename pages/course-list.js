/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Pagination from '../src/Pagination';
const CourseList = () => {
	return (
		<Layout>
			<PageBanner pageName={'Course List'} />
			<section className='course-list-area py-130 rpt-95 rpb-100'>
				<div className='container'>
					<div className='row large-gap'>
						<div className='col-lg-8'>
							<div className='course-list-wrap'>
								<div className='shop-shorter mb-40 wow fadeInUp delay-0-2s'>
									<div className='sort-text'>
										Showing <b>85</b> Courses For 505 Course
									</div>
									<ul className='grid-list'>
										<li>
											<a href='#'>
												<i className='fas fa-list-ul' />
											</a>
										</li>
										<li>
											<a href='#' className='active'>
												<i className='fas fa-border-all' />
											</a>
										</li>
									</ul>
									<div className='products-dropdown'>
										<select>
											<option value='default'>Filter by</option>
											<option value='new' selected=''>
												Latest
											</option>
											<option value='old'>Oldest</option>
											<option value='hight-to-low'>High To Low</option>
											<option value='low-to-high'>Low To High</option>
										</select>
									</div>
								</div>
								<div className='course-list-inner'>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-4s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list1.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>Web Design</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													How to Learn Basic Web Design by Photoshop and Figma
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>95</span>
											</div>
										</div>
									</div>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-2s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list2.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>Marketing Strategy</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													How to Learn Marketing Strategy Basic to Advabce
													Course
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>39</span>
											</div>
										</div>
									</div>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-2s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list3.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>Web Development</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													How to Learn Web Development by php (Basic to advance)
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>46</span>
											</div>
										</div>
									</div>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-2s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list4.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>SEO Optimization</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													How to Learn Search Engine Optimization (SEO)
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>0</span>
											</div>
										</div>
									</div>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-2s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list5.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>Life Coach</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													Learn How to Complete Interview, Resume, Linkedin
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>25</span>
											</div>
										</div>
									</div>
									<div className='coach-item style-two coach-list wow fadeInUp delay-0-2s'>
										<div className='coach-image'>
											<img
												src='/assets/images/coachs/coach-list6.jpg'
												alt='Coach'
											/>
										</div>
										<div className='coach-content'>
											<Link href='/course-grid'>
												<a className='category'>Health Coach</a>
											</Link>
											<h4>
												<Link href='/course-details'>
													Learn How to Finding Your Life’s Purpose by Eckhart
													Tolle
												</Link>
											</h4>
											<ul className='coach-footer'>
												<li>
													<i className='fas fa-user-graduate' />
													<span>
														By <b>Bennie L.</b>
													</span>
												</li>
												<li>
													<i className='far fa-file-alt' />
													<span>12 Lessions</span>
												</li>
												<li>
													<i className='far fa-user' />
													<span>seats</span>
												</li>
											</ul>
											<div className='ratting-price'>
												<div className='ratting'>
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<i className='fas fa-star' />
													<span>(50)</span>
												</div>
												<span className='price'>92</span>
											</div>
										</div>
									</div>
								</div>
								<ul className='pagination style-two flex-wrap pt-10'>
									<Pagination sort={3} paginationCls='.coach-item' />
								</ul>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='course-sidebar rmt-75'>
								<div className='widget widget-search wow fadeInUp delay-0-2s'>
									<form onSubmit={(e) => e.preventDefault()} action='#'>
										<input type='text' placeholder='Search Here' required='' />
										<button
											type='submit'
											className='searchbutton fa fa-search'
										/>
									</form>
								</div>
								<div className='widget widget-menu wow fadeInUp delay-0-4s'>
									<h4 className='widget-title'>Category</h4>
									<ul>
										<li>
											<Link href='/course-list'>
												<a>Business Coach </a>
											</Link>{' '}
											<span>(25)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>Life Coach </a>
											</Link>{' '}
											<span>(07)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>Health Coach </a>
											</Link>{' '}
											<span>(12)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>Web Design </a>
											</Link>{' '}
											<span>(55)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>Web Development </a>
											</Link>{' '}
											<span>(14)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>SEO Optimizations </a>
											</Link>{' '}
											<span>(30)</span>
										</li>
										<li>
											<Link href='/course-list'>
												<a>Digital Analysis </a>
											</Link>{' '}
											<span>(18)</span>
										</li>
									</ul>
								</div>
								<div className='widget widget-menu wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Filter By Instroctur</h4>
									<ul>
										<li>
											<Link href='/instructors'>Jimmy T. Briley </Link>{' '}
											<span>(8)</span>
										</li>
										<li>
											<Link href='/instructors'>Dohn E. Ingram </Link>{' '}
											<span>(07)</span>
										</li>
										<li>
											<Link href='/instructors'>Eirk A. Buckner </Link>{' '}
											<span>(12)</span>
										</li>
										<li>
											<Link href='/instructors'>Scott S. McGowen </Link>{' '}
											<span>(5)</span>
										</li>
										<li>
											<Link href='/instructors'>Joseph K. Bassler </Link>{' '}
											<span>(9)</span>
										</li>
										<li>
											<Link href='/instructors'>Robert A. Jackson </Link>{' '}
											<span>(3)</span>
										</li>
										<li>
											<Link href='/instructors'>Joe C. McCoy </Link>{' '}
											<span>(18)</span>
										</li>
									</ul>
								</div>
								<div className='widget widget-radio wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Filter By Price</h4>
									<form
										onSubmit={(e) => e.preventDefault()}
										className='newsletter-form'
										action='#'
									>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='all-course'
												name='filter'
												defaultChecked
											/>
											<label
												className='custom-control-label'
												htmlFor='all-course'
											>
												Show All Courses <span>(205)</span>
											</label>
										</div>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='premium-course'
												name='filter'
											/>
											<label
												className='custom-control-label'
												htmlFor='premium-course'
											>
												Premium Courses <span>(159)</span>
											</label>
										</div>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='free-course'
												name='filter'
											/>
											<label
												className='custom-control-label'
												htmlFor='free-course'
											>
												Free Courses <span>(65)</span>
											</label>
										</div>
									</form>
								</div>
								<div className='widget widget-radio wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Filter By Level</h4>
									<form
										onSubmit={(e) => e.preventDefault()}
										className='newsletter-form'
										action='#'
									>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='all-level'
												name='filter'
												defaultChecked
											/>
											<label
												className='custom-control-label'
												htmlFor='all-level'
											>
												Show All Level <span>(55)</span>
											</label>
										</div>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='beginner-level'
												name='filter'
											/>
											<label
												className='custom-control-label'
												htmlFor='beginner-level'
											>
												Beginner Level <span>(20)</span>
											</label>
										</div>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='advance-level'
												name='filter'
											/>
											<label
												className='custom-control-label'
												htmlFor='advance-level'
											>
												Advance level <span>(45)</span>
											</label>
										</div>
									</form>
								</div>
								<div className='widget widget-ratting wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Filter By Rating</h4>
									<ul>
										<li>
											<div className='ratting'>
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
											</div>
											<span>(35)</span>
										</li>
										<li>
											<div className='ratting'>
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star' />
											</div>
											<span>(28)</span>
										</li>
										<li>
											<div className='ratting'>
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
											</div>
											<span>(23)</span>
										</li>
										<li>
											<div className='ratting'>
												<i className='fas fa-star checked' />
												<i className='fas fa-star checked' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
											</div>
											<span>(4)</span>
										</li>
										<li>
											<div className='ratting'>
												<i className='fas fa-star checked' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
												<i className='fas fa-star' />
											</div>
											<span>(0)</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default CourseList;
