import { removeState } from '@/providers/storage';
import { useEffect } from 'react';

const Logout = () => {
	removeState('AUTH');
	useEffect(() => (window.location.href = '/'), []);
};

export default Logout;
