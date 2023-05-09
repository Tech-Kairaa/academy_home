import React from 'react';

const Profile = () => {
	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='checkout-form mt-30'
			>
				<h3 className='from-title mb-25'>Profile Details</h3>
				<hr />
				<div className='row mt-30'>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Name </label>
							<input
								type='text'
								className='form-control'
								value={'Kairaa'}
								disabled
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Email </label>
							<input
								type='text'
								className='form-control'
								value={'support@kairaa.in'}
								disabled
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<label className='form-label'>Mobile </label>
							<input
								type='text'
								className='form-control'
								value={'+91 7092771133'}
								disabled
							/>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Profile;
