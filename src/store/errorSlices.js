import {  createSlice } from '@reduxjs/toolkit'



const errorSlice = createSlice({
	name: "error",
	initialState: {
		status: false
	},
	reducers: {
		changeStatusError(state, action) {
			state.status = true
		},
	},

});

export const { changeStatusError } = errorSlice.actions;
export default errorSlice.reducer;
