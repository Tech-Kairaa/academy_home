import React from 'react';
import CourseList from '@/utils/Courses';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { removeItem, clearCart } from '@/services/cart';
import { useDispatch } from 'react-redux';

const Items = ({ cartItems, courses }) => {
	const dispatch = useDispatch();

	const handleRemoveItem = (item) => {
		dispatch(removeItem(item));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='container mb-50'>
			{courses &&
				courses.map(
					(item, index) =>
						cartItems.includes(item.id) && (
							<div
								key={index}
								className='row justify-content-between align-items-center border px-4 py-3 rounded-2'
							>
								<div className='col-auto'>
									<span className='fs-4 text-secondary'>{index + 1}</span>
								</div>
								<div className='col-8'>
									<p className='mb-0'>{item.title}</p>

									<p className='m-0'>
										<strong>PRICE : </strong>
										<span className='lead fw-bold text-theme-green ms-2'>
											₹{item.price}
										</span>
									</p>
								</div>
								<div className='col-3 text-end'>
									<button
										className='bg-transparent text-black-50 fs-5'
										onClick={() => handleRemoveItem(item.id, item.price)}
									>
										<em className='fas fa-trash'></em>
									</button>
								</div>
							</div>
						)
				)}
		</div>
	);
};

export default Items;
