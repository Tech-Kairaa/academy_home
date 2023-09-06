import { useSelector } from 'react-redux';

const Billing = ({ totalItems }) => {
	const totalPrice = useSelector((state) => Number(state.cart.totalPrice));
	return (
		<div className='col-12 mb-50 border px-4 py-3 rounded-3 d-flex align-items-center gap-4'>
			<span>
				Total Items : <strong>{totalItems}</strong>
			</span>
			<span>
				Total Price :
				<strong>
					<em className='bi bi-currency-rupee fs-5 ms-2'></em>
					{totalPrice}
				</strong>
			</span>

			<div>
				<span>Coupon code : </span>
				<input
					type='text'
					className='form-control-sm w-auto text-center'
					placeholder='_ _ _ _ _ _ _ _ _'
					maxLength={8}
				/>
			</div>
			<button type='button' className='btn btn-primary btn-sm m-0'>
				Activate
			</button>

			<span>
				Final Price :
				<strong className='text-theme-green fs-5'>
					<em className='bi bi-currency-rupee fs-5 ms-2'></em>
					{totalPrice}
				</strong>
			</span>
		</div>
	);
};
export default Billing;
