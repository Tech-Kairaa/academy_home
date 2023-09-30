/* eslint-disable @next/next/no-img-element */
import { toast } from 'react-toastify';
import { addItem } from '@/services/cart';
import { useDispatch, useSelector } from 'react-redux';
import UseImage from './UseImage';
import Link from 'next/link';
import { NumericFormat } from 'react-number-format';

const CourseCard = ({ courses }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleAddItem = (cid) => {
		if (cartItems.includes(cid)) {
			toast.warning('Already added into cart');
			return;
		}

		dispatch(addItem(cid));
		toast.success('Added into cart');
	};

	return (
		<>
			{courses?.map((item, index) => (
				<div className='col-md-4' key={index}>
					<div
						className='coach-item wow fadeInUp delay-0-4s'
						style={{ visibility: 'visible' }}
					>
						<div className='coach-image'>
							<span className='category'>Blockchain</span>
							<UseImage
								cid={item.id}
								filename={item.image}
								className='rounded-top'
							/>
						</div>
						<div className='coach-content p-4 rounded-bottom-3'>
							<span className='label text-capitalize'>{item.level}</span>
							<h4>
								<Link href={`/courses/course-details?ref=${item.id}`}>
									<a>{item.title}</a>
								</Link>
							</h4>
							<div className='ratting-price'>
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
							</div>
							<div className='d-flex justify-content-between'>
								<button
									className='btn theme-btn'
									onClick={() => handleAddItem(item.id)}
								>
									Add to cart
								</button>
								<Link href={`/courses/course-details?ref=${item.id}`}>
									<a className='btn theme-btn style-three'>View</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}

			{!courses && (
				<div className='d-flex justify-content-between align-items-center'>
					<span className='loader'></span>
					<span className='loader'></span>
					<span className='loader'></span>
				</div>
			)}
		</>
	);
};
export default CourseCard;
