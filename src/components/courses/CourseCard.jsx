/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { toast } from 'react-toastify';
import { addItem, addPrice, removePrice } from '@/services/cart';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import UseImage from './UseImage';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';

const CourseCard = ({ courses }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleAddItem = (cid, price) => {
		if (cartItems.includes(cid)) {
			toast.warning('Already added into cart');
			return;
		}

		dispatch(addItem(cid));
		dispatch(addPrice(price));
		toast.success('Added into cart');
	};

	return (
		<>
			{courses &&
				courses?.map((item, index) => (
					<div className='col-md-4' key={index}>
						<div className='coach-item wow fadeInUp delay-0-4s'>
							<div className='coach-image'>
								<span className='category'>₹ {item.price}</span>
								<UseImage
									cid={item.id}
									filename={item.image}
									className='rounded-top'
								/>
							</div>
							<div className='coach-content rounded-bottom'>
								<div className='d-flex justify-content-between'>
									<span className='text-capitalize'>{item.level} Level</span>
									<span className=''>{item.sections} Sections</span>
								</div>
								<h4 className='mt-10'>
									<Link href={`/courses/course-details?ref=${item.id}`}>
										<a className='text-theme-blue lead'>
											<EllipsisText text={item.title} length={58} />
										</a>
									</Link>
								</h4>
								<p className='mt-5 mb-4'>
									<EllipsisText text={item.subtitle} length={100} />
								</p>
								<ul className='coach-footer pb-2'>
									<li>
										<Link href={`/courses/course-details?ref=${item.id}`}>
											<a>
												<i className='fas fa-external-link-alt' />
												<span> Details</span>
											</a>
										</Link>
									</li>
									<li>
										<button
											className='theme-btn style-one py-2 px-4 text-center'
											onClick={() => handleAddItem(item.id, item.price)}
										>
											<span>
												<em className='fas fa-shopping-bag me-2' />
												Add to cart
											</span>
										</button>
									</li>
								</ul>
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
