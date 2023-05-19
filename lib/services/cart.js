import { createSlice } from '@reduxjs/toolkit';
import { loadState, removeState, saveState } from '@/providers/storage';
const persistedState = loadState('CART');

const Cart = createSlice({
	name: 'cart',
	initialState: {
		cartItems: persistedState ? persistedState : [],
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
		},
		clearCart: (state) => {
			state.cartItems = [];
			removeState('CART');
		},
	},
});

export const { addItem, removeItem, clearCart } = Cart.actions;

export default Cart;
