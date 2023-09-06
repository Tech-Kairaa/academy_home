import fetcher from '@/providers/fetcher';
import useSWR from 'swr';

const baseUrl = `/public/courses`;

export const useCourseList = () => useSWR(`${baseUrl}/list`, fetcher);

export const useCoursesById = (courseId) =>
	useSWR(`${baseUrl}/list/${courseId}`, fetcher);
