import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from '@/utils/Courses';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { removeItem, clearCart, removePrice } from '@/services/cart';

const Cart = ({ courses }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const getCourse = (courseId) => courses.find((id) => id === courseId);

	const handleRemoveItem = (item, price) => {
		dispatch(removeItem(item));
		dispatch(removePrice(price));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<>
			{courses.map(
				(item, index) =>
					cartItems.includes(item.id) && (
						<div key={index}>
							<div className='px-3 py-2 mb-3 rounded-1 hover-shadow-md border'>
								<div className='d-flex justify-content-between'>
									<EllipsisText text={item.title} length={40} />
									<button
										className='bg-transparent text-black-50 '
										title='Remove from cart'
										onClick={() => handleRemoveItem(item.id, item.price)}
									>
										<em className='fas fa-trash'></em>
									</button>
								</div>
								<div className='d-flex justify-content-between'>
									<p className='m-0'>
										<strong>PRICE : </strong>
										<span className='lead fw-bold text-theme-green ms-2'>
											₹{item.price}
										</span>
									</p>
									<button
										className='bg-transparent text-black-50'
										title='Save for later'
									>
										<em className='far fa-heart text-primary'></em>
									</button>
								</div>
							</div>
						</div>
					)
			)}

			{cartItems.length > 1 && (
				<button
					className='btn btn-outline-secondary w-100 border-opacity-50 border py-2'
					onClick={handleClearCart}
				>
					<em className='fas fa-trash me-2'></em> Remove All
				</button>
			)}
		</>
	);
};

export default Cart;
