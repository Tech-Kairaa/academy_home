import React, { useState } from 'react';
import Advertise from '../src/components/Advertise';
import Layout from '../src/layout/Layout';

const FreeSession = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let testData;
		if (mobile === '' || email === '' || name === '') {
			setError('Please enter all details');
		} else {
			setError(false);
			if (email.match(mailFormat)) {
				testData = {
					name,
					email,
					mobile,
				};
				setError(false);
			} else {
				setError('Email is not valid');
			}
		}

		// setSubmitted(true);
		// setName('');
		// setEmail('');
		// setMobile('');
		const response = await fetch('/api/register-session', {
			method: 'POST',
			body: JSON.stringify({ testData }),
			headers: {
				// Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);
	};

	return (
		<Layout header footer>
			{/* Contact Form Start */}
			<section className='contact-form-area mt-100 wow fadeInUp delay-0-2s'>
				<div className='container pb-50'>
					<form
						// onSubmit={(e) => e.preventDefault()}
						className='p-50 z-1 rel'
						method='post'
						action='https://kaitcrypto.com/academy/api/academy.php'
					>
						<div className='section-title text-center mb-50'>
							<div className='section-title text-center mb-55'>
								<span className='sub-title mb-20'>Take part into</span>
								<h2>Free Blockchain Overview Session</h2>
							</div>
						</div>
						<div className='row mt-25 justify-content-center'>
							<div className='col-md-4'>
								<div className='form-group'>
									<input
										type='text'
										onChange={(e) => {
											setName(e.target.value);
										}}
										name='name'
										className='form-control'
										placeholder='Full Name'
										required=''
									/>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='form-group'>
									<input
										type='email'
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										name='email'
										className='form-control'
										placeholder='Email Address'
										required=''
									/>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='form-group'>
									<input
										type='text'
										name='mobile'
										onChange={(e) => {
											setMobile(e.target.value);
										}}
										className='form-control'
										placeholder='Phone Number'
										required
										maxLength='10'
									/>
								</div>
							</div>

							{error && <p>{error}</p>}

							<div className='col-md-12'>
								<div className='form-group text-center mb-0'>
									<button
										type='submit'
										className='theme-btn'
										/* onClick={(e) => {
											handleSubmit(e);
										}} */
									>
										Register Now
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* Contact Form End */}
			<section className='pb-60'>
				<Advertise />
			</section>
		</Layout>
	);
};

export default FreeSession;
