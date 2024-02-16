import { createSlice } from '@reduxjs/toolkit';
import { loadState, removeState, saveState } from '@/providers/storage';
const persistedState = loadState('CART');

const Cart = createSlice({
	name: 'cart',
	initialState: {
		cartItems: persistedState ? persistedState : [],
		productInfo: {},
	},
	reducers: {
		addItem: (state, action) => {
			state.cartItems.push(action.payload);
			saveState({ name: 'CART', value: state.cartItems });
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item !== action.payload
			);
			saveState({ name: 'CART', value: state.cartItems });
		},
		clearCart: (state) => {
			state.cartItems = [];
			removeState('CART');
		},
		updateProductInfo: (state, action) => {
			state.productInfo = { ...state.productInfo, ...action.payload };
		},
	},
});

export const { addItem, removeItem, clearCart, updateProductInfo } =
	Cart.actions;

export default Cart;
