import Link from 'next/link';
import CartIcon from './CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import useCartItems from '@/hooks/useCartItems';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { removeItem, removePrice, clearCart } from '@/services/cart';

const CartContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const user = useSelector((state) => state.auth.userProfile);
	const dispatch = useDispatch();

	const toggleCart = () => setIsOpen(!isOpen);

	const { data, error } = useCartItems();

	const itemsCount = data && data?.totalItems;
	const totalPrice = data && data?.totalPrice;

	if (error) console.log(error);

	return (
		<>
			<CartIcon onClick={toggleCart} itemsCount={itemsCount} />
			{isOpen && (
				<div className='cart-sidebar position-fixed top-0 bottom-0 w-100 d-flex justify-content-end'>
					<div className='w-25 bg-white px-4 py-20 d-flex flex-column justify-content-between overflow-y-scroll'>
						{data && (
							<CartList cartItems={data?.cartItems} dispatch={dispatch} />
						)}

						{!data && (
							<div className='d-flex flex-column justify-content-between pt-50'>
								<span
									className='bi bi-cart text-center'
									style={{ fontSize: '15rem', color: '#0002' }}
								></span>
							</div>
						)}

						<CartFooter
							onClick={toggleCart}
							itemsCount={itemsCount || 0}
							user={user ? true : false}
							price={totalPrice || 0}
						/>
					</div>
				</div>
			)}
		</>
	);
};
export default CartContainer;

export const CartList = ({ cartItems, dispatch }) => {
	const handleRemoveItem = (item) => dispatch(removeItem(item));
	const handleClearCart = () => dispatch(clearCart());

	return (
		<>
			{cartItems.map((item, index) => (
				<div
					className='row align-items-center justify-content-between border-bottom pb-2'
					key={index}
				>
					<div className='col-md-10'>
						<EllipsisText text={item.title} length={35} />
						<p className='m-0'>
							<strong>PRICE : </strong>
							<span className='lead fw-bold text-theme-green ms-2'>
								₹
								{item.price.discount
									? item.price.discountPrice
									: item.price.currentPrice}
							</span>
						</p>
					</div>
					<div className='col-md-2'>
						<button
							className='bg-transparent text-black-50'
							title='Remove from cart'
							onClick={() => handleRemoveItem(item.id)}
						>
							<em className='fas fa-trash'></em>
						</button>
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
		</>
	);
};

export const CartFooter = ({ onClick, itemsCount, user, price }) => {
	return (
		<div>
			{itemsCount >= 1 && (
				<>
					<div className='mb-25 bg-light p-3 rounded-2'>
						<div className='d-flex justify-content-between'>
							<span className=''>Number of items added</span>
							<span className=''>{itemsCount}</span>
						</div>
						<div className='d-flex justify-content-between'>
							<span className=''>Price of total items</span>
							<span className=''>
								<NumericFormat
									value={price}
									displayType='text'
									thousandSeparator
									decimalScale={0}
									prefix='₹'
								/>
							</span>
						</div>
					</div>

					<Link href={user ? '/purchase/checkout' : '/learner/login'}>
						<a className='theme-btn style-two w-100 mb-1'>
							{user ? 'Proceed to checkout' : 'Login and proceed'}
						</a>
					</Link>
				</>
			)}

			<button className='theme-btn style-three w-100 mt-2' onClick={onClick}>
				Close
			</button>
		</div>
	);
};
