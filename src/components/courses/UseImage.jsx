/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import server from '@/providers/server';

const UseImage = ({ cid, filename, className }) => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		server
			.get(`images/courses/${cid}/${filename}`, { responseType: 'arraybuffer' })
			.then((response) => {
				const blob = new Blob([response.data], { type: 'image/jpeg' });
				const url = URL.createObjectURL(blob);
				setImageUrl(url);
			})
			.catch((error) => {
				console.error('Error loading image:', error);
			});

		return () => {
			if (imageUrl) {
				URL.revokeObjectURL(imageUrl);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <img src={imageUrl} alt='' className={`${className}`} />;
};
export default UseImage;
