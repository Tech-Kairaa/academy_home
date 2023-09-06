/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Layout from '@/layouts/Layout';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useCoursesById } from '@/hooks/useCourses';
import { useRouter } from 'next/router';
import Accordion from '@/components/elements/Accordion';
import UseImage from '@/components/courses/UseImage';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export async function getServerSideProps(context) {
	const { ref } = context.query;
	return { props: { cid: ref } };
}

const CourseDetails = ({ cid }) => {
	const router = useRouter();
	const { data: course, error } = useCoursesById(cid);
	const userProfile = useSelector((state) => state.auth.userProfile);

	if (error) router.push('/courses');

	const handlePlayButton = () => {
		toast.info('Play after purchased!');
	};

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const countVideos = (data) => {
		let videoCount = 0;

		data.forEach((item) => {
			if (item.videos) {
				videoCount += item.videos.length;
			}

			if (item.sections) {
				videoCount += countVideos(item.sections);
			}
		});

		return videoCount;
	};

	return (
		<ProtectedRoute>
			<Head>
				<title>{course?.title}</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				{/* <PageBanner pageName='course_details' pageTitle={course?.title} /> */}
				{course && (
					<section className='mt-150 pb-100 position-relative'>
						<div className='container'>
							<div className='row large-gap'>
								<div className='col-8'>
									<div className='course-details-content'>
										<UseImage
											cid={cid}
											filename={course?.images.banner}
											className='w-100 mb-30 rounded-3'
										/>
										<div className='d-inline-flex gap-3 mb-30'>
											<span className='badge rounded-pill text-bg-secondary'>
												Last updated {moment(course?.updatedAt).fromNow()}
											</span>
											<span className='badge rounded-pill text-bg-primary'>
												40% OFF
											</span>
										</div>
										<h2>{course?.title}</h2>
										<h4 className='text-secondary fw-normal'>
											{course?.subtitle}
										</h4>
										<div
											dangerouslySetInnerHTML={{ __html: course.description }}
											className='pt-50 course-description'
										/>

										<h3 className='mt-4'>Course content</h3>
										<div className='mt-30'>
											<div className='d-inline-flex gap-3 mb-30'>
												<span className='badge rounded-pill text-bg-secondary'>
													Sections : {course?.content.length}
												</span>
												<span className='badge rounded-pill text-bg-secondary'>
													Videos : {countVideos(course?.content)}
												</span>
											</div>
											<Accordion>
												{course?.content.map((section, index) => (
													<Accordion.Item title={section.title} key={index}>
														{section?.videos.map((video, index) => (
															<ul key={index}>
																<li className='d-flex justify-content-between align-items-center py-2'>
																	{video.title}
																	<button
																		className='bg-transparent'
																		onClick={handlePlayButton}
																	>
																		<em className='bi bi-play-circle'></em>
																	</button>
																</li>
															</ul>
														))}
													</Accordion.Item>
												))}
											</Accordion>
										</div>

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
								<div className='col-4'>
									<div
										className='card position-fixed border-light'
										style={
											scrollY > 1900 ? { bottom: '32rem' } : { top: '9.2rem' }
										}
									>
										<div className='position-relative'>
											<UseImage
												cid={cid}
												filename={course?.images.thumbnail}
												className='img-fluid rounded-top-3 w-100'
											/>
											<button
												className='bi bi-play-circle-fill fs- bg-transparent rounded-circle text-white position-absolute start-0 end-0 top-0 bottom-0 display-2'
												onClick={handlePlayButton}
											></button>
										</div>
										<div className='card-body shadow rounded-3'>
											<div className='d-flex justify-content-between align-items-center'>
												<h5 className='card-title text-theme-green fs-1 d-flex flex-column'>
													<span>
														<em className='bi bi-currency-rupee'></em>
														{(
															course?.pricing.price -
															course?.pricing.price *
																(40 / 100).toLocaleString('en-US')
														).toFixed(0)}
													</span>
												</h5>
												<span className='text-secondary fs-5'>
													<em className='bi bi-currency-rupee fs-6'></em>
													<strike>
														{course?.pricing.price.toLocaleString('en-US')}
													</strike>{' '}
													40% off
												</span>
											</div>
											<div className='mb-20'>
												<ul className='text-capitalize list-group list-group-flush'>
													<li className='list-group-item d-flex justify-content-between align-items-center'>
														Level <span>{course?.level}</span>
													</li>
													<li className='list-group-item d-flex justify-content-between align-items-center'>
														Language <span>{course?.language}</span>
													</li>
													<li className='list-group-item d-flex justify-content-between align-items-center'>
														Sections <span>{course?.content.length}</span>
													</li>
												</ul>
											</div>
											{userProfile ? (
												<Link href={`/purchase/checkout?ref=${course?.id}`}>
													<a className='theme-btn style-two py-3 w-100'>
														Proceed to checkout
													</a>
												</Link>
											) : (
												<Link href='/learner/login'>
													<a className='theme-btn style-two py-3 w-100'>
														Proceed to checkout
													</a>
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</Layout>
		</ProtectedRoute>
	);
};
export default CourseDetails;
