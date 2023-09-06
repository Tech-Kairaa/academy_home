/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import PageBanner from '@/components/PageBanner';
import Items from '@/components/purchase/Items';
import Layout from '@/layouts/Layout';
import { useCourseList } from '@/hooks/useCourses';
import Head from 'next/head';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const BillingCard = dynamic(() => import('@/components/purchase/Billing'), {
	ssr: false,
});

const Checkout = () => {
	const userProfile = useSelector((state) => state.auth.userProfile);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const { data: courses } = useCourseList();

	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');

	const handleCountryChange = (val) => {
		setCountry(val);
		setRegion('');
	};

	const handleRegionChange = (val) => {
		setRegion(val);
	};

	const address = userProfile?.address;

	return (
		<>
			<Head>
				<title>Checkout | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<PageBanner pageName={'banner'} pageTitle={'Checkout'} />
				<section className='checkout-area my-100'>
					<div className='container'>
						<Items cartItems={cartItems} courses={courses} />
						<div className='row px-3'>
							<BillingCard totalItems={cartItems.length} />
							<div className='col-12 border p-50 rounded-3'>
								<h3 className='lead mb-40'>Billing Details</h3>
								<div className='row align-items-center'>
									<div className='col-md-4'>
										<div className='form-group'>
											<label className='form-label'>Name </label>
											<input
												type='text'
												className='form-control'
												value={userProfile.name}
												disabled
											/>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='form-group'>
											<label className='form-label'>Email </label>
											<input
												type='email'
												className='form-control'
												value={userProfile.email}
												disabled
											/>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='form-group'>
											<label className='form-label'>Select Country </label>
											<CountryDropdown
												value={country}
												onChange={handleCountryChange}
											/>
										</div>
									</div>
								</div>
								<div className='row align-items-center'>
									<div className='col-md-4'>
										<div className='form-group mb-4'>
											<label className='form-label'>Select State </label>
											<RegionDropdown
												country={country}
												value={region}
												onChange={handleRegionChange}
											/>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='form-group'>
											<label className='form-label'>Enter Pin-code </label>
											<input
												type='text'
												className='form-control'
												placeholder='6-digit'
												maxLength={6}
												minLength={6}
											/>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='form-group'>
											<label className='form-label'>Mobile (optional) </label>
											<input
												type='text'
												className='form-control'
												placeholder='10-digit'
												maxLength={10}
												minLength={10}
											/>
										</div>
									</div>
								</div>
								<div className='col-md-4'>
									<div className='form-group'>
										<button className='theme-btn form-control mt-20 py-3'>
											Checkout
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Checkout;
