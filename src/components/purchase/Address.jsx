import React from 'react';

const Address = () => {
	return (
		<>
			<form onSubmit={(e) => e.preventDefault()} className='checkout-form'>
				<h3 className='from-title'>Address Details</h3>
				<hr />
				<div className='row mt-30'>
					<div className='col-md-6'>
						<div className='form-group mb-4'>
							<select name='country' id='country'>
								<option value='value1'>Select Country</option>
								<option value='value2'>Australia</option>
								<option value='value3'>Canada</option>
								<option value='value4'>China</option>
								<option value='value5'>Morocco</option>
								<option value='value6'>Saudi Arabia</option>
								<option value='value7'>United Kingdom (UK)</option>
								<option value='value8'>United States (US)</option>
							</select>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<input
								type='text'
								id='state'
								name='state'
								className='form-control'
								defaultValue=''
								placeholder='State'
								required=''
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<input
								type='text'
								id='state'
								name='state'
								className='form-control'
								defaultValue=''
								placeholder='Pin Code'
								required=''
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='Notes about your order'
							/>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Address;
