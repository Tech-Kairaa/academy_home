import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import server from '@/providers/server';

const useCartItems = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const cartItems = useSelector((state) => state.cart.cartItems);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await server.post('/public/cart/items', {
					items: cartItems,
				});
				setData(response.data);
			} catch (err) {
				setError(err);
			}
		};

		if (cartItems.length > 0) {
			fetchData();
		} else {
			setData(null);
			setError(null);
		}
	}, [cartItems]);

	return { data, error };
};

export default useCartItems;
