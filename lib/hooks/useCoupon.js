import fetcher from '@/providers/fetcher';
import useSWR from 'swr';

export const useCouponById = (id) =>
	useSWR(`/public/courses/coupon/id/${id}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
	});

export const useCouponByCode = (code) =>
	useSWR(`/public/courses/coupon/code/${code}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
	});
