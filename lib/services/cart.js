import { createSlice } from '@reduxjs/toolkit';
import { loadState, removeState, saveState } from '@/providers/storage';
const persistedState = loadState('CART');
const totalCartPrice = loadState('PRICE');

const Cart = createSlice({
	name: 'cart',
	initialState: {
		cartItems: persistedState ? persistedState : [],
		totalPrice: totalCartPrice ? Number(totalCartPrice) : 0,
		checkoutInfo: null,
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
			removeState('PRICE');
		},
		addPrice: (state, action) => {
			state.totalPrice = state.totalPrice + action.payload;
			saveState({ name: 'PRICE', value: state.totalPrice });
		},
		removePrice: (state, action) => {
			state.totalPrice = state.totalPrice - Number(action.payload);
			saveState({ name: 'PRICE', value: state.totalPrice });
		},
		updateCheckout: (state, action) => {
			state.checkoutInfo = action.payload;
			// saveState({ name: 'CHECKOUT', value: state.totalPrice });
		},
	},
});

export const { addItem, removeItem, clearCart, addPrice, removePrice } =
	Cart.actions;

export default Cart;
