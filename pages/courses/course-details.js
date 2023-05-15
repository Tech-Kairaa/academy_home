/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import PageBanner from '@/components/PageBanner';
import WellernAccordion from '@/components/WellernAccordion';
import Layout from '@/layouts/Layout';
import CourseList from '@/utils/Courses';

const CourseDetails = ({ courseId }) => {
	const [active, setActive] = useState(false);
	const onClick = (value) => {
		setActive(value === active ? '' : value);
	};

	let course = CourseList.find((id) => id.cid === courseId);

	return (
		<Layout header footer>
			<PageBanner pageName='course_details' pageTitle={'Course Details'} />
			{course && (
				<section className='course-details-area pt-130 rpt-100 pb-75'>
					<div className='container'>
						<div className='row large-gap'>
							<div className='col-lg-8'>
								<div className='course-details-content'>
									<div className='course-header'>
										<span className='category'>
											<em className='fa fa-tag mr-2'></em>
											{course.tag}
										</span>
										<span className='off'>30% off</span>
										<div className='ratting'>
											<i className='fas fa-star' />
											<i className='fas fa-star' />
											<i className='fas fa-star' />
											<i className='fas fa-star' />
											<i className='fas fa-star-half' />
											<span>(50)</span>
										</div>
									</div>
									<h2>{course.title}</h2>
									{/* <ul className='author-date-enroll'>
										<li>
											<img
												src='/assets/images/coachs/couse-author.jpg'
												alt='Authro'
											/>
											<h6>Donald J. Miller</h6>
										</li>
										<li>
											<i className='fas fa-cloud-upload-alt' /> Last Update
											February 15, 2022
										</li>
										<li>
											<i className='far fa-user' /> 25 Enrolled
										</li>
									</ul> */}
									<div
										dangerouslySetInnerHTML={{ __html: course.description }}
									/>
									{/*<h3 className='mt-40'>Requirements</h3>
									 <ul className='list-style-two mb-45'>
										<li>
											DevTools Debugging Tips And Shortcuts (Chrome, Firefox,
											Edge)
										</li>
										<li>
											Front-End Performance Checklist 2021 (PDF, Apple Pages, MS
											Word)
										</li>
										<li>
											A Smashing Guide To The World Of Search Engine
											Optimization
										</li>
									</ul> */}

									<h3 className='mt-4'>Detailed Course Content</h3>
									<Accordion
										className='faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s'
										id='course-faq'
										// defaultActiveKey='collapse0'
									>
										{course.modules.map((item, index) => (
											<WellernAccordion
												eventName={`collapse${index}`}
												title={item.title}
												active={active}
												onClick={() => onClick(`collapse${index}`)}
												key={index}
											>
												<ul className='course-video-list'>
													{item.topics.map((topic, index) => (
														<li
															className='mfp-iframe course-video-play'
															key={index}
														>
															<span className='far fa-play-circle mr-4' />
															<span className='title'>{topic}</span>
														</li>
													))}
												</ul>
											</WellernAccordion>
										))}
									</Accordion>

									{/* <h3>Student Feedback</h3>
									<div className='student-feedback pt-10 wow fadeInUp delay-0-2s'>
										<div className='row'>
											<div className='col-sm-5'>
												<div className='student-average-feedback bg-green text-center text-white'>
													<b>5.0</b>
													<div className='ratting mb-10'>
														<i className='fas fa-star' />
														<i className='fas fa-star' />
														<i className='fas fa-star' />
														<i className='fas fa-star' />
														<i className='fas fa-star' />
													</div>
													<h6>Total 1 Rating</h6>
												</div>
											</div>
											<div className='col-sm-7 align-self-center'>
												<div className='student-feedback-details'>
													<div className='student-feedback-author mb-20'>
														<img
															src='/assets/images/coachs/feedback-author.jpg'
															alt='Authro'
														/>
														<div className='content'>
															<h4>Lucius D. Thomas</h4>
															<span className='designations'>
																IT Students (Basic)
															</span>
														</div>
													</div>
													<div className='ratting-total'>
														<div className='ratting-total-item'>
															<div className='ratting mb-10'>
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<span>(5)</span>
															</div>
															<span className='ratting-bar'>
																<span style={{ width: '100%' }} />
															</span>
															<span className='ratting-number'>1 Rating</span>
														</div>
														<div className='ratting-total-item'>
															<div className='ratting mb-10'>
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star' />
																<span>(4)</span>
															</div>
															<span className='ratting-bar'>
																<span style={{ width: 0 }} />
															</span>
															<span className='ratting-number'>0 Rating</span>
														</div>
														<div className='ratting-total-item'>
															<div className='ratting mb-10'>
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<span>(3)</span>
															</div>
															<span className='ratting-bar'>
																<span style={{ width: 0 }} />
															</span>
															<span className='ratting-number'>0 Rating</span>
														</div>
														<div className='ratting-total-item'>
															<div className='ratting mb-10'>
																<i className='fas fa-star selected' />
																<i className='fas fa-star selected' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<span>(2)</span>
															</div>
															<span className='ratting-bar'>
																<span style={{ width: 0 }} />
															</span>
															<span className='ratting-number'>0 Rating</span>
														</div>
														<div className='ratting-total-item'>
															<div className='ratting mb-10'>
																<i className='fas fa-star selected' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<i className='fas fa-star' />
																<span>(1)</span>
															</div>
															<span className='ratting-bar'>
																<span style={{ width: 0 }} />
															</span>
															<span className='ratting-number'>0 Rating</span>
														</div>
													</div>
												</div>
											</div> 
										</div>
									</div>*/}
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='course-sidebar rmt-75'>
									<div className='widget widget-course-details wow fadeInUp delay-0-2s'>
										<div className='widget-video'>
											<img
												src={`/assets/images/courses/${course.image}`}
												alt='Course Details'
											/>
											<a href='#' className='mfp-iframe youtube-video-play'>
												<i className='fas fa-play' />
											</a>
										</div>
										<div className='price-off'>
											<span className='price'>13,000</span>
											<span className='off'>30% off</span>
										</div>
										<ul className='course-details-list mb-25'>
											<li>
												<i className='far fa-file-alt' />
												<span>Course Level</span> <b>Beginner</b>
											</li>
											<li>
												<i className='far fa-clock' /> <span>Duration</span>
												<b>{course.duration}</b>
											</li>
											<li>
												<i className='far fa-play-circle' />
												<span>Lectures</span> <b>{course.totalModules}</b>
											</li>
											<li>
												<i className='fas fa-globe' /> <span>Language</span>
												<b>English</b>
											</li>
										</ul>
										<Link href='/contact'>
											<a className='theme-btn'>
												add to cart <i className='fas fa-arrow-right' />
											</a>
										</Link>
									</div>
									<div className='widget widget-menu wow fadeInUp delay-0-2s'>
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
														By <Link href='/course-grid'>Williams</Link>
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
														By <Link href='/course-grid'>Somalia</Link>
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
														</Link>
													</h6>
													<span>
														By <Link href='/course-grid'>Blanchard</Link>
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
														By <Link href='/course-grid'>Johnson</Link>
													</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</Layout>
	);
};
export default CourseDetails;

export async function getServerSideProps(context) {
	let { cid } = context.query;
	return {
		props: {
			courseId: cid,
		},
	};
}
