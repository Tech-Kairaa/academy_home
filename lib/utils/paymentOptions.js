export const razorpayOptions = (key, amount, orderId, name, email, contact) => {
	return {
		key,
		amount,
		currency: 'INR',
		name: 'Kairaa Blockchain Academy',
		description: 'Test Transaction',
		image: 'https://www.kairaaacademy.com/assets/images/logos/logo.png',
		order_id: orderId,
		callback_url: 'http://localhost:3003/api/v1/orders/checkout/verification',
		prefill: {
			name,
			email,
			contact,
		},
		notes: {
			address: 'Razorpay Corporate Office',
		},
		theme: {
			color: '#fff',
		},
	};
};
