import { createSlice } from '@reduxjs/toolkit';
// import { loadState, saveState } from 'providers/storage';
// const persistedState = loadState('cart');

const Cart = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item !== action.payload
			);
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
	},
});

export const { addItem, removeItem, clearCart } = Cart.actions;

export default Cart;
