import { NumericFormat } from 'react-number-format';
import { useState, useEffect } from 'react';
import fetcher from '@/providers/fetcher';
import { toast } from 'react-toastify';
import moment from 'moment';

const CouponCode = ({ totalItems, totalPrice, handlePricing }) => {
	const [couponCodes, setCouponCodes] = useState([]);
	const [newCode, setNewCode] = useState('');
	const [finalPrice, setFinalPrice] = useState('');
	const [totalDiscount, setTotalDiscount] = useState(0);
	const [coupons, setCoupons] = useState([]);

	const addCode = () => {
		if (newCode === '') {
			toast.warning('Coupon code is empty');
			return;
		}

		if (couponCodes.includes(newCode)) {
			toast.warning('Coupon code already exists');
			return;
		}

		setCouponCodes([...couponCodes, newCode]);
		setNewCode('');

		fetcher(`/public/courses/coupon/code/${newCode}`)
			.then((data) => {
				let expiry = moment(data.validity.to, 'YYYY-MM-DD');
				let today = moment();

				if (expiry.isBefore(today)) {
					toast.error('Coupon code expired');
					return;
				} else {
					if (data.discount) {
						setCoupons([...coupons, data]);
						let discountAmount = totalPrice * (data.discount / 100);
						setFinalPrice(finalPrice - discountAmount);
						setTotalDiscount(totalDiscount + data.discount);
					} else {
						toast.error('Invalid coupon code');
					}
				}
			})
			.catch((err) => {
				toast.error('Invalid coupon code');
				setCouponCodes([]);
			});
	};

	const removeCode = (index) => {
		const updatedCodes = [...couponCodes];
		updatedCodes.splice(index, 1);
		setCouponCodes(updatedCodes);

		const updateCoupons = [...coupons];
		updateCoupons.splice(index, 1);
		setCoupons(updateCoupons);

		const discount = coupons[index].discount;
		let discountAmount = totalPrice * (discount / 100);
		setFinalPrice(finalPrice + discountAmount);
		setTotalDiscount(totalDiscount - discount);
	};

	useEffect(() => {
		if (!couponCodes.length) {
			setFinalPrice(totalPrice);
		}

		handlePricing({
			finalPrice: finalPrice !== '' ? finalPrice : totalPrice,
			totalDiscount,
		});
	}, [
		couponCodes,
		handlePricing,
		totalDiscount,
		totalPrice,
		setFinalPrice,
		finalPrice,
	]);

	return (
		<>
			<ul className='list-group mb-3'>
				<li className='list-group-item d-flex justify-content-between align-items-center'>
					<span className='my-auto text-muted'>Total Items</span>
					<span>{totalItems}</span>
				</li>
				<li className='list-group-item d-flex justify-content-between align-items-center'>
					<span className='my-auto text-muted'>Total Price</span>
					<NumericFormat
						value={totalPrice}
						displayType='text'
						thousandSeparator
						decimalScale={0}
						prefix='₹'
					/>
				</li>
				{coupons.length !== 0 && (
					<li className='list-group-item bg-light'>
						<p className='my-0 fs-6 text-secondary'>Promo code</p>

						{coupons.map((coupon, index) => (
							<div
								key={index}
								className='text-success d-flex justify-content-between align-items-center text-uppercase'
							>
								<small>
									{coupon.coupon}
									<span
										className='ms-2 bi bi-x-circle-fill'
										style={{ cursor: 'pointer', color: '#0003' }}
										onClick={() => removeCode(index)}
									></span>
								</small>
								<span className='text-success'>{coupon.discount}% off</span>
							</div>
						))}
					</li>
				)}

				<li className='list-group-item d-flex justify-content-between align-items-center'>
					<span className='my-auto text-muted'>Final Price</span>
					<NumericFormat
						value={finalPrice}
						displayType='text'
						thousandSeparator
						decimalScale={0}
						prefix='₹'
						className='fw-bold'
					/>
				</li>
			</ul>
			{couponCodes.length < 2 && (
				<div className='card p-2'>
					<div className='input-group flex-nowrap'>
						<input
							type='text'
							className='text-center text-uppercase w-75 py-2'
							placeholder='Coupon Code'
							maxLength={8}
							value={newCode}
							onChange={(e) => setNewCode(e.target.value)}
						/>
						<button
							type='button'
							className='theme-btn w-auto py-2'
							onClick={addCode}
						>
							Apply
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default CouponCode;
