/* eslint-disable @next/next/no-img-element */
import ProtectedRoute from '@/components/ProtectedRoute';
import Cart from '@/components/cart/CartContainer';
import CourseContent from '@/components/courses/CourseContent';
import UseImage from '@/components/courses/UseImage';
import { useCoursesById } from '@/hooks/useCourses';
import Layout from '@/layouts/Layout';
import { addItem } from '@/services/cart';
import { useCouponById } from 'lib/hooks/useCoupon';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export async function getServerSideProps(context) {
	const { ref } = context.query;
	return { props: { cid: ref } };
}

const ScrollEvent = () => {
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

	return { scrollY, setScrollY };
};

const CourseDetails = ({ cid }) => {
	const router = useRouter();
	const { data: course, error } = useCoursesById(cid);

	if (error) router.push('/courses');

	const { data: coupon } = useCouponById(course?.promotions.coupon);
	const { scrollY } = ScrollEvent();

	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleAddItem = (cid) => {
		if (cartItems.includes(cid)) {
			toast.warning('Already added into cart');
			return;
		}

		dispatch(addItem(cid));
		toast.success('Added into cart');
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
								<CourseContent id={cid} course={course} coupon={coupon} />
								<div className='col-4'>
									<div
										className='card position-fixed border-light'
										style={
											scrollY > 800
												? { bottom: scrollY / 40 + 'rem' }
												: { top: '9.2rem' }
										}
									>
										<div className='position-relative'>
											<UseImage
												cid={cid}
												filename={course?.images.thumbnail}
												className='img-fluid rounded-top-3 w-100'
											/>
											<button className='bi bi-play-circle-fill fs- bg-transparent rounded-circle text-white position-absolute start-0 end-0 top-0 bottom-0 display-2'></button>
										</div>
										<div className='card-body shadow rounded-3'>
											<div className='d-flex justify-content-between align-items-center'>
												{coupon ? (
													<>
														<h5 className='card-title text-theme-green fs-1 d-flex align-items-center'>
															<span>
																<NumericFormat
																	value={
																		course?.pricing.price -
																		(course?.pricing.price * coupon.discount) /
																			100
																	}
																	displayType='text'
																	thousandSeparator
																	decimalScale={0}
																	prefix='₹'
																/>
															</span>
															<span className='fs-6 text-secondary ms-2 mt-2'>
																<strike className='me-2'>
																	<NumericFormat
																		value={course?.pricing.price}
																		displayType='text'
																		thousandSeparator
																		prefix='₹'
																	/>
																</strike>
															</span>
														</h5>
														<span className='badge rounded-pill text-bg-primary'>
															{coupon.discount}% OFF
														</span>
													</>
												) : (
													<h5 className='card-title text-theme-green fs-1 d-flex flex-column'>
														<span>
															<em className='bi bi-currency-rupee'></em>
															<NumericFormat
																value={course?.pricing.price}
																displayType='text'
																thousandSeparator
																prefix='₹'
															/>
														</span>
													</h5>
												)}
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

											<button
												className='theme-btn style-two py-3 w-100'
												onClick={() => handleAddItem(cid)}
											>
												Add to cart
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}

				<Cart />
			</Layout>
		</ProtectedRoute>
	);
};
export default CourseDetails;
