import { useDispatch } from 'react-redux';
import useUser from '@/hooks/useUser';
import { updateProfile } from '@/services/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, redirectOnLogout }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { data: user, error } = useUser();

	useEffect(() => {
		try {
			if (error) {
				console.log(error?.response?.data?.message);
				redirectOnLogout && router.push('/');
			}

			if (user) {
				if (user?.role === 'learner') {
					dispatch(updateProfile(user));
				}
			}
		} catch (error) {}
	}, [error, user, router, dispatch, redirectOnLogout]);

	return children;
};

export default ProtectedRoute;
