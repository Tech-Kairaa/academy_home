import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from '@/services/cart';
import { NumericFormat } from 'react-number-format';

const Items = ({ cartItems }) => {
	const dispatch = useDispatch();
	const handleRemoveItem = (item) => dispatch(removeItem(item));
	const handleClearCart = () => dispatch(clearCart());

	return (
		<div className='container mb-50'>
			{cartItems?.map((item, index) => (
				<div
					key={index}
					className='row large-gap justify-content-between align-items-center border py-3 rounded-2'
				>
					<div className='col-auto'>
						<span className='fs-4 text-secondary'>{index + 1}</span>
					</div>
					<div className='col-8 px-0'>
						<p className='mb-0'>{item.title}</p>

						<p className='m-0 gap-3 d-flex align-items-center'>
							<strong>PRICE : </strong>
							{item.price.discount ? (
								<>
									<span className='text-theme-green fw-bold fs-5'>
										<NumericFormat
											value={item.price.discountPrice}
											displayType='text'
											thousandSeparator
											decimalScale={0}
											prefix='₹'
										/>
										<strike className='text-secondary fw-normal ms-2 fs-7'>
											<NumericFormat
												value={item.price.currentPrice}
												displayType='text'
												thousandSeparator
												decimalScale={0}
												prefix='₹'
											/>
										</strike>
									</span>
									<span className='badge text-bg-primary'>
										{item.price.discount}% OFF
									</span>
								</>
							) : (
								<>
									<span className='text-theme-green fw-bold fs-5'>
										<NumericFormat
											value={item.price.currentPrice}
											displayType='text'
											thousandSeparator
											decimalScale={0}
											prefix='₹'
										/>
									</span>
								</>
							)}
						</p>
					</div>
					<div className='col-3 text-end'>
						<button
							type='button'
							className='bg-transparent text-black-50 fs-5'
							onClick={() => handleRemoveItem(item.id)}
						>
							<em className='fas fa-trash'></em>
						</button>
					</div>
				</div>
			))}
			{cartItems && cartItems.length > 1 && (
				<div className='row large-gap justify-content-end'>
					<button
						className='theme-btn style-three mt-30 w-25'
						onClick={handleClearCart}
					>
						Clear Cart
					</button>
				</div>
			)}
		</div>
	);
};

export default Items;
