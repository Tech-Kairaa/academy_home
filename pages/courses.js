/* eslint-disable @next/next/no-img-element */
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import Head from 'next/head';
import { useState } from 'react';
import Modal from '@/components/Modal';
import WorkShops from '@/utils/Workshops.json';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import NavTabs from '@/components/NavTabs';
import server from '@/providers/server';

const CourseList = () => {
	const user = useSelector((state) => state.auth.userProfile);
	const [showModal, setShowModal] = useState(0);
	const handleCloseModal = () => {
		setShowModal(false);
		setIsSubmitted(false);
	};
	const [submitted, setIsSubmitted] = useState(false);

	const [values, setValues] = useState({
		refId: '',
		mobile: user?.mobile || '',
		paymentMethod: 'via_upi',
	});

	const handleValues = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const setPaymentMethod = (method) => {
		setValues({ ...values, paymentMethod: method });
	};

	const triggerModal = (id) => {
		if (!user) {
			toast.warning('Please login and continue');
			return;
		}

		setShowModal(id);
	};

	const workshop = WorkShops.filter((item) => item.workshopId === showModal)[0];

	const bookWorkshop = async (e) => {
		e.preventDefault();
		const formValues = {
			...values,
			userId: user?._id,
			userEmail: user?.email,
			classId: workshop?.workshopId,
			classTitle: workshop?.title,
		};

		try {
			await server.post('/public/liveclass', formValues);
			toast.success('updated successfully');
			setIsSubmitted(true);
			setValues({ ...values, refId: '' });
		} catch (error) {
			console.log(error?.response);
			setIsSubmitted(false);
			toast.error(error?.response?.data?.message);
		}
	};

	const tabs = [
		{ id: 'via_upi', label: 'UPI' },
		{ id: 'via_qr_code', label: 'QR Code' },
		{ id: 'via_bank_account', label: 'Bank Account' },
	];

	const tabContent = {
		via_upi: (
			<div>
				<ul className='pt-4'>
					<li className='fw-bold'>Name : Kairaa</li>
					<li className='font-monospace mb-2'>ID : KAIRAA.06@cmsidfc</li>
				</ul>
			</div>
		),
		via_qr_code: (
			<div className='mt-10'>
				<img
					src='/assets/images/payments/academy_qr.png'
					alt=''
					className='w-25 h-25'
				/>
			</div>
		),
		via_bank_account: (
			<div>
				<ul className='pt-4'>
					<li className='fw-bold'>
						Account Name : KAIRAA TECH SERVE PRIVATE LIMITED
					</li>
					<li className='font-monospace'>Bank Name : IDFC FIRST</li>
					<li className='font-monospace'>Account Number : 10086889222</li>
					<li className='font-monospace'>IFSC Code : IDFB0080123</li>
					<li className='font-monospace'>
						Branch : Gandhi Nagar- Adyar Bridge Road.
					</li>
				</ul>
			</div>
		),
	};

	return (
		<ProtectedRoute>
			<Head>
				<title>Courses | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer newsletter={true} topbar={true}>
				<PageBanner pageName={'courses'} pageTitle={'Exclusive courses'} />
				<section className='course-list-area py-50 rpt-95 rpb-100'>
					<div className='container-fluid p-50'>
						<div className='row'>
							{WorkShops.map((item, index) => (
								<div className='col-lg-6' key={index}>
									<div className='course-list-inner'>
										<div className='coach-item style-two coach-list wow fadeInUp delay-0-4s'>
											<div className='coach-image'>
												<img
													src={`assets/images/coaches/coach-list${index}.jpg`}
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
														onClick={() => triggerModal(item.workshopId)}
													>
														Buy Now
													</button>
													<span className='bg-theme-primary fw-bold px-3 rounded-1'>
														{item.price > 1 ? (
															<>
																<em className='bi bi-currency-rupee fs-6'></em>
																{item.price}
															</>
														) : (
															'Free'
														)}
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
						{!submitted && workshop.price && (
							<>
								<div className='row mt-30'>
									{/* <div className='col-md-12 mb-4 d-inline-flex justify-content-between'>
										<a
											className='theme-btn style-three'
											href='assets/images/hero.png'
											download
										>
											<em className='bi bi-download me-2'></em> Course Content
										</a>
									</div> */}
									<div className='col-md-12 mb-4'>
										<NavTabs
											tabs={tabs}
											defaultActiveTab='via_upi'
											content={tabContent}
											onChange={setPaymentMethod}
										/>
									</div>
								</div>
								<form onSubmit={bookWorkshop}>
									<div className='row mt-0'>
										<div className='col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													style={{ padding: '11px 35px' }}
													placeholder='Reference Id'
													required
													autoComplete='off'
													value={values.refId}
													name='refId'
													onChange={(e) => handleValues(e)}
												/>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group mb-20'>
												<input
													type='text'
													style={{ padding: '11px 35px' }}
													placeholder='Mobile'
													minLength={10}
													maxLength={ 10 }
													autoComplete='off'
													required
													value={values.mobile}
													name='mobile'
													onChange={(e) => handleValues(e)}
												/>
											</div>
										</div>
										<div className='col-md-12'>
											<p className='mx-2'>
												<em className='bi bi-info-circle me-1'></em>
												Please provide the transaction ID or payment ID to
												verify your transaction.
											</p>
										</div>
										<div className='col-md-6'>
											<div className='form-group mb-0'>
												<button className='theme-btn style-one'>Proceed</button>
											</div>
										</div>
									</div>
								</form>
							</>
						)}

						{!workshop.price && (
							<>
								{!submitted && (
									<>
										<p className='my-4'>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kairaa Academy
											offers a wide range of free courses and workshops just
											like this one. Follow Kairaa Academy to unlock even more
											benefits!
										</p>
										<form onSubmit={bookWorkshop}>
											<div className='row'>
												<div className='col-md-6'>
													<div className='form-group mb-20'>
														<input
															type='text'
															style={{ padding: '11px 35px' }}
															placeholder='Mobile'
															minLength={10}
															maxLength={10}
															required
															value={values.mobile}
															name='mobile'
															onChange={(e) => handleValues(e)}
														/>
													</div>
												</div>
												<div className='col-md-6'>
													<div className='form-group mb-20'>
														<button className='theme-btn style-one'>
															Proceed
														</button>
													</div>
												</div>
											</div>
										</form>
									</>
								)}
							</>
						)}

						{submitted && (
							<>
								<p className='pt-4 '>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are currently
									processing your order 🤓. Don&apos;t worry; we will get back
									to you within a timescale of ⏱ 6 minutes to 6 hours. If you
									have any doubts or queries, please feel free to contact us at
									✉️ kairaaacademy@gmail.com.
								</p>
							</>
						)}
					</Modal>
				)}
			</Layout>
		</ProtectedRoute>
	);
};
export default CourseList;
