import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

const Activate = () => {
	const router = useRouter();
	const token = router.query.activate;
	const [state, updateState] = useState(null);

	const activateAccount = async () => {
		updateState('processing');
		const response = (await axios.post('/api/auth', { token })).data;
		if (response.success) {
			const userId = response.data.userId;
			const updateResponse = await axios.put('/api/accounts/learner', {
				userId,
			});
			const updateResult = updateResponse.data;
			if (updateResult.success) {
				updateState('activated');
			} else {
				updateState('!activated');
			}
		} else {
			if (response.type === 'TOKEN_EXPIRED') {
				updateState('expired');
			}
		}
	};

	const handleCloseTab = () => {
		window.close();
	};

	return (
		<>
			<Head>
				<title>Activate Account | Kairaa Blockchain Academy</title>
			</Head>
			{token && (
				<div className='container my-200'>
					<div className='row justify-content-center align-items-center'>
						<div className='col-md-8 col-xl-10 col-sm-10 contact-form'>
							{state === null && (
								<div className='text-center'>
									<div className='section-title mt-40'>
										<Image
											src='/assets/images/logos/logo.png'
											alt='kairaa blockchain academy logo'
											width={60}
											height={70}
										/>
										<h2 className='mt-10'>
											Kairaa <span>Blockchain</span> Academy
										</h2>
									</div>
									<p className='lead mt-20 px-5'>
										It&apos;s time to take the first step towards your goals!
										Click the activation button below to create your account and
										begin your journey with us.
									</p>
									<button
										className='theme-btn style-one mt-10 mb-50'
										onClick={activateAccount}
									>
										Activate now
									</button>
								</div>
							)}
							{state === 'processing' && (
								<div className='d-flex justify-content-center'>
									<Image
										src='/assets/images/shapes/loader.gif'
										width={500}
										height={370}
										className='w-auto h-auto'
										alt='submitting form'
									/>
								</div>
							)}

							{state === 'expired' && (
								<div className='text-center'>
									<div className='section-title mt-40'>
										<h2 className='mt-10'>Link Expired</h2>
									</div>
									<p className='lead mt-20 px-5'>
										Sorry, the link you followed has expired. To access Kairaa
										Academy, please log in again at kairaaacademy.com and
										request a new link to be sent to your email address.
									</p>
									<button
										className='theme-btn style-three mt-10 mb-50'
										onClick={handleCloseTab}
									>
										Close Page
									</button>
								</div>
							)}

							{state === 'activated' && (
								<div className='text-center'>
									<div className='section-title mt-40'>
										<h2 className='mt-10'>Activated Successfully</h2>
									</div>
									<p className='lead mt-20 px-5'>
										Your account activated successfully. To access Kairaa
										Academy, please log in again at kairaaacademy.com and
										request a new link to be sent to your email address.
									</p>
									<Link href='https://www.kairaaacademy.com/'>
										<a className='theme-btn style-one mt-10 mb-50'>
											Go to home
										</a>
									</Link>
								</div>
							)}
							{state === '!activated' && (
								<div className='text-center'>
									<div className='section-title mt-40'>
										<h2 className='mt-10'>Activation Failed</h2>
									</div>
									<p className='lead mt-20 px-5'>
										Sorry, your account activation failed during server issue.
										To access Kairaa Academy, please log in again at
										kairaaacademy.com and request a new link to be sent to your
										email address.
									</p>
									<button
										className='theme-btn style-three mt-10 mb-50'
										onClick={handleCloseTab}
									>
										Close Page
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Activate;
