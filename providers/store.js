import { configureStore } from '@reduxjs/toolkit';
import Cart from '../services/cart';
import Auth from '../services/auth';

export default configureStore({
	reducer: {
		cart: Cart.reducer,
		auth: Auth.reducer,
	},
});
