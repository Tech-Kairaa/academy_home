import useSWR from 'swr';
import axios from 'axios';
import { loadState } from '@/providers/storage';
import { useDispatch } from 'react-redux';
import { updateLogin, updateProfile } from '@/services/auth';
import { useRouter } from 'next/router';

const fetchData = async (data) => {
	const response = await axios.post('/api/auth', { token: data });
	return response.data;
};

const Authenticate = ({ children }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const token = loadState('AUTH');
	const { data, error, isLoading } = useSWR(token, fetchData);
	if (data) {
		if (data.success) {
			dispatch(updateProfile(data.data.user[0]));
			dispatch(updateLogin('loggedIn'));
			if (
				router.pathname === '/learner/login' ||
				router.pathname === '/learner/signup'
			) {
				router.push('/');
			}
		} else {
			dispatch(updateLogin(false));
			dispatch(updateProfile(null));
		}
	}

	return children;
};

export default Authenticate;
