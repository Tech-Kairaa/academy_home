import { useEffect, useState } from 'react';

const CartIcon = ({ onClick, itemsCount }) => {
	const [count, setCount] = useState(0);
	useEffect(() => setCount(itemsCount), [itemsCount]);
	return (
		<div className='cart position-fixed bottom-0 end-0 z-2'>
			<div className='mb-20 me-4 p-3 position-relative'>
				<button className='cart-button' onClick={onClick}>
					<span className='cart-icon bi bi-bag-fill fs-5'></span>
				</button>
				<span
					className='cart-count position-absolute'
					style={{ padding: '0px 10px' }}
				>
					{count}
				</span>
			</div>
		</div>
	);
};
export default CartIcon;
