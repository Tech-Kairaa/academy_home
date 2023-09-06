/* eslint-disable @next/next/no-img-element */
import PageBanner from '@/components/PageBanner';
import ProtectedRoute from '@/components/ProtectedRoute';
import Cart from '@/components/courses/Cart';
import CourseCard from '@/components/courses/CourseCard';
import Layout from '@/layouts/Layout';
import Pagination from '@/src/Pagination';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCourseList } from '@/hooks/useCourses';

const Courses = () => {
	const { data: courses } = useCourseList();
	const userProfile = useSelector((state) => state.auth.userProfile);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalPrice = useSelector((state) => Number(state.cart.totalPrice));
	const [cartEmpty, setCartEmpty] = useState(true);
	const [showCart, setShowCart] = useState(false);

	console.log(totalPrice);

	return (
		<ProtectedRoute>
			<Head>
				<title>Courses | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<PageBanner pageName={'banner'} pageTitle={'Courses'} />
				<section
					className='coach-section-three bg-lighter rel z-1 pt-100 rpt-150 pb-130 rpb-100'
					id='courses'
				>
					<div className='container'>
						<div className='row justify-content-center mb-40'>
							<div className='col-xl-6 col-lg-7 col-md-8'>
								<div className='section-title text-center mb-45'>
									<h2>
										Discover <span>recommended</span> courses
									</h2>
								</div>
							</div>
						</div>
						<div className='row'>
							<CourseCard courses={courses} />
						</div>
						<ul className='pagination flex-wrap mt-20'>
							<Pagination
								paginationCls={'.course-grids .row .col-md-6'}
								sort={4}
							/>
						</ul>
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
					<div className='cart-sidebar position-fixed top-0 bottom-0 w-100 d-flex justify-content-end'>
						<div className='w-25 bg-white px-4 py-20 d-flex flex-column justify-content-between overflow-y-scroll'>
							<Cart courses={courses} />
							{cartItems.length < 1 && (
								<div className='d-flex flex-column justify-content-between pt-50'>
									<span
										className='bi bi-cart text-center'
										style={{ fontSize: '15rem', color: '#0002' }}
									></span>
								</div>
							)}
							<div>
								{cartItems.length >= 1 && (
									<>
										<div className='mb-25 bg-light p-3 rounded-2'>
											<div className='d-flex justify-content-between'>
												<span className=''>Number of items added</span>
												<span className=''>{cartItems.length}</span>
											</div>
											<div className='d-flex justify-content-between'>
												<span className=''>Price of total items</span>
												<span className=''>₹{totalPrice}</span>
											</div>
										</div>
										{userProfile ? (
											<Link href='/purchase/checkout'>
												<a className='theme-btn style-two w-100 mb-1'>
													Proceed to checkout
												</a>
											</Link>
										) : (
											<Link href='/learner/login'>
												<a className='theme-btn style-two w-100 mb-1'>
													Login and proceed
												</a>
											</Link>
										)}
									</>
								)}

								<button
									className='theme-btn style-three w-100 mt-2'
									onClick={() => setShowCart(!showCart)}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				)}
			</Layout>
		</ProtectedRoute>
	);
};
export default Courses;
