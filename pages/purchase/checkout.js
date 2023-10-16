/* eslint-disable @next/next/no-img-element */
import PageBanner from '@/components/PageBanner';
import ProtectedRoute from '@/components/ProtectedRoute';
import CouponCode from '@/components/purchase/CouponCode';
import Items from '@/components/purchase/Items';
import useCartItems from '@/hooks/useCartItems';
import Layout from '@/layouts/Layout';
import server from '@/providers/server';
import { updateProductInfo } from '@/services/cart';
import { razorpayOptions } from '@/utils/paymentOptions';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export async function getServerSideProps(context) {
	const { ref } = context.query;
	return { props: { courseId: ref || null } };
}

const Checkout = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const userProfile = useSelector((state) => state.auth.userProfile);
	const store = useSelector((state) => state.cart.cartItems);
	const productInfo = useSelector((state) => state.cart.productInfo);
	const { data: cart } = useCartItems();
	const cartItems = cart && cart?.cartItems;
	const totalPrice = cart && cart?.totalPrice;
	const totalItems = cart && cart?.totalItems;

	const [values, setValues] = useState({
		name: 'pushparaj',
		email: 'work.gpraj@gmail.com',
		mobile: '8883335430',
		country: 'India',
		region: 'Tamil Nadu',
		pincode: '603402',
	});

	const handleValues = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleCountry = (value) => setValues({ ...values, country: value });
	const handleRegion = (value) => setValues({ ...values, region: value });

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!userProfile) {
			toast.error('Please Login');
			return;
		}

		const { key } = (await server.get('/orders/checkout/key')).data;
		const response = await server.post('/orders/checkout', {
			billingAddress: values,
			productInfo: productInfo,
			userId: userProfile._id,
		});
		const {productInfo: { finalPrice },	orderId	} = response.data; //prettier-ignore
		makePayment(key, finalPrice, orderId);
	};

	const makePayment = (key, amount, orderId) => {
		const { name, email, mobile } = values;

		const processPayment = new window.Razorpay(
			razorpayOptions(key, amount, orderId, name, email, mobile)
		);

		const handleFailure = async (status) => {
			try {
				await server.post(
					'http://localhost:5002/api/v1/orders/checkout/verification',
					{
						status,
						orderId,
						cartItems: productInfo.cartItems,
						userId: userProfile._id,
					}
				);
			} catch (error) {
				toast.error(`Payment process ${status}`);
			}
		};

		processPayment.on('payment.failed', async () => {
			await handleFailure('failed');
		});

		processPayment.on('payment.cancel', async () => {
			await handleFailure('canceled');
		});

		processPayment.open();
	};

	useEffect(() => {
		if (!store.length) {
			router.replace('/courses');
		}

		const totalCartItems = [];
		for (let key in cartItems) {
			totalCartItems[key] = {
				courseId: cartItems[key].id,
				price:
					cartItems[key].price.discountPrice ||
					cartItems[key].price.currentPrice,
			};
		}

		dispatch(updateProductInfo({ totalItems: totalCartItems }));
	}, [router, store, dispatch, cartItems]);

	return (
		<ProtectedRoute>
			<Head>
				<title>Checkout | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Script src='https://checkout.razorpay.com/v1/checkout.js'></Script>
			<Layout header footer>
				<PageBanner pageName={'banner'} pageTitle={'Checkout'} />
				<section className='checkout-area my-100'>
					<div className='container'>
						{!cartItems && (
							<div className='loader w-50 mx-auto row mb-10'></div>
						)}
						{cartItems && <Items cartItems={cartItems} key={Math.random()} />}
						<div className='row large-gap mt-50'>
							<div className='col-md-4 order-md-2 mb-4 pe-0'>
								<CouponCode totalItems={totalItems} totalPrice={totalPrice} />
							</div>

							<CheckoutForm
								values={values}
								handleSubmit={handleSubmit}
								handleCountry={handleCountry}
								handleRegion={handleRegion}
								handleValues={handleValues}
								key={Math.random()}
							/>
						</div>
					</div>
				</section>
			</Layout>
		</ProtectedRoute>
	);
};
export default Checkout;

export const CheckoutForm = (props) => {
	const { values, handleSubmit, handleCountry, handleRegion, handleValues } =	props; //prettier-ignore
	return (
		<div className='col-md-8 card p-40 pb-10'>
			<form onSubmit={handleSubmit}>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Name </label>
							<input
								type='text'
								className='form-control'
								value={values.name}
								name='name'
								placeholder='Your name'
								onChange={handleValues}
								required
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Email </label>
							<input
								type='email'
								className='form-control'
								value={values.email}
								name='email'
								placeholder='Enter email'
								onChange={handleValues}
								required
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Select Country </label>
							<CountryDropdown
								value={values.country}
								onChange={handleCountry}
								required
								// priorityOptions={['IN', 'US']}
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group mb-4'>
							<label className='form-label'>Select State </label>
							<RegionDropdown
								country={values.country}
								value={values.region}
								onChange={handleRegion}
								required
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Enter Pin-code </label>
							<input
								type='text'
								className='form-control'
								placeholder='6-digit'
								maxLength={6}
								minLength={6}
								name='pincode'
								value={values.pincode}
								onChange={handleValues}
								required
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Mobile</label>
							<input
								type='text'
								className='form-control'
								placeholder='10-digit'
								maxLength={10}
								minLength={10}
								value={values.mobile}
								name='mobile'
								required
								onChange={handleValues}
							/>
						</div>
					</div>
					<div className='col-md-12'>
						<div className='form-group'>
							<button
								type='submit'
								className='theme-btn form-control mt-20 py-3'
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
