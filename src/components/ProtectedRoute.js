import useUser from 'lib/hooks/useUser';
import { useDispatch } from 'react-redux';
import { updateProfile } from '@/services/auth';
import { useEffect } from 'react';

const ProtectedRoute = (props) => {
	const dispatch = useDispatch();
	const { data: user, error } = useUser();

	if (error) console.log(error?.response?.data?.message);

	if (user) dispatch(updateProfile(user));

	return props.children;
};

export default ProtectedRoute;
