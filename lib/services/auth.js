import { loadState } from '@/providers/storage';
import { createSlice } from '@reduxjs/toolkit';
const token = loadState('AUTH');

const Auth = createSlice({
	name: 'auth',
	initialState: {
		userProfile: null,
	},
	reducers: {
		updateProfile: (state, action) => {
			state.userProfile = action.payload;
		},
	},
});

export const { updateProfile } = Auth.actions;
export default Auth;
