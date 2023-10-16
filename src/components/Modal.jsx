import React from 'react';

const BootstrapModal = ({ show, handleClose, children }) => {
	const showHideClassName = show ? 'modal modal-bg d-block' : 'modal d-none';

	return (
		<div className={showHideClassName} tabIndex='-1' role='dialog'>
			<div className='modal-dialog modal-lg p-5'>
				<div className='modal-content mx-auto mt-50 p-10'>
				<span
					onClick={handleClose}
					className='bi bi-x fs-2 cursor-pointer position-absolute z-5'
					style={{ right: '15px', top: '5px' }}
				></span>
					<div className='modal-body pt-0'>
						<div className='px-3 py-4'>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BootstrapModal;
