import React from 'react';

const BootstrapModal = ({ show, handleClose, children, transparent }) => {
	const showHideClassName = show ? 'modal modal-bg d-block' : 'modal d-none';

	return (
		<div className={showHideClassName} tabIndex='-1' role='dialog'>
			<div className='modal-dialog modal-lg p-5'>
				<div
					className={`modal-content mx-auto mt-50 p-10 ${
						transparent ? 'bg-transparent' : ''
					}  border-0`}
				>
					<span
						onClick={handleClose}
						className={`bi bi-x fs-1 cursor-pointer position-absolute z-5 ${
							transparent ? 'text-white' : ''
						} rounded-circle`}
						style={{ right: '15px', top: '5px' }}
					></span>
					<div className='modal-body pt-0'>
						<div className='px-3 pt-4 py-3'>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BootstrapModal;
