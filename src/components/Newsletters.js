import server from '@/providers/server';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletters = () => {
	const [updates, setUpdates] = useState('regular');
	const [email, setEmail] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await server.post('/public/newsletter/subscribe', { updates, email });
			toast.success('Subscribed successfully');
		} catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
		}
	};

	return (
		<div className='footer-newsletter br-10 bg-lighter'>
			<div className='row'>
				<div className='col-lg-5'>
					<div
						className='newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s'
						style={{
							backgroundImage: 'url(/assets/images/video/footer-video-bg.jpg)',
						}}
					>
						<a
							href='https://www.youtube.com/watch?v=9Y7ma241N8k'
							className='mfp-iframe video-play'
						>
							<i className='fas fa-play' />
						</a>
					</div>
				</div>
				<div className='col-lg-7 align-self-center'>
					<div className='newsletter-content wow fadeInRight delay-0-2s'>
						<div className='section-title mb-20'>
							<span className='sub-title-two mb-1'>Newsletters</span>
							<h2>Get Our Every Single Notifications</h2>
						</div>
						<form onSubmit={handleSubmit} className='newsletter-form mt-25'>
							<div className='mb-25 p-0 d-flex align-items-center'>
								<div className='form-control m-0 p-0 w-50'>
									<input
										type='radio'
										className='btn-check'
										name='options-outlined'
										id='regular'
										checked={updates === 'regular' || false}
										onChange={() => setUpdates('regular')}
									/>
									<label
										className='btn btn-outline-secondary px-4 py-2'
										htmlFor='regular'
									>
										Regular Updates
									</label>
								</div>
								<div className='form-control m-0 p-0'>
									<input
										type='radio'
										className='btn-check'
										name='options-outlined'
										id='weekly'
										checked={updates === 'weekly' || false}
										onChange={() => setUpdates('weekly')}
									/>
									<label
										className='btn btn-outline-secondary px-4 py-2'
										htmlFor='weekly'
									>
										Weekly Updates
									</label>
								</div>
							</div>
							<div className='newsletter-email'>
								<label htmlFor='email'>
									<i className='far fa-envelope' />
								</label>
								<input
									id='email'
									type='email'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<div className='d-sm-block d-lg-none mt-20'></div>
								<button type='submit' className='theme-btn style-two'>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Newsletters;
