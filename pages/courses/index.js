/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/services/cart';
import Pagination from '@/src/Pagination';
import PageBanner from '@/components/PageBanner';
import Cart from '@/components/courses/Cart';
import Sidebar from '@/components/courses/Sidebar';
import Layout from '@/layouts/Layout';
import CourseList from '@/utils/Courses';
import toast from 'react-hot-toast';
import Head from 'next/head';

const Courses = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	console.log(cartItems);

	const [cartEmpty, setCartEmpty] = useState(true);
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<Head>
				<title>Courses | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<PageBanner pageName={'banner'} pageTitle={'Courses'} />
				{/* Page Banner End */}
				{/* Course Left Start */}
				<section className='course-left-area py-130 rpy-100'>
					<div className='container'>
						<div className='row large-gap'>
							<div className='col-lg-4'>
								<Sidebar />
							</div>
							<div className='col-lg-8'>
								<div className='course-grids'>
									<div className='shop-shorter wow fadeInUp delay-0-2s'>
										{/* <ul className='grid-list'>
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
									</div> */}
									</div>
									<div className='row'>
										{CourseList &&
											CourseList.map((item, index) => (
												<div className='col-md-6' key={index}>
													<div className='coach-item wow fadeInUp delay-0-4s'>
														<div className='coach-image'>
															<Link href='/course-grid'>
																<a className='category'>{item.tag}</a>
															</Link>
															<img
																src={`/assets/images/courses/${item.image}`}
																className='rounded-3'
																alt='Coach'
															/>
														</div>
														<div
															className='coach-content'
															style={{ borderRadius: '0 0 10px 10px' }}
														>
															<div className='d-flex justify-content-between'>
																<span className=''>{item.level}</span>
																<span>{item.totalModules} Lessons</span>
															</div>
															<h4 className='mt-10'>
																<Link
																	href={{
																		pathname: '/courses/course-details',
																		query: {
																			cid: item.cid,
																		},
																	}}
																>
																	<a>{item.title}</a>
																</Link>
															</h4>
															<div className='ratting-price'>
																<div className='ratting'>
																	<i className='fas fa-star' />
																	<i className='fas fa-star' />
																	<i className='fas fa-star' />
																	<i className='fas fa-star' />
																	<i className='fas fa-star' />
																	<span>(3k)</span>
																</div>
																<span className='price'>256.95</span>
															</div>
															<ul className='coach-footer'>
																<li>
																	<Link
																		href={{
																			pathname: '/courses/course-details',
																			query: {
																				cid: item.cid,
																			},
																		}}
																	>
																		<a>
																			<i className='fas fa-external-link-alt' />
																			<span> Details</span>
																		</a>
																	</Link>
																</li>
																<li>
																	<button
																		className='theme-btn style-one py-1 px-3 text-center'
																		onClick={() => {
																			if (!cartItems.includes(item.cid)) {
																				handleAddItem(item.cid);
																				toast.success('Added into cart');
																			} else {
																				toast.success(
																					'Already added into cart'
																				);
																			}
																		}}
																	>
																		<span>
																			<em className='fas fa-shopping-bag me-2' />
																			Add to cart
																		</span>
																	</button>
																</li>
															</ul>
														</div>
													</div>
												</div>
											))}
									</div>
									<ul className='pagination flex-wrap mt-20'>
										<Pagination
											paginationCls={'.course-grids .row .col-md-6'}
											sort={4}
										/>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='cart position-fixed bottom-0 end-0 z-2'>
					<div className='mb-20 me-4 p-3 position-relative'>
						<button
							className='cart-button'
							onClick={() => setShowCart(!showCart)}
						>
							<span className='cart-icon fa fa-shopping-bag'></span>
						</button>
						{!cartEmpty && (
							<span
								className='cart-count position-absolute'
								style={{ padding: '0px 10px' }}
							>
								4
							</span>
						)}
					</div>
				</div>
				{showCart && (
					<div className='cart-sidebar position-fixed top-0 end-0 bottom-0 w-100 d-flex justify-content-end'>
						<div className='w-25 bg-white px-4 py-20 d-flex flex-column justify-content-between'>
							<div>
								<Cart />
							</div>
							<div>
								<div className='mb-25 bg-light p-3 rounded-2'>
									<div className='d-flex justify-content-between'>
										<span className=''>Number of items added</span>
										<span className=''>{cartItems.length}</span>
									</div>
									<div className='d-flex justify-content-between'>
										<span className=''>Price of total items</span>
										<span className=''>$240</span>
									</div>
								</div>
								<div className=''>
									<Link href='/purchase/checkout'>
										<a className='theme-btn style-two w-100 mb-1'>
											Proceed to checkout
										</a>
									</Link>
									<button
										className='theme-btn style-three w-100 mt-2'
										onClick={() => setShowCart(!showCart)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</Layout>
		</>
	);
};
export default Courses;
