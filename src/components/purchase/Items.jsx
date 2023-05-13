import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from '@/utils/Courses';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { removeItem, clearCart } from '@/services/cart';

const Items = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const getCourse = (courseId) => {
		return CourseList.find((id) => id.cid === courseId);
	};

	const handleRemoveItem = (item) => {
		dispatch(removeItem(item));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='row mb-50'>
			{cartItems.map((item, index) => (
				<div key={index}>
					<div className='px-3 py-2 mb-3 rounded-1 hover-shadow-md border'>
						<div className='d-flex justify-content-between'>
							<EllipsisText text={getCourse(item).title} length={40} />
							<button
								className='bg-transparent text-black-50 '
								title='Remove from cart'
								onClick={() => handleRemoveItem(getCourse(item).cid)}
							>
								<em className='fas fa-trash'></em>
							</button>
						</div>
						<div className='d-flex justify-content-between'>
							<p className='m-0'>
								<strong>PRICE : </strong>
								<span className='lead fw-bold text-theme-green'>$240</span>
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
			))}

			{cartItems.length > 1 && (
				<button
					className='btn btn-outline-secondary w-100 border-opacity-50 border py-2'
					onClick={handleClearCart}
				>
					<em className='fas fa-trash me-2'></em> Remove All
				</button>
			)}
		</div>
	);
};

export default Items;
