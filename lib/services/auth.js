import { loadState } from '@/providers/storage';
import { createSlice } from '@reduxjs/toolkit';
const token = loadState('AUTH');

const Auth = createSlice({
	name: 'auth',
	initialState: {
		loginState: false,
		userProfile: null,
		authToken: token,
	},
	reducers: {
		updateLogin: (state, action) => {
			state.loginState = action.payload;
		},
		updateProfile: (state, action) => {
			state.userProfile = action.payload;
		},
	},
});

export const { updateLogin, updateProfile } = Auth.actions;
export default Auth;
