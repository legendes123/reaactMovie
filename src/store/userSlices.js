import { getCookie } from '../utils/getCookie'
import { COOKIES, DEFAULT_TYPES_USER_DATA } from '../defaultValue/defaultValue'
import { createAction, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'
import { requestsGetAccountId } from '../requests/requestsGetAccountId'


export const fetchAccountId = createAsyncThunk(
	'films/fetchAccountId',
	async function(){
		const favoriteFilmsDelete = await requestsGetAccountId()
		return favoriteFilmsDelete
	}
)
const initialState = {
	userToken: '',
	accountId: '',
	status: 'loading',
	isReg: false
}

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		changeToken(state, action) {
			state.userToken = action.payload
		},
		changeAccountId(state, action) {
			state.accountId = action.payload
		},
		changeStatusReg(state, action) {
			state.isReg = true
		},
	},
	extraReducers:{
		[fetchAccountId.fulfilled]:(state,action)=>{
			state.accountId = action.payload.id
			state.status = 'resolved'

		},
		[fetchAccountId.rejected]:(state,action)=>{
			state.status = 'error'
		},
	}
});

export const {  changeToken,changeAccountId,changeStatusReg } = userSlice.actions;
export default userSlice.reducer;
