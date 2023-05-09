import { useSelector } from 'react-redux';
import PageBanner from '../../src/components/PageBanner';
import Address from '../../src/components/purchase/Address';
import Items from '../../src/components/purchase/Items';
import Profile from '../../src/components/purchase/Profile';
import Layout from '../../src/layout/Layout';

const Checkout = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	console.log(cartItems);

	return (
		<Layout header footer>
			<PageBanner pageName={'banner'} pageTitle={'Checkout'} />
			<section className='checkout-area pt-130 rpt-95 pb-100 rpb-70'>
				<div className='container'>
					<Items />
					<div className='row'>
						<div className='col-lg-8'>
							<Address />
							<Profile />
						</div>
						<div className='col-lg-4'>
							<form
								onSubmit={(e) => e.preventDefault()}
								id='payment-method'
								name='payment-method'
								className='checkout-form mb-30'
								action='#'
								method='POST'
							>
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
								<button type='submit' className='theme-btn mt-30 w-100'>
									Proceed to Payment
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Checkout;
