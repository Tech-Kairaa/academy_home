/* eslint-disable @next/next/no-img-element */
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import Head from 'next/head';
import { useState } from 'react';
import Modal from '@/components/Modal';
import WorkShops from '@/utils/Workshops.json';

const CourseList = () => {
	const [showModal, setShowModal] = useState(0);
  const handleCloseModal = () => setShowModal(false);

	const [values, setValues] = useState({
		name: '',
		email: '',
		mobile: '',
		education: '',
	});

	const handleValues = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const bookWorkshop = async (e) => {
		e.preventDefault();
	};

	const workshop = WorkShops.filter((item) => item.workshopId === showModal)[0];

	return (
		<ProtectedRoute>
			<Head>
				<title>Workshops | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true} topbar={true}>
				<PageBanner pageName={'workshops'} pageTitle={'Exclusive workshops'} />
				<section className='course-list-area py-50 rpt-95 rpb-100'>
					<div className='container-fluid p-50'>
						<div className='row'>
							{WorkShops.map((item, index) => (
								<div className='col-lg-6' key={index}>
									<div className='course-list-inner'>
										<div className='coach-item style-two coach-list wow fadeInUp delay-0-4s'>
											<div className='coach-image'>
												<img
													src={`assets/images/coaches/coach-list${
														index + 1
													}.jpg`}
													alt='Coach'
												/>
											</div>
											<div className='coach-content border-0'>
												<h5 className='text-capitalize'>{item.title}</h5>
												<ul className='coach-footer justify-content-start'>
													<li>
														<i className='bi bi-play-circle' />
														<span>{item.hours}</span>
													</li>
													<li>
														<i className='bi bi-file-earmark-text' />
														<span>{item.modules} Modules</span>
													</li>
												</ul>

												<div className='mt-3 d-inline-flex w-100 align-items-center gap-3'>
													<button
														className='btn btn-sm btn-outline-success px-3'
														onClick={() => setShowModal(item.workshopId)}
														data-bs-toggle='modal'
														data-bs-target='#exampleModal'
													>
														Book Now
													</button>
													<span className='bg-theme-primary fw-bold px-3 rounded-1'>
														<em className='bi bi-currency-rupee fs-6'></em>
														{item.price}
													</span>
													{/* <span>2h : 4m : 31s</span> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							{/* <div className='row justify-content-center'>
								<div className='col-auto'>
									<ul className='pagination style-two flex-wrap pt-10'>
										<Pagination sort={6} paginationCls='.coach-item' />
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</section>
				{showModal && (
					<Modal show={showModal} handleClose={handleCloseModal}>
						<h4 className='text-capitalize mb-1'>{workshop.title}</h4>
						<span>{workshop.date}</span>
						<form onSubmit={bookWorkshop}>
							<div className='row mt-30'>
								<div className='col-md-5'>
									<div className='form-group'>
										<input
											type='text'
											style={{ padding: '11px 35px' }}
											placeholder='Full Name'
											required
											value={values.name}
											onChange={(e) => handleValues(e.target.value)}
										/>
									</div>
								</div>
								<div className='col-md-7'>
									<div className='form-group'>
										<input
											type='email'
											style={{ padding: '11px 35px' }}
											placeholder='Email Id'
											required
											value={values.email}
											onChange={(e) => handleValues(e.target.value)}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											style={{ padding: '11px 35px' }}
											placeholder='Mobile'
											minLength={10}
											maxLength={10}
											required
											value={values.mobile}
											onChange={(e) => handleValues(e.target.value)}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											style={{ padding: '11px 35px' }}
											placeholder='Education'
											required
											value={values.education}
											onChange={(e) => handleValues(e.target.value)}
										/>
									</div>
								</div>
								<div className='col-md-12 d-inline-flex justify-content-between'>
									<button className='theme-btn style-one'>Book Now</button>
									<button className='theme-btn style-three'>
										Get Course Content
									</button>
								</div>
							</div>
						</form>
					</Modal>
				)}
			</Layout>
		</ProtectedRoute>
	);
};
export default CourseList;
