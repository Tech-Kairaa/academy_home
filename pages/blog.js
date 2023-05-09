/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Pagination from '../src/Pagination';
const BlogStandard = () => {
	return (
		<Layout>
			<PageBanner pageName={'Blog Standard'} />
			<section className='blog-standard-area py-130 rpt-95 rpb-100'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='blog-standard-wrap'>
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src='/assets/images/blog/blog-standard1.jpg'
											alt='Blog'
										/>
										<a href='#'>
											<i className='fas fa-share-alt' />
										</a>
									</div>
									<div className='blog-standard-content'>
										<div className='author'>
											<img
												src='/assets/images/blog/blog-standard-author1.jpg'
												alt='Author'
											/>
										</div>
										<div className='content'>
											<ul className='blog-standard-header'>
												<li>
													<span className='name'>Michael M. Morris</span>
												</li>
												<li>
													<i className='far fa-calendar-alt' />{' '}
													<Link href='/blog-details'>February 20, 2022</Link>
												</li>
												<li>
													<i className='far fa-comments' />{' '}
													<Link href='/blog-details'>Comments (05)</Link>
												</li>
											</ul>
											<h3>
												<Link href='/blog-details'>
													Creating Online Environments That Work Well For Older
													Users
												</Link>
											</h3>
											<p>
												Sit amet consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Quis
												ipsum suspendisse ultrices gravida. Risus commodo
												viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<Link href='/blog-details'>
												<a className='theme-btn style-two'>
													Learn more <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src='/assets/images/blog/blog-standard2.jpg'
											alt='Blog'
										/>
										<a href='#'>
											<i className='fas fa-share-alt' />
										</a>
									</div>
									<div className='blog-standard-content'>
										<div className='author'>
											<img
												src='/assets/images/blog/blog-standard-author2.jpg'
												alt='Author'
											/>
										</div>
										<div className='content'>
											<ul className='blog-standard-header'>
												<li>
													<span className='name'>Michael M. Morris</span>
												</li>
												<li>
													<i className='far fa-calendar-alt' />{' '}
													<Link href='/blog-details'>February 20, 2022</Link>
												</li>
												<li>
													<i className='far fa-comments' />{' '}
													<Link href='/blog-details'>Comments (05)</Link>
												</li>
											</ul>
											<h3>
												<Link href='/blog-details'>
													Everything You Need To Know About CSS Margins
													Optimizing Google Fonts
												</Link>
											</h3>
											<p>
												Sit amet consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Quis
												ipsum suspendisse ultrices gravida. Risus commodo
												viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<Link href='/blog-details'>
												<a className='theme-btn style-two'>
													Learn more <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src='/assets/images/blog/blog-standard3.jpg'
											alt='Blog'
										/>
										<a href='#'>
											<i className='fas fa-share-alt' />
										</a>
									</div>
									<div className='blog-standard-content'>
										<div className='author'>
											<img
												src='/assets/images/blog/blog-standard-author1.jpg'
												alt='Author'
											/>
										</div>
										<div className='content'>
											<ul className='blog-standard-header'>
												<li>
													<span className='name'>Michael M. Morris</span>
												</li>
												<li>
													<i className='far fa-calendar-alt' />{' '}
													<Link href='/blog-details'>February 20, 2022</Link>
												</li>
												<li>
													<i className='far fa-comments' />{' '}
													<Link href='/blog-details'>Comments (05)</Link>
												</li>
											</ul>
											<h3>
												<Link href='/blog-details'>
													Everything You Need To Know About CSS Margins
													Optimizing Google Fonts
												</Link>
											</h3>
											<p>
												Sit amet consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Quis
												ipsum suspendisse ultrices gravida. Risus commodo
												viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<Link href='/blog-details'>
												<a className='theme-btn style-two'>
													Learn more <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src='/assets/images/blog/blog-standard4.jpg'
											alt='Blog'
										/>
										<a href='#'>
											<i className='fas fa-share-alt' />
										</a>
									</div>
									<div className='blog-standard-content'>
										<div className='author'>
											<img
												src='/assets/images/blog/blog-standard-author2.jpg'
												alt='Author'
											/>
										</div>
										<div className='content'>
											<ul className='blog-standard-header'>
												<li>
													<span className='name'>Michael M. Morris</span>
												</li>
												<li>
													<i className='far fa-calendar-alt' />{' '}
													<Link href='/blog-details'>February 20, 2022</Link>
												</li>
												<li>
													<i className='far fa-comments' />{' '}
													<Link href='/blog-details'>Comments (05)</Link>
												</li>
											</ul>
											<h3>
												<Link href='/blog-details'>
													Everything You Need To Know About CSS Margins
													Optimizing Google Fonts
												</Link>
											</h3>
											<p>
												Sit amet consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Quis
												ipsum suspendisse ultrices gravida. Risus commodo
												viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<Link href='/blog-details'>
												<a className='theme-btn style-two'>
													Learn more <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className='blog-standard-item wow fadeInUp delay-0-2s'>
									<div className='image'>
										<img
											src='/assets/images/blog/blog-standard5.jpg'
											alt='Blog'
										/>
										<a href='#'>
											<i className='fas fa-share-alt' />
										</a>
									</div>
									<div className='blog-standard-content'>
										<div className='author'>
											<img
												src='/assets/images/blog/blog-standard-author1.jpg'
												alt='Author'
											/>
										</div>
										<div className='content'>
											<ul className='blog-standard-header'>
												<li>
													<span className='name'>Michael M. Morris</span>
												</li>
												<li>
													<i className='far fa-calendar-alt' />{' '}
													<Link href='/blog-details'>February 20, 2022</Link>
												</li>
												<li>
													<i className='far fa-comments' />{' '}
													<Link href='/blog-details'>Comments (05)</Link>
												</li>
											</ul>
											<h3>
												<Link href='/blog-details'>
													Everything You Need To Know About CSS Margins
													Optimizing Google Fonts
												</Link>
											</h3>
											<p>
												Sit amet consectetur adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Quis
												ipsum suspendisse ultrices gravida. Risus commodo
												viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<Link href='/blog-details'>
												<a className='theme-btn style-two'>
													Learn more <i className='fas fa-arrow-right' />
												</a>
											</Link>
										</div>
									</div>
								</div>
								<ul className='pagination flex-wrap'>
									<Pagination paginationCls={'.blog-standard-item'} sort={3} />
								</ul>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='blog-sidebar rmt-75'>
								<div className='widget widget-search wow fadeInUp delay-0-2s'>
									<form onSubmit={(e) => e.preventDefault()} action='#'>
										<input type='text' placeholder='Search Here' required='' />
										<button
											type='submit'
											className='searchbutton fa fa-search'
										/>
									</form>
								</div>
								<div className='widget widget-about wow fadeInUp delay-0-4s'>
									<div className='image'>
										<img src='/assets/images/widgets/about.jpg' alt='Author' />
									</div>
									<h4>James D. Thomas</h4>
									<p>
										Sit amet consectetur adipiscing elits do eiusmod tempor
										incididunt ut labore etdol magna aliquas uspensis.{' '}
									</p>
									<div className='social-style-two'>
										<Link href='/contact'>
											<a>
												<i className='fab fa-facebook-f' />
											</a>
										</Link>
										<Link href='/contact'>
											<a>
												<i className='fab fa-twitter' />
											</a>
										</Link>
										<Link href='/contact'>
											<a>
												<i className='fab fa-linkedin-in' />
											</a>
										</Link>
										<Link href='/contact'>
											<a>
												<i className='fab fa-youtube' />
											</a>
										</Link>
									</div>
								</div>
								<div className='widget widget-menu wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Category</h4>
									<ul>
										<li>
											<Link href='/blog'>Business Coach </Link>{' '}
											<span>(25)</span>
										</li>
										<li>
											<Link href='/blog'>Life Coach </Link> <span>(07)</span>
										</li>
										<li>
											<Link href='/blog'>Health Coach </Link> <span>(12)</span>
										</li>
										<li>
											<Link href='/blog'>Web Design </Link> <span>(55)</span>
										</li>
										<li>
											<Link href='/blog'>Web Development </Link>{' '}
											<span>(14)</span>
										</li>
										<li>
											<Link href='/blog'>SEO Optimizations </Link>{' '}
											<span>(30)</span>
										</li>
										<li>
											<Link href='/blog'>Digital Analysis </Link>{' '}
											<span>(18)</span>
										</li>
									</ul>
								</div>
								<div className='widget widget-recent-courses wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Recent Courses</h4>
									<ul>
										<li>
											<div className='image'>
												<img
													src='/assets/images/widgets/course1.jpg'
													alt='Course'
												/>
											</div>
											<div className='content'>
												<h6>
													<Link href='/course-details'>
														How to Learn Basic Web (UI) Design
													</Link>
												</h6>
												<span>
													By <Link href='/course-list'>Williams</Link>
												</span>
											</div>
										</li>
										<li>
											<div className='image'>
												<img
													src='/assets/images/widgets/course2.jpg'
													alt='Course'
												/>
											</div>
											<div className='content'>
												<h6>
													<Link href='/course-details'>
														How to Learn Basic Web Development
													</Link>
												</h6>
												<span>
													By <Link href='/course-list'>Somalia</Link>
												</span>
											</div>
										</li>
										<li>
											<div className='image'>
												<img
													src='/assets/images/widgets/course3.jpg'
													alt='Course'
												/>
											</div>
											<div className='content'>
												<h6>
													<Link href='/course-details'>
														How to Learn Basic (SEO) Marketing
													</Link>{' '}
												</h6>
												<span>
													By <Link href='/course-list'>Blanchard</Link>
												</span>
											</div>
										</li>
										<li>
											<div className='image'>
												<img
													src='/assets/images/widgets/course4.jpg'
													alt='Course'
												/>
											</div>
											<div className='content'>
												<h6>
													<Link href='/course-details'>
														Business Strategy Managements
													</Link>
												</h6>
												<span>
													By <Link href='/course-list'>Johnson</Link>
												</span>
											</div>
										</li>
									</ul>
								</div>
								<div className='widget widget-tag-cloud wow fadeInUp delay-0-2s'>
									<h4 className='widget-title'>Popular Tags</h4>
									<div className='tag-coulds'>
										<Link href='/blog'>Course</Link>
										<Link href='/blog'>Design</Link>
										<Link href='/blog'>Marketing</Link>
										<Link href='/blog'>Life Course</Link>
										<Link href='/blog'>Health Course</Link>
										<Link href='/blog'>SEO</Link>
										<Link href='/blog'>Business</Link>
										<Link href='/blog'>Graphics</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default BlogStandard;
