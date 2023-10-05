/* eslint-disable @next/next/no-img-element */
import PageBanner from '@/components/PageBanner';
import ProtectedRoute from '@/components/ProtectedRoute';
import CourseCard from '@/components/courses/CourseCard';
import Layout from '@/layouts/Layout';
import Pagination from '@/src/Pagination';
import Head from 'next/head';
import { useCourseList } from '@/hooks/useCourses';
import CartContainer from '@/components/cart/CartContainer';

const Courses = () => {
	const { data: courses } = useCourseList();
	return (
		<ProtectedRoute>
			<Head>
				<title>Courses | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<PageBanner pageName={'courses'} pageTitle={'Courses'} />
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
						{!courses && <div className='loader w-50 mx-auto'></div>}
						{courses && (
							<>
								<div className='row'>
									<CourseCard courses={courses} />
								</div>
								<ul className='pagination flex-wrap mt-20'>
									<Pagination
										paginationCls={'.course-grids .row .col-md-6'}
										sort={4}
									/>
								</ul>
							</>
						)}
					</div>
				</section>
				<CartContainer />
			</Layout>
		</ProtectedRoute>
	);
};
export default Courses;
