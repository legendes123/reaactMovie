import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'
// const changeCurrentPage = createAction("Change_current_page");





// export const paginationReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(changeCurrentPage, (state, action) => {
// 			return action.currentPage
// 		})
// 		.addDefaultCase((state, action) => {
// 			return state
// 		})
// })
const paginationSlice = createSlice({
	name: "pagination",
	initialState: {
		currentPage: 1
	},
	reducers: {
		changeCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
});
export const {  changeCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
