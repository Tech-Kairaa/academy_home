import { createSlice } from '@reduxjs/toolkit';
// import { loadState, saveState } from 'providers/storage';
// const persistedState = loadState('cart');

const Auth = createSlice({
	name: 'auth',
	initialState: {
		loginState: null,
		registerState: null,
	},
	reducers: {
		updateLogin: (state, action) => {
			state.loginState = action.payload;
		},
		updateRegister: (state, action) => {
			state.registerState = action.payload;
		},
	},
});

export const { updateLogin, updateRegister } = Auth.actions;

export default Auth;
