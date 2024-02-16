import fetcher from '@/providers/fetcher';
import useSWR from 'swr';

const useUser = () =>
	useSWR('/users/current-user', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
	});

export default useUser;
