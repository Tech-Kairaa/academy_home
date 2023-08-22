import { useSelector } from 'react-redux';
import PageBanner from '@/components/PageBanner';
import Address from '@/components/purchase/Address';
// import Items from '@/components/purchase/Items';
import Profile from '@/components/purchase/Profile';
import Layout from '@/layouts/Layout';
import Head from 'next/head';
import { useState } from 'react';

const Checkout = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [amount, setAmount] = useState(1);

	const initializeRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';

			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};

	const makePayment = async () => {
		const res = await initializeRazorpay();

		if (!res) {
			alert('Razorpay SDK Failed to load');
			return;
		}

		// Make API call to the serverless API
		const data = await fetch('/api/payment', { method: 'POST' }).then((t) =>
			t.json()
		);
		console.log(data);
		var options = {
			key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
			name: 'Manu Arora Pvt Ltd',
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			description: 'Thankyou for your test donation',
			image: 'https://manuarora.in/logo.png',
			handler: function (response) {
				// Validate payment at server - using webhooks is a better idea.
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: 'Manu Arora',
				email: 'manuarorawork@gmail.com',
				contact: '9999999999',
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<>
			<Head>
				<title>Checkout | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<PageBanner pageName={'banner'} pageTitle={'Checkout'} />
				<section className='checkout-area pt-130 rpt-95 pb-100 rpb-70'>
					<div className='container'>
						{/* <Items /> */}
						<div className='row'>
							<div className='col-lg-8'>
								<Address />
								<Profile />
							</div>
							<div className='col-lg-4'>
								{/* <form
									onSubmit={handlePayment}
									className='checkout-form mb-30'
									method='POST'
								> */}
								<h3 className='from-title mb-25'>Order Summary</h3>
								<div className='package-summary mb-25'>
									<table>
										<tbody>
											<tr>
												<td>
													PSD Book Mockup <strong>× 2</strong>
												</td>
												<td>$303.00</td>
											</tr>
											<tr>
												<td>
													Historical Book <strong>× 2</strong>
												</td>
												<td>$70.00</td>
											</tr>
											<tr>
												<td>
													Medical Equipment <strong>× 1</strong>
												</td>
												<td>$50.00</td>
											</tr>
											<tr>
												<td>Shipping Fee</td>
												<td>$10.00</td>
											</tr>
											<tr>
												<td>Vat</td>
												<td>$5.00</td>
											</tr>
											<tr>
												<td>
													<strong>Order Total</strong>
												</td>
												<td>
													<strong>$438.00</strong>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<input
									className='coupon-code'
									type='text'
									placeholder='Coupon Code'
								/>
								<h5 className='title mt-20 mb-15'>Payment Method</h5>
								<div className='form-group'>
									<select name='payment' id='payment'>
										<option value='default'>Choose an Option</option>
										<option value='payment1'>chash on delivey</option>
										<option value='payment2'>Bank Transfer</option>
										<option value='payment3'>Paypal</option>
									</select>
								</div>
								<button className='theme-btn mt-30 w-100' onClick={makePayment}>
									Proceed to Payment
								</button>
								{/* </form> */}
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Checkout;
