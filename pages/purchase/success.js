import ProtectedRoute from '@/components/ProtectedRoute';
import Head from 'next/head';
import Layout from '@/layouts/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/services/cart';
import server from '@/providers/server';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export async function getServerSideProps(context) {
	const { ref } = context.query;
	return { props: { paymentId: ref || null } };
}
const Success = ({ paymentId }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.userProfile);
	const cartItems = useSelector((state) => state.cart.cartItems);

	useEffect(() => {
		const createClassroom = async () => {
			try {
				await server.post('/classroom/create', {
					cartItems,
					userId: user?._id,
				});
				dispatch(clearCart());
			} catch (error) {
				console.log(error);
				toast.error(error?.response?.data?.message);
			}
		};

		if (user) createClassroom();
	}, [user, dispatch]);

	return (
		<ProtectedRoute>
			<Head>
				<title>Checkout | Kairaa Blockchain Academy</title>
				<link rel='shortcut icon' href='/assets/images/favicon.png' />
			</Head>
			<Layout header footer>
				<section className='mt-100 mb-100 pt-100 pb-100'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-6'>
								<div className='section-title text-center mb-30'>
									<span className='sub-title mb-20'>Payment Success</span>
									<h2>You Order Success</h2>
									{paymentId && <span>Ref Id : {paymentId} </span>}
									<p className='lead'>
										Please navigate to your dashboard, where you will find your
										course listed. We hope you enjoy your learning experience.
									</p>
								</div>
								<div className='d-flex justify-content-center align-items-center gap-3'>
									<Link href='/'>
										<a className='theme-btn'>Go to home</a>
									</Link>
									<Link href='https://learner.kairaaacademy.com/'>
										<a className='theme-btn style-two'>Go to Dashboard</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</ProtectedRoute>
	);
};
export default Success;
