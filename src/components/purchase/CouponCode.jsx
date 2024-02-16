import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateProductInfo } from '@/services/cart';
import server from '@/providers/server';
import { NumericFormat } from 'react-number-format';

const CouponCode = ({ totalPrice, totalItems }) => {
	const dispatch = useDispatch();
	const couponInputRef = useRef();
	const [couponCodes, setCouponCodes] = useState([]);
	const [finalPrice, setFinalPrice] = useState(totalPrice);
	const [discountPercentages, setDiscountPercentages] = useState({});

	const applyCoupon = (code) => {
		if (couponCodes.includes(code)) {
			toast.warning('Code already exists');
			return;
		}

		if (couponCodes.length < 2 && code) {
			setCouponCodes([...couponCodes, code]);
			fetchAndUpdateDiscount(code);
			couponInputRef.current.value = '';
		}
	};

	const removeCoupon = (code) => {
		const updatedCoupons = couponCodes.filter((c) => c !== code);
		setCouponCodes(updatedCoupons);
	};

	const calculateDiscountPercentage = async (code) => {
		const baseUrl = `/public/courses/coupon/code/${code}`;

		try {
			const response = await server.get(baseUrl);
			const { validity, discount } = response.data;
			const expiry = moment(validity.to, 'YYYY-MM-DD');
			const today = moment();

			if (expiry.isBefore(today)) {
				toast.error('Coupon code expired');
				removeCoupon(code);
				return 0;
			}
			if (!discount) {
				toast.error('Invalid coupon code');
				removeCoupon(code);
				return 0;
			}

			return discount;
		} catch (error) {
			console.log(error?.response);
			toast.error('Invalid coupon code');
			return 0;
		}
	};

	const fetchAndUpdateDiscount = async (code) => {
		const discount = await calculateDiscountPercentage(code);
		setDiscountPercentages((prevDiscounts) => ({
			...prevDiscounts,
			[code]: discount,
		}));
	};

	useEffect(() => {
		const calculateDiscount = async () => {
			let discountPercentage = 0;

			for (const code of couponCodes) {
				discountPercentage += discountPercentages[code] || 0;
			}

			const newFinalPrice = totalPrice * (1 - discountPercentage / 100);
			setFinalPrice(newFinalPrice);

			dispatch(
				updateProductInfo({
					finalPrice: Number(newFinalPrice.toFixed(2)),
					totalDiscount: Number((totalPrice - newFinalPrice).toFixed(2)),
				})
			);
		};

		calculateDiscount();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [couponCodes, totalPrice, dispatch, discountPercentages]);

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
				{couponCodes.length !== 0 && (
					<li className='list-group-item bg-light'>
						<p className='my-0 fs-6 text-secondary'>Promo code</p>
						{couponCodes.map((code) => (
							<div
								key={code}
								className='text-success d-flex justify-content-between align-items-center text-uppercase'
							>
								<small>
									{code}
									<span
										className='ms-2 bi bi-x-circle-fill'
										style={{ cursor: 'pointer', color: '#0003' }}
										onClick={() => removeCoupon(code)}
									></span>
								</small>
								<span className='text-success'>
									{discountPercentages[code] || 0}% off
								</span>
							</div>
						))}
					</li>
				)}

				<li className='list-group-item d-flex justify-content-between align-items-center'>
					<span className='my-auto text-muted'>Final Price</span>
					<NumericFormat
						value={finalPrice || totalPrice}
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
							ref={couponInputRef}
						/>
						<button
							type='button'
							className='theme-btn w-auto py-2'
							onClick={() => applyCoupon(couponInputRef.current.value)}
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
