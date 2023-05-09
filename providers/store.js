import { configureStore } from '@reduxjs/toolkit';
import Cart from '../services/cart';

export default configureStore({
	reducer: {
		cart: Cart.reducer,
	},
});
